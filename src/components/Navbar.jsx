import { ShoppingCart, Search } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#F8F4EF]/80 backdrop-blur-md border-b border-neutral-200/50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <button
              className="sm:hidden p-2 rounded-md border border-neutral-300 text-neutral-700"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="block w-5 h-0.5 bg-neutral-800 mb-1" />
              <span className="block w-5 h-0.5 bg-neutral-800 mb-1" />
              <span className="block w-5 h-0.5 bg-neutral-800" />
            </button>
            <a href="#" className="flex items-center gap-2" aria-label="SRV Luxury Jewelry Home">
              <div className="w-8 h-8 rounded-full bg-[#D4AF37]" />
              <span className="font-serif text-xl tracking-wide text-neutral-900">SRV Luxury</span>
            </a>
          </div>

          <div className="hidden sm:flex items-center gap-8">
            <a href="#collections" className="text-neutral-700 hover:text-neutral-900 transition-colors">Shop</a>
            <a href="#custom" className="text-neutral-700 hover:text-neutral-900 transition-colors">Customize</a>
            <a href="#about" className="text-neutral-700 hover:text-neutral-900 transition-colors">About</a>
            <a href="#blog" className="text-neutral-700 hover:text-neutral-900 transition-colors">Blog</a>
          </div>

          <div className="flex items-center gap-3">
            <button aria-label="Search" className="p-2 rounded-full hover:bg-neutral-200/60 transition-colors">
              <Search className="w-5 h-5 text-neutral-800" />
            </button>
            <button aria-label="Cart" className="relative p-2 rounded-full hover:bg-neutral-200/60 transition-colors">
              <ShoppingCart className="w-5 h-5 text-neutral-800" />
              <span className="absolute -top-1 -right-1 text-[10px] bg-[#D4AF37] text-white rounded-full px-1.5 py-0.5">2</span>
            </button>
          </div>
        </div>

        {open && (
          <div className="sm:hidden pb-4 space-y-2">
            <a href="#collections" className="block px-2 py-2 rounded-md bg-white/60 border border-neutral-200 text-neutral-800">Shop</a>
            <a href="#custom" className="block px-2 py-2 rounded-md bg-white/60 border border-neutral-200 text-neutral-800">Customize</a>
            <a href="#about" className="block px-2 py-2 rounded-md bg-white/60 border border-neutral-200 text-neutral-800">About</a>
            <a href="#blog" className="block px-2 py-2 rounded-md bg-white/60 border border-neutral-200 text-neutral-800">Blog</a>
          </div>
        )}
      </nav>
    </header>
  );
}
