import { ArrowRight, Users, Globe } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-cyan-50" />
      <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-green-200/40 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-emerald-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-green-600/10 text-green-700 ring-1 ring-green-600/20">
              One Nation. One Environment. One Platform.
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Transparent donations for real environmental impact
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Fund climate action with trust. Every rupee is traceable on-chain — from your wallet to verified NGOs and on-ground projects across Air, Water, and Waste.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#donate" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-green-600 text-white hover:bg-green-700 transition font-semibold">
                Donate Now <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#ledger" className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition">
                View Transparency Ledger
              </a>
            </div>
            <div className="mt-8 grid sm:grid-cols-3 gap-4 text-sm">
              <div className="p-4 rounded-lg bg-white/70 backdrop-blur border border-gray-200">
                <Users className="h-5 w-5 text-green-600" />
                <p className="mt-2 font-semibold text-gray-900">Multi-stakeholder</p>
                <p className="text-gray-600">Citizens, NGOs, Researchers, Government</p>
              </div>
              <div className="p-4 rounded-lg bg-white/70 backdrop-blur border border-gray-200">
                <Globe className="h-5 w-5 text-green-600" />
                <p className="mt-2 font-semibold text-gray-900">Nation-scale</p>
                <p className="text-gray-600">Pan-India collaboration & insights</p>
              </div>
              <div className="p-4 rounded-lg bg-white/70 backdrop-blur border border-gray-200">
                <p className="font-semibold text-gray-900">EcoPoints</p>
                <p className="text-gray-600">Earn rewards for verified actions</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative h-[380px] rounded-2xl border border-green-200 bg-white shadow-sm p-6">
              <div className="grid grid-cols-3 gap-3 text-xs">
                {[
                  { label: "Air Quality", value: "AQI 76", color: "text-emerald-700 bg-emerald-50" },
                  { label: "Groundwater", value: "Stress: Medium", color: "text-cyan-700 bg-cyan-50" },
                  { label: "Waste Mgmt", value: "Drives: 42", color: "text-green-700 bg-green-50" },
                ].map((k) => (
                  <div key={k.label} className={`rounded-lg p-4 border ${k.color} border-current/10`}>
                    <p className="text-gray-500">{k.label}</p>
                    <p className="mt-1 font-semibold">{k.value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-xl bg-gradient-to-br from-green-600 to-emerald-600 p-6 text-white">
                <p className="text-sm text-white/80">Environmental Health Index</p>
                <p className="mt-2 text-4xl font-bold">72.4</p>
                <p className="mt-1 text-white/80 text-sm">AI-estimated for your region</p>
                <div className="mt-4 h-2 w-full rounded-full bg-white/20">
                  <div className="h-2 rounded-full bg-white w-3/4" />
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
                <div className="rounded-lg border border-gray-200 p-4">
                  <p className="text-gray-500">Verified NGOs</p>
                  <p className="mt-1 font-semibold text-gray-900">128</p>
                </div>
                <div className="rounded-lg border border-gray-200 p-4">
                  <p className="text-gray-500">Campaigns Active</p>
                  <p className="mt-1 font-semibold text-gray-900">56</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
