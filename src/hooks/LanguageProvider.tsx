import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import { BRAND_CONFIG } from '@/data/brand';
import { LanguageContext } from '@/hooks/appContexts';
import { TRANSLATIONS } from '@/i18n';
import type { Language } from '@/types';

function readInitialLanguage(): Language {
  try {
    const raw = localStorage.getItem(BRAND_CONFIG.storageKeys.language);
    if (raw === 'en' || raw === 'de') {
      return raw;
    }
  } catch {
    /* ignore storage errors */
  }
  if (typeof navigator !== 'undefined' && navigator.language.toLowerCase().startsWith('de')) {
    return 'de';
  }
  return 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(readInitialLanguage);

  const t = TRANSLATIONS[language];

  useEffect(() => {
    document.documentElement.setAttribute('lang', language);
    document.title = t.meta.siteTitle;
    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) {
      descMeta.setAttribute('content', t.meta.siteDescription);
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', t.meta.siteTitle);
    }
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', t.meta.siteDescription);
    }
  }, [language, t.meta.siteDescription, t.meta.siteTitle]);

  const setLanguage = useCallback((next: Language) => {
    setLanguageState(next);
    try {
      localStorage.setItem(BRAND_CONFIG.storageKeys.language, next);
    } catch {
      /* ignore storage errors */
    }
  }, []);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t,
    }),
    [language, setLanguage, t],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
