import type { Metadata } from "next";

/** Defaults for the Russian subtree; leaf `page.tsx` metadata overrides per route. */
export const metadata: Metadata = {
  alternates: {
    canonical: "/ru/",
    languages: {
      en: "/",
      ru: "/ru/",
    },
  },
  openGraph: {
    url: "/ru/",
    locale: "ru_RU",
    alternateLocale: ["en_US"],
  },
};

export default function RuLayout({ children }: { children: React.ReactNode }) {
  return children;
}
