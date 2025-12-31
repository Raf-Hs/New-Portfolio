"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function normalizeLang(x: string) {
  const v = (x ?? "").toLowerCase();
  return v === "en" ? "en" : "es";
}

export default function LangSwitch({ lang }: { lang: string }) {
  const current = normalizeLang(lang);
  const pathname = usePathname() || "/";

  // quita el prefijo /es o /en
  const rest = pathname.replace(/^\/(es|en)(?=\/|$)/, "");
  const other = current === "es" ? "en" : "es";

  return (
    <div className="flex items-center gap-2 text-xs">
      <Link
        href={`/es${rest}`}
        className={current === "es" ? "underline" : "opacity-70 hover:opacity-100"}
      >
        ES
      </Link>
      <span className="opacity-40">/</span>
      <Link
        href={`/en${rest}`}
        className={current === "en" ? "underline" : "opacity-70 hover:opacity-100"}
      >
        EN
      </Link>
    </div>
  );
}
