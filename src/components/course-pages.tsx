import Image from "next/image";
import Link from "next/link";

import {
  localeLabels,
  locales,
  type Locale,
  type SectionSlug,
} from "@/i18n/config";
import { getCourseUiCopy } from "@/i18n/course-ui";
import { getMessages } from "@/i18n/messages";
import type { CourseDetail, CourseSummary } from "@/lib/courses-db";

type CourseLanguageLink = {
  locale: Locale;
  href: string;
};

function LanguageSwitcher({
  currentLocale,
  links,
}: {
  currentLocale: Locale;
  links: CourseLanguageLink[];
}) {
  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white p-1 shadow-sm">
      {links.map((entry) => {
        const isActive = entry.locale === currentLocale;

        return (
          <Link
            key={entry.locale}
            href={entry.href}
            aria-current={isActive ? "page" : undefined}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold transition sm:text-sm ${
              isActive ? "bg-smart-blue text-white" : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            {localeLabels[entry.locale]}
          </Link>
        );
      })}
    </div>
  );
}

function getPageHref(locale: Locale, page: "home" | SectionSlug) {
  return page === "home" ? `/${locale}` : `/${locale}/${page}`;
}

function getDiscoverCoursesHref(locale: Locale) {
  return `/${locale}/discover-courses`;
}

function CourseSiteLayout({
  locale,
  languageLinks,
  children,
}: {
  locale: Locale;
  languageLinks: CourseLanguageLink[];
  children: React.ReactNode;
}) {
  const copy = getMessages(locale);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const navItems: Array<{ key: "home" | SectionSlug; label: string }> = [
    { key: "home", label: copy.navigation.home },
    { key: "courses", label: copy.navigation.courses },
    { key: "stories", label: copy.navigation.stories },
    { key: "partnerships", label: copy.navigation.partnerships },
    { key: "about", label: copy.navigation.about },
  ];

  return (
    <div className="min-h-screen text-slate-800">
      <header className="border-b border-white/70 bg-white/70 backdrop-blur-xl">
        <nav className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4 lg:px-10">
          <Link href={getPageHref(locale, "home")} className="flex items-center gap-3">
            <Image
              src={`${basePath}/img/logo.png`}
              alt={`${copy.footer.academyName} Logo`}
              width={280}
              height={164}
            />
          </Link>

          <ul className="order-3 flex w-full flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-3 text-xs font-bold sm:order-2 sm:w-auto sm:justify-start sm:gap-8 sm:border-0 sm:pt-0 sm:text-sm">
            {navItems.map((item) => {
              const isActive = item.key === "courses";

              return (
                <li key={item.key}>
                  {item.key === "courses" ? (
                    <Link
                      href={getDiscoverCoursesHref(locale)}
                      className={`transition hover:text-smart-blue ${
                        isActive ? "text-smart-blue" : "text-slate-800"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                  <Link
                    href={getPageHref(locale, item.key)}
                    className={`transition hover:text-smart-blue ${
                      isActive ? "text-smart-blue" : "text-slate-800"
                    }`}
                  >
                    {item.label}
                  </Link>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="order-2 flex items-center gap-3 sm:order-3">
            <LanguageSwitcher currentLocale={locale} links={languageLinks} />

            <Link
              href={getDiscoverCoursesHref(locale)}
              className="rounded-full bg-smart-blue px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-smart-blue-dark"
            >
              {copy.navigation.enrollNow}
            </Link>
          </div>
        </nav>
      </header>

      <main>{children}</main>

      <footer className="bg-slate-900 text-slate-200">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-12 md:grid-cols-3 lg:px-10">
          <div>
            <h3 className="mb-3 font-display text-xl text-white">{copy.footer.academyName}</h3>
            <p className="text-slate-300">{copy.footer.tagline}</p>
          </div>
          <div>
            <h4 className="mb-3 font-bold text-white">{copy.footer.contactUs}</h4>
            <p>
              {copy.footer.emailLabel}:{" "}
              <a href="mailto:hazel.wong@aspireacademy.org" className="text-cyan-300 transition hover:text-cyan-200">
                hazel.wong@aspireacademy.org
              </a>
            </p>
            <p>
              {copy.footer.phoneLabel}:{" "}
              <a href="tel:+85261515272" className="text-cyan-300 transition hover:text-cyan-200">
                +852 (234) 567-890
              </a>
            </p>
          </div>
          <div>
            <h4 className="mb-3 font-bold text-white">{copy.footer.followUs}</h4>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={copy.footer.whatsapp}
                className="rounded-full bg-white/10 p-2.5 transition hover:bg-white/20"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M19.1 4.9A9.95 9.95 0 0 0 12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.6 1.4 5.1L2 22l5.1-1.3A10 10 0 0 0 12 22c5.5 0 10-4.5 10-10 0-2.7-1-5.2-2.9-7.1Zm-7.1 15.4c-1.6 0-3.1-.4-4.5-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 20.3Zm4.5-6c-.2-.1-1.3-.6-1.5-.7-.2-.1-.3-.1-.5.1-.1.2-.6.7-.8.8-.1.1-.3.1-.5 0-1.3-.6-2.2-1.4-3-2.6-.2-.3 0-.4.1-.6l.3-.3c.1-.1.1-.2.2-.4 0-.1 0-.3 0-.4-.1-.1-.5-1.2-.7-1.7-.2-.4-.3-.3-.5-.3h-.4c-.1 0-.4.1-.5.3-.2.2-.7.7-.7 1.7s.7 2 1 2.2c.1.1 1.5 2.4 3.8 3.3.5.2.9.4 1.2.5.5.2 1 .2 1.4.1.4-.1 1.3-.5 1.5-1 .2-.5.2-.9.1-1 0-.1-.2-.2-.4-.3Z" />
                </svg>
                <span className="sr-only">{copy.footer.whatsapp}</span>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={copy.footer.instagram}
                className="rounded-full bg-white/10 p-2.5 transition hover:bg-white/20"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 1.8A3.7 3.7 0 0 0 3.8 7.5v9a3.7 3.7 0 0 0 3.7 3.7h9a3.7 3.7 0 0 0 3.7-3.7v-9a3.7 3.7 0 0 0-3.7-3.7h-9Zm9.8 1.4a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4Z" />
                </svg>
                <span className="sr-only">{copy.footer.instagram}</span>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={copy.footer.facebook}
                className="rounded-full bg-white/10 p-2.5 transition hover:bg-white/20"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M13.7 22v-8.2h2.8l.4-3.2h-3.2V8.6c0-.9.2-1.6 1.6-1.6h1.7V4.1c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.3v2.4H8v3.2h2.5V22h3.2Z" />
                </svg>
                <span className="sr-only">{copy.footer.facebook}</span>
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={copy.footer.youtube}
                className="rounded-full bg-white/10 p-2.5 transition hover:bg-white/20"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C18 4.8 12 4.8 12 4.8s-6 0-7.7.5a2.7 2.7 0 0 0-1.9 1.9C2 8.9 2 12 2 12s0 3.1.4 4.8a2.7 2.7 0 0 0 1.9 1.9c1.7.5 7.7.5 7.7.5s6 0 7.7-.5a2.7 2.7 0 0 0 1.9-1.9c.4-1.7.4-4.8.4-4.8s0-3.1-.4-4.8ZM10.1 15.3V8.7l5.7 3.3-5.7 3.3Z" />
                </svg>
                <span className="sr-only">{copy.footer.youtube}</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function CourseListPageView({
  locale,
  courses,
  detailHrefBuilder,
  languageHrefBuilder,
}: {
  locale: Locale;
  courses: CourseSummary[];
  detailHrefBuilder: (slug: string) => string;
  languageHrefBuilder: (nextLocale: Locale) => string;
}) {
  const copy = getCourseUiCopy(locale);
  const languageLinks = locales.map((item) => ({ locale: item, href: languageHrefBuilder(item) }));

  return (
    <CourseSiteLayout locale={locale} languageLinks={languageLinks}>
      <div className="bg-gradient-to-b from-slate-50 to-cyan-50/40 px-6 py-14 sm:px-10 lg:px-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="max-w-3xl space-y-3">
            <h1 className="font-display text-4xl text-slate-900 sm:text-5xl">{copy.listTitle}</h1>
            <p className="text-lg text-slate-700">{copy.listDescription}</p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {courses.map((course) => (
            <Link
              key={course.slug}
              href={detailHrefBuilder(course.slug)}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 inline-flex rounded-full bg-smart-blue/10 px-3 py-1 text-sm font-bold text-smart-blue-dark">
                {copy.levelLabel}: {copy.levels[course.level]}
              </div>
              <h2 className="text-2xl font-bold text-slate-900 transition group-hover:text-smart-blue">
                {course.name}
              </h2>
              <p className="mt-3 text-slate-700">{course.excerpt}</p>
              <p className="mt-4 text-sm text-slate-600">
                {copy.suitableAgesLabel}: {course.suitableAges}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {course.tags.map((tag) => (
                  <span
                    key={`${course.slug}-${tag}`}
                    className="rounded-full border border-cyan-200 bg-cyan-50 px-2.5 py-1 text-xs font-semibold text-cyan-900"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
      </div>
    </CourseSiteLayout>
  );
}

export function CourseDetailPageView({
  locale,
  course,
  backHref,
  languageHrefBuilder,
}: {
  locale: Locale;
  course: CourseDetail;
  backHref: string;
  languageHrefBuilder: (nextLocale: Locale) => string;
}) {
  const copy = getCourseUiCopy(locale);
  const languageLinks = locales.map((item) => ({ locale: item, href: languageHrefBuilder(item) }));

  return (
    <CourseSiteLayout locale={locale} languageLinks={languageLinks}>
      <div className="bg-gradient-to-b from-white to-cyan-50/40 px-6 py-14 sm:px-10 lg:px-16">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <Link href={backHref} className="text-sm font-semibold text-smart-blue hover:underline">
            {copy.detailBack}
          </Link>
        </div>

        <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="mb-5 inline-flex rounded-full bg-smart-blue/10 px-3 py-1 text-sm font-bold text-smart-blue-dark">
            {copy.levelLabel}: {copy.levels[course.level]}
          </div>
          <h1 className="font-display text-4xl text-slate-900">{course.name}</h1>
          <p className="mt-4 text-lg text-slate-700">{course.excerpt}</p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wide text-slate-500">
                {copy.suitableAgesLabel}
              </h2>
              <p className="mt-2 text-slate-800">{course.suitableAges}</p>
            </div>
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wide text-slate-500">
                {copy.tagsLabel}
              </h2>
              <div className="mt-2 flex flex-wrap gap-2">
                {course.tags.map((tag) => (
                  <span
                    key={`${course.slug}-${tag}`}
                    className="rounded-full border border-cyan-200 bg-cyan-50 px-2.5 py-1 text-xs font-semibold text-cyan-900"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <section className="prose prose-slate mt-10 max-w-none">
            <p>{course.description}</p>
          </section>
        </article>
      </div>
      </div>
    </CourseSiteLayout>
  );
}
