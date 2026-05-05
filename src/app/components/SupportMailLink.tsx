"use client";

import { useMemo } from "react";

export default function SupportMailLink() {
  const mailtoHref = useMemo(() => {
    const user = ["s", "e", "y", "t", "s", "m", "a", "n"].join("");
    const host = ["g", "m", "a", "i", "l", ".", "c", "o", "m"].join("");
    const subject = encodeURIComponent("SnaptyApp:");
    return `mailto:${user}@${host}?subject=${subject}`;
  }, []);

  return (
    <a className="support-mail-link" href={mailtoHref}>
      Write message
    </a>
  );
}
