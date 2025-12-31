import { notFound } from "next/navigation";
import { projects } from "@/content/projects";
import { getDictionary } from "@/i18n/get-dictionary";

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const t = await getDictionary(lang);

  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">
          {project.title}
        </h1>
        <p className="text-white/60">
          {project.summary}
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.stack.map((s) => (
            <span key={s} className="chip">
              {s}
            </span>
          ))}
        </div>
      </header>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">
          Highlights
        </h2>
        <ul className="list-disc list-inside text-white/70">
          {project.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">
          Links
        </h2>
        <div className="flex flex-wrap gap-3 text-sm">
          {project.links.demo && (
            <a className="underline" href={project.links.demo} target="_blank" rel="noreferrer">
              Demo
            </a>
          )}
          {project.links.repo && (
            <a className="underline" href={project.links.repo} target="_blank" rel="noreferrer">
              Repo
            </a>
          )}
          {project.links.logs && (
            <a className="underline" href={project.links.logs} target="_blank" rel="noreferrer">
              Logs
            </a>
          )}
          {project.links.status && (
            <a className="underline" href={project.links.status} target="_blank" rel="noreferrer">
              Status
            </a>
          )}
        </div>
      </section>
    </div>
  );
}
