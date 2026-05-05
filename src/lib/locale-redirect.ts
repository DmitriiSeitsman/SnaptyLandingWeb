import { LOCALE_USER_CHOSEN_KEY, LOCALE_USER_CHOSEN_VALUE } from "@/lib/constants";

/** Inline script: Russian browser languages → /ru/…; others stay on English URLs unless user chose language in UI. */
export function getLocaleRedirectInlineScript(): string {
  return `
(function () {
  try {
    var KEY = ${JSON.stringify(LOCALE_USER_CHOSEN_KEY)};
    var p = location.pathname;
    if (p.indexOf("/ru") === 0) {
      document.documentElement.lang = "ru";
      return;
    }
    document.documentElement.lang = "en";
    if (localStorage.getItem(KEY) === ${JSON.stringify(LOCALE_USER_CHOSEN_VALUE)}) return;
    var langs = navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || ""];
    var prefersRu = false;
    for (var i = 0; i < langs.length; i++) {
      if (String(langs[i]).toLowerCase().indexOf("ru") === 0) {
        prefersRu = true;
        break;
      }
    }
    if (!prefersRu) return;
    var path = p;
    while (path.length > 1 && path.charAt(path.length - 1) === "/") {
      path = path.slice(0, -1);
    }
    if (path === "") path = "/";
    var base = location.origin;
    if (path === "/") {
      location.replace(base + "/ru/");
      return;
    }
    if (path === "/policy") {
      location.replace(base + "/ru/policy/");
      return;
    }
    if (path === "/support") {
      location.replace(base + "/ru/support/");
      return;
    }
  } catch (e) {}
})();
`.trim();
}

export function markLocaleUserChosen(): void {
  try {
    localStorage.setItem(LOCALE_USER_CHOSEN_KEY, LOCALE_USER_CHOSEN_VALUE);
  } catch {
    /* private mode etc. */
  }
}
