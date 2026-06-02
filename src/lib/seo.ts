import type { Metadata } from "next";
import type { FaqItem, Messages } from "@/i18n/types";
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

  const ogTitle =
    page === "home" ? seo.home.ogTitle : pageSeo.title;
  const ogDescription =
    page === "home" ? seo.home.ogDescription : pageSeo.description;

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
      title: ogTitle,
      description: ogDescription,
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
          alt: `${siteName} — photo shoot planner for iPhone, iPad and Mac`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
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

function softwareApplicationJsonLd(
  messages: Messages,
  appStoreUrl: string,
): Record<string, unknown> {
  const { siteName, jsonLd } = messages;
  const homeUrl = absoluteUrl(messages.locale, "");

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteName,
    applicationCategory: "BusinessApplication",
    operatingSystem: "iOS, iPadOS, macOS",
    description: jsonLd.description,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    url: homeUrl,
    downloadUrl: appStoreUrl,
    featureList: jsonLd.featureList,
  };
}

function faqPageJsonLd(items: FaqItem[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/** JSON-LD scripts for the home page (SoftwareApplication + FAQPage). */
export function homeStructuredData(
  messages: Messages,
  appStoreUrl: string,
): string[] {
  return [
    JSON.stringify(softwareApplicationJsonLd(messages, appStoreUrl)),
    JSON.stringify(faqPageJsonLd(messages.home.faq.items)),
  ];
}

/** @deprecated Use homeStructuredData */
export function homeJsonLd(messages: Messages, appStoreUrl: string): string {
  return homeStructuredData(messages, appStoreUrl)[0];
}
