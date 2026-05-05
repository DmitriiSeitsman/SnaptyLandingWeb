import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://snapty.pro",
      lastModified: "2026-05-05",
    },
  ];
}
