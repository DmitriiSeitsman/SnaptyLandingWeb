import Image from "next/image";
import Link from "next/link";
import logo from "@/SnaptyLogo.png";
import ScreensCarousel from "@/app/components/ScreensCarousel";

const highlights = [
  {
    title: "Plan every shoot",
    text: "Keep upcoming sessions, dates, times, locations, and client details in one place.",
  },
  {
    title: "Remember the details",
    text: "Use reminders, notes, and checklists so nothing important disappears into the usual human chaos.",
  },
  {
    title: "Know your clients",
    text: "Store client cards, contact details, and shoot history without digging through old messages.",
  },
  {
    title: "Track your work",
    text: "Get a clear overview of sessions, payments, and planned income without building a spreadsheet shrine.",
  },
];

const audiences = [
  "Wedding photographers",
  "Portrait photographers",
  "Family sessions",
  "Commercial shoots",
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

              <h1 className="hero-title">
                A calmer way to plan shoots, clients, and creative work
              </h1>

              <p className="hero-text">
                Snapty helps photographers organize bookings, client records, reminders,
                personal notes, checklists, and income overview in one focused iPhone app.
                Less admin noise. More time for actual photography.
              </p>

              <div className="hero-actions" aria-label="Main actions">
                <Link href="/support" className="primary-link">
                  Contact Support
                </Link>
                <Link href="/policy" className="secondary-link">
                  Privacy Policy
                </Link>
              </div>

              <div className="audience-list" aria-label="Designed for">
                {audiences.map((item) => (
                  <span key={item} className="audience-pill">
                    {item}
                  </span>
                ))}
              </div>

              <div className="cards-grid">
                {highlights.map((item, index) => (
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
                <h2 id="privacy-title">Private by design</h2>
                <p>
                  Snapty is built as a local-first workspace for your photography business.
                  Your shoots, notes, clients, and reminders are designed to stay close to
                  you, with optional iCloud sync support.
                </p>
              </section>

            </div>

            <aside className="hero-visual" aria-label="Snapty app preview">
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