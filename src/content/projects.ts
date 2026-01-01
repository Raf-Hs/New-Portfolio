export type Project = {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
  year: string;
  links: {
    demo?: string;
    repo?: string;
    logs?: string;
    status?: string;
  };
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "huitzilin-movilidad-rural",
    title: "Huitzilin — Plataforma de Movilidad Rural",
    summary:
      "Aplicación de movilidad comunitaria para el municipio de Arroyo Seco, Querétaro, enfocada en transporte local, turismo y conectividad en zonas rurales.",
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Prisma",
      "Postgres",
      "Socket.IO",
      "Tailwind",
      "Google Maps API",
    ],
    year: "2025",
    links: {
      demo: "https://huitzilin.vercel.app",
      repo: "https://github.com/Raf-Hs/huitzilin",
      status: "https://status.huitzilin.app",
    },
    highlights: [
      "Arquitectura full-stack end-to-end (frontend, backend y base de datos)",
      "Flujos de conductor y pasajero con estados en tiempo real",
      "Integración de mapas, rutas y localización geográfica",
      "Modelo orientado a impacto social y turismo local",
      "Despliegue en Vercel + Postgres administrado",
    ],
  },
  {
    slug: "plantify-smart-greenhouse",
    title: "Plantify — Invernadero Inteligente con IA",
    summary:
      "Sistema de invernadero inteligente que utiliza sensores e inteligencia artificial para optimizar el crecimiento de plantas y la toma de decisiones agrícolas.",
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "Python",
      "TensorFlow",
      "IoT Sensors",
      "Postgres",
    ],
    year: "2024",
    links: {
      repo: "https://github.com/Raf-Hs/plantify",
    },
    highlights: [
      "Monitoreo de variables ambientales (humedad, temperatura, luz)",
      "Modelo de IA para predicción y recomendaciones de riego",
      "Dashboard web para visualización de datos en tiempo real",
      "Integración software–hardware (IoT + backend)",
      "Enfoque en agricultura inteligente y eficiencia de recursos",
    ],
  },
];
