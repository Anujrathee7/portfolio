---
version: 1
slug: "app-work-slug-page-tsx"
primary_target: "app/work/[slug]/page.tsx"
related_targets: []
---

# Surface: case studies (/work/[slug])

Scope: the case-study route, one page per slug (alusta, relex). Mode: Read.
Audience: hiring managers and engineers checking depth, ownership and whether claims hold up.
Job: understand what the system is, which part was Anuj's, and how each result was measured.
Constraints: inherits the home page's instrument world (see DESIGN.md); copy follows PRODUCT.md voice; Alusta detail stays at outcome level, no internal screenshots.
Alusta detail: outcome level only (see PRODUCT.md constraints).

## Direction contract

THESIS: A case study is an engineer's write-up laid on the same scale as the home page. The gutter that holds dates on the home page holds the measured reading here, so every improvement carries its number beside it. It refuses the marketing case study: hero image, big-stat tiles, testimonial, and the hero-metric template.

OWN-WORLD: Inherited unchanged. Blue-black ground #0b0f14, ink #e8e6e1, prose #a3aab4, meta #818b96, axis #202833, hairline #586373, amber #e8a33d only for "now" and focus. Newsreader for prose and titles, Azeret Mono for readings, labels and stacks. 1px axis with hollow markers, tabular numerals in readings.

STORY: The visitor learns what the system is and which parts were Anuj's, then reads each improvement as one short line with its measured result beside it. Nothing on the page argues against the work. They leave able to repeat two numbers.

FIRST VIEWPORT: Rail left: nameplate, tagline, a back link to all work, this page's section nav, contacts. Content column: the title at lede scale, a mono line under it with role, organisation and period, a summary paragraph, an ownership paragraph, and source links. No eyebrow above the title. The first scale entry, with its reading in the gutter, starts at or just below the fold.

FORM: Engineering write-up (postmortem/design-doc structure), position 3 on the ordered list, dealt as the lead. Seed key 86c24d6c.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
