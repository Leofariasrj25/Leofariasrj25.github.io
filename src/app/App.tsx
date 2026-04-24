
import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import TechnicalStack from '@/components/sections/TechnicalStack';
import EducationSection from '@/components/sections/Education';
import Footer from '@/components/layout/Footer';
import { useI18n } from '@/i18n';

const App: React.FC = () => {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-[#0B0B0B] dark:text-neutral-100 antialiased selection:bg-orange-100 dark:selection:bg-orange-900">
      <motion.div
        className="max-w-[800px] mx-auto px-6 py-16 md:py-24 space-y-24"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Header />
        
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500 mb-8 border-b border-neutral-200 dark:border-neutral-800 pb-2">
            {t.sections.projects}
          </h2>
          <Projects />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 }}
        >
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500 mb-8 border-b border-neutral-200 dark:border-neutral-800 pb-2">
            {t.sections.experience}
          </h2>
          <Experience />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
        >
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500 mb-8 border-b border-neutral-200 dark:border-neutral-800 pb-2">
            {t.sections.stack}
          </h2>
          <TechnicalStack />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
        >
          <EducationSection />
        </motion.section>

        <Footer />
      </motion.div>
    </div>
  );
};

export default App;
