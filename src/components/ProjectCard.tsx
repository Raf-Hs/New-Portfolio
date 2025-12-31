import Link from "next/link";
import type { Project } from "@/content/projects";
import { getDictionary } from "@/i18n/get-dictionary";

export default async function ProjectCard({
  p,
  lang,
}: {
  p: Project;
  lang: string;
}) {
  const t = await getDictionary(lang);

  return (
    <article className="card p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">{p.title}</h3>
          <p className="mt-1 text-sm text-white/55">{p.summary}</p>
        </div>
        <span className="text-xs text-white/40">{p.year}</span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {p.stack.map((s) => (
          <span key={s} className="chip">{s}</span>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-3 text-sm">
        <Link href={`/${lang}/projects/${p.slug}`} className="font-medium underline">
          {t.projects.detail}
        </Link>

        {p.links.demo && (
          <a className="underline text-white/70" href={p.links.demo} target="_blank" rel="noreferrer">
            Demo
          </a>
        )}
        {p.links.repo && (
          <a className="underline text-white/70" href={p.links.repo} target="_blank" rel="noreferrer">
            Repo
          </a>
        )}
        {p.links.logs && (
          <a className="underline text-white/70" href={p.links.logs} target="_blank" rel="noreferrer">
            Logs
          </a>
        )}
      </div>
    </article>
  );
}
