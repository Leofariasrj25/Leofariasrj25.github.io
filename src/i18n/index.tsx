import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { DEFAULT_LOCALE, TRANSLATIONS, normalizeLocale } from '@/config/constants';
import { I18nContextValue, Locale } from '@/types';

const I18nContext = createContext<I18nContextValue | null>(null);

const detectLocale = (): Locale => {
  if (typeof navigator === 'undefined') return DEFAULT_LOCALE;

  const primary = navigator.languages?.[0] ?? navigator.language;
  return normalizeLocale(primary);
};

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocale] = useState<Locale>(() => detectLocale());

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      setLocale,
      t: TRANSLATIONS[locale]
    }),
    [locale]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = (): I18nContextValue => {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }

  return context;
};
