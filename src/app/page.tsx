import Link from "next/link";
import { site } from "@/lib/site";
import { projects } from "@/content/projects";
import ProjectCard from "@/components/ProjectCard";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <h1 className="text-4xl font-semibold tracking-tight">{site.name}</h1>
        <p className="text-lg text-zinc-700">{site.role} — {site.tagline}</p>
        <p className="max-w-2xl text-zinc-600">{site.description}</p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Link className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white" href="/projects">
            Ver proyectos
          </Link>
          <a className="rounded-xl border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-900" href={site.socials.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Proyectos destacados</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {projects.slice(0, 2).map((p) => (
            <ProjectCard key={p.slug} p={p} />
          ))}
        </div>
        <Link href="/projects" className="text-sm font-medium underline">
          Ver todos
        </Link>
      </section>
    </div>
  );
}
