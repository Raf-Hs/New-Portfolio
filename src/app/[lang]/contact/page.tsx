import { getDictionary } from "@/i18n/get-dictionary";
import { site } from "@/lib/site";
import { profile } from "@/content/profile";

export default async function Contact({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = await getDictionary(lang);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">{t.contact.title}</h1>

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
    </div>
  );
}
