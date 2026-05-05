import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE = "https://snapty.pro";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-05-06");
  const paths = [
    "/",
    "/policy/",
    "/support/",
    "/ru/",
    "/ru/policy/",
    "/ru/support/",
  ];

  return paths.map((path) => ({
    url: `${BASE.replace(/\/$/, "")}${path}`,
    lastModified,
    changeFrequency: path === "/" || path === "/ru/" ? "weekly" : "monthly",
    priority: path === "/" || path === "/ru/" ? 1 : 0.7,
  }));
}
