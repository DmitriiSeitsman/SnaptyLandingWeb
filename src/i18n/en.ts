import type { Messages } from "@/i18n/types";

const SITE_URL = "https://snapty.pro";

export const en: Messages = {
  locale: "en",
  siteName: "Snapty",
  siteUrl: SITE_URL,
  seo: {
    siteKeywords: [
      "Snapty",
      "photo planner",
      "photographer planner",
      "photography planner app",
      "photographer organizer",
      "photographer calendar app",
      "videographer planner",
      "videography planner app",
      "shoot day planner",
      "photo session booking app",
      "wedding photographer planner",
      "portrait photography scheduling",
      "photo shoot booking app",
      "client management for photographers",
      "booking and deposit tracker",
      "client notes for photographers",
      "photography workflow management",
      "photography business app",
      "iPhone app for photographers",
      "iOS photographer planner",
      "shoot calendar photographer",
      "photography CRM",
      "local-first photo studio app",
    ],
    home: {
      title: "Snapty — Photo Planner for Photographers | iOS Shoot Organizer",
      description:
        "Snapty is an iOS photo planner for photographers and videographers. Manage shoots, clients, reminders, checklists, notes, income and optional iCloud sync in one focused app.",
      keywords: [
        "photography planner",
        "photographer scheduling app",
        "photographer calendar app",
        "videographer planner",
        "photo session planner",
        "photo session booking app",
        "shoot day planner",
        "client database photographer",
        "wedding photo planner",
        "booking app photographers",
        "booking and deposit tracker",
        "Snapty app",
        "photography studio organizer",
        "shoot planner iOS",
        "client notes for photographers",
        "photo shoot checklist app",
        "photography business planner",
      ],
    },
    policy: {
      title: "Privacy Policy — Snapty",
      description:
        "How Snapty handles contacts, camera, analytics, iCloud sync and local data on your iPhone. Privacy practices for the Snapty photography planner app.",
      keywords: [
        "Snapty privacy policy",
        "photography app privacy",
        "photographer app data storage",
        "local-first app privacy",
        "iCloud sync Snapty",
      ],
    },
    support: {
      title: "Support — Snapty",
      description:
        "Contact Snapty support for help with the photo planner app. We reply within two business days.",
      keywords: [
        "Snapty support",
        "Snapty help",
        "photography app contact",
      ],
    },
  },
  jsonLd: {
    description:
      "Planner for photographers: bookings, clients, checklists, reminders and income overview on iPhone.",
    featureList: [
      "Shoot and client scheduling",
      "Checklists and reminders",
      "Client base and shoot history",
      "Bookings and revenue overview",
    ],
  },
  nav: {
    languageSwitcher: "Language",
    languageGoToEn: "English",
    languageGoToRu: "Русский",
    themeDark: "Dark",
    themeLight: "Light",
    toggleTheme: "Toggle theme",
  },
  home: {
    releaseAvailable: "Available for iOS",
    appStoreAria: "Download Snapty on the App Store",
    logoAlt: "Snapty logo",
    eyebrow: "Planner for photographers",
    title: "A calmer way to plan shoots, clients, and creative work",
    lead:
      "Snapty helps photographers organize bookings, client records, reminders, personal notes, checklists, and income overview in one focused iPhone app. Less admin noise. More time for actual photography.",
    contactSupport: "Contact Support",
    privacyPolicy: "Privacy Policy",
    heroActionsAria: "Main actions",
    audienceAria: "Designed for",
    audiences: [
      "Wedding photographers",
      "Portrait photographers",
      "Family sessions",
      "Commercial shoots",
    ],
    highlights: [
      {
        title: "Plan every shoot",
        text: "Keep upcoming sessions, dates, times, locations, and client details in one place.",
      },
      {
        title: "Remember the details",
        text: "Use reminders, notes, and checklists so nothing important disappears into the usual human chaos.",
      },
      {
        title: "Know your clients",
        text: "Store client cards, contact details, and shoot history without digging through old messages.",
      },
      {
        title: "Track your work",
        text: "Get a clear overview of sessions, payments, and planned income without building a spreadsheet shrine.",
      },
    ],
    privacyTitle: "Private by design",
    privacyText:
      "Snapty is built as a local-first workspace for your photography business. Your shoots, notes, clients, and reminders are designed to stay close to you, with optional iCloud sync support.",
    visualAria: "Snapty app preview",
    carouselScreenAlt: "Snapty app screen {n}",
  },
  policy: {
    pageTitle: "Privacy Policy",
    pageSubtitle: "How Snapty uses data inside the app.",
    lastUpdated: "Last updated: Apr 21, 2026",
    summaryTitle: "At a glance",
    summaryLead:
      "Snapty stores your work data locally, uses permissions only for selected features, and does not sell your data.",
    summaryBullets: [
      "Client and shoot data is created and controlled by the user.",
      "Camera access may be used only to add a client photo.",
      "Analytics helps improve the app and does not include client record content.",
    ],
    sections: [
      {
        icon: "1",
        title: "Information We Collect",
        intro: "Snapty may use the following information when you choose to add it:",
        items: [
          "Contact information, such as first name, last name and phone number, only when you grant access to your address book or enter this information manually.",
          "Shoot and event details, such as date, time, location, notes, pricing, prepayment and shooting details, entered manually by the user.",
          "Client photos, optionally added manually by the user.",
          "App usage events related to certain actions inside Snapty, such as opening screens, changing settings, creating records or starting an export.",
        ],
      },
      {
        icon: "2",
        title: "How We Use Information",
        intro: "The information is used to provide and improve Snapty's core features:",
        items: [
          "Managing client bookings, shoots, notes and reminders.",
          "Providing quick access to client and event information.",
          "Sending local reminders about upcoming events.",
          "Improving the app experience, stability and usability based on aggregated product analytics.",
        ],
      },
      {
        icon: "3",
        title: "Contacts Access",
        intro: "Contacts access is optional and used only when you choose to add a client from your address book.",
        items: [
          "Snapty may ask for access to your contacts to let you quickly select a client's name and phone number.",
          "Contacts are not automatically copied into the app.",
          "Contact data is used only after an explicit user action.",
          "Snapty does not access your contacts in the background.",
        ],
      },
      {
        icon: "4",
        title: "Camera Access",
        intro: "Camera access is optional and used only for client photos.",
        items: [
          "Snapty may ask for access to the camera when you choose to add or update a client avatar.",
          "Photos are added only after an explicit user action.",
          "Camera access is not used for background capture, scanning or tracking.",
          "Client photos are not used for advertising or profiling.",
        ],
      },
      {
        icon: "5",
        title: "Data Storage",
        intro: "Snapty is designed as a local-first app.",
        items: [
          "Client records, shoots, notes and reminders are stored locally on your device.",
          "If iCloud sync is enabled by the user and available on the device, Apple may sync app data through the user's iCloud account.",
          "Snapty does not operate its own external server for storing your client database.",
          "You can delete individual shoots, reminders, notes or entire client profiles.",
        ],
      },
      {
        icon: "6",
        title: "Analytics",
        intro:
          "Snapty may collect limited app usage analytics to understand how the app is used and to improve the product.",
        items: [
          "Analytics may include events such as screen opens, button taps, theme selection, export actions and feature usage.",
          "Analytics is used to improve app stability, usability and feature decisions.",
          "Snapty does not intentionally send client names, phone numbers, photos, notes, locations, pricing details or shoot descriptions as analytics event data.",
          "Analytics data is not used to sell personal information.",
        ],
      },
      {
        icon: "7",
        title: "Notifications",
        intro: "Snapty uses notifications to remind you about your own planned events.",
        items: [
          "Snapty uses local notifications to remind users about upcoming shoots, events and reminders.",
          "Local notifications are scheduled on the device.",
          "No remote push notifications are required for local reminders.",
          "You can manage notification permissions in iOS Settings.",
        ],
      },
      {
        icon: "8",
        title: "Data Deletion",
        intro: "Users have control over the data they create in Snapty.",
        items: [
          "You can delete individual events and shoots.",
          "You can delete client profiles entirely.",
          "Deleting a client profile may also remove related client information from the app, depending on the app's current data model.",
          "You can uninstall the app to remove locally stored app data from the device, subject to iOS and iCloud behavior.",
        ],
      },
      {
        icon: "9",
        title: "Third-Party Access",
        intro: "Snapty does not sell your personal data.",
        items: [
          "Snapty does not sell client data to third parties.",
          "Snapty does not use client records for advertising profiling.",
          "Some system-level services, such as iCloud or analytics providers, may process limited technical or usage data according to their own policies when enabled or integrated.",
        ],
      },
      {
        icon: "10",
        title: "Changes to This Policy",
        items: [
          "We may update this Privacy Policy from time to time.",
          "Changes will be reflected in this document inside the app.",
          "The date at the top of the policy shows when it was last updated.",
        ],
      },
    ],
    backHome: "Back to home",
  },
  support: {
    pageTitle: "Support",
    lead: "If you need help with Snapty, contact us and we will get back to you as soon as possible.",
    contactTitle: "Contact",
    mailCta: "Write message",
    responseTime: "Response time: up to 2 business days",
    backHome: "Back to home",
  },
};
