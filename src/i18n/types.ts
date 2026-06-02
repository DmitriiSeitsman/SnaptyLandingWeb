export type Locale = "en" | "ru";

export type PolicySection = {
  icon: string;
  title: string;
  intro?: string;
  items: string[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Messages = {
  locale: Locale;
  siteName: string;
  siteUrl: string;
  seo: {
    siteKeywords: string[];
    home: {
      title: string;
      description: string;
      ogTitle: string;
      ogDescription: string;
      keywords: string[];
    };
    policy: {
      title: string;
      description: string;
      keywords: string[];
    };
    support: {
      title: string;
      description: string;
      keywords: string[];
    };
  };
  jsonLd: {
    description: string;
    featureList: string[];
  };
  nav: {
    languageSwitcher: string;
    languageGoToEn: string;
    languageGoToRu: string;
    themeDark: string;
    themeLight: string;
    toggleTheme: string;
  };
  home: {
    releaseAvailable: string;
    macOsRequirement: string;
    platformsAnnouncement: string;
    workflowBadge: string;
    downloadCta: string;
    appStoreAria: string;
    logoAlt: string;
    eyebrow: string;
    title: string;
    lead: string;
    contactSupport: string;
    privacyPolicy: string;
    heroActionsAria: string;
    audienceAria: string;
    audiences: string[];
    iCloud: {
      title: string;
      text: string;
      cards: { title: string; text: string }[];
    };
    platforms: {
      title: string;
      text: string;
      cards: { name: string; text: string }[];
    };
    faq: {
      title: string;
      items: FaqItem[];
    };
    visualAria: string;
    carouselAlts: string[];
  };
  policy: {
    pageTitle: string;
    pageSubtitle: string;
    lastUpdated: string;
    summaryTitle: string;
    summaryLead: string;
    summaryBullets: string[];
    sections: PolicySection[];
    backHome: string;
  };
  support: {
    pageTitle: string;
    lead: string;
    contactTitle: string;
    mailCta: string;
    responseTime: string;
    backHome: string;
  };
};
