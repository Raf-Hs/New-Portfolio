import { notFound } from "next/navigation";
import { projects } from "@/content/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) return notFound();

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">{p.title}</h1>
        <p className="text-zinc-600">{p.summary}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {p.stack.map((s) => (
            <span key={s} className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700">
              {s}
            </span>
          ))}
        </div>
      </header>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">Highlights</h2>
        <ul className="list-inside list-disc text-zinc-700">
          {p.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">Links</h2>
        <div className="flex flex-wrap gap-3 text-sm">
          {p.links.demo && <a className="underline" href={p.links.demo} target="_blank" rel="noreferrer">Demo</a>}
          {p.links.repo && <a className="underline" href={p.links.repo} target="_blank" rel="noreferrer">Repo</a>}
          {p.links.logs && <a className="underline" href={p.links.logs} target="_blank" rel="noreferrer">Logs</a>}
          {p.links.status && <a className="underline" href={p.links.status} target="_blank" rel="noreferrer">Status</a>}
        </div>
      </section>
    </div>
  );
}
