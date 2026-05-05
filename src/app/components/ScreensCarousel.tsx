"use client";

import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import screen01 from "@/screens/Snapty_01.jpg";
import screen02 from "@/screens/Snapty_02.jpg";
import screen03 from "@/screens/Snapty_03.jpg";
import screen04 from "@/screens/Snapty_04.jpg";
import screen05 from "@/screens/Snapty_05.jpg";
import screen06 from "@/screens/Snapty_06.jpg";

const screens: StaticImageData[] = [screen01, screen02, screen03, screen04, screen05, screen06];

export default function ScreensCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % screens.length);
    }, 2000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="screen-carousel" aria-label="Snapty app screens preview">
      {screens.map((screen, index) => (
        <Image
          key={screen.src}
          src={screen}
          alt={`Snapty app screen ${index + 1}`}
          className={`screen-image carousel-image ${index === activeIndex ? "is-active" : ""}`}
          priority={index === 0}
        />
      ))}
    </div>
  );
}
