import React from "react";

interface SectionHeadingProps {
  title: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title }) => {
  return (
    <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500 mb-8 border-b border-neutral-200 dark:border-neutral-800 pb-2">
      {title}
    </h2>
  );
};

export default SectionHeading;
