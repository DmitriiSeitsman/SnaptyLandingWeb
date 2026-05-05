import type { Metadata } from "next";
import PolicyPageContent from "@/app/components/PolicyPageContent";
import { getMessages } from "@/i18n";
import { buildPageMetadata } from "@/lib/seo";

const messages = getMessages("ru");

export const metadata: Metadata = buildPageMetadata(messages, "policy");

export default function RuPolicyPage() {
  return <PolicyPageContent messages={messages} />;
}
