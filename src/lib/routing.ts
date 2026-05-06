import type { Locale } from "@/i18n/types";
import { SITE_ORIGIN } from "@/lib/constants";

export type SitePath = "" | "policy" | "support";

/** Trailing-slash URLs matching next.config trailingSlash. */
export function localizedPath(locale: Locale, segment: SitePath): string {
  if (locale === "en") {
    if (segment === "") return "/";
    return `/${segment}/`;
  }
  if (segment === "") return "/ru/";
  return `/ru/${segment}/`;
}

export function absoluteUrl(locale: Locale, segment: SitePath): string {
  const path = localizedPath(locale, segment);
  const base = SITE_ORIGIN.replace(/\/$/, "");
  // Keep trailing slash for `/` — matches Next `trailingSlash: true` and Telegram-friendly paste.
  if (path === "/") return `${base}/`;
  return base + path;
}

export function oppositeLocale(locale: Locale): Locale {
  return locale === "en" ? "ru" : "en";
}

export function pathForOppositeLanguage(
  pathname: string | null,
  currentLocale: Locale,
): { locale: Locale; href: string } {
  const target = oppositeLocale(currentLocale);
  const seg = segmentFromPathname(pathname);
  return { locale: target, href: localizedPath(target, seg) };
}

export function segmentFromPathname(pathname: string | null): SitePath {
  if (!pathname) return "";
  const parts = pathname.split("/").filter(Boolean);
  const idx = parts[0] === "ru" ? 1 : 0;
  const key = parts[idx];
  if (key === "policy" || key === "support") return key;
  return "";
}

export function localeFromPathname(pathname: string | null): Locale {
  if (!pathname) return "en";
  return pathname.startsWith("/ru") ? "ru" : "en";
}
