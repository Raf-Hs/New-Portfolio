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
    slug: "saas-ops-dashboard",
    title: "SaaS Ops Dashboard",
    summary:
      "Dashboard B2B con auth, roles, auditoría, búsqueda, paginación y CRUD robusto.",
    stack: ["Next.js", "TypeScript", "Prisma", "Postgres", "Tailwind"],
    year: "2025",
    links: {
      demo: "https://demo.com",
      repo: "https://github.com/tu-usuario/saas-ops-dashboard",
      logs: "https://logs.com",
      status: "https://status.com",
    },
    highlights: [
      "RBAC (admin/user) + auditoría",
      "Migraciones Prisma + seeds",
      "CI/CD con tests + deploy",
    ],
  },
  {
    slug: "realtime-collab-board",
    title: "Realtime Collab Board",
    summary:
      "Colaboración en tiempo real con presencia, reconexión y sincronización de estado.",
    stack: ["Next.js", "Node.js", "Socket.IO", "Postgres", "Redis"],
    year: "2025",
    links: {
      demo: "https://demo.com",
      repo: "https://github.com/tu-usuario/realtime-collab-board",
      logs: "https://logs.com",
    },
    highlights: ["WebSockets + manejo de reconexión", "Observabilidad básica", "API limpia + validación"],
  },
  {
    slug: "bluegreen-deploy-starter",
    title: "Blue-Green Deploy Starter",
    summary:
      "Despliegue sin downtime con Nginx + Docker + switch blue/green por commit.",
    stack: ["Node.js", "Nginx", "Docker", "GitHub Actions", "VPS"],
    year: "2025",
    links: {
      repo: "https://github.com/tu-usuario/bluegreen-deploy-starter",
      logs: "https://logs.com",
      status: "https://status.com",
    },
    highlights: ["Deploy reproducible por script", "Smoke tests antes del switch", "Registro de despliegues por commit"],
  },
];
