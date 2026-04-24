
export interface Project {
  id: string;
  title: string;
  url: string;
  tagline: string;
  description: string;
  bullets: string[];
}

export interface WorkExperience {
  company: string;
  location: string;
  role: string;
  period: string;
  bullets: string[];
}

export interface Education {
  institution: string;
  degree: string;
  date: string;
}

export type Locale = 'pt-BR' | 'en' | 'es';

export interface LanguageProficiency {
  name: string;
  level: string;
}

export interface TranslationContent {
  sections: {
    about: string;
    projects: string;
    experience: string;
    stack: string;
    education: string;
    languages: string;
  };
  hero: {
    name: string;
    role: string;
    nationality: string;
    location: string;
    phone: string;
    email: string;
    about: string[];
  };
  actions: {
    visitProject: string;
    languageLabel: string;
  };
  projects: Project[];
  experiences: WorkExperience[];
  skills: string[];
  education: Education & {
    languages: LanguageProficiency[];
  };
  footer: {
    copyright: string;
    role: string;
  };
}

export interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TranslationContent;
}
