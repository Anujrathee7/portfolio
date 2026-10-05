/**
 * The two stories too long for a row on the home page. Each one is short
 * on purpose: what it is, what was mine, then one line per improvement with
 * its measured result in the gutter.
 *
 * Every number comes from the commit that made the change. Alusta stays at
 * outcome level, since the product and its code are the employer's, and
 * nothing here argues against the work.
 */

import type { Link } from "./content";

export type CaseEntry = {
  id: string;
  /** The measured result, set in the gutter where dates usually sit. */
  reading: string;
  /** What the reading measures. */
  readingLabel: string;
  title: string;
  /** One short line: what I did and what it improved. */
  line: string;
  /** A capture of the thing the entry describes, never a header image. */
  image?: Shot;
};

type Shot = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export type CaseStudy = {
  slug: string;
  title: string;
  /** Role, organisation and period, set in mono under the title. */
  standfirst: string[];
  /** Search and social description. */
  description: string;
  summary: string[];
  owned: string[];
  links: Link[];
  entries: CaseEntry[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "alusta",
    title: "Alusta.ai",
    standfirst: ["Software Developer", "Aug 2026 — now"],
    description:
      "Faster queries, sensor history, lighter charts, a field map and end-to-end tests on a platform for sports facilities.",
    summary: [
      "A platform that helps sports facilities run fields, equipment and soil health from one place.",
    ],
    owned: [
      "I own the front end, the database, the data syncs and deployment, and wrote the map and the end-to-end tests.",
    ],
    links: [],
    entries: [
      {
        id: "queries",
        reading: "2.1 s → 79 ms",
        readingLabel: "a year of soil readings",
        title: "Faster data loading",
        line: "Rewrote 127 security policies and added missing indexes, without changing who can see what.",
      },
      {
        id: "sensors",
        reading: "3 years",
        readingLabel: "of sensor history",
        title: "Soil sensor history",
        line: "Connected Soil Scout sensors with an hourly sync and a three-year backfill that resumes after failures.",
      },
      {
        id: "charts",
        reading: "33 → 0.43 MB",
        readingLabel: "a year of chart data",
        title: "Lighter charts",
        line: "Rolled old readings into daily values, so a year-long chart loads 0.43 MB instead of 33 MB.",
      },
      {
        id: "map",
        reading: "456 → 268 KB",
        readingLabel: "initial JS, gzip",
        title: "Field map",
        line: "Built a map of real field boundaries in Mapbox and PostGIS, and kept it out of the first page load.",
      },
      {
        id: "e2e",
        reading: "109 tests",
        readingLabel: "68 desktop, 41 phone",
        title: "End-to-end tests",
        line: "Wrote Playwright tests for desktop and phone that run against a real local database.",
      },
    ],
  },
  {
    slug: "relex",
    title: "Memory With a Receipt",
    standfirst: [
      "Runner-up, RELEX Solutions challenge",
      "AaltoAI Hackathon · Sep 2026",
    ],
    description:
      "A runner-up hackathon entry that answers questions about a document archive and shows the exact quote behind each answer.",
    summary: [
      "Answers questions about a 45-document project archive and shows the exact quote behind each answer. Runner-up at the AaltoAI Hackathon, built by three people in one weekend.",
    ],
    owned: [
      "A teammate built the base pipeline. I built the search and the question and answer screens.",
    ],
    links: [{ label: "Source on GitHub", href: "https://github.com/Anujrathee7/relex-ai" }],
    entries: [
      {
        id: "retrieval",
        reading: "~300 → 10",
        readingLabel: "passages per question",
        title: "Sharper search",
        line: "Sent the model only the strongest passages instead of everything that shared a word.",
      },
      {
        id: "translation",
        reading: "19 → 52 of 71",
        readingLabel: "sources found, reworded",
        title: "Questions in your own words",
        line: "Translated questions into the archive’s terms, so reworded questions still find the right sources.",
      },
      {
        id: "context",
        reading: "16,385 / 16,384",
        readingLabel: "tokens against the limit",
        title: "Fits the model",
        line: "Capped the evidence so no prompt overflows the model’s 16K context.",
      },
      {
        id: "currency",
        reading: "0.3 s",
        readingLabel: "link map, no model",
        title: "Outdated sources flagged",
        line: "Marked sources that a later document changed or settled, linking to the newer one.",
        image: {
          src: "/work/relex-briefing.png",
          alt: "The Memory With a Receipt interface: a briefing list of open promises on the left, each with a status, a timeline and quoted passages, and an answer panel on the right where one answer carries a Superseded card with numbered sources before and after the change.",
          caption: "The briefing and the answer panel. The Superseded card shows the sources before and after a decision changed. The people and companies are the challenge’s synthetic archive.",
          width: 1440,
          height: 900,
        },
      },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
