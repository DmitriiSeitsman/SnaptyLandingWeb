import "./globals.css";
import AppHeader from "@/app/components/AppHeader";
import { getLocaleRedirectInlineScript } from "@/lib/locale-redirect";

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
        <script dangerouslySetInnerHTML={{ __html: getLocaleRedirectInlineScript() }} />
        <AppHeader />
        {children}
      </body>
    </html>
  );
}
