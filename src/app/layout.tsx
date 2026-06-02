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
    default:
      "Snapty — Photo Shoot Planner & Client Organizer for iPhone, iPad and Mac",
    template: "%s | Snapty",
  },

  description:
    "Plan photo shoots, manage clients, reminders, checklists, notes, and income in Snapty. Secure iCloud sync keeps your photography workflow available across iPhone, iPad, and Mac.",

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
    title: "Snapty — Photo Shoot Planner for iPhone, iPad and Mac",
    description:
      "Plan shoots, clients, reminders, checklists, notes, and income with secure iCloud sync across your Apple devices.",
    url: "/",
    siteName: "Snapty",
    images: [
      {
        url: SOCIAL_SHARE_IMAGE_PATH,
        width: SOCIAL_SHARE_IMAGE_WIDTH,
        height: SOCIAL_SHARE_IMAGE_HEIGHT,
        alt: "Snapty photo shoot planner for iPhone, iPad and Mac",
      },
    ],
    locale: "en_US",
    alternateLocale: ["ru_RU"],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Snapty — Photo Shoot Planner for iPhone, iPad and Mac",
    description:
      "Plan shoots, clients, reminders, checklists, notes, and income with secure iCloud sync across your Apple devices.",
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
    "iCloud sync for photographers",
    "photo shoot planner",
    "photographer app for iPhone iPad and Mac",
    "videographer planner app",

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
