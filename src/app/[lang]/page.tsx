// src/app/[lang]/page.tsx

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
                  <li
                    key={l.name}
                    className="flex items-center justify-between gap-3"
                  >
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
              <article
                key={`${job.company}-${job.role}`}
                className="card p-4 overflow-hidden"
              >
                {/* Banner */}
                {job.banner && (
                  <div className="relative -mx-4 -mt-4 mb-4 h-20 md:h-24 overflow-hidden">
                    <Image
                      src={job.banner}
                      alt={`${job.company} banner`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 520px"
                      priority={false}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </div>
                )}

                {/* Header */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    {job.logo && (
                      <Image
                        src={job.logo}
                        alt={job.company}
                        width={44}
                        height={44}
                        className="rounded-xl border border-white/10 bg-black/30 object-cover"
                      />
                    )}

                    <div>
                      <div className="font-semibold text-white">{job.role}</div>
                      <div className="text-sm text-white/70">{job.company}</div>
                    </div>
                  </div>

                  <div className="text-xs text-white/55 whitespace-nowrap">
                    {job.period}
                  </div>
                </div>

                <ul className="mt-3 list-disc list-inside text-sm text-white/70 space-y-1">
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
        <section id="certs" className="scroll-mt-28 space-y-4">
          <div className="flex items-center justify-between gap-3">
            <h2 className="h2">{t.about.certsTitle}</h2>

            <a
              className="btn btn-ghost"
              href="https://platzi.com/p/Raftel/"
              target="_blank"
              rel="noreferrer"
            >
              Ver todos
            </a>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {profile.certifications.map((c) => (
              <article key={c.title} className="card p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    {c.url ? (
                      <a
                        className="font-semibold text-white underline decoration-white/20 hover:decoration-[rgba(57,255,182,.6)]"
                        href={c.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {c.title}
                      </a>
                    ) : (
                      <div className="font-semibold text-white">{c.title}</div>
                    )}

                    <div className="mt-1 text-xs text-white/55">
                      {c.issuer}
                      {c.date ? ` · ${c.date}` : ""}
                    </div>
                  </div>

                  {c.url && (
                    <a
                      className="btn btn-solid !px-3 !py-1 !text-xs"
                      href={c.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ver
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section id="achievements" className="scroll-mt-28 space-y-4">
          <h2 className="h2">Logros</h2>

          <div className="grid gap-4 md:grid-cols-2">
            {profile.achievements.map((a) => (
              <article key={a.title} className="card p-4 overflow-hidden">
                {/* Banner */}
                {a.banner && (
                  <div className="relative -mx-4 -mt-4 mb-4 h-20 md:h-24 overflow-hidden">
                    <Image
                      src={a.banner}
                      alt={`${a.title} banner`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 520px"
                      priority={false}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </div>
                )}

                <div className="flex items-start justify-between gap-3">
                  <div className="font-semibold text-white">{a.title}</div>
                  {a.year && (
                    <div className="text-xs text-white/55 whitespace-nowrap">
                      {a.year}
                    </div>
                  )}
                </div>

                <p className="mt-3 text-sm text-white/70 leading-relaxed">
                  {isEn ? a.description.en : a.description.es}
                </p>
              </article>
            ))}
          </div>
        </section>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="scroll-mt-28 space-y-4">
        <h2 className="h2">{t.projects.title}</h2>
        <p className="p-muted">{t.projects.detail}</p>

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.slug} p={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
