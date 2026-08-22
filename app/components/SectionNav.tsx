"use client";

import { useEffect, useState } from "react";
import { sections } from "../content/content";

/**
 * The only client component on the site. It highlights whichever section
 * is currently in view by lengthening its rule. The rail is otherwise a
 * plain list of anchor links and works with JS disabled.
 *
 * Education has no entry of its own in the rail, so it is observed and
 * folded into Experience — otherwise scrolling up from Projects would
 * leave "Projects" lit while Education filled the screen. Everything
 * else maps to itself.
 */
const OBSERVED: { id: string; nav: string }[] = [
  { id: "about", nav: "about" },
  { id: "experience", nav: "experience" },
  { id: "education", nav: "experience" },
  { id: "projects", nav: "projects" },
  { id: "contact", nav: "contact" },
];

export function SectionNav() {
  // Null until the observer has run, so nothing is announced as current
  // before we know — including when JavaScript never runs at all.
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const targets = OBSERVED.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => el !== null,
    );

    if (targets.length === 0) return;

    const navFor = new Map(OBSERVED.map((s) => [s.id, s.nav]));
    const seen = new Map<string, boolean>();

    const observer = new IntersectionObserver(
      (entries) => {
        // `entries` only carries targets whose state changed, so keep a
        // running picture of everything and pick the topmost.
        for (const entry of entries) {
          seen.set(entry.target.id, entry.isIntersecting);
        }

        const current = targets
          .filter((el) => seen.get(el.id))
          .sort(
            (a, b) =>
              a.getBoundingClientRect().top - b.getBoundingClientRect().top,
          )[0];

        if (current) setActive(navFor.get(current.id) ?? current.id);
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav aria-label="Sections" className="rail-nav">
      <ul role="list">
        {sections.map((section) => {
          const isActive = active === section.id;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="rail-link"
                data-active={isActive || undefined}
                aria-current={isActive ? "location" : undefined}
              >
                <span className="rail-rule" aria-hidden="true" />
                <span className="rail-label">{section.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
