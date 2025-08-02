import { useEffect } from 'react';
import { useApp } from '../contexts/AppContext';
import { useLocalStorage } from './useLocalStorage';

export function useTheme() {
  const { state, dispatch } = useApp();
  const [theme, setTheme] = useLocalStorage('ztart-theme', 'light');

  useEffect(() => {
    dispatch({ type: 'SET_THEME', payload: theme as 'light' | 'dark' });
  }, [theme, dispatch]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  return { theme, toggleTheme };
}