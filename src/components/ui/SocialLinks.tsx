import { motion } from "framer-motion";
import React from "react";

interface SocialLinksProps {
  locale: "pt-BR" | "en";
  downloadResumeLabel: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ locale, downloadResumeLabel }) => {
  const resumeLabel =
    locale === "en" ? "Download resume, opens in new tab" : "Baixar currículo, abre em nova aba";

  return (
    <motion.div
      className="flex flex-wrap gap-4"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
    >
      <motion.a
        href="https://linkedin.com/in/leofariasrj25"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-5 py-2.5 border border-neutral-200 dark:border-neutral-800 rounded-lg text-sm font-bold text-neutral-600 dark:text-neutral-200 hover:border-orange-500 dark:hover:border-orange-400 hover:text-orange-600 dark:hover:text-orange-200 hover:bg-orange-50/30 dark:hover:bg-orange-900/20 transition-all shadow-sm group"
        whileHover={{ y: -2, scale: 1.01 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
      >
        <svg
          className="w-4 h-4 fill-current group-hover:text-orange-600 dark:group-hover:text-orange-200"
          viewBox="0 0 24 24"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
        LinkedIn
      </motion.a>
      <motion.a
        href="https://github.com/leofariasrj25"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-5 py-2.5 border border-neutral-200 dark:border-neutral-800 rounded-lg text-sm font-bold text-neutral-600 dark:text-neutral-200 hover:border-orange-500 dark:hover:border-orange-400 hover:text-orange-600 dark:hover:text-orange-200 hover:bg-orange-50/30 dark:hover:bg-orange-900/20 transition-all shadow-sm group"
        whileHover={{ y: -2, scale: 1.01 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
      >
        <svg
          className="w-4 h-4 fill-current group-hover:text-orange-600 dark:group-hover:text-orange-200"
          viewBox="0 0 24 24"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
        GitHub
      </motion.a>
      <motion.a
        href={`/resumes/leonardo-farias-santos${locale === "en" ? ".en" : ""}.pdf`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={resumeLabel}
        className="flex items-center gap-2 px-5 py-2.5 border border-neutral-200 dark:border-neutral-800 rounded-lg text-sm font-bold text-neutral-600 dark:text-neutral-200 hover:border-orange-500 dark:hover:border-orange-400 hover:text-orange-600 dark:hover:text-orange-200 hover:bg-orange-50/30 dark:hover:bg-orange-900/20 transition-all shadow-sm group"
        whileHover={{ y: -2, scale: 1.01 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
      >
        <svg
          className="w-4 h-4 fill-current group-hover:text-orange-600 dark:group-hover:text-orange-200"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 16l-6-6h4V4h4v6h4l-6 6zm-6 2h12v2H6v-2z" />
        </svg>
        {downloadResumeLabel}
      </motion.a>
    </motion.div>
  );
};

export default SocialLinks;
