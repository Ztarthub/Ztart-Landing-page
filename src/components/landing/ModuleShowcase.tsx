import React from 'react';

import { motion } from 'framer-motion';

const modules = [
  {
    title: "Tip'$ M€",
    desc: 'Digital tipping system, instant and cashless.',
    status: 'Live',
    emoji: '💸',
  },
  {
    title: 'Ztart Wallet',
    desc: 'Unified digital wallet, multi-currency, AI insights.',
    status: 'Live',
    emoji: '💳',
  },
  {
    title: 'Ztart Pay',
    desc: 'One-touch payments, global, AI-optimized.',
    status: 'Coming Soon',
    emoji: '⚡',
  },
  {
    title: 'Ztart Reward',
    desc: 'Loyalty, cashback, ZtartCoin integration.',
    status: 'Live',
    emoji: '🎁',
  },
  {
    title: 'ZtartCoin',
    desc: 'Token, DeFi, staking, fiat bridge.',
    status: 'In Dev',
    emoji: '🪙',
  },
  {
    title: 'Ztart Guide AI',
    desc: 'AI travel assistant, instant bookings.',
    status: 'Coming Soon',
    emoji: '📍',
  },
  {
    title: 'Ztart Business',
    desc: 'Smart payment & analytics for business.',
    status: 'In Dev',
    emoji: '💼',
  },
  {
    title: 'Ztart Exchange',
    desc: 'Crypto market, DeFi, fiat conversion.',
    status: 'In Dev',
    emoji: '📈',
  },
  {
    title: 'Ztart Home',
    desc: 'Smart rental, AI trust, seamless contracts.',
    status: 'Planned',
    emoji: '🏡',
  },
];

const ModuleShowcase = () => (
  <section id="modules" className="relative w-full py-24 bg-gradient-to-b from-black via-indigo-950 to-blue-950 flex flex-col items-center">
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 drop-shadow-lg animate-fade-in">Descubre el Ecosistema</h2>
    <div className="flex flex-wrap justify-center gap-8 max-w-6xl">
      {modules.map((mod, i) => (
        <motion.div
          key={mod.title}
          className="w-72 h-56 bg-white/10 border border-white/20 rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center backdrop-blur-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 text-center"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 + i * 0.08, type: 'spring' }}
        >
          <div className="text-5xl mb-4">{mod.emoji}</div>
          <h3 className="text-2xl font-semibold text-white mb-2">{mod.title}</h3>
          <p className="text-white/80 text-base mb-2">{mod.desc}</p>
          <span className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/20 mt-2">{mod.status}</span>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ModuleShowcase;
