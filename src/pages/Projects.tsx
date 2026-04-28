import { motion } from "framer-motion";
import React from "react";

import Footer from "@/components/layout/Footer";
import SeoHead from "@/components/seo/SeoHead";
import AsciiParticles from "@/components/ui/AsciiParticles";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import Navigation from "@/components/ui/Navigation";
import ParticlesToggle from "@/components/ui/ParticlesToggle";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { getProjects } from "@/data/projects";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useI18n } from "@/i18n";

const ProjectsPage: React.FC = () => {
  const { t } = useI18n();
  const projects = getProjects();
  const [particlesEnabled, setParticlesEnabled] = useLocalStorage("particles", true);

  const toggleParticles = () => {
    setParticlesEnabled((prev) => !prev);
  };

  return (
    <div className="bg-white dark:bg-neutral-950 text-[#0B0B0B] dark:text-neutral-100 antialiased selection:bg-orange-100 dark:selection:bg-orange-900">
      <SeoHead routeKey="projects" />
      <AsciiParticles enabled={particlesEnabled} />
      <div className="max-w-[800px] mx-auto px-6 pt-16 md:pt-24">
        <motion.div
          className="flex flex-col gap-12"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex justify-between items-start">
            <div className="space-y-3 min-w-0">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                {t.hero.name}
              </h1>
              <p className="text-base text-neutral-500 dark:text-neutral-300 font-medium">
                {t.hero.role}
              </p>
            </div>
            <div className="flex flex-col items-end gap-3">
              <div className="flex items-center gap-1">
                <ParticlesToggle enabled={particlesEnabled} onToggle={toggleParticles} />
                <ThemeToggle />
                <LanguageSwitcher />
              </div>
              <Navigation />
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
              {t.sections.projects}
            </h2>
            <div className="w-16 h-1 bg-orange-500 mt-4 rounded-full" />
          </div>

          <div className="flex flex-col gap-0">
            {projects.map((project, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="group relative py-8 border-b border-neutral-200 dark:border-neutral-800"
                >
                  <div
                    className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-6 md:gap-12`}
                  >
                    <div className="w-full md:w-1/2 aspect-[16/10] bg-neutral-100 dark:bg-neutral-900 rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800">
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-neutral-400 dark:text-neutral-600 text-sm">
                          {project.title} preview
                        </span>
                      </div>
                    </div>

                    <div className="w-full md:w-1/2 text-center md:text-left">
                      <span className="text-xs font-bold tracking-widest text-orange-500 uppercase mb-2 block">
                        {project.year}
                      </span>
                      <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-4">
                        {project.tagline}
                      </p>
                      <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                        {project.tags?.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 text-xs rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-orange-600 dark:text-orange-400 hover:gap-3 transition-all"
                      >
                        Ver projeto
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <Footer />
      </div>
    </div>
  );
};

export default ProjectsPage;
