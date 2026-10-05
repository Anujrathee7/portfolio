import Image from "next/image";
import Link from "next/link";
import { Close } from "./components/Close";
import { Points } from "./components/Points";
import { Rail } from "./components/Rail";
import {
  education,
  experience,
  opening,
  projects,
  recognition,
  sections,
  workAuthorisation,
  type Project,
  type Role,
} from "./content/content";

/** Education and Recognition continue Experience, so they light it. */
const OBSERVED = [
  { id: "about", nav: "about" },
  { id: "experience", nav: "experience" },
  { id: "education", nav: "experience" },
  { id: "recognition", nav: "experience" },
  { id: "projects", nav: "projects" },
  { id: "contact", nav: "contact" },
] as const;

export default function Page() {
  return (
    <div className="shell">
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <Rail items={sections} observe={OBSERVED} home />

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

        <section
          id="recognition"
          aria-labelledby="recognition-h"
          className="band band-continues"
        >
          <h2 id="recognition-h" className="label">
            Recognition
          </h2>
          <div className="rows">
            {recognition.map((item) => (
              <RoleRow key={item.id} role={item} />
            ))}
          </div>
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

        <Close />
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
        <p className="row-note">{role.summary}</p>
        {role.highlights && <Points items={role.highlights} />}
        {role.caseStudy && (
          <p className="row-links">
            <Link className="link" href={`/work/${role.caseStudy}`}>
              Read the write-up
              <span className="sr-only">: {role.title}, {role.org}</span>
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}

function ProjectRow({ project }: { project: Project }) {
  const links: { label: string; href: string; internal: boolean }[] = [];
  if (project.caseStudy) {
    links.push({ label: "Write-up", href: `/work/${project.caseStudy}`, internal: true });
  }
  if (project.live) links.push({ label: "Live", href: project.live, internal: false });
  if (project.href) links.push({ label: "Source", href: project.href, internal: false });

  return (
    <div className="row">
      <p className="row-meta">
        {project.year}
        <span className="row-meta-sub">{project.type}</span>
      </p>
      <div className="row-body">
        <span className="row-marker" aria-hidden="true" />
        <h3 className="row-title">{project.name}</h3>
        <p className="row-note">{project.blurb}</p>
        {project.highlights && <Points items={project.highlights} />}
        {/* A real list: the separators are drawn in CSS, so the accessible
            name doesn't come out as "TypeScriptNext.jsreact-pdf". */}
        <ul className="stack" role="list">
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {links.length > 0 && (
          <ul className="row-links" role="list">
            {links.map((link) => (
              <li key={link.href}>
                {link.internal ? (
                  <Link className="link" href={link.href}>
                    {link.label}
                    <span className="sr-only">: {project.name}</span>
                  </Link>
                ) : (
                  <a className="link" href={link.href} rel="noreferrer">
                    {link.label}
                    <span className="sr-only">: {project.name}</span>
                  </a>
                )}
              </li>
            ))}
          </ul>
        )}
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
