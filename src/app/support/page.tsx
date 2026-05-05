import Link from "next/link";
import SupportMailLink from "@/app/components/SupportMailLink";

export default function SupportPage() {
  return (
    <main className="page info-page">
      <section className="shell">
        <h1>Support</h1>
        <p>
          If you need help with Snapty, contact us and we will get back to you as soon as possible.
        </p>

        <div className="info-block">
          <h2>Contact</h2>
          <p>
            <SupportMailLink />
          </p>
          <p>Response time: up to 2 business days</p>
        </div>

        <Link className="back-link" href="/">
          Back to home
        </Link>
      </section>
    </main>
  );
}
