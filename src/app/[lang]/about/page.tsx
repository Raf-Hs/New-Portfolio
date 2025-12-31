import { getDictionary } from "@/i18n/get-dictionary";
import { profile } from "@/content/profile";

export default async function About({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  const isEn = String(lang).toLowerCase() === "en";

  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">{t.about.title}</h1>
        <p className="p-muted max-w-2xl">{t.about.headline}</p>
      </header>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">{t.about.stackTitle}</h2>
        <div className="card p-5">
          <div className="flex flex-wrap gap-2">
            {profile.stack.map((s) => (
              <span key={s} className="chip">{s}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">{t.about.experienceTitle}</h2>
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
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">{t.about.educationTitle}</h2>
        <div className="card p-5 text-white/70">
          {isEn ? profile.education.en : profile.education.es}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">{t.about.languagesTitle}</h2>
        <div className="card p-5">
          <ul className="space-y-2 text-white/70">
            {profile.languages.map((l) => (
              <li key={l.name}>
                <span className="font-semibold text-white">{l.name}</span>{" "}
                <span className="text-white/55">— {l.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">{t.about.certsTitle}</h2>
        <div className="card p-5">
          <ul className="list-disc list-inside text-white/70">
            {profile.certifications.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
