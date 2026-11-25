import { createContext } from 'react';
import type { Language, ResolvedTheme, ThemePreference, TranslationSchema } from '@/types';

export interface ThemeContextValue {
  preference: ThemePreference;
  resolvedTheme: ResolvedTheme;
  setPreference: (next: ThemePreference) => void;
}

export interface LanguageContextValue {
  language: Language;
  setLanguage: (next: Language) => void;
  t: TranslationSchema;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);
export const LanguageContext = createContext<LanguageContextValue | null>(null);
