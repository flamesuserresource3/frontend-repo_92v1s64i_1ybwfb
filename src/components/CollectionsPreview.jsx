import { motion } from 'framer-motion';

const collections = [
  {
    title: 'Signature Chains',
    img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wyMDkyMnwwfDF8c2VhcmNofDJ8fGdvbGQlMjBjaGFpbnxlbnwwfHx8fDE3MDk3NTI1Nzd8MA%3D%3D',
    href: '#',
  },
  {
    title: 'Diamond Bracelets',
    img: 'https://images.unsplash.com/photo-1631261555032-c22dfec465e1?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wyMDkyMnwwfDF8c2VhcmNofDU1fHxkaWFtb25kJTIwYnJhY2VsZXR8ZW58MHx8fHwxNzA5NzUyNjE5fDA%3D',
    href: '#',
  },
  {
    title: 'Engraved Pendants',
    img: 'https://images.unsplash.com/photo-1617039643376-c6fc5605fe03?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wyMDkyMnwwfDF8c2VhcmNofDMwfHxwZW5kYW50JTIwZ29sZHxlbnwwfHx8fDE3MDk3NTI2NTh8MA%3D%3D',
    href: '#',
  },
];

export default function CollectionsPreview() {
  return (
    <section id="collections" className="bg-[#F8F4EF] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-serif text-3xl sm:text-4xl text-neutral-900">Featured Collections</h2>
          <a href="#" className="text-sm text-neutral-700 hover:text-neutral-900">View all</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((c, i) => (
            <motion.a
              key={c.title}
              href={c.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative rounded-2xl overflow-hidden shadow-sm border border-neutral-200 bg-white"
            >
              <img
                src={`${c.img}&auto=format&fit=crop`}
                alt={c.title}
                className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/50 via-black/0 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 flex items-center justify-between">
                <div>
                  <h3 className="text-white text-lg font-medium drop-shadow">{c.title}</h3>
                </div>
                <div className="text-white/90 text-sm bg-[#D4AF37]/90 px-3 py-1.5 rounded-full">Explore</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
