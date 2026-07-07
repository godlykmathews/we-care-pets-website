import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/business";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/privacy-policy",
    "/terms-and-conditions",
    "/boarding-policy",
    "/cancellation-policy",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route ? "yearly" : "monthly",
    priority: route ? 0.6 : 1,
  }));
}
