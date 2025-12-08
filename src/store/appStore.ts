import { create } from 'zustand';

interface AppState {
  theme: 'light' | 'dark' | 'system';
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
  notificationsEnabled: boolean;
  setNotificationsEnabled: (enabled: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  theme: 'system',
  setTheme: (theme) => set({ theme }),
  notificationsEnabled: true,
  setNotificationsEnabled: (enabled) => set({ notificationsEnabled: enabled }),
}));


