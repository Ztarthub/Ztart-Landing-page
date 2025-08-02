import React from 'react';
import { render } from '@testing-library/react';
import { AppProvider } from '../../../contexts/AppContext';
import ZtartLanding from '../Ztart-Landingpage';

// Mock framer-motion
const mockFramerMotion = {
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    header: ({ children, ...props }: any) => <header {...props}>{children}</header>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
  },
};

jest.mock('framer-motion', () => mockFramerMotion);

const renderWithProvider = (component: React.ReactElement) => {
  return render(
    <AppProvider>
      {component}
    </AppProvider>
  );
};

describe('ZtartLanding', () => {
  test('renders without crashing', () => {
    const { container } = renderWithProvider(<ZtartLanding />);
    expect(container).toBeInTheDocument();
  });

  test('renders the Ztart logo', () => {
    const { getByText } = renderWithProvider(<ZtartLanding />);
    expect(getByText('Ztart')).toBeInTheDocument();
  });

  test('renders navigation menu items', () => {
    const { getByText } = renderWithProvider(<ZtartLanding />);
    expect(getByText('Servicios Financieros')).toBeInTheDocument();
    expect(getByText('Servicios')).toBeInTheDocument();
  });

  test('renders call to action buttons', () => {
    const { getByText } = renderWithProvider(<ZtartLanding />);
    expect(getByText('Comenzar ahora')).toBeInTheDocument();
    expect(getByText('Explorar servicios')).toBeInTheDocument();
  });

  test('renders feature sections', () => {
    const { getByText } = renderWithProvider(<ZtartLanding />);
    expect(getByText('Ztart Pay & Wallet')).toBeInTheDocument();
    expect(getByText('Ztart Academy')).toBeInTheDocument();
    expect(getByText('Ztart Voice Assistant')).toBeInTheDocument();
  });
});