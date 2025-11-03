export default function Footer() {
  return (
    <footer className="bg-[#F8F4EF] border-t border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#D4AF37]" />
            <span className="font-serif text-lg text-neutral-900">SRV Luxury</span>
          </div>
          <p className="mt-3 text-sm text-neutral-700 max-w-sm">
            Timeless jewelry, modern craftsmanship. Ethically sourced materials and lifetime care.
          </p>
        </div>

        <div>
          <h3 className="text-neutral-900 font-medium mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-neutral-700">
            <li><a href="#about" className="hover:text-neutral-900">About</a></li>
            <li><a href="#blog" className="hover:text-neutral-900">Blog</a></li>
            <li><a href="#faq" className="hover:text-neutral-900">FAQ</a></li>
            <li><a href="#policies" className="hover:text-neutral-900">Policies</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-neutral-900 font-medium mb-3">Support</h3>
          <ul className="space-y-2 text-sm text-neutral-700">
            <li><a href="#shipping" className="hover:text-neutral-900">Shipping & Returns</a></li>
            <li><a href="#care" className="hover:text-neutral-900">Care Guide</a></li>
            <li><a href="#contact" className="hover:text-neutral-900">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-600">
          <p>© {new Date().getFullYear()} SRV Luxury Jewelry. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Designed for performance and accessibility.</p>
        </div>
      </div>
    </footer>
  );
}
