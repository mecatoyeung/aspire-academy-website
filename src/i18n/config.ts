export const locales = ["zh-hk", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "zh-hk";

export const localeHtmlLang: Record<Locale, string> = {
  "zh-hk": "zh-Hant-HK",
  en: "en",
};

export const localeLabels: Record<Locale, string> = {
  "zh-hk": "繁體中文",
  en: "English",
};

export const sectionSlugs = ["courses", "stories", "partnerships", "about"] as const;

export type SectionSlug = (typeof sectionSlugs)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function isSectionSlug(value: string): value is SectionSlug {
  return sectionSlugs.includes(value as SectionSlug);
}