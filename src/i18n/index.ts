import type { Locale, Messages } from "@/i18n/types";
import { en } from "@/i18n/en";
import { ru } from "@/i18n/ru";

const messages: Record<Locale, Messages> = { en, ru };

export function getMessages(locale: Locale): Messages {
  return messages[locale];
}

export { en, ru };
