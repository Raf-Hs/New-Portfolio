import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200">
      <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-zinc-600">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <div className="flex gap-4">
            <a className="hover:text-zinc-900" href={site.socials.github} target="_blank" rel="noreferrer">GitHub</a>
            <a className="hover:text-zinc-900" href={site.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="hover:text-zinc-900" href={site.socials.email}>Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
