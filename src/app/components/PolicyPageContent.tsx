import Link from "next/link";
import type { Messages } from "@/i18n/types";
import { localizedPath } from "@/lib/routing";

type Props = {
  messages: Messages;
};

export default function PolicyPageContent({ messages: m }: Props) {
  const homeHref = localizedPath(m.locale, "");

  return (
    <main className="page info-page">
      <section className="shell">
        <h1>{m.policy.pageTitle}</h1>
        <p>{m.policy.pageSubtitle}</p>
        <p className="policy-updated">{m.policy.lastUpdated}</p>

        <article className="info-block policy-summary">
          <h2>{m.policy.summaryTitle}</h2>
          <p>{m.policy.summaryLead}</p>
          <ul className="policy-list">
            {m.policy.summaryBullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        {m.policy.sections.map((section) => (
          <article key={section.title} className="info-block">
            <div className="policy-heading">
              <span className="policy-icon" aria-hidden="true">
                {section.icon}
              </span>
              <h2>{section.title}</h2>
            </div>
            {section.intro ? <p>{section.intro}</p> : null}
            <ul className="policy-list">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}

        <Link className="back-link" href={homeHref}>
          {m.policy.backHome}
        </Link>
      </section>
    </main>
  );
}
