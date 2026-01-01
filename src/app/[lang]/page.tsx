import Link from "next/link";
import { getDictionary } from "@/i18n/get-dictionary";
import { projects } from "@/content/projects";
import ProjectCard from "@/components/ProjectCard";
import { locales } from "@/i18n/config";
import { site } from "@/lib/site";
import { profile } from "@/content/profile";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  const isEn = String(lang).toLowerCase() === "en";

  return (
    <div className="space-y-16">
      {/* HERO */}
      <section id="home" className="scroll-mt-28 space-y-3">
        <h1 className="h1">{site.name}</h1>

        <p className="text-lg text-white/70">
          {site.role} — {site.tagline}
        </p>

        <p className="max-w-2xl p-muted">{t.home.desc}</p>

        <div className="flex flex-wrap gap-3 pt-2">
          <Link className="btn btn-solid" href={`/${lang}#projects`}>
            {t.home.btnProjects}
          </Link>

          <a className="btn btn-ghost" href={site.socials.github} target="_blank" rel="noreferrer">
            {t.home.btnPrimaryLink}
          </a>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="scroll-mt-28 space-y-4">
        <h2 className="h2">{t.projects.title}</h2>
        <p className="p-muted">{t.projects.desc}</p>

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.slug} p={p} lang={lang} />
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-28 space-y-6">
        <h2 className="h2">{t.about.title}</h2>
        <p className="p-muted max-w-2xl">{t.about.headline}</p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="card p-5">
            <div className="text-sm font-semibold">{t.about.stackTitle}</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {profile.stack.map((s) => (
                <span key={s} className="chip">{s}</span>
              ))}
            </div>
          </div>

          <div className="card p-5">
            <div className="text-sm font-semibold">{t.about.educationTitle}</div>
            <p className="mt-3 text-white/70">
              {isEn ? profile.education.en : profile.education.es}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="text-sm font-semibold">{t.about.experienceTitle}</div>
          <div className="grid gap-4">
            {profile.experience.map((job) => (
              <article key={`${job.company}-${job.role}`} className="card p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <div className="text-lg font-semibold">{job.role}</div>
                    <div className="text-white/70">{job.company}</div>
                  </div>
                  <div className="text-xs text-white/55">{job.period}</div>
                </div>

                <ul className="mt-3 list-disc list-inside text-white/70">
                  {(isEn ? job.bullets.en : job.bullets.es).map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {job.tech.map((x) => (
                    <span key={x} className="chip">{x}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="card p-5">
            <div className="text-sm font-semibold">{t.about.languagesTitle}</div>
            <ul className="mt-3 space-y-2 text-white/70">
              {profile.languages.map((l) => (
                <li key={l.name}>
                  <span className="font-semibold text-white">{l.name}</span>{" "}
                  <span className="text-white/55">— {l.level}</span>
                </li>
              ))}
            </ul>
          </div>

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

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-28 space-y-4">
        <h2 className="h2">{t.contact.title}</h2>

        <div className="card p-5 space-y-3 text-white/75">
          <div>
            <span className="text-white/55">{t.contact.location}: </span>
            {profile.location}
          </div>

          <div>
            <span className="text-white/55">{t.contact.email}: </span>
            <a className="underline" href={site.socials.email}>
              {site.socials.email.replace("mailto:", "")}
            </a>
          </div>

          <div className="flex flex-wrap gap-3 text-sm">
            <a className="btn btn-ghost" href={site.socials.github} target="_blank" rel="noreferrer">
              {t.contact.github}
            </a>
            <a className="btn btn-ghost" href={site.socials.linkedin} target="_blank" rel="noreferrer">
              {t.contact.linkedin}
            </a>
            <a className="btn btn-ghost" href={site.socials.x} target="_blank" rel="noreferrer">
              {t.contact.x}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
