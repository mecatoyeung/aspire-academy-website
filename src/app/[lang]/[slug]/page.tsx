import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { MarketingSite } from "@/components/marketing-site";
import { isLocale, isSectionSlug, locales, sectionSlugs } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";

type LocaleSectionPageProps = {
  params: Promise<{ lang: string; slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((lang) => sectionSlugs.map((slug) => ({ lang, slug })));
}

export async function generateMetadata({
  params,
}: LocaleSectionPageProps): Promise<Metadata> {
  const { lang, slug } = await params;

  if (!isLocale(lang) || !isSectionSlug(slug)) {
    return {};
  }

  const copy = getMessages(lang);
  const sectionCopy = copy.subpages[slug];

  return {
    title: `${sectionCopy.title} | ${copy.footer.academyName}`,
    description: sectionCopy.description,
  };
}

export default async function LocaleSectionPage({ params }: LocaleSectionPageProps) {
  const { lang, slug } = await params;

  if (!isLocale(lang) || !isSectionSlug(slug)) {
    notFound();
  }

  return <MarketingSite locale={lang} currentPage={slug} />;
}