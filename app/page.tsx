import Image from "next/image";
import { SectionNav } from "./components/SectionNav";
import {
  close,
  contacts,
  education,
  experience,
  intro,
  opening,
  projects,
  workAuthorisation,
  type Project,
  type Role,
} from "./content/content";

export default function Page() {
  return (
    <div className="shell">
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      {/* Left rail: who, then how to move around, then how to reach me.
          Sticky on desktop, an ordinary header on smaller screens. */}
      <header className="rail">
        <div className="rail-inner">
          <h1 className="nameplate">{intro.name}</h1>
          <p className="tagline">{intro.tagline}</p>
          <p className="rail-standfirst">
            {intro.standfirst.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </p>

          <SectionNav />

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

      <main id="main" tabIndex={-1} className="content">
        {/* The opening runs without an eyebrow. It is the top of the
            page; the first line is the thesis, not a section of one. */}
        <section
          id="about"
          aria-labelledby="about-h"
          className="band band-opening"
        >
          <h2 id="about-h" className="sr-only">
            About
          </h2>
          <p className="lede">{opening.lede}</p>
          <p className="lede-rest">{opening.rest}</p>
        </section>

        <section id="experience" aria-labelledby="experience-h" className="band">
          <h2 id="experience-h" className="label">
            Experience
          </h2>
          <div className="rows">
            {experience.map((role) => (
              <RoleRow key={role.id} role={role} />
            ))}
          </div>
        </section>

        <section
          id="education"
          aria-labelledby="education-h"
          className="band band-continues"
        >
          <h2 id="education-h" className="label">
            Education
          </h2>
          <div className="rows">
            <RoleRow role={education} />
          </div>

          <p className="note work-auth">{workAuthorisation}</p>
        </section>

        <section id="projects" aria-labelledby="projects-h" className="band">
          <h2 id="projects-h" className="label">
            Projects
          </h2>
          <div className="rows">
            {projects.map((project) => (
              <ProjectRow key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section id="contact" aria-labelledby="contact-h" className="band">
          <h2 id="contact-h" className="label">
            Get in touch
          </h2>
          <div className="rows">
            <div className="row row-close" data-current>
              <p className="row-meta">Now</p>
              <div className="row-body">
                <span className="row-marker" aria-hidden="true" />
                <p className="outro">{close.line}</p>
                <p className="outro-mail">
                  <a className="link" href={`mailto:${close.email}`}>
                    {close.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

/** Period in the gutter, flush against the scale; the role beside it. */
function RoleRow({ role }: { role: Role }) {
  return (
    <div className="row" data-current={role.current || undefined}>
      <p className="row-meta">{role.period}</p>
      <div className="row-body">
        <span className="row-marker" aria-hidden="true" />
        <h3 className="row-title">
          {role.title}
          <span className="row-org"> · {role.org}</span>
        </h3>
        <p className="row-note">{role.note}</p>
      </div>
    </div>
  );
}

function ProjectRow({ project }: { project: Project }) {
  const heading = (
    <>
      {project.name}
      {project.href && (
        <span className="row-arrow" aria-hidden="true">
          ↗
        </span>
      )}
    </>
  );

  return (
    <div className="row">
      <p className="row-meta">
        {project.year}
        <span className="row-meta-sub">{project.type}</span>
      </p>
      <div className="row-body">
        <span className="row-marker" aria-hidden="true" />
        <h3 className="row-title">
          {project.href ? (
            <a className="row-link" href={project.href} rel="noreferrer">
              {heading}
              <span className="sr-only"> — source on GitHub</span>
            </a>
          ) : (
            heading
          )}
        </h3>
        <p className="row-note">{project.blurb}</p>
        {/* A real list: the separators are drawn in CSS, so the accessible
            name doesn't come out as "TypeScriptNext.jsreact-pdf". */}
        <ul className="stack" role="list">
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {project.image && (
          <figure className="shot">
            <Image
              src={project.image.src}
              alt={project.image.alt}
              width={project.image.width}
              height={project.image.height}
              sizes="(min-width: 80rem) 28rem, (min-width: 69rem) 24rem, (min-width: 48rem) min(calc(100vw - 15.5rem), 30rem), (min-width: 40rem) calc(100vw - 5.1rem), calc(100vw - 4.5rem)"
            />
            <figcaption>{project.image.caption}</figcaption>
          </figure>
        )}
      </div>
    </div>
  );
}
