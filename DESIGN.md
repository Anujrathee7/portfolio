---
name: Anuj Rathee
description: A personal site built as a measuring instrument: a cold ground, one signal colour, and a scale down the left of every list.
colors:
  paper: "#0b0f14"
  ink: "#e8e6e1"
  body: "#a3aab4"
  muted: "#818b96"
  rule: "#202833"
  hairline: "#586373"
  signal: "#e8a33d"
typography:
  display:
    fontFamily: "Newsreader, Iowan Old Style, Palatino, Georgia, serif"
    fontSize: "1.875rem"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Newsreader, Iowan Old Style, Palatino, Georgia, serif"
    fontSize: "1.375rem"
    fontWeight: 400
    lineHeight: 1.42
    letterSpacing: "-0.005em"
  nameplate:
    fontFamily: "Azeret Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "clamp(1.5rem, 5.2vw, 1.9rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "0.02em"
  title:
    fontFamily: "Newsreader, Iowan Old Style, Palatino, Georgia, serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.35
  body:
    fontFamily: "Newsreader, Iowan Old Style, Palatino, Georgia, serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.66
  label:
    fontFamily: "Azeret Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.6875rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.2em"
  meta:
    fontFamily: "Azeret Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.6875rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.1em"
  reading:
    fontFamily: "Azeret Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    letterSpacing: "0.02em"
    fontFeature: "tnum"
  destination:
    fontFamily: "Azeret Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    letterSpacing: "0.04em"
rounded:
  plate: "2px"
  marker: "50%"
spacing:
  2xs: "0.5rem"
  xs: "0.75rem"
  s: "1.25rem"
  m: "2rem"
  l: "3.25rem"
  xl: "5.25rem"
  gutter: "9rem"
  gutter-gap: "2.25rem"
  axis: "1.125rem"
  row-pad: "1.5rem"
  dot: "7px"
components:
  link:
    textColor: "inherit"
  link-hover:
    textColor: "{colors.ink}"
  section-label:
    textColor: "{colors.muted}"
    typography: "{typography.label}"
    width: "{spacing.gutter}"
  row-meta:
    textColor: "{colors.muted}"
    typography: "{typography.meta}"
    width: "{spacing.gutter}"
  reading:
    textColor: "{colors.ink}"
    typography: "{typography.reading}"
  marker:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.marker}"
    size: "{spacing.dot}"
  marker-current:
    backgroundColor: "{colors.signal}"
    rounded: "{rounded.marker}"
    size: "{spacing.dot}"
  rail-link:
    textColor: "{colors.muted}"
    typography: "{typography.label}"
  rail-link-active:
    textColor: "{colors.ink}"
  row-title:
    textColor: "{colors.ink}"
    typography: "{typography.title}"
  screenshot-plate:
    rounded: "{rounded.plate}"
---

# Design System: Anuj Rathee

## Overview

**Creative North Star: "The Instrument"**

The page is an instrument, not a document. Every piece of work on it is about making an exact quantity visible where there was a vague description, so the system is built from that: a cold blue-black ground that reads as glass, warm ink set against it, a single signal colour, and a scale drawn down the left of every list. On the home page the scale's gutter carries dates; on a case study the same gutter carries the measured result, so every improvement stands beside its number.

The type system is two voices. Azeret Mono is the machine voice: the nameplate, section labels, dates, readings, stacks, destinations; anything the page measures or classifies. Newsreader is the human voice: anything written in the first person, every title, every paragraph. The tension is stated once at the top of the rail, mono nameplate over serif tagline, and repeated everywhere below.

Density is that of a well-set write-up: one reading column (42rem max) beside a sticky identity rail, generous section breaks, prose held to 54–58ch. There is one moving part on the page (the rail's rule growing into the section being read) and no decoration beyond hairlines and markers. Dark only; there is no light theme and nothing is conditional on `prefers-color-scheme`. Print is the one exception, and it exists for paper, not as a theme.

**Key Characteristics:**
- Blue-black instrument ground, warm ink, six tones plus one signal.
- Amber means "now" and nothing else.
- Mono measures and classifies; serif speaks.
- A 1px axis with hollow markers is the signature, and its geometry lives in five shared tokens.
- Flat: depth comes from tone and hairlines, never from shadow.
- No footer; the last reading on the scale, "Now", closes every page.

## Colors

Six cool neutrals stepped by contrast against one blue-black ground, and a single warm amber held in reserve.

### Primary
- **Signal Amber** (`{colors.signal}`, 8.91:1): the only accent. It marks what is current: the filled marker of a running role or degree, the rail rule beside the section in view, the closing "Now" entry, the focus ring, and text selection. Nothing else.

### Neutral
- **Instrument Ground** (`{colors.paper}`): the page background, and the fill of hollow markers so the axis appears to pass behind them.
- **Warm Ink** (`{colors.ink}`, 15.41:1): headings, the lede, titles, the closing line, readings, and link hover. A warm off-white so it sits against the cold ground rather than on it.
- **Prose Grey** (`{colors.body}`, 8.21:1): the body default for paragraphs and list text.
- **Meta Grey** (`{colors.muted}`, 5.55:1): section labels, dates, reading sub-labels, stacks, captions, inactive nav.
- **Axis Line** (`{colors.rule}`): the scale's axis, marker rings, the screenshot frame. Structural only; never text.
- **Hairline** (`{colors.hairline}`, 3.15:1): link underlines at rest and the ticks on impact lines. It clears 3:1 so an underline is visible without hover.

### Named Rules
**The Amber Means Now Rule.** Signal amber marks the current role, the current degree, the section being read, the focus ring, selection and the closing entry. If it ever appears on a link, a button or general emphasis, the system has broken. Links stay text-coloured with a hairline underline.

**The No Light Variant Rule.** The ground is blue-black and stays blue-black. Every text tone is tuned to clear WCAG AA against it; a light theme would invalidate every ratio above.

## Typography

**Display Font:** Newsreader, weight 400 only (with Iowan Old Style, Palatino, Georgia)
**Body Font:** Newsreader (same stack)
**Label/Mono Font:** Azeret Mono, weights 400 and 500 (with ui-monospace, SFMono-Regular, Menlo)

**Character:** A literary serif carrying the first-person voice against a wide, engineered mono carrying the measurements. One weight each, except that uppercase mono at 11px needs 500 to hold. `font-synthesis-weight: none` keeps the browser from faking anything else.

### Hierarchy
- **Display** (400, 1.875rem stepping to 2.375rem at 40rem and 2.75rem at 69rem, 1.15): the case-study title. Nothing sits above it.
- **Headline / Lede** (400, 1.375rem stepping to 1.75rem and 2rem, 1.42, Warm Ink, 24–26ch): the home page thesis, the first thing read. Also the 404 line.
- **Nameplate** (mono 500, clamp(1.5rem, 5.2vw, 1.9rem), uppercase, 0.02em): the name in the rail. On the home page it is the h1; elsewhere it links home.
- **Tagline / Outro** (400, 1.25rem stepping to 1.375rem / 1.4375rem, Warm Ink): the line under the nameplate and the closing line.
- **Title** (400, 1.125rem stepping to 1.1875rem, 1.35): an entry on the scale.
- **Body** (400, 1.0625rem stepping to 1.125rem at 40rem, 1.66): prose, held to 54–58ch. Impact lines and lede-rest run slightly tighter (1.6, 1.62).
- **Label** (mono 500, 0.6875rem, 0.2em, uppercase, Meta Grey): section names. The rail's nav labels (0.18em) are the same role with tighter tracking.
- **Meta** (mono 400, 0.6875rem, 0.1em, uppercase, Meta Grey): dates and project types in the gutter, and standfirst lines (0.14em) under the nameplate and the case title.
- **Reading** (mono 400, 0.8125rem stepping to 0.875rem at 48rem, 0.02em, tabular figures, Warm Ink, no case transform): a measured quantity in the gutter. It keeps its case because ms is not MS.
- **Destination** (mono 400, 0.75rem, 0.04em): contacts, entry links, the back link. These are places to go, not prose.

### Named Rules
**The Two Voices Rule.** Mono for anything the page measures or classifies; serif for anything written in the first person. Never set a sentence of prose in mono or a date in serif.

**The Label Is The Heading Rule.** A section's mono label is that section's heading (the h2), not a kicker above one. Nothing is stacked above a title: the opening band carries no label at all, and the case study's role, organisation and period sit under its title.

**The Only Uppercase Rule.** Uppercase belongs to the nameplate and the small mono roles (labels, meta, standfirsts). Serif is never uppercased, and readings never are.

## Layout

A sticky identity rail beside a scrolling column of sections. Below 69rem it is one column and the rail is an ordinary header; at 69rem the shell becomes a grid of `minmax(15rem, 17rem)` and `minmax(0, 42rem)` with a 4.5rem gap, centred in a 76rem container. Rail and content share a 5.5rem top offset so the nameplate and the first line of content start on the same line. Shell padding is 1.5rem, 2.5rem from 40rem, 3rem from 69rem.

**The scale.** Each list is drawn as a 1px axis with a marker per entry. Below 48rem the axis runs down the left edge and the date sits above each entry. From 48rem each row becomes a two-column grid: a `{spacing.gutter}` gutter, a `{spacing.gutter-gap}` gap, and the body. The axis sits `{spacing.axis}` into that gap from the body edge; dates sit right-aligned flush against it, and section labels are right-aligned in the same gutter width, so the whole left edge reads as one column of readings. Rows abut and each carries `{spacing.row-pad}` above and below, so the axis draws as one unbroken line overshooting the first and last marker by one row's padding.

**Off-scale content aligns to the body edge.** Prose that belongs to a labelled section but is not a list of entries (ownership) and the work-authorisation note are indented by `gutter + gutter-gap` from 48rem, so the gutter stays a column of labels and readings and nothing else.

**Spacing.** Six steps about 1.6x apart, `{spacing.2xs}` through `{spacing.xl}`, so each gap is unmistakably different from its neighbours. Sections open with `l`, rising to `xl` at 69rem; a continuation (Education and Recognition after Experience, Ownership after Overview) opens with `m`, rising to `l`.

**Breakpoints.** 40rem: padding and type step up. 48rem: the date moves into the gutter and the scale appears. 69rem: the rail becomes a sticky column and the nav markers become rules.

### Named Rules
**The Shared Geometry Rule.** Gutter, gutter gap, axis, row padding and marker offset are defined once on `:root`. Change them there, never in an individual rule, or the labels, dates, axis and markers drift apart.

## Elevation & Depth

Flat. There are no drop shadows anywhere. Depth is tone (ink over prose over meta over axis on one ground) and hairlines. The only `box-shadow` values in the system are rings drawn with it: a 1px inset ring that makes a marker hollow, a soft 3px amber halo at 16% around the current marker, and a 1px amber ring on the focused skip link.

### Shadow Vocabulary
- **Marker ring** (`box-shadow: inset 0 0 0 1px var(--color-rule)`): a hollow marker at rest; the ring lifts to Meta Grey on row hover.
- **Current halo** (`box-shadow: inset 0 0 0 1px var(--color-signal), 0 0 0 3px color-mix(in srgb, var(--color-signal) 16%, transparent)`): the filled marker of something still running, and the closing "Now".

### Named Rules
**The Glass Not Paper Rule.** Nothing lifts off the ground. If a new element seems to need a shadow to separate, it needs a hairline or a tone step instead.

## Shapes

Hairlines and points. Corners are square by default; the only radius is a 2px softening on the screenshot plate, the focus ring and the skip link, and the only round shape is the 7px marker. The recurring geometry is the 1px line: the axis, the screenshot frame, link underlines, the 0.625rem hairline tick that starts each impact line, and the rail rule that grows from 1.25rem to 2.25rem on hover and 3rem when active.

## Components

### Links
Text-coloured, marked only by the underline.
- **Rest:** inherits the surrounding colour, 1px underline in Hairline at a 0.22em offset.
- **Hover:** text and underline go to Warm Ink over 120ms.
- **Focus:** 2px Signal Amber outline, 3px offset, 2px radius, for every link, summary and button.
- **Destinations:** groups of links set in the destination mono role (contacts, entry links, case-study source links, the rail's back link) wrap with a `2xs` by `s` gap.

### Navigation
The rail's section nav. Mono labels in Meta Grey, each preceded by the same marker the scale uses.
- **Below 69rem:** one wrapping row of labels, each with a 7px hollow dot; the active entry's dot fills amber.
- **From 69rem:** a vertical list; the dot becomes a 1px rule 1.25rem long in the current text colour, growing to 2.25rem on hover and 3rem in amber for the section in view (220ms, `cubic-bezier(0.22, 0.61, 0.36, 1)`). This is the page's one moving part.
- **Active / hover:** label goes to Warm Ink.
- **Without JavaScript:** plain anchor links.

### The Scale Row (signature)
An entry on the axis: gutter text, a marker, and a body.
- **Gutter:** a date (meta role, with a sub-line for what the thing is) on the home page; a reading (reading role in Warm Ink, label under it in meta) on a case study.
- **Marker:** 7px circle at `--dot-y` from the top of the body, hollow at rest, ring lifts on hover, filled amber with halo only when the entry is current.
- **Body:** title in Warm Ink, an optional organisation in Meta Grey, a one-line note (54ch), then any of impact lines, a stack, destinations, or a screenshot. On a case study the body is the title and one line.

### Impact Lines
What was done, one line each, ticked off the scale with a 0.625rem Hairline tick instead of a bullet. 58ch, `2xs` between lines. Inside off-scale prose they take the prose size.

### Stack
Technologies as a single mono line in Meta Grey (0.6875rem, 0.06em), separated by middots.

### Screenshot Plate
The bright plate on the dark page is a deliberate break, so it is framed rather than dimmed: 1px Axis Line border, 2px radius, full body width, and a mono caption in Meta Grey under it (52ch). Never a placeholder.

### The Close
The last row on every page, under a "Get in touch" label. Its gutter reads "Now" with the current marker, the line is set in the outro role, and the email sits under it as a destination. There is no footer.

## Do's and Don'ts

### Do:
- **Do** reserve Signal Amber for what is current: running roles, the section in view, the closing "Now", focus and selection.
- **Do** mark links with the Hairline underline at rest (3.15:1) and let hover brighten to Warm Ink.
- **Do** set anything measured or classified in Azeret Mono and anything written in the first person in Newsreader.
- **Do** put a new list on the scale: axis, marker per entry, and its date or reading right-aligned in the 9rem gutter.
- **Do** keep readings in their own case with tabular figures, at full ink.
- **Do** align off-scale prose to the row-body edge from 48rem so the gutter only ever holds labels and readings.
- **Do** change scale geometry only through `--gutter`, `--gutter-gap`, `--axis`, `--row-pad` and `--dot-y`.
- **Do** pick spacing from the six steps, `2xs` through `xl`.

### Don't:
- **Don't** put amber on a link, a button, or anything used for emphasis.
- **Don't** add a light theme or anything conditional on `prefers-color-scheme`.
- **Don't** stack a kicker or eyebrow above a heading. A section's mono label is its heading; standfirst lines go under the title.
- **Don't** add drop shadows, gradients or tinted surfaces to separate things; use a hairline or a tone step.
- **Don't** use bullets in lists of work; tick them with the hairline.
- **Don't** add a footer; the closing "Now" row ends the page.
- **Don't** add new Newsreader or Azeret weights; Newsreader is 400 only and Azeret 500 is for 11px uppercase roles and the nameplate.
- **Don't** add a second moving part; the rail rule is the only motion, and all motion collapses under `prefers-reduced-motion`.
