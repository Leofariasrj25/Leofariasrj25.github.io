import React from "react";

export interface ParticlesToggleProps {
  enabled: boolean;
  onToggle: () => void;
}

const ParticlesToggle: React.FC<ParticlesToggleProps> = ({ enabled, onToggle }) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="group relative p-2 rounded-lg text-neutral-500 dark:text-neutral-400 hover:text-orange-600 dark:hover:text-orange-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all"
      aria-pressed={enabled}
      aria-label={enabled ? "Turn background effect OFF" : "Turn background effect ON"}
    >
      {enabled ? (
        <svg
          className="w-[18px] h-[18px]"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ) : (
        <svg
          className="w-[18px] h-[18px]"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18" />
        </svg>
      )}
      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">
        {enabled ? "Turn effect OFF" : "Turn effect ON"}
      </span>
    </button>
  );
};

export default ParticlesToggle;
