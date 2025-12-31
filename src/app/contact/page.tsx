import { site } from "@/lib/site";

export const metadata = { title: "Contacto" };

export default function ContactPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold tracking-tight">Contacto</h1>
      <div className="space-y-2 text-zinc-700">
        <a className="underline" href={site.socials.email}>Email</a>
        <div><a className="underline" href={site.socials.github} target="_blank" rel="noreferrer">GitHub</a></div>
        <div><a className="underline" href={site.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></div>
      </div>
    </div>
  );
}
