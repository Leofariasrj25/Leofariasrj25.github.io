import React, { useEffect, useRef, useState } from 'react';
import { SUPPORTED_LOCALES } from '@/config/constants';
import { useI18n } from '@/i18n';
import type { Locale } from '@/types';

const FLAG_STYLES: Record<Locale, string> = {
  'pt-BR': 'bg-gradient-to-br from-green-500 via-yellow-300 to-green-700',
  en: 'bg-gradient-to-br from-blue-600 via-white to-red-500',
  es: 'bg-gradient-to-br from-red-600 via-yellow-400 to-red-700'
};

const LanguageSwitcher: React.FC = () => {
  const { locale, setLocale, t } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const active = SUPPORTED_LOCALES.find((opt) => opt.code === locale);
  const activeFlag = active ? FLAG_STYLES[active.code] : FLAG_STYLES['pt-BR'];

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-xs font-semibold text-neutral-700 dark:text-neutral-200 shadow-sm hover:border-orange-300 dark:hover:border-orange-400 hover:text-orange-600 dark:hover:text-orange-200 transition-colors"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className={`w-4 h-4 rounded-full ${activeFlag} border border-white/70 dark:border-neutral-800`} aria-hidden />
        <span className="text-[11px] tracking-[0.1em] uppercase">{active?.label ?? 'PT'}</span>
        <svg
          className="w-4 h-4 text-neutral-400 dark:text-neutral-500"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden
        >
          <path d="M5.5 7.5a.75.75 0 0 1 1.06 0L10 10.94l3.44-3.44a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06Z" />
        </svg>
      </button>

      {open && (
        <div className="absolute z-20 mt-2 w-40 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 shadow-lg shadow-black/5 dark:shadow-black/30 overflow-hidden">
          <div className="px-3 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500">
            {t.actions.languageLabel}
          </div>
          <ul role="listbox" className="divide-y divide-neutral-100 dark:divide-neutral-800">
            {SUPPORTED_LOCALES.map((option) => (
              <li key={option.code}>
                <button
                  type="button"
                  onClick={() => {
                    setLocale(option.code);
                    setOpen(false);
                  }}
                  role="option"
                  aria-selected={option.code === locale}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm font-semibold transition-colors ${
                    option.code === locale
                      ? 'bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-200'
                      : 'text-neutral-700 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full ${FLAG_STYLES[option.code]} border border-white/70 dark:border-neutral-800`} aria-hidden />
                  <span>{option.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
