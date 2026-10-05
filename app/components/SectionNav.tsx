"use client";

import { useEffect, useState } from "react";

export type NavItem = { id: string; label: string };

/** A section on the page, and the nav entry that lights while it is in view. */
export type Observed = { id: string; nav: string };

/**
 * The only client component on the site. It highlights whichever section
 * is currently in view by lengthening its rule. The rail is otherwise a
 * plain list of anchor links and works with JS disabled.
 *
 * Sections without a nav entry of their own (Education, Recognition) are
 * observed and folded into the entry they continue, so scrolling up from
 * Projects never leaves the wrong label lit.
 */
export function SectionNav({
  items,
  observe,
}: {
  items: readonly NavItem[];
  observe: readonly Observed[];
}) {
  // Null until the observer has run, so nothing is announced as current
  // before we know, including when JavaScript never runs at all.
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const targets = observe
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    if (targets.length === 0) return;

    const navFor = new Map(observe.map((s) => [s.id, s.nav]));
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
  }, [observe]);

  return (
    <nav aria-label="Sections" className="rail-nav">
      <ul role="list">
        {items.map((section) => {
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
