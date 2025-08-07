import { motion } from 'framer-motion';

export default function DemoSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-950 to-black">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white text-center mb-8 drop-shadow-lg">
          Demo Interactiva
        </h2>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-white/5 backdrop-blur-lg"
        >
          {/* Aquí puedes reemplazar el video por un mockup animado o demo real */}
          <video
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            controls
            autoPlay
            loop
            muted
            className="w-full h-80 object-cover"
            poster="/assets/logo-ztart.png"
          />
        </motion.div>
        <p className="mt-8 text-lg text-white/80 text-center max-w-xl">
          Descubre la experiencia WOW de Ztart Ecosystem: velocidad, seguridad, IA y diseño de vanguardia en acción.
        </p>
      </div>
    </section>
  );
}
