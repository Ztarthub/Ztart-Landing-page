import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-600 via-cyan-500 to-red-500">
      <div className="max-w-3xl mx-auto px-6 flex flex-col items-center">
        <motion.h2
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-3xl md:text-5xl font-extrabold text-white text-center mb-6 drop-shadow-lg"
        >
          ¡Únete a la revolución Ztart!
        </motion.h2>
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
          className="text-lg text-white/80 text-center mb-8"
        >
          Regístrate, descarga la app o contáctanos para ser parte del ecosistema más innovador y WOW del mercado.
        </motion.p>
        <motion.a
          href="#registro"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
          className="px-8 py-4 rounded-xl bg-white/90 text-blue-700 font-bold text-xl shadow-lg hover:scale-105 hover:bg-white transition-transform"
        >
          ¡Comenzar ahora!
        </motion.a>
      </div>
    </section>
  );
}
