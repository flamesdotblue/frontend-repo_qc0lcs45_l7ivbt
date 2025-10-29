import { useEffect, useState } from "react";
import { ShieldCheck, Lock, Coins, Activity } from "lucide-react";

const API_BASE = import.meta.env.VITE_BACKEND_URL || `${window.location.protocol}//${window.location.hostname}:8000`;

export default function TransparencyLedger() {
  const [txs, setTxs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = async () => {
    setLoading(true);
    setError("");
    try {
      const r = await fetch(`${API_BASE}/api/transactions`);
      if (!r.ok) throw new Error("Failed to load transactions");
      const data = await r.json();
      setTxs(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <section id="ledger" className="py-16 bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">On-chain Transparency</h2>
            <p className="mt-2 text-gray-600">
              Every donation is recorded on a public ledger with proof of receipt and milestone-based release.
            </p>
          </div>
          <button
            onClick={load}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            <Activity className="h-4 w-4 text-green-600" /> Refresh
          </button>
        </div>

        <div className="mt-6">
          {loading && <p className="text-sm text-gray-600">Loading transactions...</p>}
          {error && <p className="text-sm text-red-600">{error}</p>}
        </div>

        <div className="mt-4 overflow-hidden rounded-xl border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Txn Hash</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">NGO</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Campaign</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {txs.map((tx) => (
                <tr key={tx._id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-mono text-sm text-gray-700">{tx.tx_hash}</td>
                  <td className="px-4 py-3 text-gray-900">{tx.ngo_name || "—"}</td>
                  <td className="px-4 py-3 text-gray-600">{tx.campaign_title || "—"}</td>
                  <td className="px-4 py-3 font-semibold text-gray-900">₹{(tx.amount_inr || 0).toLocaleString()}</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs border border-green-200 text-green-700 bg-green-50">
                      <ShieldCheck className="h-3.5 w-3.5" /> {tx.status}
                    </span>
                  </td>
                </tr>
              ))}
              {(!loading && txs.length === 0) && (
                <tr>
                  <td colSpan={5} className="px-4 py-6 text-center text-sm text-gray-600">No transactions yet. Be the first to donate.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-lg border border-gray-200 bg-white">
            <ShieldCheck className="h-5 w-5 text-green-600" />
            <p className="mt-2 font-semibold text-gray-900">Proof of Receipt</p>
            <p className="text-sm text-gray-600">NFT-based receipts issued for every donation.</p>
          </div>
          <div className="p-5 rounded-lg border border-gray-200 bg-white">
            <Lock className="h-5 w-5 text-green-600" />
            <p className="mt-2 font-semibold text-gray-900">Milestone Escrow</p>
            <p className="text-sm text-gray-600">Funds released on verified progress by authorities.</p>
          </div>
          <div className="p-5 rounded-lg border border-gray-200 bg-white">
            <Coins className="h-5 w-5 text-green-600" />
            <p className="mt-2 font-semibold text-gray-900">End-to-end Traceability</p>
            <p className="text-sm text-gray-600">Track flows from donor to on-ground actions.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
