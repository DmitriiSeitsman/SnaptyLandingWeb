import type { Metadata } from "next";
import HomeContent from "@/app/components/HomeContent";
import { getMessages } from "@/i18n";
import { APP_STORE_URL } from "@/lib/constants";
import { buildPageMetadata, homeStructuredData } from "@/lib/seo";

const messages = getMessages("en");

export const metadata: Metadata = buildPageMetadata(messages, "home");

export default function HomePage() {
  const jsonLdScripts = homeStructuredData(messages, APP_STORE_URL);

  return (
    <>
      {jsonLdScripts.map((json, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: json }}
        />
      ))}
      <HomeContent messages={messages} />
    </>
  );
}
