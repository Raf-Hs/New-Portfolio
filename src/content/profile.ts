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
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Prisma",
    "PostgreSQL",
    "Docker",
    "CI/CD",
    "Testing (Jest/Supertest/RTL)",
  ],

  experience: [
    {
      role: "Programador Analista Jr.",
      company: "Ciudad Maderas",
      period: "Ene 2025 — Ago 2025",
      logo: "/maderas.jpg",
      banner: "/maderas-banner.png",
      bullets: {
        es: [
          "Desarrollo web con HTML, CSS/SASS, JavaScript, Angular, CodeIgniter (PHP) y Microsoft SQL Server.",
          "Levantamiento de requerimientos, documentación funcional y pruebas de calidad (QA).",
          "Colaboración en equipo; coordinación con contraloría para prioridades y plazos del proyecto “Corrida Financiera Casas”.",
        ],
        en: [
          "Web development with HTML, CSS/SASS, JavaScript, Angular, CodeIgniter (PHP) and Microsoft SQL Server.",
          "Requirements gathering, functional documentation and QA testing.",
          "Team collaboration and coordination with controlling for priorities and deadlines.",
        ],
      },
      tech: ["Angular", "CodeIgniter", "PHP", "SQL Server", "SASS", "Git"],
    },
    {
      company: "Callpicker",
      role: "Full Stack Developer",
      period: "Sep 2023 — Ago 2024",
      logo: "/callpicker_logo.png",
      banner: "/callpicker-banner.jpeg",
      bullets: {
        es: [
          "Desarrollo de soluciones web con Ruby on Rails, PHP, Vue.js y PostgreSQL para funcionalidades de plataforma.",
          "Trabajo con Scrum (dailies, planning, retros) y documentación para soporte a entregas.",
          "Soporte a onboarding e integración de un nuevo desarrollador.",
        ],
        en: [
          "Built web solutions with Ruby on Rails, PHP, Vue.js, and PostgreSQL, delivering platform features.",
          "Worked under Scrum (dailies, planning, retros) and documented processes to support delivery.",
          "Supported onboarding and integration of a new developer.",
        ],
      },
      tech: ["Ruby on Rails", "Vue.js", "PostgreSQL", "PHP", "Git"],
    },
  ],

  education: {
    es: "Ingeniería en Desarrollo y Gestión de Software — Universidad Tecnológica de Querétaro (2020 – 2026)",
    en: "Software Development and Management Engineering — Universidad Tecnológica de Querétaro (2020 – 2026)",
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
