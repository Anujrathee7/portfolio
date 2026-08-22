/**
 * All site content, kept apart by kind. Nothing here is a paragraph:
 * project blurbs are one or two lines and roles get one. Depth lives on
 * GitHub, not on this page.
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
  /** One or two lines. What it is, and the interesting part. No more. */
  blurb: string;
  /** Rendered as a single muted line, middot separated. */
  stack: string[];
  href?: string;
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
  /** One line. Two at the absolute most. */
  note: string;
  /** Still going. Lights the marker on the scale; nothing else uses amber. */
  current?: boolean;
};

export const intro = {
  name: "Anuj Rathee",
  /** The one line of first-person voice in the rail. */
  tagline: "Mostly trying to work out how things actually work",
  /** Pure fact, set in mono. The rail says it once so the page never does. */
  standfirst: ["Software developer", "Lahti, Finland"],
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

export const projects: Project[] = [
  {
    id: "letterly",
    name: "Letterly",
    year: "2026",
    type: "Web app",
    blurb:
      "A cover letter builder that runs entirely in your browser and exports a real vector PDF — selectable text, embedded fonts, no screenshot tricks.",
    stack: ["TypeScript", "Next.js", "react-pdf"],
    href: `${GH}/Letterly`,
    image: {
      src: "/work/letterly-editor.png",
      alt: "The Letterly editor: a list of content blocks on the left, an A4 page preview in the middle showing a finished cover letter, and a settings panel on the right.",
      caption: "The editor. The middle pane is an A4 page at real size — what you see is what the PDF gives you.",
      width: 1440,
      height: 900,
    },
  },
  {
    id: "stagecraft",
    name: "Stagecraft",
    year: "2026",
    type: "Developer tool",
    blurb:
      "A visual editor that never writes source code itself. It hands a coding agent an exact file, line and column instead of a description.",
    stack: ["TypeScript", "React", "Vite"],
  },
  {
    id: "xpi",
    name: "xpi",
    year: "2026",
    type: "Desktop app",
    blurb:
      "A desktop client for a headless coding agent, with live per-thread token usage so you can watch what a conversation costs while it is still running.",
    stack: ["Rust", "Tauri 2.0", "TypeScript"],
  },
  {
    id: "delegation",
    name: "Delegation harness",
    year: "2026",
    type: "Agent tooling",
    blurb:
      "A cheap model does the typing, an expensive one reviews only the diff. Built because I was paying for my own tokens.",
    stack: ["Shell", "Node.js"],
  },
  {
    id: "garbage-classifier",
    name: "Garbage classifier",
    year: "2025",
    type: "ML service",
    blurb:
      "An image model behind a Flask endpoint, sorting rubbish into twelve classes — including brown, green and white glass separately.",
    stack: ["Python", "TensorFlow", "Flask"],
    href: `${GH}/trash_backend`,
  },
  {
    id: "cv-matcher",
    name: "CV matcher",
    year: "2025",
    type: "Hackathon",
    blurb:
      "Ranks CVs against a job description by embedding both. Which means I have written the thing that reads this page.",
    stack: ["Python", "spaCy", "sentence-transformers"],
    href: `${GH}/NordCloud_Hackathon`,
  },
  {
    id: "platformer",
    name: "Platformer",
    year: "2024",
    type: "Browser game",
    blurb:
      "Bounce pads, spiders, six colours of tower. The sound effects are audibly from Super Mario Bros.",
    stack: ["JavaScript", "Phaser"],
    href: `${GH}/Phaser-Game`,
  },
];

export const experience: Role[] = [
  {
    id: "alusta",
    org: "Alusta.ai",
    title: "Software Developer",
    period: "Aug 2026 — now",
    current: true,
    note: "Software for sports facilities: fields, equipment and soil health held as one inventory instead of three that drift apart.",
  },
  {
    id: "freelance",
    org: "Freelance",
    title: "Web Developer",
    period: "2026",
    note: "Client work, paying for my own models on the cheapest subscription going. Every tool in the projects list came out of that constraint.",
  },
  {
    id: "teaching",
    org: "LUT University",
    title: "Teaching Assistant",
    period: "Jan 2025 — May 2026",
    note: "Four courses: programming, cyber security, technical computing, operating systems. Grading is a strange way to learn a subject.",
  },
  {
    id: "seonali",
    org: "Seonali",
    title: "Full Stack Developer",
    period: "Jul — Dec 2025",
    note: "A production AI brand-visibility platform. Built the JWT auth and REST APIs, and cut response times by over 20% with indexes and better joins.",
  },
  {
    id: "vtt",
    org: "VTT",
    title: "Front-end Developer",
    period: "Jan — Apr 2025",
    note: "A dashboard for evaluating AI models, in a team of six. I also ended up writing the commit convention nobody asked me for.",
  },
];

export const education: Role = {
  id: "lut",
  org: "LUT University",
  title: "BSc & MSc, Software and Systems Engineering",
  period: "2023 — 2028",
  current: true,
  note: "BSc finished this summer, 4.64 out of 5. The minor is Industrial Engineering and Management, which doesn’t match the rest of it and is probably why I keep ending up at what things cost.",
};

/** Straight off the CV. Boring, and the first thing a recruiter checks. */
export const workAuthorisation =
  "Finnish student residence permit. Right to work in Finland, no employer sponsorship needed.";

/** The last entry on the scale, and the only one that is not a date. */
export const close = {
  line: "If any of this is useful to you, write to me.",
  email: "ratheeanuj2005@gmail.com",
};

export const contacts: Link[] = [
  { label: "Email", href: "mailto:ratheeanuj2005@gmail.com" },
  { label: "GitHub", href: GH },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/anuj-rathee" },
];

export const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;
