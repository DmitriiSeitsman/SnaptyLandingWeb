import type { Metadata } from "next";
import PolicyPageContent from "@/app/components/PolicyPageContent";
import { getMessages } from "@/i18n";
import { buildPageMetadata } from "@/lib/seo";

const messages = getMessages("en");

export const metadata: Metadata = buildPageMetadata(messages, "policy");

export default function PolicyPage() {
  return <PolicyPageContent messages={messages} />;
}
