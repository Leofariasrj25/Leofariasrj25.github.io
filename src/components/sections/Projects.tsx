
import React from 'react';
import { motion } from 'framer-motion';
import { useI18n } from '@/i18n';

const Projects: React.FC = () => {
  const { t } = useI18n();

  return (
    <div className="space-y-12">
      {t.projects.map((project, idx) => (
        <motion.div
          key={project.id}
          className="group"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: 'easeOut', delay: idx * 0.05 }}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
            <h3 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
              {project.title}
            </h3>
            <motion.a 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-full text-xs font-bold text-orange-600 dark:text-orange-200 hover:bg-orange-600 hover:text-white hover:border-orange-600 dark:hover:bg-orange-500 dark:hover:text-neutral-950 transition-all shadow-sm"
              title={t.actions.visitProject}
              whileHover={{ scale: 1.02, y: -1 }}
              transition={{ type: 'spring', stiffness: 280, damping: 18 }}
            >
              <span>{project.url.replace('https://', '').split('/')[0]}</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" 
                fill="currentColor" 
                className="w-3.5 h-3.5"
              >
                <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06 1.06L13 8.56v3.19a.75.75 0 001.5 0v-5a.75.75 0 00-.75-.75h-5a.75.75 0 000 1.5h3.19l-5.746 5.753z" clipRule="evenodd" />
              </svg>
            </motion.a>
          </div>
          
          <p className="text-neutral-600 dark:text-neutral-300 mb-4 text-sm font-semibold italic border-l-2 border-orange-200 dark:border-orange-700 pl-3">
            {project.tagline}
          </p>

          <p className="text-neutral-600 dark:text-neutral-300 mb-6 text-sm leading-relaxed">
            {project.description}
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mb-8">
            {project.bullets.map((bullet, i) => (
              <motion.li
                key={i}
                className="flex gap-2 text-[13px] text-neutral-500 dark:text-neutral-300 leading-relaxed"
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, ease: 'easeOut', delay: i * 0.03 }}
              >
                <span className="text-orange-400 dark:text-orange-300 font-bold">•</span>
                {bullet}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
};

export default Projects;
