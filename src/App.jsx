import Navbar from './components/Navbar';
import HeroSpline from './components/HeroSpline';
import CollectionsPreview from './components/CollectionsPreview';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#F8F4EF] text-neutral-900">
      <Navbar />
      <main>
        <HeroSpline />
        <CollectionsPreview />
        {/* Custom section preview */}
        <section id="custom" className="bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl mb-4">Design Your Signature Piece</h2>
              <p className="text-neutral-700 mb-6">
                A guided, step-by-step builder lets you choose base, material, beads, size, engraving, and more — with real-time preview and pricing.
              </p>
              <ul className="space-y-2 text-neutral-800">
                <li>• Live 3D preview</li>
                <li>• Engraving with instant mockup</li>
                <li>• Transparent pricing</li>
              </ul>
              <a href="#" className="mt-6 inline-flex items-center px-6 py-3 rounded-full bg-[#D4AF37] text-white shadow-lg shadow-[#D4AF37]/30 hover:shadow-xl hover:shadow-[#D4AF37]/40 transition-all">Start Customizing</a>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1200&auto=format&fit=crop"
                alt="Custom jewelry details"
                loading="lazy"
                className="rounded-2xl shadow-lg border border-neutral-200"
              />
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#B7A99A]/10 to-transparent" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
