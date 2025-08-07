import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Ana Torres',
    role: 'Emprendedora',
    text: 'Ztart revolucionó mi forma de gestionar pagos y recompensas. La experiencia WOW es real.'
  },
  {
    name: 'Carlos Méndez',
    role: 'Desarrollador',
    text: 'La integración de IA y blockchain en Ztart es impresionante. El diseño y la velocidad son top.'
  },
  {
    name: 'Lucía Gómez',
    role: 'Comunidad Ztart',
    text: 'Me encanta la gamificación y los retos. Ztart me motiva a participar y crecer.'
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white text-center mb-12 drop-shadow-lg">
          Testimonios y Comunidad
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.2, duration: 0.6, ease: 'easeOut' }}
              className="rounded-2xl bg-white/10 backdrop-blur-lg p-8 flex flex-col items-center shadow-lg border border-white/20"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-red-500 flex items-center justify-center text-white text-2xl font-bold mb-4">
                {t.name[0]}
              </div>
              <h3 className="text-lg font-bold text-white text-center">{t.name}</h3>
              <span className="text-sm text-white/60 mb-2">{t.role}</span>
              <p className="mt-2 text-base text-white/80 text-center">{t.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
