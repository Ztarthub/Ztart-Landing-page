// User types
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  isAuthenticated: boolean;
}

// Service types
export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: 'financial' | 'transport' | 'education' | 'lifestyle';
  isActive: boolean;
  url: string;
}

// Navigation types
export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  children?: NavigationItem[];
}

// UI State types
export interface UIState {
  mobileMenuOpen: boolean;
  theme: 'light' | 'dark';
  language: 'es' | 'en';
}

// API Response types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

// Form types
export interface ContactForm {
  name: string;
  email: string;
  message: string;
  service?: string;
}

// Animation types
export interface AnimationProps {
  initial?: any;
  animate?: any;
  exit?: any;
  transition?: any;
  children: React.ReactNode;
}