import { projects } from "@/content/projects";
import ProjectCard from "@/components/ProjectCard";

export const metadata = { title: "Proyectos" };

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Proyectos</h1>
        <p className="mt-2 text-zinc-600">
          End-to-end: frontend, backend, despliegue real, evidencia de producción.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.slug} p={p} />
        ))}
      </div>
    </div>
  );
}
