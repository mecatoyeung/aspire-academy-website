import fs from "node:fs";
import path from "node:path";

import Database from "better-sqlite3";

const shouldForce = process.argv.includes("--force");
const dbDir = path.join(process.cwd(), "data");
const dbPath = path.join(dbDir, "courses.sqlite");

if (fs.existsSync(dbPath) && !shouldForce) {
  console.log("Database already exists. Use --force to recreate it.");
  process.exit(0);
}

if (fs.existsSync(dbPath) && shouldForce) {
  fs.rmSync(dbPath);
}

fs.mkdirSync(dbDir, { recursive: true });

const db = new Database(dbPath);

db.pragma("journal_mode = WAL");

db.exec(`
  CREATE TABLE courses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT NOT NULL UNIQUE,
    level TEXT NOT NULL CHECK (level IN ('beginner', 'advanced', 'expert')),
    sort_order INTEGER NOT NULL DEFAULT 0
  );

  CREATE TABLE course_translations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    course_id INTEGER NOT NULL,
    locale TEXT NOT NULL CHECK (locale IN ('en', 'zh-hk')),
    name TEXT NOT NULL,
    excerpt TEXT NOT NULL,
    description TEXT NOT NULL,
    suitable_ages TEXT NOT NULL,
    tags_json TEXT NOT NULL,
    FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE,
    UNIQUE (course_id, locale)
  );
`);

const courses = [
  {
    slug: "creative-math-design",
    level: "beginner",
    sortOrder: 1,
    translations: {
      en: {
        name: "Creative Math and Design",
        excerpt: "Build number confidence through visual challenges and maker-style activities.",
        description:
          "Students explore numbers, geometry, and patterns through visual puzzles and collaborative mini-projects. Lessons blend logic with creativity so learners can understand concepts deeply while expressing ideas through design.",
        suitableAges: "Ages 7-10",
        tags: ["Math", "Design Thinking", "Problem Solving"],
      },
      "zh-hk": {
        name: "創意數學與設計",
        excerpt: "透過視覺化挑戰與創作任務，建立數學思維與自信。",
        description:
          "課程以圖像化題目、幾何探索與小組創作，引導學生把抽象數學概念轉化為可見成果。學生在解難過程中，同時提升邏輯分析與創意表達能力。",
        suitableAges: "7-10 歲",
        tags: ["數學", "設計思維", "解難能力"],
      },
    },
  },
  {
    slug: "science-explorers-lab",
    level: "advanced",
    sortOrder: 2,
    translations: {
      en: {
        name: "Science Explorers Lab",
        excerpt: "Investigate real-world phenomena with guided experiments and evidence-based reasoning.",
        description:
          "Learners run hands-on experiments, collect observations, and present findings in a structured way. The course builds scientific habits including hypothesis testing, data interpretation, and clear communication.",
        suitableAges: "Ages 9-13",
        tags: ["Science", "Experiments", "Critical Thinking"],
      },
      "zh-hk": {
        name: "科學探索實驗室",
        excerpt: "透過實驗、觀察與討論，培養科學推理與分析能力。",
        description:
          "學生會進行一系列動手實驗，學習提出假設、整理證據與解讀結果。課程重視科學方法與溝通技巧，讓學生能有系統地表達研究發現。",
        suitableAges: "9-13 歲",
        tags: ["科學", "實驗", "批判思維"],
      },
    },
  },
  {
    slug: "coding-ai-studio",
    level: "advanced",
    sortOrder: 3,
    translations: {
      en: {
        name: "Coding and AI Studio",
        excerpt: "From coding foundations to AI concepts, build digital projects that solve practical problems.",
        description:
          "Students learn programming logic, algorithmic thinking, and introductory AI workflows through project-based learning. By the end, each student completes a showcase-ready interactive project and explains their technical decisions.",
        suitableAges: "Ages 11-15",
        tags: ["Coding", "AI Basics", "Digital Creativity"],
      },
      "zh-hk": {
        name: "編程與 AI 工作室",
        excerpt: "由程式基礎到 AI 概念，逐步製作可展示的數位作品。",
        description:
          "課程以專題實作方式教授程式邏輯、演算法思維與 AI 入門應用。學生將完成一個互動作品，並學習如何清晰說明其設計流程與技術選擇。",
        suitableAges: "11-15 歲",
        tags: ["編程", "AI 入門", "數位創作"],
      },
    },
  },
  {
    slug: "engineering-makers-intensive",
    level: "expert",
    sortOrder: 4,
    translations: {
      en: {
        name: "Engineering Makers Intensive",
        excerpt: "Prototype, test, and iterate with an engineering mindset in team-based challenges.",
        description:
          "This intensive track focuses on design constraints, rapid prototyping, and iterative improvement. Students tackle open-ended engineering briefs, evaluate trade-offs, and refine solutions with mentor feedback.",
        suitableAges: "Ages 13-17",
        tags: ["Engineering", "Prototyping", "Team Challenges"],
      },
      "zh-hk": {
        name: "工程創客進階班",
        excerpt: "在真實工程挑戰中反覆設計、測試與優化解決方案。",
        description:
          "本課程聚焦工程設計限制、快速原型與迭代改良。學生需在團隊中完成開放式任務，分析不同方案取捨，並根據導師回饋持續優化作品。",
        suitableAges: "13-17 歲",
        tags: ["工程", "原型製作", "團隊挑戰"],
      },
    },
  },
];

const insertCourse = db.prepare(
  "INSERT INTO courses (slug, level, sort_order) VALUES (?, ?, ?)",
);
const insertTranslation = db.prepare(
  `INSERT INTO course_translations
    (course_id, locale, name, excerpt, description, suitable_ages, tags_json)
   VALUES (?, ?, ?, ?, ?, ?, ?)`,
);

const transaction = db.transaction((entries) => {
  for (const entry of entries) {
    const result = insertCourse.run(entry.slug, entry.level, entry.sortOrder);
    const courseId = Number(result.lastInsertRowid);

    for (const locale of ["en", "zh-hk"]) {
      const translation = entry.translations[locale];
      insertTranslation.run(
        courseId,
        locale,
        translation.name,
        translation.excerpt,
        translation.description,
        translation.suitableAges,
        JSON.stringify(translation.tags),
      );
    }
  }
});

transaction(courses);

db.close();

console.log(`Seeded ${courses.length} courses into ${dbPath}`);