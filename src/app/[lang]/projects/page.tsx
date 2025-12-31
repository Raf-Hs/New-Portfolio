import { getDictionary } from "@/i18n/get-dictionary";
import { projects } from "@/content/projects";
import ProjectCard from "@/components/ProjectCard";

export default async function Projects({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = await getDictionary(lang);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">
          {t.projects.title}
        </h1>
        <p className="mt-2 text-white/55">
          {t.projects.desc}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.slug} p={p} lang={lang} />
        ))}
      </div>
    </div>
  );
}
