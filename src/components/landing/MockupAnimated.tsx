
import React from 'react';
import { motion } from 'framer-motion';

// Mockup móvil premium, con UI aspiracional, brillos y reflejos animados
const MockupAnimated = ({ parallax }: { parallax: { x: number; y: number } }) => (
  <motion.div
    className="w-[270px] h-[540px] flex items-center justify-center select-none"
    style={{
      transform: `rotateY(${parallax.x * 12}deg) rotateX(${-parallax.y * 12}deg) scale(1.04)`,
      boxShadow: '0 8px 32px #0008',
    }}
    initial={{ opacity: 0, y: 60 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, type: 'spring' }}
    aria-label="Mockup móvil Ztart Ecosystem"
  >
    <svg
      width="240"
      height="480"
      viewBox="0 0 240 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%' }}
    >
      {/* Cuerpo del móvil */}
      <rect x="12" y="12" width="216" height="456" rx="44" fill="#18181b" stroke="#fff" strokeWidth="3.5" />
      {/* Bisel metálico */}
      <rect x="18" y="18" width="204" height="444" rx="40" fill="url(#bezel)" fillOpacity="0.7" />
      {/* Pantalla */}
      <rect x="32" y="44" width="176" height="392" rx="28" fill="url(#screenGradient)" />
      {/* Notch y cámara */}
      <ellipse cx="120" cy="36" rx="16" ry="6" fill="#222" />
      <circle cx="120" cy="36" r="3" fill="#fff" fillOpacity="0.5" />
      {/* Botón home sutil */}
      <rect x="100" y="430" width="40" height="14" rx="7" fill="#fff" fillOpacity="0.13" />
      {/* UI aspiracional: iconos, saldo, cards */}
      <g>
        {/* Saldo destacado */}
        <rect x="60" y="70" width="120" height="38" rx="14" fill="#fff" fillOpacity="0.12" />
        <text x="120" y="95" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#fff" opacity="0.92">$12,500.00</text>
        {/* Iconos de apps */}
        <g>
          <circle cx="80" cy="130" r="16" fill="#facc15" />
          <circle cx="120" cy="130" r="16" fill="#38bdf8" />
          <circle cx="160" cy="130" r="16" fill="#a21caf" />
          <text x="80" y="135" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#fff">💳</text>
          <text x="120" y="135" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#fff">🤖</text>
          <text x="160" y="135" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#fff">🔗</text>
        </g>
        {/* Card de usuario */}
        <rect x="70" y="170" width="100" height="60" rx="16" fill="#fff" fillOpacity="0.10" />
        <circle cx="90" cy="200" r="12" fill="#f472b6" />
        <text x="120" y="200" textAnchor="middle" fontSize="13" fill="#fff" opacity="0.85">Usuario Ztart</text>
        {/* Botón destacado */}
        <rect x="90" y="250" width="60" height="22" rx="11" fill="#facc15" fillOpacity="0.85" />
        <text x="120" y="265" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#18181b">¡Explorar!</text>
      </g>
      {/* Reflejo animado */}
      <rect x="32" y="44" width="176" height="392" rx="28" fill="url(#shine)" fillOpacity="0.18">
        <animate attributeName="x" values="32;120;32" dur="2.7s" repeatCount="indefinite" />
      </rect>
      {/* Brillo animado en el bisel */}
      <rect x="18" y="18" width="204" height="444" rx="40" fill="url(#bezelShine)" fillOpacity="0.13">
        <animate attributeName="x" values="18;100;18" dur="3.2s" repeatCount="indefinite" />
      </rect>
      <defs>
        <linearGradient id="screenGradient" x1="32" y1="44" x2="208" y2="436" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3b82f6" />
          <stop offset="1" stopColor="#a21caf" />
        </linearGradient>
        <linearGradient id="bezel" x1="18" y1="18" x2="222" y2="462" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff" stopOpacity="0.18" />
          <stop offset="1" stopColor="#fff" stopOpacity="0.02" />
        </linearGradient>
        <linearGradient id="shine" x1="32" y1="44" x2="208" y2="436" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff" stopOpacity="0.7" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="bezelShine" x1="18" y1="18" x2="222" y2="462" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff" stopOpacity="0.7" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  </motion.div>
);

export default MockupAnimated;
