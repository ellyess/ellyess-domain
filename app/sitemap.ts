import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";

const base = "https://ellyess.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${base}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/research`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/code`, changeFrequency: "monthly", priority: 0.8 },
    ...projects.map((p) => ({
      url: `${base}/work/${p.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ];
}
