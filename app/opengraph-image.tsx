import { ImageResponse } from "next/og";
import { site } from "./site";

export const alt = `${site.name} — software developer in Lahti, Finland`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PAPER = "#0b0f14";
const INK = "#e8e6e1";
const MUTED = "#818b96";
const RULE = "#202833";
/** Amber means now, here as on the page itself. */
const SIGNAL = "#e8a33d";

// The rail's tagline, so the card says the same thing the page does.
const HEADLINE = "Mostly trying to work out how things actually work.";

/**
 * Satori can't read woff2, and the Google CSS API only serves ttf to an
 * ancient User-Agent — hence the spoof. If any of it fails the card still
 * renders, just in the fallback face, so a flaky build never breaks.
 */
async function loadNewsreader(): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=Newsreader&text=${encodeURIComponent(
        HEADLINE,
      )}`,
      { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64)" } },
    ).then((res) => res.text());

    const url = css.match(/src:\s*url\(([^)]+)\)/)?.[1];
    if (!url) return null;

    return await fetch(url).then((res) => res.arrayBuffer());
  } catch {
    return null;
  }
}

export default async function OpengraphImage() {
  const newsreader = await loadNewsreader();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: PAPER,
          color: INK,
          padding: "84px 96px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: MUTED,
          }}
        >
          {site.name}
        </div>

        <div
          style={{
            display: "flex",
            fontFamily: newsreader ? "Newsreader" : undefined,
            fontSize: 86,
            lineHeight: 1.12,
            letterSpacing: "-0.01em",
          }}
        >
          {HEADLINE}
        </div>

        {/* The scale, abstracted to its last reading: an axis, and the
            amber marker for now. Same device the page is built on. */}
        <div style={{ display: "flex", alignItems: "center", height: 18 }}>
          <div style={{ display: "flex", width: 640, height: 2, background: RULE }} />
          <div
            style={{
              display: "flex",
              width: 18,
              height: 18,
              marginLeft: -9,
              borderRadius: 9,
              background: SIGNAL,
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: newsreader
        ? [{ name: "Newsreader", data: newsreader, weight: 400, style: "normal" }]
        : [],
    },
  );
}
