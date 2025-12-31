import Link from "next/link";
import type { Project } from "@/content/projects";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="rounded-2xl border border-zinc-200 p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">{p.title}</h3>
          <p className="mt-1 text-sm text-zinc-600">{p.summary}</p>
        </div>
        <span className="text-xs text-zinc-500">{p.year}</span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {p.stack.map((s) => (
          <span key={s} className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700">
            {s}
          </span>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-3 text-sm">
        <Link href={`/projects/${p.slug}`} className="font-medium text-zinc-900 underline">
          Ver detalle
        </Link>
        {p.links.demo && (
          <a className="text-zinc-700 underline" href={p.links.demo} target="_blank" rel="noreferrer">
            Demo
          </a>
        )}
        {p.links.repo && (
          <a className="text-zinc-700 underline" href={p.links.repo} target="_blank" rel="noreferrer">
            Repo
          </a>
        )}
        {p.links.logs && (
          <a className="text-zinc-700 underline" href={p.links.logs} target="_blank" rel="noreferrer">
            Logs
          </a>
        )}
      </div>
    </article>
  );
}
