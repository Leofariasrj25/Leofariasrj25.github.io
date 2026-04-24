
import React from 'react';
import { motion } from 'framer-motion';
import { useI18n } from '@/i18n';

const Experience: React.FC = () => {
  const { t } = useI18n();

  return (
    <div className="space-y-12">
      {t.experiences.map((exp, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: 'easeOut', delay: idx * 0.04 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline gap-1 mb-2">
            <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">{exp.company}</h3>
            <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">{exp.period}</span>
          </div>
          <p className="text-sm font-semibold text-neutral-600 dark:text-neutral-300 mb-4">{exp.role} | {exp.location}</p>
          <ul className="space-y-1.5">
            {exp.bullets.map((bullet, i) => (
              <motion.li
                key={i}
                className="flex gap-3 text-sm text-neutral-500 dark:text-neutral-300 leading-relaxed"
                initial={{ opacity: 0, x: -6 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, ease: 'easeOut', delay: i * 0.03 }}
              >
                <span className="text-neutral-300 dark:text-neutral-600">•</span>
                {bullet}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
};

export default Experience;
