import Link from "next/link";
import { contacts, intro } from "../content/content";
import { SectionNav, type NavItem, type Observed } from "./SectionNav";

/**
 * Left rail: who, then how to move around, then how to reach me. Sticky
 * on desktop, an ordinary header on smaller screens.
 *
 * On the home page the nameplate is the page's h1. Elsewhere the page has
 * its own h1, so the nameplate becomes the way home.
 */
export function Rail({
  items,
  observe,
  home = false,
}: {
  items: readonly NavItem[];
  observe: readonly Observed[];
  home?: boolean;
}) {
  return (
    <header className="rail">
      <div className="rail-inner">
        {home ? (
          <h1 className="nameplate">{intro.name}</h1>
        ) : (
          <p className="nameplate">
            <Link className="nameplate-link" href="/">
              {intro.name}
            </Link>
          </p>
        )}
        <p className="tagline">{intro.tagline}</p>
        <p className="rail-standfirst">
          {intro.standfirst.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </p>

        {!home && (
          <p className="rail-back">
            <Link className="link" href="/#experience">
              Back to all work
            </Link>
          </p>
        )}

        <SectionNav items={items} observe={observe} />

        {/* role="list" because the CSS reset removes the bullets, and
            Safari drops list semantics when it does. */}
        <ul className="rail-contacts" role="list">
          {contacts.map((contact) => (
            <li key={contact.href}>
              <a className="link" href={contact.href} rel="me">
                {contact.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
