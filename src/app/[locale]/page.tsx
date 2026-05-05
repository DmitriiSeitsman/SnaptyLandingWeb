import HomePage from "@/app/page";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ru" }];
}

export default function LocaleHomePage() {
  return <HomePage />;
}
