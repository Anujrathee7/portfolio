/**
 * The two stories too long for a row on the home page. Each one is an
 * engineering write-up: what the system is, which part was mine, then one
 * entry per problem, each with its reading in the gutter, and the limits.
 *
 * Every number comes from the commit that made the change. Alusta's repo
 * is private, so its entries carry no commit links; RELEX's is public, so
 * each entry links the commits it rests on.
 */

import type { Link } from "./content";

export type CaseEntry = {
  id: string;
  /** The measured result, set in the gutter where dates usually sit. */
  reading: string;
  /** What the reading measures. */
  readingLabel: string;
  title: string;
  problem: string;
  change: string;
  check: string;
  /** Commits the entry rests on. Public repos only. */
  commits?: string[];
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
  /** Base URL for commit links, when the repo is public. */
  commitBase?: string;
  entries: CaseEntry[];
  limits: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "alusta",
    title: "Alusta.ai",
    standfirst: ["Software Developer", "Aug 2026 — now"],
    description:
      "Faster queries, sensor data, a field map and end-to-end tests on a platform for sports facilities, with the measured result of each change.",
    summary: [
      "Alusta is a platform for sports facilities. Fields, golf targets, machines and buildings sit in one inventory, and tasks, work reports, soil sensors and weather hang off it. It runs on Supabase, PostgreSQL and PostGIS with a React front end.",
    ],
    owned: [
      "I joined in August 2026 and work across the database, the data syncs, the map and the test suite. Each entry below is a change I made and can walk through in an interview.",
      "The product and its code are Alusta’s, so this page stays at the level of what I built and what it measured.",
    ],
    links: [],
    entries: [
      {
        id: "queries",
        reading: "2.1 s → 79 ms",
        readingLabel: "a year of soil readings",
        title: "Faster reads without changing who can see what",
        problem:
          "Some of the heaviest reads in the app were slow. A year of soil readings for one field took 2.1 s to load and the task list took 347 ms.",
        change:
          "Rewrote 127 row-level security policies so their checks run once per query instead of once per row, and added the indexes those queries were missing.",
        check:
          "Access rules have to behave exactly as before, so I compared the old and new policies’ results across the test data, and they matched. The year of soil readings now loads in 79 ms and the task list in 45 ms.",
      },
      {
        id: "sensors",
        reading: "3 years",
        readingLabel: "of sensor history, on pairing",
        title: "Soil sensor data with years of history",
        problem:
          "Facilities wanted their own soil moisture sensors on their fields, with history going back years, not only readings from the day a sensor was connected.",
        change:
          "Integrated Soil Scout sensors with an hourly sync and a three-year backfill that picks up where it stopped after a failure, and moved the scheduled data syncs onto background jobs that retry on their own.",
        check:
          "A newly paired sensor shows three years of readings, and tests check that one facility can never read another’s sensor data.",
      },
      {
        id: "charts",
        reading: "33 → 0.43 MB",
        readingLabel: "a year of chart data",
        title: "Charts that load a summary, not every reading",
        problem:
          "A year-long moisture chart for one field downloaded 33 MB of individual readings into the browser.",
        change:
          "Added a nightly job that rolls older readings up into daily values, and pointed the charts at those.",
        check:
          "The same year-long chart now loads 0.43 MB.",
      },
      {
        id: "map",
        reading: "456 → 268 KB",
        readingLabel: "initial JS, gzip",
        title: "A map of real field boundaries, kept off the first load",
        problem:
          "Facility staff think in fields and the areas inside them, not in rows of a table.",
        change:
          "Built the map in Mapbox GL with PostGIS geometry behind it, so fields and their sub-areas are drawn as real boundaries and tasks are created straight from the map. Facilities are matched to their official boundary in LIPAS, the national sports facility registry. Later I kept the map library out of every page that doesn’t draw a map.",
        check:
          "Initial JavaScript went from 456 KB to 268 KB gzip.",
      },
      {
        id: "e2e",
        reading: "109 tests",
        readingLabel: "68 desktop, 41 phone",
        title: "End-to-end tests against a real database, not a mock",
        problem:
          "The app needed end-to-end coverage on desktop and phone, in Finnish, that would fail for real reasons and only for real reasons.",
        change:
          "Wrote the Playwright suite against a local Supabase stack seeded with test data, selecting elements by role and label rather than by styling, with a phone pass beside desktop in the Finnish locale and time zone.",
        check:
          "Flaky tests fail the CI run instead of retrying until they pass.",
      },
    ],
    limits: [
      "The timings are single-query measurements taken when each change landed. None of them is a load test of the whole app.",
      "Everything here has run for weeks, not years, on a young platform.",
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
      "A team of three's runner-up entry at the AaltoAI Hackathon: answers about a document archive with the exact quote behind each one. My part was retrieval and the ask and briefing screens.",
    summary: [
      "RELEX asked for a tool that answers questions about a two-year customer software rollout in a way that survives being checked. The archive was 45 documents: 23 Teams transcripts with deliberate speech-to-text errors, 20 email threads and 2 status reports. Answers were scored on provenance, attribution, currency and deletion, plus one capability nobody asked for, and the system had to run in the EU behind a live address by Sunday noon.",
      "The rule the whole thing is built on is that the model picks the evidence but never writes the citation. Quotes are read back out of stored byte offsets, so a receipt is something the system looked up, not something it generated.",
    ],
    owned: [
      "We were a team of three over one weekend. A teammate built the base: the first pipeline, cited answers, deletion and the deployment on a vLLM endpoint in Finland.",
      "I wrote the largest share of the commits, on the ask and briefing screens and on retrieval, the part that decides which passages reach the model. The entries below are mine.",
    ],
    links: [{ label: "Source on GitHub", href: "https://github.com/Anujrathee7/relex-ai" }],
    commitBase: "https://github.com/Anujrathee7/relex-ai/commit/",
    entries: [
      {
        id: "retrieval",
        reading: "~300 → 10",
        readingLabel: "passages per question",
        title: "Retrieving the strongest hits, not every passage sharing a word",
        problem:
          "Every question filled the prompt to its limit, with about 300 passages from 10 to 19 threads, and only 3 to 16% of them contained a word from the question. Email signatures alone brought 44 copies of “Acme Org” from 23 threads into one answer.",
        change:
          "Kept the top 10 hits scoring at least 40% of the best one, collapsed text repeated in three or more records, matched an archive word one typo away from a question word, and treated “DC-2” and “DC2” as the same word.",
        check:
          "On the practice questions we reviewed by hand, all 71 reviewed sources were still found with 21% fewer passages, and ordinary prompts fell from 11–13K tokens to 4.4–11.8K.",
        commits: ["a112b60"],
      },
      {
        id: "translation",
        reading: "19 → 52 of 71",
        readingLabel: "sources found, reworded",
        title: "Translating questions into the archive’s own words",
        problem:
          "Retrieval matched only the words in the question. Asked differently, with “bread and pastry” or “best-before” instead of the archive’s terms, it found 19 of the 71 reviewed sources.",
        change:
          "Added one short model call that names the question’s concepts and gives the archive’s words for each, taken from subject lines, topics and frequent words but never from person names. Translated words must occur in the archive, and a failed call leaves retrieval as it was. Wrote an evaluation script that measures recall per budget without the model.",
        check:
          "Reworded questions now find 52 of 71. Questions in the practice wording found exactly what they did before, at every budget.",
        commits: ["b4720a9"],
      },
      {
        id: "context",
        reading: "16,385 / 16,384",
        readingLabel: "tokens against the limit",
        title: "An answer that was one token too long",
        problem:
          "A broad question filled the 38,000-character evidence budget to 13,985 prompt tokens. With 2,400 tokens reserved for the answer, that was one over the model’s 16,384-token context. vLLM rejected it with HTTP 400, and the interface said the model was unavailable.",
        change:
          "Set the evidence budget to 35,000 characters and moved the shrinking loop into the function the evaluation also calls, so the evaluation reads exactly the evidence an answer reads. The answer path retrieves a smaller budget instead of refusing.",
        check:
          "Prompt size is measured per question next to the sources found, so a retrieval change shows its cost in tokens as well as recall.",
        commits: ["d9018db"],
      },
      {
        id: "currency",
        reading: "77 / 77",
        readingLabel: "sources unchanged",
        title: "Showing when a source was overtaken",
        problem:
          "A fifth of the score was currency: flag decisions that were reversed later, without serving stale records as current. Live answers cite the newest passage, so a link that only pointed forward almost never showed up.",
        change:
          "Built a map of related and replaced passages from the source rows alone, with no model, in about 0.3 s. Retrieval returns linked passages on both sides of a change, and every answer source that a later document changed, completed or answered gets a small label with its date: Changed later, Done later, Answered later or Not done later. Clicking it opens the newer passage’s receipt.",
        check:
          "Using the map in retrieval left the selected evidence unchanged on all 77 reviewed sources across the eight practice questions.",
        commits: ["b0b5bfd", "961254c", "06dda9f"],
        image: {
          src: "/work/relex-briefing.png",
          alt: "The Memory With a Receipt interface: a briefing list of open promises on the left, each with a status, a timeline and quoted passages, and an answer panel on the right where one answer carries a Superseded card with numbered sources before and after the change.",
          caption: "The briefing and the answer panel. The Superseded card shows the sources before and after a decision changed. The people and companies are the challenge’s synthetic archive.",
          width: 1440,
          height: 900,
        },
      },
    ],
    limits: [
      "Recall was measured on practice questions we reviewed by hand, not on the judges’ questions.",
      "The model was Qwen2.5-14B with a 16K context. Much of this work is about living inside that limit, and a larger model would change the trade-offs.",
      "Judging used a live demo on a temporary address, which is no longer up. The code and screenshots are in the repository.",
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
