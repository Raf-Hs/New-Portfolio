import "server-only";
import { defaultLocale, isLocale, type Locale } from "./config";

export type Dictionary = {
  nav: { home: string; projects: string; about: string; contact: string };
  home: {
    title: string;
    role: string;
    tagline: string;
    desc: string;
    btnProjects: string;
    btnPrimaryLink: string;
    featured: string;
    seeAll: string;
  };
  projects: {
    title: string;
    desc: string;
    detail: string;
    links: string;
    highlights: string;
  };
  about: {
    title: string;
    headline: string;
    stackTitle: string;
    experienceTitle: string;
    educationTitle: string;
    languagesTitle: string;
    certsTitle: string;
  };
  contact: {
    title: string;
    location: string;
    email: string;
    github: string;
    linkedin: string;
    x: string;
  };
};

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  es: async () => (await import("./dictionaries/es.json")).default as Dictionary,
  en: async () => (await import("./dictionaries/en.json")).default as Dictionary,
};

export async function getDictionary(lang: string): Promise<Dictionary> {
  const normalized = String(lang ?? "").toLowerCase().split("/")[0];
  const locale: Locale = isLocale(normalized) ? normalized : defaultLocale;
  return dictionaries[locale]();
}
