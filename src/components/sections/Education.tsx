
import React from 'react';
import { motion } from 'framer-motion';
import { useI18n } from '@/i18n';

const EducationSection: React.FC = () => {
  const { t } = useI18n();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 border-b border-neutral-100 dark:border-neutral-800 pb-1">
          {t.sections.education}
        </h3>
        <div>
          <p className="font-bold text-sm text-neutral-900 dark:text-neutral-100">{t.education.institution}</p>
          <p className="text-sm text-neutral-600 dark:text-neutral-300">{t.education.degree}</p>
          <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-1">{t.education.date}</p>
        </div>
      </motion.div>
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: 'easeOut', delay: 0.05 }}
      >
        <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 border-b border-neutral-100 dark:border-neutral-800 pb-1">
          {t.sections.languages}
        </h3>
        <div className="text-sm text-neutral-600 dark:text-neutral-300">
          {t.education.languages.map((language) => (
            <p key={language.name}>
              <span className="font-bold text-neutral-900 dark:text-neutral-200">{language.name}:</span> {language.level}
            </p>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default EducationSection;
