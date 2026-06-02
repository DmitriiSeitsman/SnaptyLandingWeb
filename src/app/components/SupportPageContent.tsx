import Link from "next/link";
import SupportMailLink from "@/app/components/SupportMailLink";
import type { Messages } from "@/i18n/types";
import { localizedPath } from "@/lib/routing";

type Props = {
  messages: Messages;
};

export default function SupportPageContent({ messages: m }: Props) {
  const homeHref = localizedPath(m.locale, "");

  return (
    <main className="page info-page">
      <div className="shell">
        <div className="support-hero">
          <div className="support-icon" aria-hidden>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="4" width="20" height="16" rx="3" />
              <polyline points="2,4 12,13 22,4" />
            </svg>
          </div>
          <h1>{m.support.pageTitle}</h1>
          <p className="support-lead">{m.support.lead}</p>
        </div>

        <div className="support-card">
          <div className="support-card-body">
            <SupportMailLink label={m.support.mailCta} className="support-cta" />
            <span className="support-response-badge">{m.support.responseTime}</span>
          </div>
        </div>

        <Link className="back-link" href={homeHref}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
          {m.support.backHome}
        </Link>
      </div>
    </main>
  );
}
