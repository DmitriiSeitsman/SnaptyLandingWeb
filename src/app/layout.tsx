import "./globals.css";
import type { Metadata } from "next";
import AppHeader from "@/app/components/AppHeader";
import { getLocaleRedirectInlineScript } from "@/lib/locale-redirect";
import favicon from "@/favicon.ico";
import webCard from "@/snapty_wcard.png";

const SITE_URL = "https://snapty.pro";
const socialImageUrl = new URL(webCard.src, SITE_URL).toString();

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
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
    "photographer calendar app",
    "videographer planner",
    "videography planner app",
    "shoot planner",
    "shoot day planner",
    "photoshoot planner",
    "photo session booking app",
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
    "photography booking management",
    "booking planner for photographers",
    "booking and deposit tracker",
    "wedding photographer planner",
    "portrait photographer planner",
    "family photographer planner",
    "commercial photographer planner",
    "creative business planner",
    "freelance photographer organizer",
    "photography reminders",
    "client notes for photographers",
    "photographer checklist app",
    "photography checklist",
    "photo shoot checklist app",
    "photography notes app",
    "photographer income tracker",
    "photography business planner",
    "photography workflow management",
    "iCloud sync photo planner",
    "local-first photography planner",
    "планер для фотографов",
    "планировщик фотографа",
    "ежедневник фотографа",
    "планировщик для видеографа",
    "ежедневник для видеографа",
    "планировщик фотосъемок",
    "календарь фотографа",
    "календарь видеографа",
    "органайзер видеографа",
    "приложение для фотографов",
    "приложение для фотосессий",
    "приложение для учета клиентов фотографа",
    "приложение для записи на фотосессию",
    "органайзер для фотографа",
    "планировщик фотосессий",
    "планировщик съемочного дня",
    "планировщик бронирований фотографа",
    "расписание фотосессий",
    "учет клиентов фотографа",
    "учет предоплат фотографа",
    "учет заказов фотографа",
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
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Snapty — Photo Planner for Photographers",
    description:
      "Plan shoots, manage clients, prepare checklists, keep reminders and track income in one iOS app for photographers.",
    url: SITE_URL,
    siteName: "Snapty",
    images: [
      {
        url: socialImageUrl,
        width: webCard.width,
        height: webCard.height,
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
    images: [socialImageUrl],
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
