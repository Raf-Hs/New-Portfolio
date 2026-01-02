// src/components/Navbar.tsx
import Link from "next/link";
import { getDictionary } from "@/i18n/get-dictionary";
import LangSwitch from "@/components/LangSwitch";
import { site } from "@/lib/site";
import Image from "next/image";

function normalizeLang(x: string) {
  const v = String(x ?? "").toLowerCase();
  return v === "en" ? "en" : "es";
}

export default async function Navbar({ lang }: { lang: string }) {
  const current = normalizeLang(lang);
  const t = await getDictionary(current);

  const items = [
    { id: "home", label: t.nav.home },
    { id: "about", label: t.nav.about },
    { id: "experience", label: current === "en" ? "Experience" : "Experiencia" },
    { id: "projects", label: t.nav.projects },
    { id: "achievements", label: t.nav.achievements},
  ];

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-5xl px-4 py-4">
        <div className="glass rounded-full border border-white/10 px-5 py-3 flex items-center justify-between">
          {/* left: identity */}
          <Link href={`/${current}#home`} className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full border border-white/10 bg-black/30 overflow-hidden">
            <Image
              src="/avatar.jpg"
              alt="Avatar"
              width={32}
              height={32}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          <div className="leading-tight hidden sm:block">
            <div className="text-sm font-semibold text-white">{site.name}</div>
            <div className="text-xs text-white/55">{site.role}</div>
          </div>
        </Link>

          {/* center: nav */}
          <nav className="hidden md:flex items-center gap-5 text-xs text-white/70">
            {items.map((i) => (
              <Link
                key={i.id}
                href={`/${current}#${i.id}`}
                className="hover:text-white transition-colors"
              >
                {i.label}
              </Link>
            ))}
          </nav>

          {/* right: language */}
          <div className="flex items-center gap-3">
            <LangSwitch lang={current} />
          </div>
        </div>
      </div>
    </header>
  );
}
