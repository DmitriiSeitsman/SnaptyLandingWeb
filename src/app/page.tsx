import Image from "next/image";
import logo from "@/SnaptyLogo.png";
import mainScreenDark from "@/screens/MainScreenDark.png";

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
                Clean landing skeleton for the next iteration. We can now safely build sections,
                content, and interactions step by step.
              </p>

              <div className="hero-actions">
                <button type="button" className="btn btn-primary">
                  Join waitlist
                </button>
                <button type="button" className="btn btn-secondary">
                  Explore roadmap
                </button>
              </div>

              <div className="cards-grid">
                {highlights.map((item, index) => (
                  <article key={item} className="card">
                    <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
                    <p>{item}</p>
                  </article>
                ))}
              </div>
            </div>

            <aside className="hero-visual">
              <div className="screen-frame">
                <Image
                  src={mainScreenDark}
                  alt="Snapty main screen preview"
                  className="screen-image"
                  priority
                />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
