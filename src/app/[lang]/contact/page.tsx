import { getDictionary } from "@/i18n/get-dictionary";
import { site } from "@/lib/site";

export default async function Contact({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = await getDictionary(lang);

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold tracking-tight">
        {t.contact.title}
      </h1>

      <div className="space-y-2 text-white/70">
        <a className="underline" href={site.socials.email}>
          Email
        </a>

        <div>
          <a
            className="underline"
            href={site.socials.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>

        <div>
          <a
            className="underline"
            href={site.socials.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
