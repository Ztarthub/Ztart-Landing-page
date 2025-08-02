import React from 'react';
import { render, screen } from '@testing-library/react';
import { AppProvider } from '../../../contexts/AppContext';
import ZtartLanding from '../Ztart-Landingpage';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    header: ({ children, ...props }: any) => <header {...props}>{children}</header>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
  },
}));

const renderWithProvider = (component: React.ReactElement) => {
  return render(
    <AppProvider>
      {component}
    </AppProvider>
  );
};

describe('ZtartLanding', () => {
  test('renders the main heading', () => {
    renderWithProvider(<ZtartLanding />);
    expect(screen.getByText(/Tu ecosistema digital completo/i)).toBeInTheDocument();
  });

  test('renders the Ztart logo', () => {
    renderWithProvider(<ZtartLanding />);
    expect(screen.getByText('Ztart')).toBeInTheDocument();
  });

  test('renders navigation menu items', () => {
    renderWithProvider(<ZtartLanding />);
    expect(screen.getByText('Servicios Financieros')).toBeInTheDocument();
    expect(screen.getByText('Servicios')).toBeInTheDocument();
  });

  test('renders call to action buttons', () => {
    renderWithProvider(<ZtartLanding />);
    expect(screen.getByText('Comenzar ahora')).toBeInTheDocument();
    expect(screen.getByText('Explorar servicios')).toBeInTheDocument();
  });

  test('renders feature sections', () => {
    renderWithProvider(<ZtartLanding />);
    expect(screen.getByText('Ztart Pay & Wallet')).toBeInTheDocument();
    expect(screen.getByText('Ztart Academy')).toBeInTheDocument();
    expect(screen.getByText('Ztart Voice Assistant')).toBeInTheDocument();
  });
});