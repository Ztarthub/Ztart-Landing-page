import { motion } from 'framer-motion';
import { FaWallet, FaCreditCard, FaRocket, FaCar, FaHome, FaBriefcase, FaBook, FaRobot } from 'react-icons/fa';

const modules = [
  {
    svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-blue-500"><path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a5 5 0 00-10 0v2a2 2 0 00-2 2v7a2 2 0 002 2h10a2 2 0 002-2v-7a2 2 0 00-2-2z" /></svg>,
    title: 'Ztart Wallet',
    desc: 'Monedero digital, fiat/crypto, tarjetas, recompensas, transferencias.'
  },
  {
    svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-cyan-500"><path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a5 5 0 00-10 0v2a2 2 0 00-2 2v7a2 2 0 002 2h10a2 2 0 002-2v-7a2 2 0 00-2-2z" /></svg>,
    title: 'Ztart Pay',
    desc: 'Pagos instantáneos, globales y seguros.'
  },
  {
    svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-red-500"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414m12.728 0l-1.414-1.414M6.05 6.05L4.636 4.636" /></svg>,
    title: 'ZtartCoin',
    desc: 'Token nativo, minería por uso, trading, staking.'
  },
  {
    svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-purple-500"><path strokeLinecap="round" strokeLinejoin="round" d="M4 17v-2a4 4 0 014-4h8a4 4 0 014 4v2" /></svg>,
    title: 'Ztart Ride',
    desc: 'Movilidad inteligente, IA de rutas, comandos por voz.'
  },
  {
    svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-green-500"><path strokeLinecap="round" strokeLinejoin="round" d="M3 10v11a1 1 0 001 1h16a1 1 0 001-1V10M4 10V7a8 8 0 0116 0v3" /></svg>,
    title: 'Ztart Home/Rent',
    desc: 'Alquiler de propiedades, gestión de reservas, marca blanca.'
  },
  {
    svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-yellow-500"><path strokeLinecap="round" strokeLinejoin="round" d="M6 21V7a2 2 0 012-2h8a2 2 0 012 2v14" /></svg>,
    title: 'Ztart Work',
    desc: 'Servicios y empleo, gestión de equipos.'
  },
  {
    svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-indigo-500"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20v-6m0 0V7m0 7h4m-4 0H8" /></svg>,
    title: 'Ztart Academy',
    desc: 'Cursos, certificaciones, academia de trading.'
  },
  {
    svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-pink-500"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>,
    title: 'Ztart AI',
    desc: 'Asistentes inteligentes, automatización, IA personalizada.'
  }
];

export default function ModuleShowcase() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white text-center mb-12 drop-shadow-lg">
          Módulos Destacados
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.title}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: 'easeOut' }}
              className="rounded-2xl bg-white/10 backdrop-blur-lg p-8 flex flex-col items-center shadow-lg hover:scale-105 transition-transform border border-white/20"
            >
              {mod.svg}
              <h3 className="mt-4 text-xl font-bold text-white text-center">{mod.title}</h3>
              <p className="mt-2 text-base text-white/80 text-center">{mod.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
