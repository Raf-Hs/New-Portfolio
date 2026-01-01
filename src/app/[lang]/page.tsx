import Image from "next/image";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";

import { getDictionary, type Locale } from "@/i18n/get-dictionary";
import { locales } from "@/i18n/config";

import { site } from "@/lib/site";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  const isEn = lang === "en";

  return (
    <div className="space-y-16">
      {/* HERO */}
      <Hero
        lang={lang}
        title={site.role}
        subtitle={site.name}
        desc={t.home.desc}
        ctaPrimary={t.home.btnProjects}
      />

      {/* ABOUT */}
      <section id="about" className="scroll-mt-28 space-y-6">
        <h2 className="h2">{t.about.title}</h2>
        <p className="p-muted max-w-2xl">{t.about.headline}</p>

        <div className="grid gap-4 md:grid-cols-2">
          {/* EDUCACIÓN */}
          <div className="card p-5">
            <div className="text-sm font-semibold">{t.about.educationTitle}</div>
            <p className="mt-3 text-white/70">
              {isEn ? profile.education.en : profile.education.es}
            </p>
          </div>

          {/* IDIOMAS */}
          <div className="card p-5">
            <div className="text-sm font-semibold">{t.about.languagesTitle}</div>

            <ul className="mt-3 space-y-2 text-white/70">
              {profile.languages.map((l) => {
                const flag =
                  l.name === "Español"
                    ? "/mexico-flag.svg"
                    : l.name === "English"
                    ? "/usa-flag.svg"
                    : l.name === "Korean"
                    ? "/South-Korea-flag.png"
                    : null;

                return (
                  <li key={l.name} className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      {flag && (
                        <Image
                          src={flag}
                          alt={l.name}
                          width={18}
                          height={18}
                          className="object-contain"
                        />
                      )}
                      <span className="font-semibold text-white">{l.name}</span>
                    </div>

                    <span className="text-white/55">{l.level}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* EXPERIENCE */}
        <section id="experience" className="scroll-mt-28 space-y-4">
          <h2 className="h2">{t.about.experienceTitle}</h2>

          <div className="grid gap-4 md:grid-cols-2">
            {profile.experience.map((job) => (
              <article key={`${job.company}-${job.role}`} className="card p-4">
                <div className="flex items-baseline justify-between gap-2">
                  <div>
                    <div className="font-semibold text-white">{job.role}</div>
                    <div className="text-sm text-white/70">{job.company}</div>
                  </div>
                  <div className="text-xs text-white/55">{job.period}</div>
                </div>

                <ul className="mt-2 list-disc list-inside text-sm text-white/70">
                  {(isEn ? job.bullets.en : job.bullets.es).map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>

                <div className="mt-3 flex flex-wrap gap-2">
                  {job.tech.map((x) => (
                    <span key={x} className="chip text-xs">
                      {x}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CERTS */}
        <div className="grid gap-4 md:grid-cols-2">
          <div className="card p-5">
            <div className="text-sm font-semibold">{t.about.certsTitle}</div>
            <ul className="mt-3 list-disc list-inside text-white/70">
              {profile.certifications.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="scroll-mt-28 space-y-4">
        <h2 className="h2">{t.projects.title}</h2>
        <p className="p-muted">{t.projects.detail}</p>

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.slug} p={p} lang={lang} />
          ))}
        </div>
      </section>
    </div>
  );
}
