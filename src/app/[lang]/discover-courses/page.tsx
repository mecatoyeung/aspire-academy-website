import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CourseListPageView } from "@/components/course-pages";
import { isLocale } from "@/i18n/config";
import { getCourseUiCopy } from "@/i18n/course-ui";
import { getCourseSummaries } from "@/lib/courses-db";

type LocaleDiscoverCoursesPageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({
  params,
}: LocaleDiscoverCoursesPageProps): Promise<Metadata> {
  const { lang } = await params;

  if (!isLocale(lang)) {
    return {};
  }

  const copy = getCourseUiCopy(lang);

  return {
    title: `${copy.listTitle} | Aspire Academy`,
    description: copy.listDescription,
  };
}

export default async function LocaleDiscoverCoursesPage({
  params,
}: LocaleDiscoverCoursesPageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const courses = getCourseSummaries(lang);

  return (
    <CourseListPageView
      locale={lang}
      courses={courses}
      detailHrefBuilder={(slug) => `/${lang}/course-detail/${slug}`}
      languageHrefBuilder={(locale) => `/${locale}/discover-courses`}
    />
  );
}
