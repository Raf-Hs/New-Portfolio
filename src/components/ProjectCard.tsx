import Link from "next/link";
import { getDictionary, type Locale } from "@/i18n/get-dictionary";
import type { Project } from "@/content/projects";

export default async function ProjectCard({
  p,
  lang,
}: {
  p: Project;
  lang: Locale;
}) {
  const t = await getDictionary(lang);

  return (
    <article className="card p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white">{p.title}</h3>
          <p className="mt-1 text-sm text-white/70">{p.summary}</p>
        </div>

        <Link className="btn btn-ghost" href={`/${lang}/projects/${p.slug}`}>
          {t.projects.detail}
        </Link>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {p.stack.map((x) => (
          <span key={x} className="chip text-xs">
            {x}
          </span>
        ))}
      </div>

      {p.highlights?.length ? (
        <ul className="mt-4 list-disc list-inside text-sm text-white/70">
          {p.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
