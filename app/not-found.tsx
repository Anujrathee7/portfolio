import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="shell">
      <main id="main" className="content">
        <section className="band band-plain">
          <p className="label">404</p>
          <h1 className="lede lede-404">There is nothing at this address.</h1>
          <p className="lede-rest">
            <Link className="link" href="/">
              Back to the start
            </Link>
          </p>
        </section>
      </main>
    </div>
  );
}
