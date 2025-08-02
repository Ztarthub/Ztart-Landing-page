import React from 'react';
import { AppProvider } from './contexts/AppContext';
import ZtartLanding from './components/ui/Ztart-Landingpage';

const App = () => {
  return (
    <AppProvider>
      <ZtartLanding />
    </AppProvider>
  );
};

export default App;