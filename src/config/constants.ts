import { Locale, TranslationContent } from '@/types';

export const DEFAULT_LOCALE: Locale = 'pt-BR';

export const SUPPORTED_LOCALES: { code: Locale; label: string }[] = [
  { code: 'pt-BR', label: 'PT' },
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' }
];

const skillsPt = [
  'TypeScript',
  'React',
  'Node.js',
  'Next.js',
  'NestJS',
  'PostgreSQL',
  'Docker',
  'AWS',
  'CI/CD'
];

const skillsEn = [
  'TypeScript',
  'React',
  'Node.js',
  'Next.js',
  'NestJS',
  'PostgreSQL',
  'Docker',
  'AWS',
  'CI/CD'
];

const skillsEs = [
  'TypeScript',
  'React',
  'Node.js',
  'Next.js',
  'NestJS',
  'PostgreSQL',
  'Docker',
  'AWS',
  'CI/CD'
];

export const TRANSLATIONS: Record<Locale, TranslationContent> = {
  'pt-BR': {
    sections: {
      about: 'Sobre',
      projects: 'Projetos em Destaque',
      experience: 'Experiencia Profissional',
      stack: 'Stack Tecnica',
      education: 'Formacao',
      languages: 'Idiomas'
    },
    hero: {
      name: 'Seu Nome',
      role: 'Seu Cargo Principal',
      nationality: 'Sua Nacionalidade',
      location: 'Sua Cidade, Pais',
      phone: '+55 (00) 00000-0000',
      email: 'voce@seudominio.com',
      about: [
        'Escreva aqui um resumo curto sobre quem voce e e qual problema voce resolve.',
        'No segundo paragrafo, explique sua especialidade tecnica e sua forma de trabalho.',
        'No terceiro, destaque impacto de negocio, lideranca tecnica e resultados concretos.'
      ]
    },
    actions: {
      visitProject: 'Visitar projeto',
      languageLabel: 'Idioma'
    },
    projects: [
      {
        id: 'project-one',
        title: 'Projeto 01',
        url: 'https://seu-projeto.com',
        tagline: 'Tagline curta com proposta de valor.',
        description: 'Descreva o projeto, o contexto, as tecnologias e o resultado principal em uma frase clara.',
        bullets: [
          'Stack principal e arquitetura adotada.',
          'Desafio tecnico mais relevante e como foi resolvido.',
          'Resultado mensuravel obtido com o projeto.'
        ]
      },
      {
        id: 'project-two',
        title: 'Projeto 02',
        url: 'https://seu-projeto.com',
        tagline: 'Produto digital com foco em escalabilidade.',
        description: 'Use este espaco para mostrar dominio tecnico e pensamento de produto.',
        bullets: [
          'Automacao de fluxo critico do negocio.',
          'Melhoria de performance e observabilidade.',
          'Evolucao de experiencia de usuario orientada por dados.'
        ]
      },
      {
        id: 'project-three',
        title: 'Projeto 03',
        url: 'https://seu-projeto.com',
        tagline: 'Ferramenta interna para acelerar operacoes.',
        description: 'Mostre como voce entrega valor de forma pragmatica e sustentavel.',
        bullets: [
          'Padronizacao de processos e reducao de retrabalho.',
          'Integracao com APIs e servicos externos.',
          'Documentacao e governanca tecnica.'
        ]
      }
    ],
    experiences: [
      {
        company: 'Empresa Atual',
        location: 'Remoto / Cidade, Pais',
        role: 'Cargo Atual',
        period: '01/2024 - Presente',
        bullets: [
          'Liderou entregas de alto impacto em produto e engenharia.',
          'Melhorou confiabilidade com testes, observabilidade e padroes.',
          'Apoiou decisoes de arquitetura com foco em escala e manutencao.'
        ]
      },
      {
        company: 'Empresa Anterior',
        location: 'Cidade, Pais',
        role: 'Cargo Anterior',
        period: '01/2022 - 12/2023',
        bullets: [
          'Construiu funcionalidades estrategicas em colaboracao com produto.',
          'Reduziu custos operacionais com automacoes tecnicas.',
          'Mentorou pessoas do time em boas praticas de desenvolvimento.'
        ]
      }
    ],
    skills: skillsPt,
    education: {
      institution: 'Universidade ou Instituicao',
      degree: 'Curso / Formacao',
      date: 'MM/AAAA',
      languages: [
        { name: 'Portugues', level: 'Nativo' },
        { name: 'Ingles', level: 'Avancado' }
      ]
    },
    footer: {
      copyright: '© 2026 Seu Nome',
      role: 'Seu Cargo'
    }
  },
  en: {
    sections: {
      about: 'About',
      projects: 'Featured Projects',
      experience: 'Professional Experience',
      stack: 'Technical Stack',
      education: 'Education',
      languages: 'Languages'
    },
    hero: {
      name: 'Your Name',
      role: 'Your Primary Role',
      nationality: 'Your Nationality',
      location: 'Your City, Country',
      phone: '+00 000 000 0000',
      email: 'you@yourdomain.com',
      about: [
        'Write a short summary about who you are and what problem you solve.',
        'In the second paragraph, explain your technical specialty and working style.',
        'In the third paragraph, highlight business impact, leadership, and outcomes.'
      ]
    },
    actions: {
      visitProject: 'Visit project',
      languageLabel: 'Language'
    },
    projects: [
      {
        id: 'project-one',
        title: 'Project 01',
        url: 'https://your-project.com',
        tagline: 'A short value proposition tagline.',
        description: 'Describe the project, context, technology choices, and core outcome in one clear sentence.',
        bullets: [
          'Main stack and architecture decisions.',
          'Most relevant technical challenge and solution.',
          'Measured outcome delivered by the project.'
        ]
      },
      {
        id: 'project-two',
        title: 'Project 02',
        url: 'https://your-project.com',
        tagline: 'Digital product focused on scalability.',
        description: 'Use this space to demonstrate technical depth and product thinking.',
        bullets: [
          'Automation for a critical business workflow.',
          'Performance and observability improvements.',
          'Data-informed user experience enhancements.'
        ]
      },
      {
        id: 'project-three',
        title: 'Project 03',
        url: 'https://your-project.com',
        tagline: 'Internal tool to accelerate operations.',
        description: 'Show how you deliver practical and sustainable value.',
        bullets: [
          'Process standardization and reduced rework.',
          'Integrations with external APIs and services.',
          'Technical governance and documentation quality.'
        ]
      }
    ],
    experiences: [
      {
        company: 'Current Company',
        location: 'Remote / City, Country',
        role: 'Current Role',
        period: '01/2024 - Present',
        bullets: [
          'Led high-impact deliveries across product and engineering.',
          'Improved reliability through testing, observability, and standards.',
          'Supported architectural decisions focused on scale and maintainability.'
        ]
      },
      {
        company: 'Previous Company',
        location: 'City, Country',
        role: 'Previous Role',
        period: '01/2022 - 12/2023',
        bullets: [
          'Built strategic features in close collaboration with product teams.',
          'Reduced operational cost through technical automation.',
          'Mentored teammates on engineering best practices.'
        ]
      }
    ],
    skills: skillsEn,
    education: {
      institution: 'University or Institution',
      degree: 'Degree / Program',
      date: 'MM/YYYY',
      languages: [
        { name: 'English', level: 'Fluent' },
        { name: 'Spanish', level: 'Intermediate' }
      ]
    },
    footer: {
      copyright: '© 2026 Your Name',
      role: 'Your Role'
    }
  },
  es: {
    sections: {
      about: 'Sobre',
      projects: 'Proyectos Destacados',
      experience: 'Experiencia Profesional',
      stack: 'Stack Tecnico',
      education: 'Formacion',
      languages: 'Idiomas'
    },
    hero: {
      name: 'Tu Nombre',
      role: 'Tu Rol Principal',
      nationality: 'Tu Nacionalidad',
      location: 'Tu Ciudad, Pais',
      phone: '+00 000 000 0000',
      email: 'tu@tudominio.com',
      about: [
        'Escribe un resumen corto sobre quien eres y que problema resuelves.',
        'En el segundo parrafo, explica tu especialidad tecnica y forma de trabajo.',
        'En el tercero, destaca impacto de negocio, liderazgo tecnico y resultados.'
      ]
    },
    actions: {
      visitProject: 'Visitar proyecto',
      languageLabel: 'Idioma'
    },
    projects: [
      {
        id: 'project-one',
        title: 'Proyecto 01',
        url: 'https://tu-proyecto.com',
        tagline: 'Una propuesta de valor clara y corta.',
        description: 'Describe el proyecto, el contexto, la tecnologia y el resultado clave en una frase.',
        bullets: [
          'Stack principal y decisiones de arquitectura.',
          'Desafio tecnico mas importante y solucion.',
          'Resultado medible entregado por el proyecto.'
        ]
      },
      {
        id: 'project-two',
        title: 'Proyecto 02',
        url: 'https://tu-proyecto.com',
        tagline: 'Producto digital con foco en escalabilidad.',
        description: 'Usa este espacio para mostrar profundidad tecnica y vision de producto.',
        bullets: [
          'Automatizacion de flujo critico del negocio.',
          'Mejoras de performance y observabilidad.',
          'Evolucion de experiencia de usuario guiada por datos.'
        ]
      },
      {
        id: 'project-three',
        title: 'Proyecto 03',
        url: 'https://tu-proyecto.com',
        tagline: 'Herramienta interna para acelerar operaciones.',
        description: 'Muestra como entregas valor de forma practica y sostenible.',
        bullets: [
          'Estandarizacion de procesos y reduccion de retrabajo.',
          'Integraciones con APIs y servicios externos.',
          'Gobernanza tecnica y documentacion de calidad.'
        ]
      }
    ],
    experiences: [
      {
        company: 'Empresa Actual',
        location: 'Remoto / Ciudad, Pais',
        role: 'Rol Actual',
        period: '01/2024 - Presente',
        bullets: [
          'Lidero entregas de alto impacto entre producto e ingenieria.',
          'Mejoro confiabilidad con pruebas, observabilidad y estandares.',
          'Apoyo decisiones de arquitectura con foco en escala y mantenimiento.'
        ]
      },
      {
        company: 'Empresa Anterior',
        location: 'Ciudad, Pais',
        role: 'Rol Anterior',
        period: '01/2022 - 12/2023',
        bullets: [
          'Construyo funcionalidades estrategicas junto a producto.',
          'Reduzco costos operativos mediante automatizaciones.',
          'Mentoreo al equipo en buenas practicas de desarrollo.'
        ]
      }
    ],
    skills: skillsEs,
    education: {
      institution: 'Universidad o Institucion',
      degree: 'Carrera / Programa',
      date: 'MM/AAAA',
      languages: [
        { name: 'Espanol', level: 'Nativo' },
        { name: 'Ingles', level: 'Avanzado' }
      ]
    },
    footer: {
      copyright: '© 2026 Tu Nombre',
      role: 'Tu Rol'
    }
  }
};

export const normalizeLocale = (value?: string | null): Locale => {
  const lang = (value ?? '').toLowerCase();
  if (lang.startsWith('pt')) return 'pt-BR';
  if (lang.startsWith('es')) return 'es';
  if (lang.startsWith('en')) return 'en';
  return DEFAULT_LOCALE;
};
