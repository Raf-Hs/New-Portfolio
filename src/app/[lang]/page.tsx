import Link from "next/link";
import { getDictionary } from "@/i18n/get-dictionary";
import { projects } from "@/content/projects";
import ProjectCard from "@/components/ProjectCard";
import { locales } from "@/i18n/config";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = await getDictionary(lang);

  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <h1 className="h1">{site.name}</h1>

        <p className="text-lg text-white/70">
          {site.role} — {site.tagline}
        </p>

        <p className="max-w-2xl p-muted">{t.home.desc}</p>

        <div className="flex flex-wrap gap-3 pt-2">
          <Link className="btn btn-solid" href={`/${lang}/projects`}>
            {t.home.btnProjects}
          </Link>

          <a className="btn btn-ghost" href={site.socials.github} target="_blank" rel="noreferrer">
            {t.home.btnPrimaryLink}
          </a>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="h2">{t.home.featured}</h2>

        <div className="grid gap-4 md:grid-cols-2">
          {projects.slice(0, 2).map((p) => (
            <ProjectCard key={p.slug} p={p} lang={lang} />
          ))}
        </div>

        <Link href={`/${lang}/projects`} className="text-sm font-medium underline">
          {t.home.seeAll}
        </Link>
      </section>
    </div>
  );
}
