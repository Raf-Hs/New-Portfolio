import type es from "./dictionaries/es.json";

export type Dictionary = typeof es;

type Locale = "es" | "en";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  es: async () => (await import("./dictionaries/es.json")).default,
  en: async () => (await import("./dictionaries/en.json")).default,
};

export async function getDictionary(locale: Locale) {
  return dictionaries[locale]();
}
