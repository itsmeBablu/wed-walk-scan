import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import { BRAND_CONFIG } from '@/data/brand';
import { ThemeContext } from '@/hooks/appContexts';
import type { ResolvedTheme, ThemePreference } from '@/types';

function readInitialPreference(): ThemePreference {
  try {
    const raw = localStorage.getItem(BRAND_CONFIG.storageKeys.theme);
    if (raw === 'light' || raw === 'dark' || raw === 'system') {
      return raw;
    }
  } catch {
    /* ignore storage errors */
  }
  return 'system';
}

function getSystemTheme(): ResolvedTheme {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return 'light';
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [preference, setPreferenceState] = useState<ThemePreference>(readInitialPreference);
  const [systemTheme, setSystemTheme] = useState<ResolvedTheme>(getSystemTheme);

  useEffect(() => {
    if (!window.matchMedia) {
      return;
    }
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (event: MediaQueryListEvent) => {
      setSystemTheme(event.matches ? 'dark' : 'light');
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const resolvedTheme: ResolvedTheme = preference === 'system' ? systemTheme : preference;

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', resolvedTheme);
    root.classList.toggle('dark', resolvedTheme === 'dark');
  }, [resolvedTheme]);

  const setPreference = useCallback((next: ThemePreference) => {
    const root = document.documentElement;
    root.classList.add('theme-transitioning');
    window.setTimeout(() => {
      root.classList.remove('theme-transitioning');
    }, 360);

    setPreferenceState(next);
    try {
      localStorage.setItem(BRAND_CONFIG.storageKeys.theme, next);
    } catch {
      /* ignore storage errors */
    }
  }, []);

  const value = useMemo(
    () => ({
      preference,
      resolvedTheme,
      setPreference,
    }),
    [preference, resolvedTheme, setPreference],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
