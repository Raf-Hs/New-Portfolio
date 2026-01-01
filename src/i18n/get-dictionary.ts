import type es from "./dictionaries/es.json";

export type Locale = "es" | "en";
export type Dictionary = typeof es;

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  es: async () => (await import("./dictionaries/es.json")).default,
  en: async () => (await import("./dictionaries/en.json")).default,
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}
