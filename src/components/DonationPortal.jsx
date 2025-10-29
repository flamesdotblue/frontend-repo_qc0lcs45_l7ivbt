import { useState } from "react";
import { Coins, Users } from "lucide-react";

const campaigns = [
  {
    id: "air-1",
    title: "Air: Urban Tree Plantation",
    ngo: "Aranya Eco Foundation",
    goal: 500000,
    raised: 326000,
  },
  {
    id: "water-1",
    title: "Water: Lake Restoration",
    ngo: "JalRaksha Trust",
    goal: 800000,
    raised: 472500,
  },
  {
    id: "waste-1",
    title: "Waste: Smart Segregation",
    ngo: "Nirmal Waste Collective",
    goal: 300000,
    raised: 218400,
  },
];

export default function DonationPortal() {
  const [selected, setSelected] = useState(campaigns[0]);
  const [amount, setAmount] = useState(1000);

  const progress = Math.min(100, Math.round((selected.raised / selected.goal) * 100));

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
                  key={c.id}
                  onClick={() => setSelected(c)}
                  className={`text-left p-4 rounded-lg border transition ${
                    selected.id === c.id ? "border-green-600 bg-green-50" : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <p className="text-sm text-gray-500">{c.ngo}</p>
                  <p className="mt-1 font-semibold text-gray-900">{c.title}</p>
                  <div className="mt-3 h-2 w-full rounded bg-gray-100">
                    <div className="h-2 rounded bg-green-600" style={{ width: `${Math.round((c.raised / c.goal) * 100)}%` }} />
                  </div>
                  <p className="mt-1 text-xs text-gray-600">₹{c.raised.toLocaleString()} raised of ₹{c.goal.toLocaleString()}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-500">Selected Initiative</p>
                <p className="font-semibold text-gray-900">{selected.title}</p>
                <p className="text-sm text-gray-600">by {selected.ngo}</p>
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
                  <button key={v} onClick={() => setAmount(v)} className={`px-3 py-2 rounded-md border text-sm transition ${amount === v ? "bg-green-600 text-white border-green-600" : "border-gray-300 hover:bg-gray-50"}`}>
                    ₹{v.toLocaleString()}
                  </button>
                ))}
              </div>
              <div className="mt-3">
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full rounded-md border-gray-300 focus:border-green-600 focus:ring-green-600"
                  min={100}
                />
              </div>
            </div>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <button className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-green-600 text-white hover:bg-green-700 font-semibold">
                <Coins className="h-4 w-4" /> Donate via UPI
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-md border border-gray-300 hover:bg-gray-50">
                <Users className="h-4 w-4 text-green-600" /> Donate with Crypto
              </button>
            </div>

            <p className="mt-4 text-xs text-gray-600">
              You will receive a verifiable on-chain receipt. Funds are held in escrow and released as milestones are verified by authorities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
