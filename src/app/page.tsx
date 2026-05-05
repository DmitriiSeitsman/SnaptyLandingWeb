import Image from "next/image";
import Link from "next/link";
import logo from "@/SnaptyLogo.png";
import ScreensCarousel from "@/app/components/ScreensCarousel";

const highlights = [
  "Daily planning and reminders",
  "Client cards and shoot history",
  "Personal notes and checklists",
  "Clear income and session overview",
];

export default function HomePage() {
  return (
    <main className="page">
      <section className="hero">
        <div className="shell">
          <div className="release-note">
            <span className="release-note-label">iOS Release</span>
            <span>June 2026</span>
          </div>

          <div className="hero-layout">
            <div className="hero-copy">
              <header className="brand-row">
                <Image src={logo} alt="Snapty logo" className="brand-logo" priority />
                <span className="brand-name">Snapty</span>
              </header>

              <p className="eyebrow">Planner for photographers</p>
              <h1 className="hero-title">Organize shoots in one calm workspace</h1>
              <p className="hero-text">
                Snapty is a mobile planner for photographers that combines client records, shoot
                scheduling, reminders, notes, and lightweight analytics in one local-first flow.
                The product is designed to reduce routine admin work and help creators focus on
                sessions, communication, and consistent delivery.
              </p>

              <div className="cards-grid">
                {highlights.map((item, index) => (
                  <article key={item} className="card">
                    <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
                    <p>{item}</p>
                  </article>
                ))}
              </div>

              <nav className="footer-links" aria-label="Additional pages">
                <Link href="/support">Support</Link>
                <Link href="/policy">Privacy Policy</Link>
              </nav>
            </div>

            <aside className="hero-visual">
              <div className="screen-frame">
                <ScreensCarousel />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
