// src/content/profile.ts

export type Profile = {
  stack: string[];
  experience: Array<{
    role: string;
    company: string;
    period: string;
    logo?: string;
    banner?: string;
    bullets: { es: string[]; en: string[] };
    tech: string[];
  }>;
  education: { es: string; en: string };
  languages: Array<{ name: string; level: string }>;
  certifications: Array<{ title: string; issuer: string; date: string; url?: string }>;
  achievements: Array<{
    title: string;
    banner?: string;
    description: { es: string; en: string };
    year?: string;
  }>;
};

export const profile: Profile = {
  stack: [
    "C#",
    ".NET",
    "ASP.NET Core",
    "ASP.NET Core Web API",
    "Angular",
    "TypeScript",
    "SQL Server",
    "Entity Framework Core",
    "LINQ",
    "Docker",
    "CI/CD",
    "Azure / AWS",
    "Testing (xUnit/NUnit/Jasmine/Karma)",
  ],

  experience: [
    {
      role: "Programador Analista Jr.",
      company: "Ciudad Maderas",
      period: "Ene 2025 — Jul 2025",
      logo: "/maderas.jpg",
      banner: "/maderas-banner.png",
      bullets: {
        es: [
          "Desarrollo y mejora de aplicaciones web con Angular, TypeScript, HTML, CSS/SASS, JavaScript y Microsoft SQL Server.",
          "Desarrollo de servicios backend con ASP.NET Core y C#, implementando lógica de negocio, validaciones e integraciones con SQL Server.",
          "Diseño y optimización de consultas complejas, vistas y procedimientos almacenados en SQL Server para módulos financieros y de reporting.",
        ],
        en: [
          "Built and enhanced web applications using Angular, TypeScript, HTML, CSS/SASS, JavaScript, and Microsoft SQL Server.",
          "Developed backend services with ASP.NET Core and C#, implementing business logic, validations, and integrations with SQL Server.",
          "Designed and optimized complex SQL Server queries, views, and stored procedures for financial and reporting modules.",
        ],
      },
      tech: ["C#", "ASP.NET Core", "Angular", "TypeScript", "SQL Server", "SASS", "Git"],
    },
    {
      company: "Callpicker",
      role: "Full Stack Developer",
      period: "Ago 2023 — Dic 2024",
      logo: "/callpicker_logo.png",
      banner: "/callpicker-banner.jpeg",
      bullets: {
        es: [
          "Desarrollo y mantenimiento de soluciones web con ASP.NET Core Web API, C#, Angular y SQL Server para funcionalidades de plataforma.",
          "Trabajo bajo Scrum (dailies, planning, retros) y documentación técnica para soporte a entregas y mantenibilidad.",
          "Soporte a onboarding e integración de un nuevo desarrollador, estandarizando flujo de trabajo y documentación.",
        ],
        en: [
          "Developed and maintained web solutions using ASP.NET Core Web API, C#, Angular, and SQL Server, delivering platform features.",
          "Worked under Scrum (dailies, planning, retros) and produced technical documentation to support delivery and maintainability.",
          "Supported onboarding and integration of a new developer by standardizing workflow and documentation.",
        ],
      },
      tech: ["C#", "ASP.NET Core Web API", "Angular", "TypeScript", "SQL Server", "Git"],
    },
  ],

  education: {
    es: "Ingeniería en Desarrollo y Gestión de Software — Universidad Tecnológica de Querétaro (2022 – 2026)",
    en: "Software Development and Management Engineering — Technological University of Querétaro (2022 – 2026)",
  },

  languages: [
    { name: "English", level: "C1 (Cambridge, Jun 17, 2020)" },
    { name: "Korean", level: "TOPIK I (Apr 30, 2024)" },
  ],

  certifications: [
    {
      title: "Backend con Node.js: Base de Datos con PostgreSQL",
      issuer: "Platzi",
      date: "31 May 2024",
      url: "https://platzi.com/p/Raftel/curso/2507-course/diploma/detalle/",
    },
    {
      title: "Curso de PostgreSQL",
      issuer: "Platzi",
      date: "31 May 2024",
      url: "https://platzi.com/p/Raftel/curso/1480-course/diploma/detalle/",
    },
    { title: "React Avanzado", issuer: "Platzi", date: "Sep 17, 2025" },
    { title: "Node.js Avanzado", issuer: "Platzi", date: "Aug 2, 2025" },
  ],

  achievements: [
    {
      title: "3er lugar — Querétaro Digital",
      year: "2024",
      banner: "/queretaro-digital-banner.jpeg",
      description: {
        es: "Tercer lugar en Querétaro Digital. Proyecto desarrollado en equipo con sensores IoT y un modelo de inteligencia artificial para la detección y prevención de problemáticas, obteniendo un premio de $75,000 MXN.",
        en: "Third place at Querétaro Digital. Team project using IoT sensors and an AI model for problem detection and prevention, awarded $75,000 MXN.",
      },
    },
    {
      title: "Beca Embajadores — Corea del Sur",
      year: "2024",
      banner: "/korea-embajadores-banner.jpeg",
      description: {
        es: "Beca de Embajadores que permitió una estancia en Corea del Sur para perfeccionar el idioma y fortalecer competencias interculturales.",
        en: "Embassadors scholarship that enabled a stay in South Korea to improve language proficiency and strengthen intercultural skills.",
      },
    },
  ],
};
