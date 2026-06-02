"use client";

import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import type { Locale } from "@/i18n/types";
import screen01 from "@/screens/Snapty_01.jpg";
import screen02 from "@/screens/Snapty_02.jpg";
import screen03 from "@/screens/Snapty_03.jpg";
import screen04 from "@/screens/Snapty_04.jpg";
import screen05 from "@/screens/Snapty_05.jpg";
import screen06 from "@/screens/Snapty_06.jpg";
import screenRu01 from "@/screens/snapty_01_ru.jpg";
import screenRu02 from "@/screens/snapty_02_ru.jpg";
import screenRu03 from "@/screens/snapty_03_ru.jpg";
import screenRu04 from "@/screens/snapty_04_ru.jpg";
import screenRu05 from "@/screens/snapty_05_ru.jpg";
import screenRu06 from "@/screens/snapty_06_ru.jpg";
import screenRu07 from "@/screens/snapty_07_ru.jpg";
import screenRu08 from "@/screens/snapty_08_ru.jpg";
import screenRu09 from "@/screens/snapty_09_ru.jpg";

const screenSets: Record<Locale, StaticImageData[]> = {
  en: [screen01, screen02, screen03, screen04, screen05, screen06],
  ru: [
    screenRu01,
    screenRu02,
    screenRu03,
    screenRu04,
    screenRu05,
    screenRu06,
    screenRu07,
    screenRu08,
    screenRu09,
  ],
};

type Props = {
  screenAlts?: string[];
  locale?: Locale;
};

export default function ScreensCarousel({
  screenAlts = [],
  locale = "en",
}: Props) {
  const screens = screenSets[locale];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [locale]);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % screens.length);
    }, 2000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [screens.length]);

  return (
    <div className="screen-carousel" aria-label="Snapty app screens preview">
      {screens.map((screen, index) => (
        <Image
          key={screen.src}
          src={screen}
          alt={
            screenAlts.length > 0
              ? screenAlts[index % screenAlts.length]
              : `Snapty app screen ${index + 1}`
          }
          className={`screen-image carousel-image ${index === activeIndex ? "is-active" : ""}`}
          priority={index === 0}
        />
      ))}
    </div>
  );
}
