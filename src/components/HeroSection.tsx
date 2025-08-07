import Image from 'next/image'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] bg-gradient-to-br from-blue-600 via-cyan-400 to-red-500 overflow-hidden">
      {/* Fondo de partículas animadas (placeholder) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Aquí se pueden agregar partículas o efectos visuales avanzados */}
      </div>
      {/* Logo animado */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="z-10 mb-6"
      >
        <Image src="/assets/logo-ztart.png" alt="Ztart Logo" width={160} height={160} priority />
      </motion.div>
      {/* Slogan y descripción */}
      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
        className="z-10 text-4xl md:text-6xl font-extrabold text-white text-center drop-shadow-lg"
      >
        Ztart Ecosystem
      </motion.h1>
      <motion.p
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
        className="z-10 mt-4 text-lg md:text-2xl text-white/80 text-center max-w-2xl"
      >
        Innovación, finanzas, IA, movilidad y más. Plataforma global modular y escalable con experiencia WOW.
      </motion.p>
      {/* CTA principal */}
      <motion.a
        href="#cta"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6, ease: 'easeOut' }}
        className="z-10 mt-8 px-8 py-4 rounded-xl bg-white/90 text-blue-700 font-bold text-xl shadow-lg hover:scale-105 hover:bg-white transition-transform"
      >
        ¡Comienza ahora!
      </motion.a>
    </section>
  )
}
