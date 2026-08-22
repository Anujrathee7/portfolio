/**
 * Change `url` to the real domain once the site is deployed. Everything
 * else — canonical link, Open Graph, JSON-LD — is derived from it.
 */
export const site = {
  name: "Anuj Rathee",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://anujrathee.com",
  title: "Anuj Rathee",
  description:
    "Software developer in Lahti, Finland. I work on sports-facility software and on tools for supervising coding agents. Everything I've done, in one list.",
  locale: "en_GB",
  jobTitle: "Software Developer",
  worksFor: "Alusta.ai",
  alumniOf: "LUT University",
  sameAs: [
    "https://github.com/Anujrathee7",
    "https://www.linkedin.com/in/anuj-rathee",
  ],
} as const;
