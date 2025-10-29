import { ShieldCheck, Lock, Coins, Activity } from "lucide-react";

const sampleTxs = [
  {
    id: "0x8a12...c9f3",
    ngo: "Aranya Eco Foundation",
    project: "Urban Tree Plantation (Bengaluru)",
    amount: "₹5,000",
    status: "Settled",
  },
  {
    id: "0x44bd...91aa",
    ngo: "JalRaksha Trust",
    project: "Lake Restoration (Bellandur)",
    amount: "₹10,000",
    status: "On-chain Escrow",
  },
  {
    id: "0xd193...2a77",
    ngo: "Nirmal Waste Collective",
    project: "Smart Waste Segregation (Ward 12)",
    amount: "₹2,500",
    status: "Settlement Pending",
  },
];

export default function TransparencyLedger() {
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
          <a
            href="#"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            <Activity className="h-4 w-4 text-green-600" /> View Explorer
          </a>
        </div>

        <div className="mt-8 overflow-hidden rounded-xl border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Txn Hash</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">NGO</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {sampleTxs.map((tx) => (
                <tr key={tx.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-mono text-sm text-gray-700">{tx.id}</td>
                  <td className="px-4 py-3 text-gray-900">{tx.ngo}</td>
                  <td className="px-4 py-3 text-gray-600">{tx.project}</td>
                  <td className="px-4 py-3 font-semibold text-gray-900">{tx.amount}</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs border border-green-200 text-green-700 bg-green-50">
                      <ShieldCheck className="h-3.5 w-3.5" /> {tx.status}
                    </span>
                  </td>
                </tr>
              ))}
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
