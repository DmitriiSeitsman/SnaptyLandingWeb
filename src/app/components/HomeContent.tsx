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
              <div className="home-download-row">
                <div className="release-note">
                  <span className="release-note-label">{m.home.releaseAvailable}</span>
                  <a
                    href={APP_STORE_URL}
                    className="release-download"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={m.home.appStoreAria}
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
                  </a>
                </div>
              </div>

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

              <div className="cards-grid">
                {m.home.highlights.map((item, index) => (
                  <article key={item.title} className="card">
                    <span className="card-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2>{item.title}</h2>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>

              <section className="privacy-note" aria-labelledby="privacy-title">
                <h2 id="privacy-title">{m.home.privacyTitle}</h2>
                <p>{m.home.privacyText}</p>
              </section>
            </div>

            <aside className="hero-visual" aria-label={m.home.visualAria}>
              <div className="screen-frame">
                <ScreensCarousel screenAltTemplate={m.home.carouselScreenAlt} />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
