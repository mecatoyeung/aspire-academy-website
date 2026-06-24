import Image from "next/image";
import Link from "next/link";

import { CourseImageRevealCard } from "@/components/course-image-reveal-card";
import {
  localeLabels,
  locales,
  type Locale,
  type SectionSlug,
} from "@/i18n/config";
import { getMessages } from "@/i18n/messages";

type MarketingSiteProps = {
  locale: Locale;
  currentPage: "home" | SectionSlug;
};

const courseCardStyles = [
  "from-smart-blue to-smart-blue-dark",
  "from-smart-green to-smart-green-dark",
  "from-cyan-600 to-cyan-800",
  "from-emerald-600 to-teal-800",
] as const;

const courseImages = [
  "/img/mascot-creative-math-and-design.jpg",
  "/img/mascot-science-explorers.jpg",
  "/img/mascot-coding-and-ai-studio.jpg",
  "/img/mascot-engineer-builders.jpg",
] as const;

function getPageHref(locale: Locale, page: "home" | SectionSlug) {
  return page === "home" ? `/${locale}` : `/${locale}/${page}`;
}

function getDiscoverCoursesHref(locale: Locale) {
  return locale === "zh-hk" ? "/discover-courses" : `/${locale}/discover-courses`;
}

function getPageTitle(locale: Locale, page: "home" | SectionSlug) {
  const copy = getMessages(locale);

  if (page === "home") {
    return copy.navigation.home;
  }

  return copy.navigation[page];
}

function Hero({ locale }: { locale: Locale }) {
  const copy = getMessages(locale);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <section className="mx-auto grid w-full max-w-7xl gap-12 px-6 pb-20 pt-14 lg:grid-cols-2 lg:px-10">
      <div className="space-y-6">
        <p className="inline-flex rounded-full bg-smart-blue/10 px-4 py-2 text-sm font-bold text-smart-blue-dark">
          {copy.hero.eyebrow}
        </p>
        <h1 className="font-display text-4xl leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
          {copy.hero.titleLead}{" "}
          <span className="bg-gradient-to-r from-smart-blue to-smart-green bg-clip-text text-transparent">
            {copy.hero.titleHighlight}
          </span>
        </h1>
        <p className="max-w-xl text-lg text-slate-700">{copy.hero.description}</p>
        <div className="flex flex-wrap gap-4">
          <Link
            href={getDiscoverCoursesHref(locale)}
            className="rounded-full bg-smart-green px-6 py-3 font-bold text-white transition hover:bg-smart-green-dark"
          >
            {copy.hero.primaryCta}
          </Link>
          <Link
            href={getPageHref(locale, "about")}
            className="rounded-full border border-smart-blue px-6 py-3 font-bold text-smart-blue transition hover:bg-smart-blue hover:text-white"
          >
            {copy.hero.secondaryCta}
          </Link>
        </div>
      </div>

      <div className="rounded-3xl border border-white bg-white/85 p-4 shadow-2xl backdrop-blur-lg">
        <Image
          src={`${basePath}/img/mascot-riding-a-rocket.jpg`}
          alt={copy.hero.imageAlt}
          width={1200}
          height={900}
          className="rounded-2xl h-auto w-full"
          priority
        />
      </div>
    </section>
  );
}

function SectionIntro({ locale, section }: { locale: Locale; section: SectionSlug }) {
  const copy = getMessages(locale);
  const sectionCopy = copy.subpages[section];

  return (
    <section className="mx-auto grid w-full max-w-7xl gap-12 px-6 pb-10 pt-14 lg:grid-cols-[1.2fr_0.8fr] lg:px-10">
      <div className="space-y-6">
        <p className="inline-flex rounded-full bg-smart-blue/10 px-4 py-2 text-sm font-bold text-smart-blue-dark">
          {sectionCopy.eyebrow}
        </p>
        <h1 className="font-display text-4xl leading-tight text-slate-900 sm:text-5xl">
          {sectionCopy.title}
        </h1>
        <p className="max-w-2xl text-lg text-slate-700">{sectionCopy.description}</p>
        <div className="flex flex-wrap gap-4">
          <Link
            href={getPageHref(locale, "home")}
            className="rounded-full border border-smart-blue px-6 py-3 font-bold text-smart-blue transition hover:bg-smart-blue hover:text-white"
          >
            {copy.pageCta.backHome}
          </Link>
          <Link
            href={getDiscoverCoursesHref(locale)}
            className="rounded-full bg-smart-green px-6 py-3 font-bold text-white transition hover:bg-smart-green-dark"
          >
            {copy.pageCta.exploreCourses}
          </Link>
        </div>
      </div>

      <div className="rounded-3xl bg-gradient-to-br from-smart-blue via-smart-blue-dark to-smart-green p-8 text-white shadow-2xl">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-100">
          {copy.footer.academyName}
        </p>
        <h2 className="mt-4 font-display text-3xl leading-tight">{getPageTitle(locale, section)}</h2>
        <p className="mt-4 text-blue-50">{copy.footer.tagline}</p>
      </div>
    </section>
  );
}

function CoursesSection({ locale }: { locale: Locale }) {
  const copy = getMessages(locale);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <section id="courses" className="border-y border-white bg-white/80 py-20">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <p className="text-sm font-bold uppercase tracking-wider text-smart-green-dark">
          {copy.courses.label}
        </p>
        <h2 className="mt-1 font-display text-3xl text-slate-900 sm:text-4xl">
          {copy.courses.title}
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-6 xl:grid-cols-4">
          {courseImages.map((imagePath, index) => (
            <CourseImageRevealCard
              key={imagePath}
              src={`${basePath}${imagePath}`}
              alt={copy.courses.cards[index].alt}
              title={copy.courses.cards[index].title}
              description={copy.courses.cards[index].description}
              gradientClassName={courseCardStyles[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StoriesSection({ locale }: { locale: Locale }) {
  const copy = getMessages(locale);

  return (
    <section id="stories" className="py-20">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <p className="mb-2 text-sm font-bold uppercase tracking-wider text-smart-blue-dark">
          {copy.stories.label}
        </p>
        <h2 className="mb-8 font-display text-3xl text-slate-900 sm:text-4xl">
          {copy.stories.title}
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {copy.stories.items.map((story) => (
            <blockquote key={story.author} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-lg">
              <p className="font-semibold text-slate-800">{story.quote}</p>
              <footer className="mt-4 text-sm text-slate-500">{story.author}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnershipsSection({ locale }: { locale: Locale }) {
  const copy = getMessages(locale);

  return (
    <section id="partnerships" className="bg-smart-blue-dark py-20 text-white">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-8 px-6 lg:grid-cols-2 lg:px-10">
        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-cyan-200">
            {copy.partnerships.label}
          </p>
          <h2 className="mb-4 mt-1 font-display text-3xl sm:text-4xl">
            {copy.partnerships.title}
          </h2>
          <p className="text-slate-200">{copy.partnerships.description}</p>
        </div>
        <div className="grid grid-cols-2 gap-4 text-center font-semibold">
          {copy.partnerships.items.map((item) => (
            <div key={item} className="rounded-xl border border-white/10 bg-white/10 p-5">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection({ locale }: { locale: Locale }) {
  const copy = getMessages(locale);

  return (
    <section id="about" className="py-20">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="rounded-3xl bg-gradient-to-r from-smart-blue to-smart-green p-8 text-white shadow-[0_12px_32px_rgba(15,94,156,0.35)] sm:p-12">
          <p className="text-sm font-bold uppercase tracking-wider text-blue-100">
            {copy.about.label}
          </p>
          <h2 className="mb-4 mt-1 font-display text-3xl sm:text-4xl">{copy.about.title}</h2>
          <p className="max-w-3xl text-blue-50">{copy.about.description}</p>
        </div>
      </div>
    </section>
  );
}

function RenderPageSections({ locale, currentPage }: MarketingSiteProps) {
  if (currentPage === "home") {
    return (
      <>
        <Hero locale={locale} />
        <CoursesSection locale={locale} />
        <StoriesSection locale={locale} />
        <PartnershipsSection locale={locale} />
        <AboutSection locale={locale} />
      </>
    );
  }

  return (
    <>
      <SectionIntro locale={locale} section={currentPage} />
      {currentPage === "courses" && <CoursesSection locale={locale} />}
      {currentPage === "stories" && <StoriesSection locale={locale} />}
      {currentPage === "partnerships" && <PartnershipsSection locale={locale} />}
      {currentPage === "about" && <AboutSection locale={locale} />}
    </>
  );
}

export function MarketingSite({ locale, currentPage }: MarketingSiteProps) {
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
              const isActive = currentPage === item.key;

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
            <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-white p-1 shadow-sm">
              <span className="sr-only">{copy.languageSwitcherLabel}</span>
              {locales.map((localeOption) => {
                const isCurrent = localeOption === locale;

                return (
                  <Link
                    key={localeOption}
                    href={getPageHref(localeOption, currentPage)}
                    aria-current={isCurrent ? "page" : undefined}
                    className={`rounded-full px-3 py-1.5 text-xs font-semibold transition sm:text-sm ${
                      isCurrent
                        ? "bg-smart-blue text-white"
                        : "text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    {localeLabels[localeOption]}
                  </Link>
                );
              })}
            </div>

            <Link
              href={getDiscoverCoursesHref(locale)}
              className="rounded-full bg-smart-blue px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-smart-blue-dark"
            >
              {copy.navigation.enrollNow}
            </Link>
          </div>
        </nav>
      </header>

      <main>
        <RenderPageSections locale={locale} currentPage={currentPage} />
      </main>

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