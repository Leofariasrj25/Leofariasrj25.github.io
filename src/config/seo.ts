export interface SeoPageMeta {
  title: string;
  description: string;
  url: string;
  image: string;
}

export interface SeoConfig {
  default: SeoPageMeta;
  projects: SeoPageMeta;
  blog: SeoPageMeta;
}

export const BASE_URL = "https://leofarias.me";

export const SEO_CONFIG: SeoConfig = {
  default: {
    title: "Leonardo Farias — Desenvolvedor de Software",
    description:
      "Desenvolvedor React, Java, Python e Go. AWS Cloud Practitioner. 2º lugar Hackathon BNDES Microcrédito. Builder de soluções serverless e IA.",
    url: BASE_URL,
    image: `${BASE_URL}/og-image.png`,
  },
  projects: {
    title: "Projetos — Leonardo Farias",
    description:
      "Projetos em destaque: AlmanaqueBot, LH Nauticals. Soluções serverless, IA e engenharia de dados.",
    url: `${BASE_URL}/projects`,
    image: `${BASE_URL}/og-image.png`,
  },
  blog: {
    title: "Blog — Leonardo Farias",
    description: "Artigos sobre desenvolvimento de software, cloud computing e IA.",
    url: `${BASE_URL}/blog`,
    image: `${BASE_URL}/og-image.png`,
  },
};
