import { useEffect, useMemo, useState } from "react";
import { Coins, Users, CheckCircle2 } from "lucide-react";

const API_BASE = import.meta.env.VITE_BACKEND_URL || `${window.location.protocol}//${window.location.hostname}:8000`;

export default function DonationPortal() {
  const [campaigns, setCampaigns] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [amount, setAmount] = useState(1000);
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const selected = useMemo(() => campaigns.find((c) => c._id === selectedId) || campaigns[0], [campaigns, selectedId]);
  const progress = selected ? Math.min(100, Math.round((selected.raised_inr / selected.goal_inr) * 100)) : 0;

  const loadCampaigns = async () => {
    setError("");
    try {
      const r = await fetch(`${API_BASE}/api/campaigns`);
      if (!r.ok) throw new Error("Failed to load campaigns");
      const data = await r.json();
      setCampaigns(data);
      if (data.length && !selectedId) setSelectedId(data[0]._id);
    } catch (e) {
      setError(e.message);
    }
  };

  useEffect(() => {
    loadCampaigns();
  }, []);

  const donate = async (method) => {
    if (!selected) return;
    setSubmitting(true);
    setError("");
    setResult(null);
    try {
      const r = await fetch(`${API_BASE}/api/donations`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          campaign_id: selected._id,
          donor_name: "Anonymous Citizen",
          amount_inr: Number(amount),
          payment_method: method,
        }),
      });
      if (!r.ok) throw new Error("Failed to donate");
      const data = await r.json();
      setResult(data);
      await loadCampaigns();
    } catch (e) {
      setError(e.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="donate" className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Fund a Verified Initiative</h2>
            <p className="mt-2 text-gray-600">Your contribution is recorded on-chain and released via milestone-based escrow.</p>

            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              {campaigns.map((c) => (
                <button
                  key={c._id}
                  onClick={() => setSelectedId(c._id)}
                  className={`text-left p-4 rounded-lg border transition ${
                    (selected && selected._id === c._id) ? "border-green-600 bg-green-50" : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <p className="text-sm text-gray-500">{c.ngo_name || "Verified NGO"}</p>
                  <p className="mt-1 font-semibold text-gray-900">{c.title}</p>
                  <div className="mt-3 h-2 w-full rounded bg-gray-100">
                    <div className="h-2 rounded bg-green-600" style={{ width: `${Math.round((c.raised_inr / c.goal_inr) * 100)}%` }} />
                  </div>
                  <p className="mt-1 text-xs text-gray-600">₹{(c.raised_inr||0).toLocaleString()} raised of ₹{(c.goal_inr||0).toLocaleString()}</p>
                </button>
              ))}
              {campaigns.length === 0 && (
                <div className="sm:col-span-3 p-4 rounded-lg border border-dashed border-gray-300 bg-white text-sm text-gray-600">
                  No campaigns yet. Please try again in a moment.
                </div>
              )}
            </div>
            {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            {selected ? (
              <>
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Selected Initiative</p>
                    <p className="font-semibold text-gray-900">{selected.title}</p>
                    <p className="text-sm text-gray-600">by {selected.ngo_name || "Verified NGO"}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Progress</p>
                    <p className="font-semibold text-gray-900">{progress}%</p>
                  </div>
                </div>
                <div className="mt-3 h-2 w-full rounded bg-gray-100">
                  <div className="h-2 rounded bg-green-600" style={{ width: `${progress}%` }} />
                </div>

                <div className="mt-6">
                  <label className="text-sm font-medium text-gray-700">Donation Amount (INR)</label>
                  <div className="mt-2 grid grid-cols-4 gap-3">
                    {[500, 1000, 2500, 5000].map((v) => (
                      <button key={v} onClick={() => setAmount(v)} className={`px-3 py-2 rounded-md border text-sm transition ${Number(amount) === v ? "bg-green-600 text-white border-green-600" : "border-gray-300 hover:bg-gray-50"}`}>
                        ₹{v.toLocaleString()}
                      </button>
                    ))}
                  </div>
                  <div className="mt-3">
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="w-full rounded-md border-gray-300 focus:border-green-600 focus:ring-green-600"
                      min={100}
                    />
                  </div>
                </div>

                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  <button disabled={submitting} onClick={() => donate("upi")} className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-green-600 text-white hover:bg-green-700 font-semibold disabled:opacity-60">
                    <Coins className="h-4 w-4" /> Donate via UPI
                  </button>
                  <button disabled={submitting} onClick={() => donate("crypto")} className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-md border border-gray-300 hover:bg-gray-50 disabled:opacity-60">
                    <Users className="h-4 w-4 text-green-600" /> Donate with Crypto
                  </button>
                </div>

                {result && (
                  <div className="mt-6 rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-800">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5" />
                      <div>
                        <p className="font-medium">Donation successful!</p>
                        <p className="mt-1">Txn: <span className="font-mono">{result.tx_hash}</span> · Receipt: <span className="font-mono">{result.receipt_id}</span></p>
                      </div>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <p className="text-sm text-gray-600">Select a campaign to donate.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
