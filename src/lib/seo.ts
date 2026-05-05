import type { Metadata } from "next";
import type { Messages } from "@/i18n/types";
import { absoluteUrl, type SitePath } from "@/lib/routing";

function joinKeywords(parts: string[]): string {
  return [...new Set(parts)].join(", ");
}

type PageKey = "home" | "policy" | "support";

const segmentForPage: Record<PageKey, SitePath> = {
  home: "",
  policy: "policy",
  support: "support",
};

export function buildPageMetadata(messages: Messages, page: PageKey): Metadata {
  const pathnameSegment = segmentForPage[page];
  const { locale, seo, siteName, siteUrl } = messages;
  const pageSeo = seo[page];

  const canonical = absoluteUrl(locale, pathnameSegment);
  const enUrl = absoluteUrl("en", segmentForPage[page]);
  const ruUrl = absoluteUrl("ru", segmentForPage[page]);

  const allKeywords = joinKeywords([
    ...seo.siteKeywords,
    ...pageSeo.keywords,
  ]);

  return {
    metadataBase: new URL(siteUrl),
    title: pageSeo.title,
    description: pageSeo.description,
    keywords: allKeywords,
    applicationName: siteName,
    alternates: {
      canonical,
      languages: {
        en: enUrl,
        ru: ruUrl,
        "x-default": enUrl,
      },
    },
    openGraph: {
      title: pageSeo.title,
      description: pageSeo.description,
      url: canonical,
      siteName,
      locale: locale === "ru" ? "ru_RU" : "en_US",
      alternateLocale: locale === "ru" ? ["en_US"] : ["ru_RU"],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageSeo.title,
      description: pageSeo.description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

/** Home-only JSON-LD for SoftwareApplication-style hints. */
export function homeJsonLd(messages: Messages, appStoreUrl: string): string {
  const { siteName, jsonLd, seo } = messages;
  const homeUrl = absoluteUrl(messages.locale, "");
  const data = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteName,
    applicationCategory: "PhotographyApplication",
    operatingSystem: "iOS",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    url: homeUrl,
    description: seo.home.description,
    downloadUrl: appStoreUrl,
    featureList: jsonLd.featureList,
  };
  return JSON.stringify(data);
}
