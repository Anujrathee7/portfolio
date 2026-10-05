import { close } from "../content/content";

/**
 * The last reading on the scale, on every page. Its reading is "now", the
 * same amber the current role carries, which is also the answer to when
 * to write.
 */
export function Close() {
  return (
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
  );
}
