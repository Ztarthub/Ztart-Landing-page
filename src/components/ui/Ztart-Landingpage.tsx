import React from 'react';
import HeroSection from '../landing/HeroSection.tsx';
import ModuleShowcase from '../landing/ModuleShowcase.tsx';
import EcosystemVision from '../landing/EcosystemVision.tsx';

const ZtartLandingpage = () => (
  <main className="bg-black min-h-screen w-full">
    <HeroSection />
    <ModuleShowcase />
    <EcosystemVision />
  </main>
);

export default ZtartLandingpage;