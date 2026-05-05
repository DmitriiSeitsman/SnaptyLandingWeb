"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import logo from "@/SnaptyLogo.png";
import ThemeToggle from "@/app/components/ThemeToggle";
import { getMessages } from "@/i18n";
import { markLocaleUserChosen } from "@/lib/locale-redirect";
import {
  localizedPath,
  localeFromPathname,
  pathForOppositeLanguage,
} from "@/lib/routing";

export default function AppHeader() {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const t = getMessages(locale);
  const other = pathForOppositeLanguage(pathname, locale);
  const homeHref = localizedPath(locale, "");

  useEffect(() => {
    document.documentElement.lang = locale === "ru" ? "ru" : "en";
  }, [locale]);

  return (
    <header className="app-header">
      <div className="shell app-header-inner">
        <Link href={homeHref} className="brand-row brand-home-link" aria-label={t.siteName}>
          <Image src={logo} alt={t.home.logoAlt} className="brand-logo" priority />
          <span className="brand-name">Snapty</span>
        </Link>
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
      </div>
    </header>
  );
}
