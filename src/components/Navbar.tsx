import Link from "next/link";
import { getDictionary } from "@/i18n/get-dictionary";
import LangSwitch from "@/components/LangSwitch";

function normalizeLang(x: string) {
  const v = String(x ?? "").toLowerCase();
  return v === "en" ? "en" : "es";
}

export default async function Navbar({ lang }: { lang: string }) {
  const current = normalizeLang(lang);
  const t = await getDictionary(current);

  const items = [
    { href: `/${current}#home`, label: t.nav.home },
    { href: `/${current}#projects`, label: t.nav.projects },
    { href: `/${current}#about`, label: t.nav.about },
    { href: `/${current}#contact`, label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-5xl px-4 py-4">
        <div className="glass rounded-full px-5 py-3 flex items-center justify-between border border-white/10">
          <Link href={`/${current}#home`} className="font-semibold tracking-tight text-white">
            Portfolio
          </Link>

          <nav className="flex items-center gap-4 text-sm">
            {items.map((i) => (
              <Link key={i.href} href={i.href} className="text-white/70 hover:text-white">
                {i.label}
              </Link>
            ))}
            <LangSwitch lang={current} />
          </nav>
        </div>
      </div>
    </header>
  );
}
