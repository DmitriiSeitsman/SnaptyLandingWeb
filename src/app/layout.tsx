import "./globals.css";
import type { Metadata } from "next";
import AppHeader from "@/app/components/AppHeader";
import { getLocaleRedirectInlineScript } from "@/lib/locale-redirect";
import favicon from "@/favicon.ico";
import webCard from "@/snapty_wcard.png";

export const metadata: Metadata = {
  metadataBase: new URL("https://snapty.pro"),
  title: {
    default: "Snapty — Photo Planner for Photographers | iOS Shoot Organizer",
    template: "%s | Snapty",
  },
  description:
    "Snapty is an iOS photo planner for photographers to manage shoots, clients, reminders, checklists, notes, income and iCloud sync.",
  applicationName: "Snapty",
  keywords: [
    "photo planner",
    "photographer planner",
    "photography planner",
    "shoot planner",
    "photoshoot planner",
    "photo shoot organizer",
    "photography organizer",
    "photographer app",
    "app for photographers",
    "iOS app for photographers",
    "iPhone app for photographers",
    "iPad app for photographers",
    "client management for photographers",
    "photographer client manager",
    "photography client database",
    "shoot scheduling app",
    "photography schedule app",
    "booking planner for photographers",
    "wedding photographer planner",
    "portrait photographer planner",
    "family photographer planner",
    "commercial photographer planner",
    "photography reminders",
    "photographer checklist app",
    "photography checklist",
    "photography notes app",
    "photographer income tracker",
    "photography business planner",
    "iCloud sync photo planner",
    "local-first photography planner",
    "планер для фотографов",
    "приложение для фотографов",
    "приложение для фотосессий",
    "органайзер для фотографа",
    "планировщик фотосессий",
    "расписание фотосессий",
    "учет клиентов фотографа",
    "база клиентов фотографа",
    "CRM для фотографа",
    "простой CRM для фотографа",
    "чеклист для фотосессии",
    "заметки для фотографа",
    "напоминания для фотографа",
    "учет съемок",
    "учет доходов фотографа",
    "приложение для свадебного фотографа",
    "приложение для портретного фотографа",
    "приложение для семейного фотографа",
    "приложение для коммерческого фотографа",
    "планер съемок",
    "клиентская база фотографа",
    "Snapty",
    "Snapty Photo Planner",
  ],
  authors: [{ name: "Snapty" }],
  creator: "Snapty",
  publisher: "Snapty",
  alternates: {
    canonical: "https://snapty.pro",
  },
  openGraph: {
    title: "Snapty — Photo Planner for Photographers",
    description:
      "Plan shoots, manage clients, prepare checklists, keep reminders and track income in one iOS app for photographers.",
    url: "https://snapty.pro",
    siteName: "Snapty",
    images: [
      {
        url: webCard.src,
        alt: "Snapty photo planner app for photographers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Snapty — Photo Planner for Photographers",
    description:
      "An iOS planner for photographers to organize shoots, clients, checklists, reminders, notes and income.",
    images: [webCard.src],
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
  icons: {
    icon: favicon.src,
    apple: favicon.src,
  },
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
