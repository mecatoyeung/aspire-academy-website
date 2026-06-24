import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { isLocale, localeHtmlLang, locales } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : locales[0];
  const copy = getMessages(locale);

  return {
    title: copy.metadata.title,
    description: copy.metadata.description,
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  return <div lang={localeHtmlLang[lang]}>{children}</div>;
}