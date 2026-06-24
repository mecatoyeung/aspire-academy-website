import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { MarketingSite } from "@/components/marketing-site";
import { isLocale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";

type LocalePageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const { lang } = await params;

  if (!isLocale(lang)) {
    return {};
  }

  const copy = getMessages(lang);

  return {
    title: copy.metadata.title,
    description: copy.metadata.description,
  };
}

export default async function LocaleHomePage({ params }: LocalePageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  return <MarketingSite locale={lang} currentPage="home" />;
}