import Link from "next/link";
import ScreensCarousel from "@/app/components/ScreensCarousel";
import type { Messages } from "@/i18n/types";
import { localizedPath } from "@/lib/routing";
import { APP_STORE_URL } from "@/lib/constants";

type Props = {
  messages: Messages;
};

export default function HomeContent({ messages: m }: Props) {
  const policyHref = localizedPath(m.locale, "policy");
  const supportHref = localizedPath(m.locale, "support");

  return (
    <main className="page">
      <section className="hero">
        <div className="shell">
          <div className="hero-layout">
            <div className="hero-copy">
              <p className="platforms-announcement">{m.home.platformsAnnouncement}</p>

              <div className="home-download-row">
                <div className="release-note">
                  <span className="release-note-label">{m.home.releaseAvailable}</span>
                  <a
                    href={APP_STORE_URL}
                    className="release-download"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={m.home.appStoreAria}
                    title={m.home.downloadCta}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    <span className="release-download-text">{m.home.downloadCta}</span>
                  </a>
                </div>
              </div>

              <p className="workflow-badge">{m.home.workflowBadge}</p>
              <p className="macos-requirement">{m.home.macOsRequirement}</p>

              <p className="eyebrow">{m.home.eyebrow}</p>

              <h1 className="hero-title">{m.home.title}</h1>

              <p className="hero-text">{m.home.lead}</p>

              <div className="hero-actions" aria-label={m.home.heroActionsAria}>
                <Link href={supportHref} className="primary-link">
                  {m.home.contactSupport}
                </Link>
                <Link href={policyHref} className="secondary-link">
                  {m.home.privacyPolicy}
                </Link>
              </div>

              <div className="audience-list" aria-label={m.home.audienceAria}>
                {m.home.audiences.map((item) => (
                  <span key={item} className="audience-pill">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <aside className="hero-visual" aria-label={m.home.visualAria}>
              <div className="screen-frame">
                <ScreensCarousel
                  screenAlts={m.home.carouselAlts}
                  locale={m.locale}
                />
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="home-section icloud-feature" aria-labelledby="icloud-title">
        <div className="shell">
          <article className="icloud-feature-lead">
            <h2 id="icloud-title">{m.home.iCloud.title}</h2>
            <p>{m.home.iCloud.text}</p>
          </article>
          <div className="cards-grid icloud-cards">
            {m.home.iCloud.cards.map((item, index) => (
              <article key={item.title} className="card">
                <span className="card-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section platforms-section" aria-labelledby="platforms-title">
        <div className="shell">
          <header className="section-header">
            <h2 id="platforms-title">{m.home.platforms.title}</h2>
            <p>{m.home.platforms.text}</p>
          </header>
          <div className="platform-cards">
            {m.home.platforms.cards.map((item) => (
              <article key={item.name} className="platform-card">
                <h3>{item.name}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section faq-section" aria-labelledby="faq-title">
        <div className="shell">
          <h2 id="faq-title">{m.home.faq.title}</h2>
          <div className="faq-list">
            {m.home.faq.items.map((item) => (
              <details key={item.question} className="faq-item">
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
