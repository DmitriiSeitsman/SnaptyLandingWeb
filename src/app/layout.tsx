import "./globals.css";
import type { Metadata } from "next";
import AppHeader from "@/app/components/AppHeader";
import { getLocaleRedirectInlineScript } from "@/lib/locale-redirect";
import {
  SOCIAL_SHARE_IMAGE_HEIGHT,
  SOCIAL_SHARE_IMAGE_PATH,
  SOCIAL_SHARE_IMAGE_WIDTH,
} from "@/lib/constants";

const SITE_URL = "https://snapty.pro";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Snapty — Photo Planner for Photographers | iOS Shoot Organizer",
    template: "%s | Snapty",
  },

  description:
    "Snapty is an iOS photo planner for photographers and videographers. Manage shoots, clients, reminders, checklists, notes, income and optional iCloud sync in one focused app.",

  applicationName: "Snapty",

  authors: [{ name: "Snapty" }],
  creator: "Snapty",
  publisher: "Snapty",

  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      ru: "/ru/",
    },
  },

  openGraph: {
    title: "Snapty — Photo Planner for Photographers",
    description:
      "Plan shoots, manage clients, prepare checklists, keep reminders and track income in one iOS app for photographers.",
    url: "/",
    siteName: "Snapty",
    images: [
      {
        url: SOCIAL_SHARE_IMAGE_PATH,
        width: SOCIAL_SHARE_IMAGE_WIDTH,
        height: SOCIAL_SHARE_IMAGE_HEIGHT,
        alt: "Snapty photo planner app for photographers",
      },
    ],
    locale: "en_US",
    alternateLocale: ["ru_RU"],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Snapty — Photo Planner for Photographers",
    description:
      "An iOS planner for photographers to organize shoots, clients, checklists, reminders, notes and income.",
    images: [
      {
        url: SOCIAL_SHARE_IMAGE_PATH,
        alt: "Snapty photo planner app preview",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "productivity",

  keywords: [
    "Snapty",
    "Snapty Photo Planner",
    "photo planner",
    "photographer planner",
    "photography planner",
    "photographer calendar app",
    "videographer planner",
    "shoot planner",
    "photoshoot planner",
    "photo shoot organizer",
    "photographer app",
    "app for photographers",
    "iOS app for photographers",
    "iPhone app for photographers",
    "client management for photographers",
    "photographer client manager",
    "photography client database",
    "shoot scheduling app",
    "photography schedule app",
    "wedding photographer planner",
    "portrait photographer planner",
    "family photographer planner",
    "commercial photographer planner",
    "freelance photographer organizer",
    "photography reminders",
    "photographer checklist app",
    "photographer income tracker",
    "iCloud sync photo planner",
    "local-first photography planner",

    "планер для фотографов",
    "планировщик фотографа",
    "ежедневник фотографа",
    "планировщик для видеографа",
    "календарь фотографа",
    "органайзер для фотографа",
    "приложение для фотографов",
    "приложение для фотосессий",
    "планировщик фотосессий",
    "учет клиентов фотографа",
    "база клиентов фотографа",
    "CRM для фотографа",
    "чеклист для фотосессии",
    "напоминания для фотографа",
    "учет доходов фотографа",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var saved = localStorage.getItem("snapty-theme");
                if (saved === "light" || saved === "dark") {
                  document.documentElement.setAttribute("data-theme", saved);
                  return;
                }
                var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                document.documentElement.setAttribute("data-theme", prefersDark ? "dark" : "light");
              })();
            `,
          }}
        />
        <script dangerouslySetInnerHTML={{ __html: getLocaleRedirectInlineScript() }} />
        <AppHeader />
        {children}
      </body>
    </html>
  );
}
