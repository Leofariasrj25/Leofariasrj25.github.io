import { motion } from "framer-motion";
import React from "react";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import EducationSection from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import TechnicalStack from "@/components/sections/TechnicalStack";
import SeoHead from "@/components/seo/SeoHead";
import AnimatedSection from "@/components/ui/AnimatedSection";
import AsciiParticles from "@/components/ui/AsciiParticles";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useI18n } from "@/i18n";

const Home: React.FC = () => {
  const { t } = useI18n();
  const [particlesEnabled, setParticlesEnabled] = useLocalStorage("particles", true);

  const toggleParticles = () => {
    setParticlesEnabled((prev) => !prev);
  };

  return (
    <div className="bg-white dark:bg-neutral-950 text-[#0B0B0B] dark:text-neutral-100 antialiased selection:bg-orange-100 dark:selection:bg-orange-900">
      <SeoHead routeKey="home" />
      <AsciiParticles enabled={particlesEnabled} />
      <div className="max-w-[800px] mx-auto px-6 pt-16 md:pt-24">
        <motion.div
          className="flex flex-col gap-16"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Header particlesEnabled={particlesEnabled} onToggleParticles={toggleParticles} />

          <AnimatedSection delay={0}>
            <SectionHeading title={t.sections.projects} />
            <Projects />
          </AnimatedSection>

          <AnimatedSection delay={0.05}>
            <SectionHeading title={t.sections.experience} />
            <Experience />
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <SectionHeading title={t.sections.stack} />
            <TechnicalStack />
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <EducationSection />
          </AnimatedSection>

          <Footer />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
