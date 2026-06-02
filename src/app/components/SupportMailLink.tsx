"use client";

import { useMemo } from "react";

type Props = {
  label?: string;
  className?: string;
};

export default function SupportMailLink({ label = "Write message", className = "support-mail-link" }: Props) {
  const mailtoHref = useMemo(() => {
    const user = ["s", "e", "y", "t", "s", "m", "a", "n"].join("");
    const host = ["g", "m", "a", "i", "l", ".", "c", "o", "m"].join("");
    const subject = encodeURIComponent("SnaptyApp:");
    return `mailto:${user}@${host}?subject=${subject}`;
  }, []);

  return (
    <a className={className} href={mailtoHref}>
      {label}
    </a>
  );
}
