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
      <section className="shell">
        <h1>{m.support.pageTitle}</h1>
        <p>{m.support.lead}</p>

        <div className="info-block">
          <h2>{m.support.contactTitle}</h2>
          <p>
            <SupportMailLink label={m.support.mailCta} />
          </p>
          <p>{m.support.responseTime}</p>
        </div>

        <Link className="back-link" href={homeHref}>
          {m.support.backHome}
        </Link>
      </section>
    </main>
  );
}
