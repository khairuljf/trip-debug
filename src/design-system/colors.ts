/**
 * Color palette for the application
 * Supports light and dark themes
 */

export const colors = {
  light: {
    primary: '#0a7ea4',
    secondary: '#687076',
    background: '#fff',
    surface: '#f5f5f5',
    text: '#11181C',
    textSecondary: '#687076',
    border: '#e0e0e0',
    error: '#ff3b30',
    success: '#34c759',
    warning: '#ff9500',
    info: '#007aff',
  },
  dark: {
    primary: '#fff',
    secondary: '#9BA1A6',
    background: '#151718',
    surface: '#1D3D47',
    text: '#ECEDEE',
    textSecondary: '#9BA1A6',
    border: '#353636',
    error: '#ff453a',
    success: '#30d158',
    warning: '#ff9f0a',
    info: '#0a84ff',
  },
};

export type ColorScheme = 'light' | 'dark';


