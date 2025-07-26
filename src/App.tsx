import React from 'react';
// Puedes importar aquí los contextos globales o providers si los usas
// import { UIProvider } from '@/contexts/ui.context';
// import { ThemeProvider } from '@/contexts/theme.context';
import ZtartLandingpage from './components/ui/Ztart-Landingpage.tsx';

const App = () => {
  return (
    // <UIProvider>
    //   <ThemeProvider>
        <ZtartLandingpage />
    //   </ThemeProvider>
    // </UIProvider>
  );
};

export default App;
