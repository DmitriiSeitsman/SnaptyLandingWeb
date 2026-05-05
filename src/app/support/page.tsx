import type { Metadata } from "next";
import SupportPageContent from "@/app/components/SupportPageContent";
import { getMessages } from "@/i18n";
import { buildPageMetadata } from "@/lib/seo";

const messages = getMessages("en");

export const metadata: Metadata = buildPageMetadata(messages, "support");

export default function SupportPage() {
  return <SupportPageContent messages={messages} />;
}
