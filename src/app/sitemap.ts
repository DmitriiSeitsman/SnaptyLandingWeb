import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://snapty.pro",
      lastModified: new Date(),
    },
  ];
}
