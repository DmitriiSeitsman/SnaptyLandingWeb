import type { Metadata } from "next";
import HomeContent from "@/app/components/HomeContent";
import { getMessages } from "@/i18n";
import { APP_STORE_URL } from "@/lib/constants";
import { buildPageMetadata, homeJsonLd } from "@/lib/seo";

const messages = getMessages("ru");

export const metadata: Metadata = buildPageMetadata(messages, "home");

export default function RuHomePage() {
  const jsonLd = homeJsonLd(messages, APP_STORE_URL);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <HomeContent messages={messages} />
    </>
  );
}
