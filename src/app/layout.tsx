import "./globals.css";
import ThemeToggle from "@/app/components/ThemeToggle";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var saved = localStorage.getItem("snapty-theme");
                if (saved === "light" || saved === "dark") {
                  document.documentElement.setAttribute("data-theme", saved);
                  return;
                }
                var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                document.documentElement.setAttribute("data-theme", prefersDark ? "dark" : "light");
              })();
            `,
          }}
        />
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
