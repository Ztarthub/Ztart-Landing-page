
import React, { useRef, useState } from 'react';
import ThreeDComponent from '../ui/ThreeDComponent.js';

import AnimatedComponent from '../ui/AnimatedComponent.js';
import ImmersiveParticles from './ImmersiveParticles.js';
import { useParallax } from './useParallax.js';
import MockupAnimated from './MockupAnimated.js';
import { motion } from 'framer-motion';


const HeroSection = () => {
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const sectionRef = useParallax((x, y) => setParallax({ x, y }));
  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[80vh] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-black"
    >
      <div style={{ transform: `translate3d(${parallax.x * 40}px, ${parallax.y * 40}px, 0)` }}>
        <ImmersiveParticles />
      </div>
      <div className="absolute inset-0 z-0" style={{ transform: `translate3d(${parallax.x * 60}px, ${parallax.y * 60}px, 0)` }}>
        <ThreeDComponent />
      </div>
      <div
        className="relative z-20 flex flex-col items-center justify-center text-center"
        style={{ transform: `translate3d(${parallax.x * 20}px, ${parallax.y * 20}px, 0)` }}
      >
        <motion.div
          className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl px-8 py-8 shadow-2xl flex flex-col items-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, type: 'spring' }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-lg mb-4 animate-fade-in text-white">
            🌍 Ztart Ecosystem
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mb-8 animate-fade-in delay-200 text-white/90">
            La revolución digital total: finanzas, IA, blockchain y estilo de vida en un solo lugar.
          </p>
          <MockupAnimated parallax={parallax} />
          <motion.a
            href="#join"
            className="mt-8 px-8 py-4 rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-indigo-500 text-white font-bold text-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-400/50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, type: 'spring' }}
            aria-label="Únete a Ztart"
          >
            Únete a la revolución
          </motion.a>
          <AnimatedComponent />
        </motion.div>
      </div>
    </section>
  );
};


// Si la landing principal importa HeroSection, también debe importar ModuleShowcase después

export default HeroSection;
