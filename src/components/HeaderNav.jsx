import { Leaf, ShieldCheck, Wallet } from "lucide-react";

export default function HeaderNav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="p-2 rounded-lg bg-green-600/10 text-green-700 group-hover:bg-green-600/20 transition">
            <Leaf className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <p className="font-semibold text-gray-900">ParyavaranSahyog</p>
            <p className="text-xs text-gray-500">JeevaDhara</p>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#ledger" className="hover:text-gray-900">Transparency</a>
          <a href="#donate" className="hover:text-gray-900">Donate</a>
          <a href="#impact" className="hover:text-gray-900">Impact</a>
          <a href="#about" className="hover:text-gray-900">About</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="#donate" className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 transition">
            <Wallet className="h-4 w-4" /> Donate
          </a>
          <a href="#ledger" className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition">
            <ShieldCheck className="h-4 w-4 text-green-600" /> Ledger
          </a>
        </div>
      </div>
    </header>
  );
}
