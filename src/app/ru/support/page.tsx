import type { Metadata } from "next";
import SupportPageContent from "@/app/components/SupportPageContent";
import { getMessages } from "@/i18n";
import { buildPageMetadata } from "@/lib/seo";

const messages = getMessages("ru");

export const metadata: Metadata = buildPageMetadata(messages, "support");

export default function RuSupportPage() {
  return <SupportPageContent messages={messages} />;
}
