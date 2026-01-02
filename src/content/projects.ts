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
      "Plataforma de movilidad comunitaria para Arroyo Seco, Querétaro, enfocada en transporte local, turismo y conectividad rural.",
      
   description:
  "Huitzilin es un producto full-stack diseñado para resolver un problema real de movilidad en zonas rurales. Implementa flujos completos de pasajero y conductor con control de estados del viaje, comunicación en tiempo real y visualización geográfica clara. La arquitectura se resolvió como un monorepo que centraliza frontend y backend, lo que simplifica despliegues, reduce fricción en cambios transversales y permite iterar rápido sin duplicación de contratos ni lógica.",

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
    images: ["/huitzilin1.jpeg", "/huitzilin2.jpeg", "/huitzilin3.jpeg"],

    links: {
      repo: "https://github.com/Raf-Hs/colibri",
    },
    highlights: [
      "Arquitectura full-stack end-to-end con tipado estricto y separación clara de capas",
      "Flujos de conductor y pasajero con estados sincronizados en tiempo real",
      "Integración de mapas, rutas, distancia y localización geográfica",
      "Diseño orientado a impacto social, turismo local y usabilidad en contexto rural",
      "Base técnica preparada para escalar funcionalidades sin deuda estructural",
    ],
  },
 {
  slug: "plantify-smart-greenhouse",
  title: "Plantify — Invernadero Inteligente con IA",
  summary:
    "Sistema IoT + IA para monitoreo ambiental y recomendaciones de riego orientadas a eficiencia de recursos.",
  description:
  "Plantify integra sensores, backend y modelos de ML para transformar lecturas ambientales en decisiones accionables. El sistema se diseñó con frontend y backend en repositorios separados para aislar responsabilidades: la interfaz web consume APIs dedicadas mientras el backend procesa datos, persiste lecturas y ejecuta modelos de aprendizaje automático. Esta separación facilita evolución independiente del hardware, la lógica de negocio y la visualización.",

  stack: ["React", "TypeScript", "Node.js", "Python", "TensorFlow", "IoT Sensors", "Postgres"],
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

];
