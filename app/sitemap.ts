import type { MetadataRoute } from "next";
import { caseStudies } from "./content/case-studies";
import { site } from "./site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "monthly", priority: 1 },
    ...caseStudies.map((study) => ({
      url: `${site.url}/work/${study.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
