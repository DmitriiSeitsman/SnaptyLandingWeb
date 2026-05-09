import type { Metadata } from "next";
import type { Messages } from "@/i18n/types";
import { absoluteUrl, localizedPath, type SitePath } from "@/lib/routing";
import {
  SOCIAL_SHARE_IMAGE_HEIGHT,
  SOCIAL_SHARE_IMAGE_PATH,
  SOCIAL_SHARE_IMAGE_WIDTH,
} from "@/lib/constants";

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
  const ogPath = localizedPath(locale, pathnameSegment);

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
      url: ogPath,
      siteName,
      locale: locale === "ru" ? "ru_RU" : "en_US",
      alternateLocale: locale === "ru" ? ["en_US"] : ["ru_RU"],
      type: "website",
      images: [
        {
          url: SOCIAL_SHARE_IMAGE_PATH,
          width: SOCIAL_SHARE_IMAGE_WIDTH,
          height: SOCIAL_SHARE_IMAGE_HEIGHT,
          alt: `${siteName} website preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageSeo.title,
      description: pageSeo.description,
      images: [
        {
          url: SOCIAL_SHARE_IMAGE_PATH,
          alt: `${siteName} website preview`,
        },
      ],
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
