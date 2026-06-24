import Link from "next/link";

import { defaultLocale } from "@/i18n/config";

export default function RootPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col justify-center gap-6 px-6 py-16 text-center">
      <h1 className="font-display text-4xl text-slate-900">Aspire Academy</h1>
      <p className="text-slate-700">Choose a page to continue.</p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href={`/${defaultLocale}`}
          className="rounded-full bg-smart-blue px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-smart-blue-dark"
        >
          Home
        </Link>
        <Link
          href={`/${defaultLocale}/discover-courses`}
          className="rounded-full border border-smart-blue px-5 py-2.5 text-sm font-semibold text-smart-blue transition hover:bg-smart-blue hover:text-white"
        >
          Discover Courses
        </Link>
      </div>
    </main>
  );
}