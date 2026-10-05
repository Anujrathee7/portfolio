/**
 * All site content, kept apart by kind.
 *
 * Every number in here comes from the CV, the facts files in the
 * applications folder, or a commit message, and should be explainable in
 * an interview. Work content is plain and concrete; the personality lives
 * in `opening`. The two longest stories have their own pages, in
 * `case-studies.ts`.
 */

const GH = "https://github.com/Anujrathee7";

export type Link = {
  label: string;
  href: string;
};

export type Project = {
  id: string;
  name: string;
  year: string;
  /** Shown after the year, as "2026 · Web app". */
  type: string;
  /** One or two lines. What it is, in plain words. */
  blurb: string;
  /** What was built and what it proved. One to three lines. */
  highlights?: string[];
  /** Rendered as a single muted line, middot separated. */
  stack: string[];
  /** Source. Only public repos; a private link is a broken link. */
  href?: string;
  /** A running version, when there is one. */
  live?: string;
  /** Slug of a page under /work. */
  caseStudy?: string;
  /** Only Letterly has a real screenshot. Optional, never a placeholder. */
  image?: {
    src: string;
    alt: string;
    caption: string;
    width: number;
    height: number;
  };
};

export type Role = {
  id: string;
  org: string;
  title: string;
  period: string;
  /** One line of context: what the place is, or what the work was for. */
  summary: string;
  /** What was done and what changed because of it. */
  highlights?: string[];
  /** Slug of a page under /work. */
  caseStudy?: string;
  /** Still going. Lights the marker on the scale; nothing else uses amber. */
  current?: boolean;
};

export const intro = {
  name: "Anuj Rathee",
  /** The one line of first-person voice in the rail. */
  tagline: "Mostly trying to work out how things actually work",
  /** Pure fact, set in mono. The rail says it once so the page never does. */
  standfirst: ["Software developer", "Espoo, Finland"],
};

/**
 * The opening of the page. First line is the thesis and doubles as the
 * answer to "what do you do"; second line is everything that isn't work.
 */
export const opening = {
  lede:
    "I write software. At the moment that mostly means making sure two things describing the same object don’t quietly start disagreeing.",
  rest:
    "The rest of it is the gym, music more or less constantly, cooking for whoever turns up, and sitting by the sea until the sun has finished going down, which produces nothing at all.",
};

export const experience: Role[] = [
  {
    id: "alusta",
    org: "Alusta.ai",
    title: "Software Developer",
    period: "Aug 2026 — now",
    current: true,
    caseStudy: "alusta",
    summary:
      "A platform for sports facilities that keeps fields, equipment and soil health in one inventory, built on Supabase and PostgreSQL.",
    highlights: [
      "Cut a 365-day soil query from 2.1 s to 79 ms, and a task query from 347 ms to 45 ms, by rewriting 127 row-level security policies and adding indexes.",
      "Integrated Soil Scout soil moisture sensors with an hourly sync and a three-year backfill that picks up where it stopped after a failure.",
      "Added a nightly job that rolls older sensor readings up into daily values, taking a year of chart data from 33 MB to 0.43 MB.",
      "Built the map in Mapbox GL with PostGIS geometry behind it, so fields and their sub-areas are drawn as real boundaries and tasks are created straight from the map.",
      "Wrote 109 end-to-end tests in Playwright, 68 desktop and 41 phone, that run against a local Supabase stack instead of mocks.",
    ],
  },
  {
    id: "freelance",
    org: "Freelance",
    title: "Web Developer",
    period: "2026",
    summary:
      "Client and pitch work, alongside the tools in the projects list below.",
    highlights: [
      "Pitched a redesign to Norrin, a Nordic enterprise AI consultancy. Designed the site, restructured their copy section by section, and built it in React with coding agents working from my specs.",
    ],
  },
  {
    id: "teaching",
    org: "LUT University",
    title: "Teaching Assistant",
    period: "Jan 2025 — May 2026",
    summary:
      "Exercise sessions for four computer science courses: programming, cyber security, technical computing and operating systems.",
    highlights: [
      "Taught the weekly solutions to the class, coached students on presenting their work, and assessed their submissions.",
    ],
  },
  {
    id: "seonali",
    org: "Seonali",
    title: "Full Stack Developer",
    period: "Jul — Dec 2025",
    summary:
      "An AI brand-visibility platform with real users, around 500 a month and 10,000 API requests a week.",
    highlights: [
      "Built the JWT authentication, password hashing and the REST endpoints behind its generative AI response analysis.",
      "Validated, normalized and restructured data arriving from outside before it reached PostgreSQL, because the shape it arrived in was never the shape we wanted to store.",
      "Found slow queries and fixed them with the indexes that were missing and joins that did less work.",
    ],
  },
  {
    id: "vtt",
    org: "VTT",
    title: "Front-end Developer",
    period: "Jan — Apr 2025",
    summary:
      "A dashboard for managing VTT’s internal and external AI sales agents, in React, Tailwind CSS and Vite, in a team of six.",
    highlights: [
      "Acted as Scrum master, working with the product owner to map out the scope and requirements.",
      "Delivered a working MVP the product owner can share with the business owners to show how it helps manage the agents.",
      "Set up the coding convention and the commit and pull request workflow, so every code review followed the same structure.",
    ],
  },
];

export const education: Role = {
  id: "lut",
  org: "LUT University",
  title: "BSc, Software and Systems Engineering",
  period: "2023 — 2026",
  summary:
    "Completed 2026 with a grade of 4.64 out of 5 and 190 ECTS, with a minor in Industrial Engineering and Management.",
};

/** Results somebody else decided. Dated, so they sit on the scale. */
export const recognition: Role[] = [
  {
    id: "relex",
    org: "AaltoAI Hackathon",
    title: "Runner-up, RELEX Solutions challenge",
    period: "Sep 2026",
    caseStudy: "relex",
    summary:
      "Second place in a team of three, for a tool that answers questions about a document archive and shows the exact quote behind every answer.",
  },
  {
    id: "teknoware",
    org: "Teknoware",
    title: "Hackathon winner",
    period: "2025",
    summary: "First place at the Teknoware hackathon in Lahti.",
  },
  {
    id: "scholarship",
    org: "LUT University",
    title: "Excellence Academic Scholarship",
    period: "BSc",
    summary: "Awarded for academic performance, covering 60% of tuition fees.",
  },
];

export const projects: Project[] = [
  {
    id: "relex",
    name: "Memory With a Receipt",
    year: "2026",
    type: "Hackathon",
    caseStudy: "relex",
    blurb:
      "Answers questions about 45 documents of meeting transcripts, email and status reports, and shows the exact quote behind every answer. Quotes are read back from the stored file, not written by the model, so a source cannot be invented.",
    highlights: [
      "Built the question and answer screens and the search behind them. For questions worded differently from the archive, translating them into its own words raised the right sources found from 19 of 71 to 52 of 71.",
    ],
    stack: ["Python", "React", "SQLite", "Qwen2.5-14B"],
    href: `${GH}/relex-ai`,
  },
  {
    id: "letterly",
    name: "Letterly",
    year: "2026",
    type: "Web app",
    blurb:
      "A cover letter builder that runs entirely in the browser. Letters are written next to a live A4 preview and download as a real PDF with selectable text and embedded fonts.",
    highlights: [
      "Kept the preview and the PDF identical by taking every colour and size from one shared set of styles. The build fails if either renderer types in a value by hand, and a test measures the boxes inside the finished PDF to check they line up with the preview.",
      "163 automated checks across the editor, the templates and the PDF output.",
    ],
    stack: ["TypeScript", "Next.js", "react-pdf", "Playwright"],
    href: `${GH}/Letterly`,
    live: "https://getletterly.vercel.app",
    image: {
      src: "/work/letterly-editor.png",
      alt: "The Letterly editor: a list of content blocks on the left, an A4 page preview in the middle showing a finished cover letter, and a settings panel on the right.",
      caption: "The editor. The middle pane is an A4 page at real size, and the PDF matches it.",
      width: 1440,
      height: 900,
    },
  },
  {
    id: "visual-editor",
    name: "Source-Mapped Visual Editor",
    year: "2026",
    type: "Developer tool",
    blurb:
      "A visual editor for React projects that writes no code of its own. A change made on the page is handed to a coding agent that edits the source, and the editor checks the reloaded page against the request.",
    highlights: [
      "Tagged every element with the file, line and column it came from, so the agent is told where to edit instead of searching for it. Each change ends as landed, drifted, blocked or stalled, and can be reverted byte for byte.",
    ],
    stack: ["TypeScript", "React", "Vite", "Babel"],
    href: `${GH}/source-mapped-visual-editor`,
  },
  {
    id: "norrin",
    name: "Norrin redesign",
    year: "2026",
    type: "Freelance pitch",
    blurb:
      "An unsolicited redesign for Norrin, a Nordic enterprise AI consultancy. Three pages, with the copy restructured section by section.",
    stack: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    live: "https://norrin-redesign.vercel.app",
  },
  {
    id: "desktop-client",
    name: "Agent runtime desktop client",
    year: "2026",
    type: "Desktop app",
    blurb:
      "A desktop app for running an open source AI agent, with a Rust backend and a TypeScript interface. Each conversation runs as its own agent process, so one can be stopped without touching the rest.",
    highlights: [
      "Built for debugging, so the model’s reasoning, the requests waiting in line and each conversation’s token use are visible while it runs.",
    ],
    stack: ["Rust", "Tauri 2.0", "TypeScript"],
  },
  {
    id: "garbage-classifier",
    name: "Garbage classifier",
    year: "2025",
    type: "ML service",
    blurb:
      "An image model behind a Flask endpoint that sorts rubbish into twelve classes, with brown, green and white glass kept apart.",
    stack: ["Python", "TensorFlow", "Flask"],
  },
  {
    id: "cv-matcher",
    name: "CV matcher",
    year: "2025",
    type: "Hackathon",
    blurb:
      "Ranks CVs against a job description by embedding both and returning the five closest. I wrote the text extraction.",
    stack: ["Python", "sentence-transformers"],
  },
  {
    id: "platformer",
    name: "Platformer",
    year: "2024",
    type: "Browser game",
    blurb:
      "A browser platformer with a tilemap level, bounce pads and spiders.",
    stack: ["JavaScript", "Phaser"],
    href: `${GH}/Phaser-Game`,
  },
];

/** Straight off the CV. Boring, and the first thing a recruiter checks. */
export const workAuthorisation =
  "Finnish residence permit. Right to work in Finland, no employer sponsorship needed.";

/** The last entry on the scale, and the only one that is not a date. */
export const close = {
  line: "If any of this is useful to you, write to me.",
  email: "ratheeanuj2005@gmail.com",
};

export const contacts: Link[] = [
  { label: "Email", href: "mailto:ratheeanuj2005@gmail.com" },
  { label: "GitHub", href: GH },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/anuj-rathee-061401279/" },
];

export const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;
