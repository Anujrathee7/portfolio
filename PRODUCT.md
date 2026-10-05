# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Hiring managers and engineers at product companies in Finland (Smartly, RELEX, Wolt and similar) who
open the portfolio after a CV screen, because they think the candidate might have potential. They
are judging three things: how deep the work went, which part of it was Anuj's, and whether the
claims will hold up when they ask about them in a later interview round. Some companies' hiring
managers read this page carefully; a weak page costs more than no page.

## Product Purpose

The personal site of Anuj Rathee, a software developer in Espoo, Finland. It exists to carry more
evidence than a CV can: what was built, what changed because of it, and how that was measured. Success is a hiring manager finishing the page able to name two concrete things
Anuj did and the numbers behind them, and wanting to ask about them.

## Positioning

The CV lists results. The site shows the working behind them: before and after numbers with how
they were measured, and which share of team work was Anuj's. A
production or performance claim on this site is something he can walk through line by line.

## Operating Context

- Read on a laptop between other candidates, sometimes on a phone from a link in an email or ATS.
- Read alongside the CV (`Desktop/projects/applications/Anuj-Rathee-CV.html`), so the two must never
  disagree on a date, title, degree status or number.
- Referrers forward it. A broken link (LinkedIn was broken once) reads as carelessness.

## Capabilities and Constraints

- Next.js 16 app router, static output, deployed at https://anujrathee.vercel.app.
- One home page (roles, recognition, projects, contact) and case-study pages under `/work/[slug]`.
- All copy lives in `app/content/`. Facts come only from the CV, the facts files in
  `Desktop/projects/applications/` and commit history.
- Alusta.ai is the current employer. Public detail stays at outcome level: what Anuj built and what
  it measured. Never its security design, infrastructure internals, product bugs, vendor issues,
  internal incidents, team or commit figures, screenshots or code.
- The BSc is completed (2026). The site must not read as a student who has not graduated.

## Brand Commitments

- Voice in work content follows the CV rules: plain past-tense verbs (Built, Cut, Fixed, Set up), no
  selling adjectives, no em dashes or semicolons, never two consecutive bullets opening on the same
  word, numbers only where real.
- Personality lives in the About opening, not in role or project lines.
- Seonali is described as a live product with real users, without the word "production" and without
  a latency percentage.

## Evidence on Hand

- Alusta: 127 row-level security policies rewritten (a year of soil readings 2.1 s to 79 ms, task
  list 347 ms to 45 ms). Soil Scout sync with a three-year backfill. Year-long chart 33 MB to
  0.43 MB. Initial JS 456 to 268 KB. 109 Playwright tests against a local Supabase stack.
- Seonali: around 500 monthly users, 10,000 API requests a week.
- RELEX challenge, AaltoAI Hackathon, September 2026: runner-up, team of three. Retrieval numbers in
  `Desktop/projects/applications/relex-hackathon-2026.md` and the relex-ai commit log.
- Teknoware hackathon winner, 2025. LUT Excellence Academic Scholarship (60% of tuition).
- Letterly: live app, 163 automated checks, one real screenshot in `public/work/`.
- Absent and not to be fabricated: testimonials, team-wide outcomes not attributable to Anuj, any
  repo for the desktop agent client or the delegation workflow.

## Product Principles

1. Every number has a source and a method. If it can't be explained in an interview, it doesn't ship.
2. Say whose work it was. Team results name the team; Anuj's share is stated separately.
3. Lead with the improvement. One short line per change, the number beside it, nothing that argues
   against the work.
4. Glanceable everywhere. The home page scans in a minute, and each write-up entry is one line.

## Accessibility & Inclusion

WCAG AA contrast on every text tone, full keyboard path with a visible focus ring, works without
JavaScript, print styles for people who print CVs.
