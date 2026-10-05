import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Close } from "../../components/Close";
import { Rail } from "../../components/Rail";
import {
  caseStudies,
  getCaseStudy,
  type CaseEntry,
  type CaseStudy,
} from "../../content/case-studies";

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "work", label: "The work" },
  { id: "contact", label: "Contact" },
] as const;

/** Ownership continues the overview, so it lights the same entry. */
const OBSERVED = [
  { id: "overview", nav: "overview" },
  { id: "owned", nav: "overview" },
  { id: "work", nav: "work" },
  { id: "contact", nav: "contact" },
] as const;

// Two pages, both known at build time. Anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const study = getCaseStudy((await params).slug);
  if (!study) return {};

  return {
    title: study.title,
    description: study.description,
    alternates: { canonical: `/work/${study.slug}` },
    openGraph: {
      title: study.title,
      description: study.description,
      url: `/work/${study.slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const study = getCaseStudy((await params).slug);
  if (!study) notFound();

  return (
    <div className="shell">
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <Rail items={SECTIONS} observe={OBSERVED} />

      <main id="main" tabIndex={-1} className="content">
        <Overview study={study} />

        <section id="owned" aria-labelledby="owned-h" className="band band-continues">
          <h2 id="owned-h" className="label">
            What I owned
          </h2>
          <div className="prose">
            {study.owned.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section id="work" aria-labelledby="work-h" className="band">
          <h2 id="work-h" className="label">
            The work
          </h2>
          <div className="rows">
            {study.entries.map((entry) => (
              <EntryRow key={entry.id} entry={entry} />
            ))}
          </div>
        </section>

        <Close />
      </main>
    </div>
  );
}

function Overview({ study }: { study: CaseStudy }) {
  return (
    <section
      id="overview"
      aria-labelledby="overview-h"
      className="band band-opening"
    >
      <h1 id="overview-h" className="case-title">
        {study.title}
      </h1>
      <p className="case-standfirst">
        {study.standfirst.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </p>
      {study.summary.map((paragraph) => (
        <p key={paragraph} className="lede-rest">
          {paragraph}
        </p>
      ))}
      {study.links.length > 0 && (
        <ul className="row-links case-links" role="list">
          {study.links.map((link) => (
            <li key={link.href}>
              <a className="link" href={link.href} rel="noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

/**
 * One improvement on the scale. The gutter carries its measured reading
 * where the home page carries a date: the number first, what it measures
 * under, and one line beside it saying what was done.
 */
function EntryRow({ entry }: { entry: CaseEntry }) {
  return (
    <article className="row" aria-labelledby={`${entry.id}-h`}>
      <p className="row-meta row-reading">
        <span className="reading">{entry.reading}</span>
        <span className="row-meta-sub">{entry.readingLabel}</span>
      </p>
      <div className="row-body">
        <span className="row-marker" aria-hidden="true" />
        <h3 id={`${entry.id}-h`} className="row-title">
          {entry.title}
        </h3>
        <p className="row-note">{entry.line}</p>
        {entry.image && (
          <figure className="shot">
            <Image
              src={entry.image.src}
              alt={entry.image.alt}
              width={entry.image.width}
              height={entry.image.height}
              sizes="(min-width: 69rem) 28rem, (min-width: 48rem) calc(100vw - 16.5rem), calc(100vw - 4.5rem)"
            />
            <figcaption>{entry.image.caption}</figcaption>
          </figure>
        )}
      </div>
    </article>
  );
}
