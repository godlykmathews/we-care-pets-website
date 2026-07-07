import type { MetadataRoute } from "next";
import { businessConfig, websiteUrlPlaceholder } from "@/lib/business";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = businessConfig.websiteUrl || websiteUrlPlaceholder;
  const routes = [
    "",
    "/privacy-policy",
    "/terms-and-conditions",
    "/boarding-policy",
    "/cancellation-policy",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route ? "yearly" : "monthly",
    priority: route ? 0.6 : 1,
  }));
}
