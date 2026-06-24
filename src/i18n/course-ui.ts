import type { Locale } from "@/i18n/config";
import type { CourseLevel } from "@/lib/courses-db";

export type CourseUiCopy = {
  listTitle: string;
  listDescription: string;
  detailBack: string;
  levelLabel: string;
  suitableAgesLabel: string;
  tagsLabel: string;
  noCourseFound: string;
  levels: Record<CourseLevel, string>;
};

const courseUiCopy: Record<Locale, CourseUiCopy> = {
  en: {
    listTitle: "Discover Courses",
    listDescription: "Explore our course tracks and choose a learning path that matches your goals.",
    detailBack: "Back to Discover Courses",
    levelLabel: "Level",
    suitableAgesLabel: "Suitable Ages",
    tagsLabel: "Tags",
    noCourseFound: "Course not found.",
    levels: {
      beginner: "Beginner",
      advanced: "Advanced",
      expert: "Expert",
    },
  },
  "zh-hk": {
    listTitle: "探索課程",
    listDescription: "瀏覽不同課程路徑，為孩子挑選最合適的學習方向。",
    detailBack: "返回探索課程",
    levelLabel: "程度",
    suitableAgesLabel: "適合年齡",
    tagsLabel: "標籤",
    noCourseFound: "找不到相關課程。",
    levels: {
      beginner: "初階",
      advanced: "進階",
      expert: "專家",
    },
  },
};

export function getCourseUiCopy(locale: Locale) {
  return courseUiCopy[locale];
}
