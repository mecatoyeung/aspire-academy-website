import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CourseDetailPageView } from "@/components/course-pages";
import { defaultLocale } from "@/i18n/config";
import { getCourseDetailBySlug, getAllCourseSlugs } from "@/lib/courses-db";

type CourseDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllCourseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: CourseDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseDetailBySlug(defaultLocale, slug);

  if (!course) {
    return {};
  }

  return {
    title: `${course.name} | Aon Academy`,
    description: course.excerpt,
  };
}

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const { slug } = await params;
  const course = getCourseDetailBySlug(defaultLocale, slug);

  if (!course) {
    notFound();
  }

  return (
    <CourseDetailPageView
      locale={defaultLocale}
      course={course}
      backHref="/discover-courses"
      languageHrefBuilder={(locale) =>
        locale === "en" ? `/en/course-detail/${slug}` : `/course-detail/${slug}`
      }
    />
  );
}
