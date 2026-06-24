import type { Locale, SectionSlug } from "@/i18n/config";

export type SiteCopy = {
  metadata: {
    title: string;
    description: string;
  };
  navigation: {
    home: string;
    courses: string;
    stories: string;
    partnerships: string;
    about: string;
    enrollNow: string;
  };
  languageSwitcherLabel: string;
  hero: {
    eyebrow: string;
    titleLead: string;
    titleHighlight: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    imageAlt: string;
  };
  subpages: Record<
    SectionSlug,
    {
      eyebrow: string;
      title: string;
      description: string;
    }
  >;
  courses: {
    label: string;
    title: string;
    cards: [
      { alt: string; title: string; description: string },
      { alt: string; title: string; description: string },
      { alt: string; title: string; description: string },
      { alt: string; title: string; description: string },
    ];
  };
  stories: {
    label: string;
    title: string;
    items: [
      { quote: string; author: string },
      { quote: string; author: string },
      { quote: string; author: string },
    ];
  };
  partnerships: {
    label: string;
    title: string;
    description: string;
    items: [string, string, string, string];
  };
  about: {
    label: string;
    title: string;
    description: string;
  };
  pageCta: {
    backHome: string;
    exploreCourses: string;
  };
  footer: {
    academyName: string;
    tagline: string;
    contactUs: string;
    emailLabel: string;
    phoneLabel: string;
    followUs: string;
    whatsapp: string;
    instagram: string;
    facebook: string;
    youtube: string;
  };
};

const messages: Record<Locale, SiteCopy> = {
  "zh-hk": {
    metadata: {
      title: "Aspire Academy | 啟發未來可能",
      description: "Aspire Academy 透過實作、導師支援與真實世界挑戰，為兒童與青少年提供多元 STEAM 課程。",
    },
    navigation: {
      home: "首頁",
      courses: "課程",
      stories: "學生成果",
      partnerships: "合作夥伴",
      about: "關於我們",
      enrollNow: "立即報名",
    },
    languageSwitcherLabel: "語言",
    hero: {
      eyebrow: "面向未來的 STEAM 學習",
      titleLead: "啟發年輕頭腦，",
      titleHighlight: "開拓未來可能",
      description: "Aspire Academy 透過動手做專案、導師支援與真實世界挑戰，為兒童與青少年提供多元 STEAM 課程。",
      primaryCta: "探索課程",
      secondaryCta: "認識 Aspire Academy",
      imageAlt: "Aspire Academy 學生",
    },
    subpages: {
      courses: {
        eyebrow: "課程",
        title: "為不同學習者打造的 STEAM 成長路徑",
        description: "從創意數學到工程實作，Aspire Academy 以循序漸進的課程設計，培養孩子的好奇心、創造力與解難能力。",
      },
      stories: {
        eyebrow: "學生成果",
        title: "看看學生如何把想法變成作品",
        description: "真實作品、公開展示與團隊合作，讓學生在每一次挑戰中累積自信與成就感。",
      },
      partnerships: {
        eyebrow: "合作夥伴",
        title: "與學校及社群攜手擴展 STEAM 影響力",
        description: "我們與學校、青年機構及創新社群合作，把高質素的 STEAM 教育帶到更多學生身邊。",
      },
      about: {
        eyebrow: "關於我們",
        title: "以實踐與啟發帶領下一代前行",
        description: "Aspire Academy 致力讓學習變得具體、鼓舞人心，並與現實世界緊密連結，幫助孩子建立面向未來的能力。",
      },
    },
    courses: {
      label: "課程",
      title: "適合每位學習者的 STEAM 路徑",
      cards: [
        {
          alt: "創意數學與設計",
          title: "創意數學與設計",
          description: "以視覺化挑戰與互動任務，建立數學思維與設計表達。",
        },
        {
          alt: "科學探索者",
          title: "科學探索者",
          description: "透過實驗與觀察，培養提問能力與科學推理。",
        },
        {
          alt: "編程與 AI 工作室",
          title: "編程與 AI 工作室",
          description: "由基礎程式到 AI 概念，逐步打造可展示的數位作品。",
        },
        {
          alt: "工程創客",
          title: "工程創客",
          description: "在動手製作與反覆測試中，發展工程思維與解難力。",
        },
      ],
    },
    stories: {
      label: "學生成果",
      title: "學生的精彩作品與成長故事",
      items: [
        {
          quote: "「我完成了第一個遊戲，還在班上分享給同學看。現在我覺得自己真的能創造東西！」",
          author: "Aarav，12 歲",
        },
        {
          quote: "「機械人課程讓我學會團隊合作，也更懂得把想法變成可行方案。」",
          author: "Maya，15 歲",
        },
        {
          quote: "「Aspire 令科學變得很有趣，我現在希望將來可以成為工程師。」",
          author: "Ethan，11 歲",
        },
      ],
    },
    partnerships: {
      label: "合作夥伴",
      title: "一起建立未來",
      description: "我們與學校、青年組織及創新社群合作，讓更多學生接觸具影響力的 STEAM 教育。",
      items: ["學校", "科技夥伴", "STEM 學會", "社區中心"],
    },
    about: {
      label: "關於我們",
      title: "Aspire Academy",
      description: "Aspire Academy 幫助兒童與青少年建立信心與能力，以 STEAM 塑造未來。我們讓學習變得實用、有啟發性，並與真實生活緊密相連。",
    },
    pageCta: {
      backHome: "返回首頁",
      exploreCourses: "瀏覽課程",
    },
    footer: {
      academyName: "Aspire Academy",
      tagline: "啟發未來可能",
      contactUs: "聯絡我們",
      emailLabel: "電郵",
      phoneLabel: "電話",
      followUs: "追蹤我們",
      whatsapp: "WhatsApp",
      instagram: "Instagram",
      facebook: "Facebook",
      youtube: "YouTube",
    },
  },
  en: {
    metadata: {
      title: "Aspire Academy | Pioneer the possible",
      description: "Aspire Academy offers a wide range of STEAM courses for kids and teenagers through hands-on projects, mentor support, and real-world challenges.",
    },
    navigation: {
      home: "Home",
      courses: "Courses",
      stories: "Success Stories",
      partnerships: "Partnerships",
      about: "About Us",
      enrollNow: "Enroll Now",
    },
    languageSwitcherLabel: "Language",
    hero: {
      eyebrow: "Future-Ready STEAM Learning",
      titleLead: "Inspire Young Minds to",
      titleHighlight: "Pioneer the possible",
      description: "Aspire Academy offers a wide range of STEAM courses for kids and teenagers through hands-on projects, mentor support, and real-world challenges.",
      primaryCta: "Explore Courses",
      secondaryCta: "Meet Aspire Academy",
      imageAlt: "Aspire Academy Students",
    },
    subpages: {
      courses: {
        eyebrow: "Courses",
        title: "STEAM pathways for every learner",
        description: "From creative math to engineering builds, Aspire Academy helps students grow curiosity, confidence, and practical problem-solving skills.",
      },
      stories: {
        eyebrow: "Success Stories",
        title: "See how students turn ideas into outcomes",
        description: "Real projects, public sharing, and collaborative challenges help students build momentum and pride in their work.",
      },
      partnerships: {
        eyebrow: "Partnerships",
        title: "Expand STEAM impact with schools and communities",
        description: "We collaborate with schools, youth organizations, and innovation communities to bring high-impact STEAM education to more students.",
      },
      about: {
        eyebrow: "About Us",
        title: "Practical, inspiring learning for the next generation",
        description: "Aspire Academy helps children and teenagers build the confidence and capabilities needed to shape tomorrow through STEAM.",
      },
    },
    courses: {
      label: "Courses",
      title: "STEAM pathways for every learner",
      cards: [
        {
          alt: "Creative Math and Design",
          title: "Creative Math and Design",
          description: "Build number confidence through visual challenges and maker-style design tasks.",
        },
        {
          alt: "Science Explorers",
          title: "Science Explorers",
          description: "Investigate real-world phenomena with hands-on experiments and guided inquiry.",
        },
        {
          alt: "Coding and AI Studio",
          title: "Coding and AI Studio",
          description: "Move from coding foundations to AI concepts while building showcase-ready projects.",
        },
        {
          alt: "Engineering Builders",
          title: "Engineering Builders",
          description: "Prototype, test, and improve practical builds using an iterative engineering mindset.",
        },
      ],
    },
    stories: {
      label: "Success Stories",
      title: "Our students in action",
      items: [
        {
          quote: '"I built my first game and presented it to my class. I feel like a creator now!"',
          author: "Aarav, Age 12",
        },
        {
          quote: '"The robotics track taught me teamwork and practical problem-solving."',
          author: "Maya, Age 15",
        },
        {
          quote: '"Aspire made science exciting. I now want to become an engineer."',
          author: "Ethan, Age 11",
        },
      ],
    },
    partnerships: {
      label: "Partnerships",
      title: "Building the future together",
      description: "We partner with schools, youth organizations, and innovation communities to bring high-impact STEAM education to more students.",
      items: ["Schools", "Tech Partners", "STEM Clubs", "Community Centers"],
    },
    about: {
      label: "About Us",
      title: "Aspire Academy",
      description: "Aspire Academy empowers kids and teenagers with the confidence and capabilities to shape tomorrow through STEAM. We make learning practical, inspiring, and deeply connected to real life.",
    },
    pageCta: {
      backHome: "Back Home",
      exploreCourses: "Explore Courses",
    },
    footer: {
      academyName: "Aspire Academy",
      tagline: "Pioneer the possible",
      contactUs: "Contact Us",
      emailLabel: "Email",
      phoneLabel: "Phone",
      followUs: "Follow Us",
      whatsapp: "WhatsApp",
      instagram: "Instagram",
      facebook: "Facebook",
      youtube: "YouTube",
    },
  },
};

export function getMessages(locale: Locale) {
  return messages[locale];
}