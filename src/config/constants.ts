import { Locale, TranslationContent } from "@/types";

export const DEFAULT_LOCALE: Locale = "pt-BR";

export const SUPPORTED_LOCALES: { code: Locale; label: string }[] = [
  { code: "pt-BR", label: "PT" },
  { code: "en", label: "EN" },
];

const skillsPt = [
  "Python",
  "Java",
  "C/C++",
  "Spring",
  "React",
  "PostgreSQL",
  "Docker",
  "AWS",
  "CI/CD",
];

// const skillsEn = [
//   'TypeScript',
//   'React',
//   'Node.js',
//   'Next.js',
//   'NestJS',
//   'PostgreSQL',
//   'Docker',
//   'AWS',
//   'CI/CD'
// ];

const skillsEn = skillsPt;

export const TRANSLATIONS: Record<Locale, TranslationContent> = {
  "pt-BR": {
    sections: {
      about: "Sobre",
      projects: "Projetos em Destaque",
      experience: "Experiencia Profissional",
      stack: "Stack Tecnica",
      education: "Formacao",
      languages: "Idiomas",
    },
    hero: {
      name: "Leonardo Farias",
      role: "Desenvolvedor de Software",
      nationality: "🇧🇷 Brasil",
      location: "Rio de Janeiro, Brasil",
      phone: "+55 (21) 98253-6300",
      email: "leofariasrj25@gmail.com",
      about: [
        "Profissional com mais de 10 anos de experiência prévia em atendimento ao cliente e gestão operacional em setores diversos. Essa vivência me tornou um profissional pragmático, focado em resolver problemas de negócio de forma autônoma e rápida, entendendo que o código é o meio para facilitar a operação e entregar valor real ao usuário.",
        "Atuo com **React** no front-end e no back-end utilizo **Java**, **Python** e **Go**, desenvolvendo desde fundamentos de sistemas e ferramentas de linha de comando até arquiteturas na nuvem. Tenho experiência prática no desenvolvimento de APIs, modelagem de dados (`SQL` e `noSQL`) e infraestrutura serverless no ecossistema **AWS**, evoluindo aplicações com segurança, previsibilidade e código limpo. Também aplico automação e integrações de IA para cruzar informações em tempo real e transformar processos manuais em análises autônomas, reduzindo o tempo operacional e entregando ferramentas práticas para o negócio.",
        "Alguns dos frutos dessa expertise e evolução contínua foram a conquista do 2º lugar no Hackathon de Microcrédito do BNDES, a produção do AlmanaqueBot um assistente digital para apostas esportivas e a certificação **AWS Cloud Practitioner**, atualmente estou estudando para a certificação **AWS Developer**, consolidando minha capacidade de criar aplicações robustas na nuvem.",
      ],
      seo: "Desenvolvedor React, Java, Python e Go. AWS Cloud Practitioner. 2º lugar Hackathon BNDES Microcrédito. Builder de soluções serverless e IA.",
    },
    actions: {
      visitProject: "Visitar projeto",
      languageLabel: "Idioma",
      downloadResume: "Baixar Currículo",
    },
    projects: [
      {
        id: "project-one",
        title: "AlmanaqueBot",
        url: "https://almanaquebot.app",
        tagline: "Seu analista digital e personalizado de apostas esportivas.",
        description:
          "Um chatbot integrado a dados históricos de partidas de futebol e outros esportes com o intuito de auxiliar apostadores a tomarem decisões mais embasadas. Liderei o time com ênfase na ideação, gestão de prototipagem rápida da equipe, codificação das features chave e entrega do MVP validado.",
        bullets: [
          "Arquitetura serverless end-to-end em AWS (Lambda, API Gateway, DynamoDB, S3) com front-end em React gerenciado e hospedado via AWS Amplify.",
          "Integração com Gemini, implementando tool calling para consumo autônomo de APIs externas e cruzamento de dados esportivos em tempo real.",
          "Desenvolvimento do core back-end em Typescript",
          "Infraestrutura, segurança e governança estruturadas com AWS Cognito, WAF, IAM e orquestração via AWS CLI/CDK.",
        ],
      },
      {
        id: "project-two",
        title: "LH Nauticals",
        url: "https://github.com/Leofariasrj25/desafio_indicium_lhnauticals",
        tagline: "Engenharia de Dados End-to-End e Inteligência para Tomada de Decisão..",
        description:
          "Case técnico do programa Indicium Lighthouse focado em transformar dados brutos em decisões estratégicas de negócio. Construí um pipeline ETL completo (Arquitetura Medallion) que serviu de base para identificar gargalos operacionais, analisar lucratividade e gerar modelos preditivos.",
        bullets: [
          "Implementação das camadas Bronze, Silver e Gold, garantindo governança de dados, escalabilidade e padrão de mercado",
          "Desenvolvimento de pipeline ETL modular e vetorizado em Python/Pandas, com gestão de dependências via Poetry e orquestração via Makefiles.",
          "Criação de sistemas de recomendação (filtragem colaborativa) e modelos de previsão de demanda.",
          "Tradução de dados complexos em resultados de negócio, entregando análises de lucratividade e insights acionáveis para guiar decisões estratégicas da empresa.",
        ],
      },
    ],
    experiences: [
      {
        company: "Escola da Nuvem",
        location: "Remoto, Brasil",
        role: "Mentor Técnico",
        period: "01/2024 - Presente",
        bullets: [
          "Orientar alunos na jornada de aprendizado do ecossistema AWS, oferecendo suporte técnico direcionado para a preparação e conquista de certificações oficiais (como a Cloud Practitioner).",

          "Atuar no destravamento de dúvidas técnicas e na resolução detalhada de simulados, ajudando os estudantes a identificar lacunas de conhecimento e a refinar suas estratégias de estudo.",
        ],
      },
    ],
    skills: skillsPt,
    education: {
      institution: "École 42",
      degree: "Engenharia de Software",
      date: "12/2026",
      languages: [
        { name: "Português", level: "Nativo" },
        { name: "Inglês", level: "Avançado" },
      ],
    },
    footer: {
      copyright: "© 2026 Leonardo Farias dos Santos",
      role: "Desenvolvedor de Software",
    },
  },
  en: {
    sections: {
      about: "About",
      projects: "Featured Projects",
      experience: "Professional Experience",
      stack: "Technical Stack",
      education: "Education",
      languages: "Languages",
    },
    hero: {
      name: "Leonardo Farias",
      role: "Software Developer",
      nationality: "🇧🇷 Brazil",
      location: "Rio de Janeiro, Brazil",
      phone: "+55 (21) 98253-6300",
      email: "leofariasrj25@gmail.com",
      about: [
        "Professional with more than 10 years of prior experience in customer service and operational management in diverse sectors. This experience made me a pragmatic professional, focused on solving business problems autonomously and quickly, understanding that code is the means to facilitate operations and deliver real value to the user.",
        "I work with **React** on the front-end and use **Java**, **Python**, and **Go** on the back-end, developing everything from system fundamentals and command-line tools to cloud architectures. I have practical experience in API development, data modeling (`SQL` and `noSQL`), and serverless infrastructure in the **AWS** ecosystem, evolving applications with security, predictability, and clean code. I also apply automation and AI integrations to cross-reference information in real-time and transform manual processes into autonomous analyses, reducing operational time and delivering practical tools for the business.",
        "Some of the fruits of this expertise and continuous evolution were the 2nd place in the BNDES Microcredit Hackathon, the creation of AlmanaqueBot a digital assistant for sports betting, and the **AWS Cloud Practitioner** certification. I am currently studying for the **AWS Developer** certification, consolidating my ability to create robust applications in the cloud.",
      ],
      seo: "React Developer, Java, Python, Go. AWS Cloud Practitioner. 2nd place BNDES Microcredit Hackathon. Serverless and AI solutions builder.",
    },
    actions: {
      visitProject: "Visit project",
      languageLabel: "Language",
      downloadResume: "Download Resume",
    },
    projects: [
      {
        id: "project-one",
        title: "AlmanaqueBot",
        url: "https://almanaquebot.app",
        tagline: "Your digital and personalized sports betting analyst.",
        description:
          "A chatbot integrated with historical football and other sports data to help bettors make more informed decisions. I led the team with emphasis on ideation, rapid prototyping team management, key feature coding, and validated MVP delivery.",
        bullets: [
          "End-to-end serverless architecture on AWS (Lambda, API Gateway, DynamoDB, S3) with React front-end managed and hosted via AWS Amplify.",
          "Integration with Gemini, implementing tool calling for autonomous consumption of external APIs and real-time sports data cross-referencing.",
          "Core back-end development in TypeScript.",
          "Infrastructure, security, and governance structured with AWS Cognito, WAF, IAM, and orchestration via AWS CLI/CDK.",
        ],
      },
      {
        id: "project-two",
        title: "LH Nauticals",
        url: "https://github.com/Leofariasrj25/desafio_indicium_lhnauticals",
        tagline: "End-to-End Data Engineering and Intelligence for Decision Making.",
        description:
          "Technical case study from the Indicium Lighthouse program focused on transforming raw data into strategic business decisions. I built a complete ETL pipeline (Medallion Architecture) that served as the basis for identifying operational bottlenecks, analyzing profitability, and generating predictive models.",
        bullets: [
          "Implementation of Bronze, Silver, and Gold layers, ensuring data governance, scalability, and market standards.",
          "Development of modular and vectorized ETL pipeline in Python/Pandas, with dependency management via Poetry and orchestration via Makefiles.",
          "Creation of recommendation systems (collaborative filtering) and demand forecasting models.",
          "Translation of complex data into business results, delivering profitability analysis and actionable insights to guide strategic company decisions.",
        ],
      },
    ],
    experiences: [
      {
        company: "Escola da Nuvem",
        location: "Remote, Brazil",
        role: "Technical Mentor",
        period: "01/2024 - Present",
        bullets: [
          "Guided students through the AWS ecosystem learning journey, providing targeted technical support for preparation and achievement of official certifications (such as Cloud Practitioner).",
          "Worked on unlocking technical doubts and detailed resolution of practice tests, helping students identify knowledge gaps and refine their study strategies.",
        ],
      },
    ],
    skills: skillsEn,
    education: {
      institution: "École 42",
      degree: "Software Engineering",
      date: "12/2026",
      languages: [
        { name: "Portuguese", level: "Native" },
        { name: "English", level: "Advanced" },
      ],
    },
    footer: {
      copyright: "© 2026 Leonardo Farias dos Santos",
      role: "Software Developer",
    },
  },
};

export const normalizeLocale = (value?: string | null): Locale => {
  const lang = (value ?? "").toLowerCase();
  if (lang.startsWith("pt")) return "pt-BR";
  if (lang.startsWith("en")) return "en";
  return DEFAULT_LOCALE;
};
