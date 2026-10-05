/**
 * Change `url` to the real domain once the site is deployed. Everything
 * else — canonical link, Open Graph, JSON-LD — is derived from it.
 */
export const site = {
  name: "Anuj Rathee",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://anujrathee.vercel.app",
  title: "Anuj Rathee",
  description:
    "Software developer in Espoo, Finland, building a Supabase platform for sports facilities. Roles, projects and two write-ups with the measurements behind them.",
  locale: "en_GB",
  jobTitle: "Software Developer",
  worksFor: "Alusta.ai",
  alumniOf: "LUT University",
  sameAs: [
    "https://github.com/Anujrathee7",
    "https://www.linkedin.com/in/anuj-rathee-061401279/",
  ],
} as const;
