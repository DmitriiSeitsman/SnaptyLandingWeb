"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import ThemeToggle from "@/app/components/ThemeToggle";
import { getMessages } from "@/i18n";
import { markLocaleUserChosen } from "@/lib/locale-redirect";
import {
  localeFromPathname,
  pathForOppositeLanguage,
} from "@/lib/routing";

export default function SiteChrome() {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const t = getMessages(locale);
  const other = pathForOppositeLanguage(pathname, locale);

  useEffect(() => {
    document.documentElement.lang = locale === "ru" ? "ru" : "en";
  }, [locale]);

  return (
    <div className="top-controls">
      <nav className="lang-switcher" aria-label={t.nav.languageSwitcher}>
        {locale === "en" ? (
          <>
            <span className="lang-active" title={t.nav.languageGoToEn}>
              EN
            </span>
            <span className="lang-sep" aria-hidden>
              |
            </span>
            <Link
              href={other.href}
              className="lang-link"
              hrefLang="ru"
              title={t.nav.languageGoToRu}
              onClick={markLocaleUserChosen}
            >
              RU
            </Link>
          </>
        ) : (
          <>
            <Link
              href={other.href}
              className="lang-link"
              hrefLang="en"
              title={t.nav.languageGoToEn}
              onClick={markLocaleUserChosen}
            >
              EN
            </Link>
            <span className="lang-sep" aria-hidden>
              |
            </span>
            <span className="lang-active" title={t.nav.languageGoToRu}>
              RU
            </span>
          </>
        )}
      </nav>
      <ThemeToggle
        labels={{
          dark: t.nav.themeDark,
          light: t.nav.themeLight,
          toggle: t.nav.toggleTheme,
        }}
      />
    </div>
  );
}
