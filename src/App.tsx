import FooterSection from './components/FooterSection';
import CTASection from './components/CTASection';
import TestimonialsSection from './components/TestimonialsSection';
import DemoSection from './components/DemoSection';
import BenefitsSection from './components/BenefitsSection';
import React from 'react';
// Puedes importar aquí los contextos globales o providers si los usas
// import { UIProvider } from '@/contexts/ui.context';
// import { ThemeProvider } from '@/contexts/theme.context';
import Navbar from './components/ui/Navbar';
import ZtartHead from './components/ZtartHead';
import HeroSection from './components/HeroSection';

import ModuleShowcase from './components/ModuleShowcase';

const App = () => {
  return (
    <>
      <ZtartHead />
      <Navbar />
      <HeroSection />
      <ModuleShowcase />
      <BenefitsSection />
      <DemoSection />
      <TestimonialsSection />
      <CTASection />
      <FooterSection />
    </>
  );
};

export default App;
