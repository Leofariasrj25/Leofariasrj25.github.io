
import React from 'react';
import { useI18n } from '@/i18n';

const Footer: React.FC = () => {
  const { t } = useI18n();

  return (
    <footer className="pt-12 border-t border-neutral-200 dark:border-neutral-800 flex justify-between items-center text-[10px] text-neutral-300 dark:text-neutral-500 font-bold uppercase tracking-widest">
      <p className="dark:text-neutral-400">{t.footer.copyright}</p>
      <p className="dark:text-neutral-400">{t.footer.role}</p>
    </footer>
  );
};

export default Footer;
