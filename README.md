# anujrathee.vercel.app

A personal site: one home page and two case-study write-ups under
`/work`. Static, one small client component, no analytics.

## Editing the content

Every number on the site has to trace back to the CV, the facts files in
the applications folder, or a commit message, and be explainable in an
interview. Work content follows the CV voice; personality stays in
`opening`.

Almost everything lives in **`app/content/content.tsx`**:

- `opening` — the two paragraphs at the top. `lede` is the thesis and
  the largest type on the page; keep it to one sentence you would be
  happy to be quoted on.
- `experience`, `education` and `recognition` — each entry has a
  one-line `summary` and optional `highlights` (what was done and what
  changed). `caseStudy` links a row to its write-up. Set
  `current: true` on anything still running; that is what lights the
  amber marker, and nothing else should.
- `projects` — a `blurb`, optional `highlights`, and links: `href`
  (source, public repos only, since a private repo is a broken link for
  everyone else), `live` and `caseStudy`. `image` is optional and
  never a placeholder.
- `workAuthorisation`, `close` and `contacts` — the end of the page and
  the rail.
- `sections` — the rail's nav. The page passes `SectionNav` a list of
  observed sections that folds Education and Recognition into
  Experience, so scrolling up from Projects doesn't leave the wrong
  entry lit.

The write-ups live in **`app/content/case-studies.ts`** and render at
`/work/[slug]`. Each one is a summary, what I owned, one entry per
problem (problem, change, check, with the measured reading in the
gutter where the home page puts a date), and the limits. Commit links
appear only for public repos.

The site URL, description and the facts in the JSON-LD live in
**`app/site.ts`**. Set `NEXT_PUBLIC_SITE_URL` at build time or change
the fallback there; the canonical link, Open Graph tags and sitemap all
derive from it.

## The design system

All of it is in **`app/globals.css`**, in reading order: tokens, base,
links, text roles, shell, rail, sections, the scale, the close, skip
link, print.

The page is built as an instrument rather than a document, because
every project listed on it is about making an exact quantity visible
where there was a vague description. Two rules carry that, and both are
easy to break by accident:

- **Amber means "now", and nothing else.** `--color-signal` (`#E8A33D`)
  marks the current role, the current degree, the section you are
  reading, the focus ring, and the closing entry. It must never be used
  for links, buttons or general emphasis — links stay ink-coloured with
  a hairline underline, and brightness does the rest of the work.
- **Mono is the machine voice, serif is the human voice.** Azeret Mono
  sets the nameplate, section labels, dates, project types and tech
  stacks — anything the page measures or classifies. Newsreader sets
  anything written in the first person. One weight each except the
  nameplate and labels, which need 500 to hold at 11px.

Beyond those:

- **A cold blue-black ground, no light variant.** `#0B0F14` background,
  `#E8E6E1` headings, `#A3AAB4` prose, `#818B96` meta, `#202833` for
  the scale, `#586373` for link underlines at rest. Nothing is
  conditional on `prefers-color-scheme`. Every text tone clears WCAG AA
  against the background and the underline clears 3:1.
- **The scale is the signature.** Each list is drawn as a hairline axis
  with a marker per entry; the dates sit right-aligned flush against
  it, and section labels align to that same edge, so the whole left
  side of the page reads as one column of readings. Its geometry lives
  in `--gutter`, `--gutter-gap`, `--axis`, `--row-pad` and `--dot-y` on
  `:root` — change it there, not in individual rules, or the labels,
  dates, axis and markers drift apart.
- **Text roles**: `.lede` and `.lede-rest` for the opening, `.label`
  for section headings (the label is the heading, never an eyebrow above one), `.note` for asides, `.row-*` for entries, plus
  the body default. That is the entire hierarchy.
- **One spacing scale**, `--space-2xs` through `--space-xl`, six steps
  ~1.6x apart.
- **Breakpoints**: 40rem (padding and type), 48rem (the date moves into
  the gutter and the scale appears), 69rem (the rail becomes a sticky
  column and the nav's markers become rules).

There is no footer. The Contact section's amber "Now" entry is the last
reading on the scale and closes the page instead.

`SectionNav` is the only client component on the site — an
IntersectionObserver that lengthens the rule beside whichever section is
in view. Everything else is a server component, and the nav degrades to
plain anchor links with JavaScript off.

`app/opengraph-image.tsx` renders the social card at build time with
`next/og`. It pulls Newsreader as a TTF from Google Fonts and falls back
to the default face if that fetch fails, so a flaky network can't break
the build.

## Running it

```bash
npm run dev     # http://localhost:3000
npm run build
npm run start
npm run lint
```
