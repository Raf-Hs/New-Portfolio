import "server-only";
import { defaultLocale, isLocale, type Locale } from "./config";

type Dict = typeof import("./dictionaries/es.json") extends Promise<infer T>
  ? T
  : never;

const dictionaries: Record<Locale, () => Promise<Dict>> = {
  es: () => import("./dictionaries/es.json").then((m) => m.default as Dict),
  en: () => import("./dictionaries/en.json").then((m) => m.default as Dict),
};

export async function getDictionary(lang: string) {
  const normalized = String(lang ?? "").toLowerCase().split("/")[0];
  const locale: Locale = isLocale(normalized) ? normalized : defaultLocale;
  return dictionaries[locale]();
}
