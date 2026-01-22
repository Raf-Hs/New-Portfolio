export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  stack: string[];
  year: string;
  images: [string, string, string];
  imageFit?: "cover" | "contain";
  imagePosition?: "top" | "center";

  links: {
    demo?: string;
    repo?: string;        // monorepo o repo único
    repoFront?: string;   // front separado
    repoBack?: string;    // back separado
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
      "Plataforma web para movilidad comunitaria con flujos de viaje, geolocalización y comunicación en tiempo real, diseñada para escalar en entornos de producción.",
    description:
      "Huitzilin es un producto full-stack orientado a resolver movilidad en zonas rurales. Implementa flujos de pasajero y conductor con control de estados del viaje, comunicación en tiempo real y visualización geográfica. Se diseñó con contratos claros entre frontend y backend, validaciones, manejo de errores y una base lista para evolucionar hacia una arquitectura de servicios. En el portafolio se presenta priorizando arquitectura, APIs, seguridad y mantenibilidad.",

    // Reordenar para que el stack "enterprise" se lea mejor, aunque siga siendo Node:
    stack: [
      "TypeScript",
      "Next.js",
      "REST APIs",
      "PostgreSQL",
      "Prisma",
      "Node.js",
      "Socket.IO",
      "Google Maps API",
      "Tailwind",
      "CI/CD",
      "Docker",
    ],
    year: "2025",
    images: ["/huitzilin1.jpeg", "/huitzilin2.jpeg", "/huitzilin3.jpeg"],

    links: {
      repo: "https://github.com/Raf-Hs/colibri",
    },
    highlights: [
      "Arquitectura full-stack end-to-end con separación de capas y contratos claros",
      "Estados del viaje sincronizados en tiempo real (conductor/pasajero)",
      "Geolocalización, rutas y distancia con mapas integrados",
      "Manejo de validaciones, errores y base preparada para escalar",
      "Enfoque en impacto social y operación en contexto rural",
    ],
  },

  {
    slug: "plantify-smart-greenhouse",
    title: "Plantify — Invernadero Inteligente con IA",
    summary:
      "Sistema IoT + IA con dashboard web y APIs para monitoreo ambiental, histórico y recomendaciones operativas.",
    description:
      "Plantify integra sensores, backend y modelos de ML para convertir lecturas ambientales en decisiones accionables. La solución separa responsabilidades: un frontend web consume APIs dedicadas y el backend procesa datos, persiste lecturas y ejecuta modelos. Se prioriza trazabilidad de datos, consistencia y evolución independiente de visualización, lógica y hardware.",

    // Igual: reordenar y “enterprise-izar” el stack sin mentir
    stack: [
      "TypeScript",
      "React",
      "REST APIs",
      "PostgreSQL",
      "Node.js",
      "Python",
      "TensorFlow",
      "IoT Sensors",
      "CI/CD",
      "Docker",
    ],
    year: "2024",
    imageFit: "contain",
    imagePosition: "center",
    images: ["/plantify1.jpeg", "/plantify2.png", "/plantify3.png"],
    links: {
      repoFront: "https://github.com/Raf-Hs/PlantifyF",
      repoBack: "https://github.com/Raf-Hs/PlantifyB",
    },
    highlights: [
      "Monitoreo de humedad, temperatura y luz con registro histórico",
      "Modelo ML para predicción y recomendaciones de riego",
      "Dashboard web para análisis y control operativo",
      "Integración IoT + backend + frontend con flujo end-to-end",
    ],
  },

  // Recomendado si tu objetivo es .NET:
  // agrega un proyecto “enterprise” con C#/.NET aunque sea interno/demo.
  // {
  //   slug: "financial-projection-dotnet-angular",
  //   title: "Corrida Financiera — .NET + Angular",
  //   summary: "Sistema web con APIs en ASP.NET Core, lógica de negocio en C#, y módulos Angular conectados a SQL Server.",
  //   description: "Implementación de APIs REST, validaciones, capa de servicios, y optimización de consultas SQL Server (vistas/SP). Enfocado en mantenibilidad, seguridad y performance.",
  //   stack: ["C#", "ASP.NET Core Web API", "Angular", "TypeScript", "SQL Server", "Entity Framework Core", "LINQ", "Docker", "CI/CD"],
  //   year: "2025",
  //   images: ["/dotnet1.png", "/dotnet2.png", "/dotnet3.png"],
  //   links: { status: "Private (NDA) / Demo available on request" },
  //   highlights: ["APIs REST con ASP.NET Core", "EF Core + LINQ", "SQL Server: SP/Views/queries complejas", "Angular modules + typed services", "Pipeline CI/CD"],
  // },
];
