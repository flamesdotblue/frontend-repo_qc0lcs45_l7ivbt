import { useEffect } from "react";
import HeaderNav from "./components/HeaderNav";
import HeroSection from "./components/HeroSection";
import TransparencyLedger from "./components/TransparencyLedger";
import DonationPortal from "./components/DonationPortal";

const API_BASE = import.meta.env.VITE_BACKEND_URL || `${window.location.protocol}//${window.location.hostname}:8000`;

function App() {
  useEffect(() => {
    // Seed demo data (idempotent)
    fetch(`${API_BASE}/api/seed`, { method: "POST" }).catch(() => {});
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <HeaderNav />
      <main className="flex-1">
        <HeroSection />
        <TransparencyLedger />
        <DonationPortal />

        <section id="impact" className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-gray-200 p-8 bg-gradient-to-br from-green-50 to-emerald-50">
              <h3 className="text-2xl font-bold">Measurable Impact</h3>
              <p className="mt-2 text-gray-600">Real-time reporting connects funding with verified outcomes across Air, Water, and Waste.</p>
              <div className="mt-6 grid sm:grid-cols-3 gap-6 text-center">
                <div className="p-6 rounded-xl bg-white border border-gray-200">
                  <p className="text-4xl font-extrabold text-green-700">1.2M</p>
                  <p className="mt-1 text-sm text-gray-600">Trees Planted</p>
                </div>
                <div className="p-6 rounded-xl bg-white border border-gray-200">
                  <p className="text-4xl font-extrabold text-green-700">86</p>
                  <p className="mt-1 text-sm text-gray-600">Lakes Restored</p>
                </div>
                <div className="p-6 rounded-xl bg-white border border-gray-200">
                  <p className="text-4xl font-extrabold text-green-700">5.4k</p>
                  <p className="mt-1 text-sm text-gray-600">Waste Drives</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-16 border-t border-gray-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-10 items-start">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold">Why Blockchain for Transparency?</h3>
                <p className="mt-3 text-gray-600">
                  ParyavaranSahyog (JeevaDhara) brings radical transparency to environmental funding. Donations are logged on a public ledger, routed to verified NGOs, and released through milestone-based escrows verified by government and community auditors. Every step is traceable and publicly auditable.
                </p>
                <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-sm text-gray-700">
                  <li className="p-3 rounded-lg bg-gray-50 border border-gray-200">Open, tamper-evident ledger</li>
                  <li className="p-3 rounded-lg bg-gray-50 border border-gray-200">NFT receipts for proof of donation</li>
                  <li className="p-3 rounded-lg bg-gray-50 border border-gray-200">Milestone-linked disbursals</li>
                  <li className="p-3 rounded-lg bg-gray-50 border border-gray-200">End-to-end traceability</li>
                </ul>
              </div>
              <div className="rounded-xl border border-gray-200 p-6 bg-white shadow-sm">
                <h4 className="font-semibold text-gray-900">Stakeholders</h4>
                <p className="mt-2 text-sm text-gray-600">Citizens, NGOs, Researchers, and Government collaborate in one place.</p>
                <div className="mt-4 space-y-3 text-sm">
                  <p><span className="font-medium">Citizens:</span> Donate, report issues, earn EcoPoints</p>
                  <p><span className="font-medium">NGOs:</span> List initiatives, receive transparent funds</p>
                  <p><span className="font-medium">Government:</span> Verify actions, publish impact</p>
                  <p><span className="font-medium">Researchers:</span> Access data and publish insights</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between text-sm text-gray-600">
          <p>© {new Date().getFullYear()} ParyavaranSahyog (JeevaDhara) · Code2Impact</p>
          <p>Built for Hack IT On’25 · National Environmental Ecosystem Platform</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
