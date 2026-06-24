import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CourseDetailPageView } from "@/components/course-pages";
import { isLocale, locales } from "@/i18n/config";
import { getCourseDetailBySlug, getAllCourseSlugs } from "@/lib/courses-db";

type LocaleCourseDetailPageProps = {
  params: Promise<{ lang: string; slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  const slugs = getAllCourseSlugs();
  return locales.flatMap((lang) => slugs.map((slug) => ({ lang, slug })));
}

export async function generateMetadata({
  params,
}: LocaleCourseDetailPageProps): Promise<Metadata> {
  const { lang, slug } = await params;

  if (!isLocale(lang)) {
    return {};
  }

  const course = getCourseDetailBySlug(lang, slug);

  if (!course) {
    return {};
  }

  return {
    title: `${course.name} | Aspire Academy`,
    description: course.excerpt,
  };
}

export default async function LocaleCourseDetailPage({
  params,
}: LocaleCourseDetailPageProps) {
  const { lang, slug } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const course = getCourseDetailBySlug(lang, slug);

  if (!course) {
    notFound();
  }

  return (
    <CourseDetailPageView
      locale={lang}
      course={course}
      backHref={`/${lang}/discover-courses`}
      languageHrefBuilder={(locale) => `/${locale}/course-detail/${slug}`}
    />
  );
}
