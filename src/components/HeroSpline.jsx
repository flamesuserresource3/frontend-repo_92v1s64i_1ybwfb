import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function HeroSpline() {
  return (
    <section className="relative min-h-[80vh] w-full bg-[#F8F4EF] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/HldEaEeFcKnMlQB3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#F8F4EF]/70 via-[#F8F4EF]/40 to-[#F8F4EF]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24 flex flex-col items-start justify-end h-full">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl sm:text-5xl lg:text-6xl text-neutral-900 drop-shadow-sm"
        >
          Crafted Brilliance
          <span className="block text-2xl sm:text-3xl lg:text-4xl mt-3 font-sans font-light text-neutral-700">by SRV Luxury Jewelry</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 max-w-xl text-neutral-700"
        >
          Minimalist elegance with cinematic detail. Discover signature pieces and customize your own design with live preview.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a
            href="#collections"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#D4AF37] text-white shadow-lg shadow-[#D4AF37]/30 hover:shadow-xl hover:shadow-[#D4AF37]/40 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D4AF37]"
          >
            Shop Now
          </a>
          <a
            href="#custom"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-neutral-300 bg-white/80 text-neutral-900 hover:bg-white transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-300"
          >
            Customize
          </a>
        </motion.div>
      </div>
    </section>
  );
}
