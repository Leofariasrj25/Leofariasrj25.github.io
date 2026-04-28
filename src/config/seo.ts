import type { Locale } from "@/types";

export type RouteKey = "home" | "projects" | "blog";

export interface SeoPageMeta {
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  url: string;
  image: string;
  type?: "website" | "article";
}

export interface SeoConfig {
  default: SeoPageMeta;
  projects: SeoPageMeta;
  blog: SeoPageMeta;
}

export const BASE_URL = "https://leofarias.me";

export const SEO_CONFIG: SeoConfig = {
  default: {
    title: {
      "pt-BR": "Leonardo Farias — Desenvolvedor de Software",
      en: "Leonardo Farias — Software Developer",
    },
    description: {
      "pt-BR":
        "Desenvolvedor React, Java, Python e Go. AWS Cloud Practitioner. 2º lugar Hackathon BNDES Microcrédito. Builder de soluções serverless e IA.",
      en: "React, Java, Python, and Go Developer. AWS Cloud Practitioner. Builder of serverless and AI solutions.",
    },
    url: BASE_URL,
    image: `${BASE_URL}/og-image.png`,
    type: "website",
  },
  projects: {
    title: {
      "pt-BR": "Projetos — Leonardo Farias",
      en: "Projects — Leonardo Farias",
    },
    description: {
      "pt-BR":
        "Projetos em destaque: AlmanaqueBot, LH Nauticals. Soluções serverless, IA e engenharia de dados.",
      en: "Featured projects: AlmanaqueBot, LH Nauticals. Serverless solutions, AI and data engineering.",
    },
    url: `${BASE_URL}/projects`,
    image: `${BASE_URL}/og-image.png`,
    type: "website",
  },
  blog: {
    title: {
      "pt-BR": "Blog — Leonardo Farias",
      en: "Blog — Leonardo Farias",
    },
    description: {
      "pt-BR": "Artigos sobre desenvolvimento de software, cloud computing e IA.",
      en: "Articles about software development, cloud computing and AI.",
    },
    url: `${BASE_URL}/blog`,
    image: `${BASE_URL}/og-image.png`,
    type: "website",
  },
};

export const SEO: Record<RouteKey, SeoPageMeta> = {
  home: SEO_CONFIG.default,
  projects: SEO_CONFIG.projects,
  blog: SEO_CONFIG.blog,
};

export const getSeoForRoute = (
  routeKey: RouteKey,
  locale: Locale
): { title: string; description: string; url: string; image: string; type: string } => {
  const page = SEO[routeKey];
  return {
    title: page.title[locale],
    description: page.description[locale],
    url: page.url,
    image: page.image,
    type: page.type || "website",
  };
};

export const generatePageUrl = (path: string, locale?: Locale): string => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const cleanPath = normalizedPath === "/" ? "" : normalizedPath;

  if (locale && locale !== "pt-BR") {
    return `${BASE_URL}${cleanPath}?lang=${locale}`;
  }
  return `${BASE_URL}${cleanPath}`;
};
