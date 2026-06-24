import "server-only";

import fs from "node:fs";
import path from "node:path";

import Database from "better-sqlite3";

import type { Locale } from "@/i18n/config";

export type CourseLevel = "beginner" | "advanced" | "expert";

export type CourseSummary = {
  slug: string;
  name: string;
  excerpt: string;
  level: CourseLevel;
  suitableAges: string;
  tags: string[];
};

export type CourseDetail = CourseSummary & {
  description: string;
};

type CourseRow = {
  slug: string;
  level: CourseLevel;
  name: string;
  excerpt: string;
  suitable_ages: string;
  tags_json: string;
};

type CourseDetailRow = CourseRow & {
  description: string;
};

const databasePath = path.join(process.cwd(), "data", "courses.sqlite");
let database: Database.Database | null = null;

function getDatabase() {
  if (database) {
    return database;
  }

  if (!fs.existsSync(databasePath)) {
    throw new Error(
      "SQLite database not found. Run `npm run db:seed` to create data/courses.sqlite.",
    );
  }

  database = new Database(databasePath, { readonly: true });
  return database;
}

function parseTags(value: string) {
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed.filter((item) => typeof item === "string") : [];
  } catch {
    return [];
  }
}

export function getCourseSummaries(locale: Locale): CourseSummary[] {
  const db = getDatabase();
  const rows = db
    .prepare(
      `SELECT c.slug, c.level, ct.name, ct.excerpt, ct.suitable_ages, ct.tags_json
       FROM courses c
       JOIN course_translations ct ON ct.course_id = c.id
       WHERE ct.locale = ?
       ORDER BY c.sort_order ASC, c.slug ASC`,
    )
    .all(locale) as CourseRow[];

  return rows.map((row) => ({
    slug: row.slug,
    name: row.name,
    excerpt: row.excerpt,
    level: row.level,
    suitableAges: row.suitable_ages,
    tags: parseTags(row.tags_json),
  }));
}

export function getCourseDetailBySlug(locale: Locale, slug: string): CourseDetail | null {
  const db = getDatabase();
  const row = db
    .prepare(
      `SELECT c.slug, c.level, ct.name, ct.excerpt, ct.description, ct.suitable_ages, ct.tags_json
       FROM courses c
       JOIN course_translations ct ON ct.course_id = c.id
       WHERE c.slug = ? AND ct.locale = ?
       LIMIT 1`,
    )
    .get(slug, locale) as CourseDetailRow | undefined;

  if (!row) {
    return null;
  }

  return {
    slug: row.slug,
    name: row.name,
    excerpt: row.excerpt,
    description: row.description,
    level: row.level,
    suitableAges: row.suitable_ages,
    tags: parseTags(row.tags_json),
  };
}

export function getAllCourseSlugs(): string[] {
  const db = getDatabase();
  const rows = db.prepare("SELECT slug FROM courses ORDER BY sort_order ASC, slug ASC").all() as {
    slug: string;
  }[];

  return rows.map((row) => row.slug);
}
