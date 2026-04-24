
import React from 'react';
import { motion } from 'framer-motion';
import { useI18n } from '@/i18n';

const TechnicalStack: React.FC = () => {
  const { t } = useI18n();

  return (
    <div className="flex flex-wrap gap-2 md:gap-3">
      {t.skills.map((skill) => (
        <motion.span 
          key={skill} 
          className="px-3 py-1.5 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg text-xs font-bold text-neutral-600 dark:text-neutral-200 hover:border-orange-400 dark:hover:border-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/20 hover:text-orange-700 dark:hover:text-orange-200 transition-all cursor-default shadow-sm hover:shadow-md"
          whileHover={{ y: -2, scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 260, damping: 16 }}
        >
          {skill}
        </motion.span>
      ))}
    </div>
  );
};

export default TechnicalStack;
