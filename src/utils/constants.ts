// API Configuration
export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

// Services Data
export const SERVICES = [
  {
    id: 'ztart-pay',
    name: 'Ztart Pay',
    description: 'Plataforma de pagos digitales',
    icon: 'Wallet',
    category: 'financial' as const,
    isActive: true,
    url: '/pay',
  },
  {
    id: 'ztart-broker',
    name: 'Ztart Broker',
    description: 'Trading e inversiones',
    icon: 'LineChart',
    category: 'financial' as const,
    isActive: true,
    url: '/broker',
  },
  {
    id: 'ztart-ride',
    name: 'Ztart Ride',
    description: 'Servicios de transporte',
    icon: 'Car',
    category: 'transport' as const,
    isActive: true,
    url: '/ride',
  },
  {
    id: 'ztart-home',
    name: 'Ztart Home',
    description: 'Alquileres y hospedajes',
    icon: 'Home',
    category: 'lifestyle' as const,
    isActive: true,
    url: '/home',
  },
  {
    id: 'ztart-work',
    name: 'Ztart Work',
    description: 'Servicios profesionales',
    icon: 'Briefcase',
    category: 'lifestyle' as const,
    isActive: true,
    url: '/work',
  },
  {
    id: 'ztart-academy',
    name: 'Ztart Academy',
    description: 'Cursos en línea y trading',
    icon: 'Book',
    category: 'education' as const,
    isActive: true,
    url: '/academy',
  },
];

// Navigation Items
export const NAVIGATION_ITEMS = [
  {
    id: 'financial',
    label: 'Servicios Financieros',
    href: '#financial',
    children: [
      { id: 'pay', label: 'Ztart Pay', href: '/pay' },
      { id: 'broker', label: 'Ztart Broker', href: '/broker' },
    ],
  },
  {
    id: 'services',
    label: 'Servicios',
    href: '#services',
    children: [
      { id: 'ride', label: 'Ztart Ride', href: '/ride' },
      { id: 'home', label: 'Ztart Home', href: '/home' },
      { id: 'work', label: 'Ztart Work', href: '/work' },
      { id: 'academy', label: 'Ztart Academy', href: '/academy' },
    ],
  },
];

// Animation Variants
export const ANIMATION_VARIANTS = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.5 },
  },
  slideUp: {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
    transition: { duration: 0.5 },
  },
  scaleIn: {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 },
    transition: { duration: 0.3 },
  },
};

// Local Storage Keys
export const STORAGE_KEYS = {
  THEME: 'ztart-theme',
  LANGUAGE: 'ztart-language',
  USER: 'ztart-user',
} as const;