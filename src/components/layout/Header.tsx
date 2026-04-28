import { motion } from "framer-motion";
import React from "react";

import AboutSection from "@/components/ui/AboutSection";
import Avatar from "@/components/ui/Avatar";
import ContactInfo from "@/components/ui/ContactInfo";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import Navigation from "@/components/ui/Navigation";
import ParticlesToggle from "@/components/ui/ParticlesToggle";
import SocialLinks from "@/components/ui/SocialLinks";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { useI18n } from "@/i18n";
import type { HeaderProps } from "@/types";

const Header: React.FC<HeaderProps> = ({ particlesEnabled, onToggleParticles }) => {
  const { t, locale } = useI18n();

  return (
    <header className="space-y-12">
      <motion.div
        className="flex flex-col gap-5"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex justify-between items-start">
          <div className="space-y-3 min-w-0">
            <Avatar name={t.hero.name} />
            <div className="flex flex-col sm:items-start sm:gap-2">
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
                {t.hero.name}
              </h1>
              <p className="text-xl text-neutral-500 dark:text-neutral-300 font-medium">
                {t.hero.role}
              </p>
            </div>
            <ContactInfo
              nationality={t.hero.nationality}
              location={t.hero.location}
              phone={t.hero.phone}
              email={t.hero.email}
            />
          </div>

          <div className="flex flex-col items-end gap-3">
            <div className="flex items-center gap-1">
              <ParticlesToggle enabled={particlesEnabled} onToggle={onToggleParticles} />
              <ThemeToggle />
              <LanguageSwitcher />
            </div>
            <Navigation />
          </div>
        </div>
      </motion.div>

      <AboutSection title={t.sections.about} paragraphs={t.hero.about} />

      <SocialLinks locale={locale} downloadResumeLabel={t.actions.downloadResume} />
    </header>
  );
};

export default Header;
