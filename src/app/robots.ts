import type { MetadataRoute } from "next";
import { businessConfig, websiteUrlPlaceholder } from "@/lib/business";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = businessConfig.websiteUrl || websiteUrlPlaceholder;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
