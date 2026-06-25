import type { Metadata } from "next";

import { CourseListPageView } from "@/components/course-pages";
import { defaultLocale } from "@/i18n/config";
import { getCourseSummaries } from "@/lib/courses-db";

export const metadata: Metadata = {
  title: "Discover Courses | Aon Academy",
  description: "Explore Aon Academy courses and find the best learning path.",
};

export default function DiscoverCoursesPage() {
  const courses = getCourseSummaries(defaultLocale);

  return (
    <CourseListPageView
      locale={defaultLocale}
      courses={courses}
      detailHrefBuilder={(slug) => `/course-detail/${slug}`}
      languageHrefBuilder={(locale) => (locale === "en" ? "/en/discover-courses" : "/discover-courses")}
    />
  );
}
