import { create } from "zustand";

interface ThemeState {
  isScrolled: boolean;
  setIsScrolled: (value: boolean) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (value: boolean) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  isScrolled: false,
  setIsScrolled: (value) => set({ isScrolled: value }),
  isMobileMenuOpen: false,
  setIsMobileMenuOpen: (value) => set({ isMobileMenuOpen: value }),
}));
