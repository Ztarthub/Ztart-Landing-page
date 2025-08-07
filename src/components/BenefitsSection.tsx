import React from 'react';
import { motion } from 'framer-motion';
import { FaBolt, FaGlobe, FaShieldAlt, FaMagic, FaUsers } from 'react-icons/fa';

const benefits = [
  {
    color: "text-yellow-400",
    title: 'Velocidad y Simplicidad',
    desc: 'Transacciones instantáneas y experiencia de usuario intuitiva.'
  },
  {
    color: "text-blue-400",
    title: 'Global y Escalable',
    desc: 'Plataforma preparada para expansión internacional y crecimiento.'
  },
  {
    color: "text-green-400",
    title: 'Seguridad y Confianza',
    desc: 'Tecnología de vanguardia, privacidad y protección de datos.'
  },
  {
    color: "text-purple-400",
    title: 'Innovación WOW',
    desc: 'Diseño, IA y automatización para una experiencia única.'
  },
  {
    color: "text-pink-400",
    title: 'Comunidad y Gamificación',
    desc: 'Recompensas, retos y participación activa.'
  }
];

export default function BenefitsSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white text-center mb-12 drop-shadow-lg">
          Beneficios y Diferenciadores
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          {benefits.map((b, i) => {
            const svgs = [
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-yellow-400"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-blue-400"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414m12.728 0l-1.414-1.414M6.05 6.05L4.636 4.636" /></svg>,
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-green-400"><path strokeLinecap="round" strokeLinejoin="round" d="M12 17v-6m0 0V7m0 4h4m-4 0H8m8 0a8 8 0 11-16 0 8 8 0 0116 0z" /></svg>,
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-purple-400"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414m12.728 0l-1.414-1.414M6.05 6.05L4.636 4.636" /></svg>,
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-pink-400"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-3-3h-2a3 3 0 00-3 3v2h5zm-7 0h5v-2a3 3 0 00-3-3H7a3 3 0 00-3 3v2h5zm7-8a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            ];
            return (
              <motion.div
                key={b.title}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: 'easeOut' }}
                className="rounded-2xl bg-white/10 backdrop-blur-lg p-8 flex flex-col items-center shadow-lg hover:scale-105 transition-transform border border-white/20"
              >
                {svgs[i]}
                <h3 className="mt-4 text-lg font-bold text-white text-center">{b.title}</h3>
                <p className="mt-2 text-base text-white/80 text-center">{b.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
