import { motion } from "framer-motion";
import React from "react";

import Markdown from "@/components/ui/Markdown";

interface AboutSectionProps {
  title: string;
  paragraphs: string[];
}

const AboutSection: React.FC<AboutSectionProps> = ({ title, paragraphs }) => {
  return (
    <motion.div
      className="space-y-6 w-full"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
    >
      <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500 border-b border-neutral-100 dark:border-neutral-800 pb-1 w-full">
        {title}
      </h2>
      <div className="text-neutral-700 dark:text-neutral-200 leading-relaxed text-lg md:text-xl w-full space-y-4">
        {paragraphs.map((paragraph, index) => (
          <Markdown key={index}>{paragraph}</Markdown>
        ))}
      </div>
    </motion.div>
  );
};

export default AboutSection;
