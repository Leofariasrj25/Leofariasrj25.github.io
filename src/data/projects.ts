import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "almanaquebot",
    title: "AlmanaqueBot",
    url: "https://almanaquebot.app",
    tagline: "Seu analista digital e personalizado de apostas esportivas.",
    description: `Um chatbot integrado a dados históricos de partidas de futebol e outros esportes com o intuito de auxiliar apostadores a tomarem decisões mais embasadas. Liderei o time com ênfase na ideação, gestão de prototipagem rápida da equipe, codificação das features chave e entrega do MVP validado.`,
    tags: [
      "React",
      "AWS",
      "TypeScript",
      "Serverless",
      "DynamoDB",
      "Lambda",
      "API Gateway",
      "Gemini",
      "AI",
      "Node.js",
    ],
    year: "2025",
    bullets: [
      "Arquitetura serverless end-to-end em AWS (Lambda, API Gateway, DynamoDB, S3) com front-end em React gerenciado e hospedado via AWS Amplify.",
      "Integração com Gemini, implementando tool calling para consumo autônomo de APIs externas e cruzamento de dados esportivos em tempo real.",
      "Desenvolvimento do core back-end em Typescript",
      "Infraestrutura, segurança e governança estruturadas com AWS Cognito, WAF, IAM e orquestração via AWS CLI/CDK.",
    ],
  },
  {
    id: "lh-nauticals",
    title: "LH Nauticals",
    url: "https://github.com/Leofariasrj25/desafio_indicium_lhnauticals",
    tagline: "Engenharia de Dados End-to-End e Inteligência para Tomada de Decisão.",
    description: `Case técnico do programa Indicium Lighthouse focado em transformar dados brutos em decisões estratégicas de negócio. Construí um pipeline ETL completo (Arquitetura Medallion) que serviu de base para identificar gargalos operacionais, analisar lucratividade e gerar modelos preditivos.`,
    tags: [
      "Python",
      "Pandas",
      "ETL",
      "Data Engineering",
      "Machine Learning",
      "PostgreSQL",
      "Docker",
    ],
    year: "2025",
    bullets: [
      "Implementação das camadas Bronze, Silver e Gold, garantindo governança de dados, escalabilidade e padrão de mercado.",
      "Desenvolvimento de pipeline ETL modular e vetorizado em Python/Pandas, com gestão de dependências via Poetry e orquestração via Makefiles.",
      "Criação de sistemas de recomendação (filtragem colaborativa) e modelos de previsão de demanda.",
      "Tradução de dados complexos em resultados de negócio, entregando análises de lucratividade e insights acionáveis para guiar decisões estratégicas da empresa.",
    ],
  },
];

export const getProjects = (): Project[] => {
  return projects;
};

export const getAllTags = (): string[] => {
  const tags = new Set<string>();
  projects.forEach((project) => {
    project.tags?.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort();
};

export const getProjectsByTag = (tag: string): Project[] => {
  return projects.filter((project) => project.tags?.includes(tag));
};

export default projects;
