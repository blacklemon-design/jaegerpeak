// components/Hero.tsx
"use client";

import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

interface HeroProps {
  titleDe?: string;
  titleEn?: string;
  eventDate?: string;
  starts_in: string;
}

export default function Banner(
  { titleDe, titleEn, eventDate, starts_in }: HeroProps,
) {
  const locale = useLocale();

  const [timeLeft, setTimeLeft] = useState("—");

  useEffect(() => {
    if (!eventDate) return;

    const updateCountdown = () => {
      const diff = new Date(eventDate).getTime() - Date.now();

      if (diff <= 0) {
        setTimeLeft("0s");
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      // Build a readable string dynamically
      const parts = [];
      if (days) parts.push(`${days}d`);
      if (hours || days) parts.push(`${hours}h`);
      if (minutes || hours || days) parts.push(`${minutes}m`);
      parts.push(`${seconds}s`);

      setTimeLeft(parts.join(" "));
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, [eventDate]);
  // Only show if data exists
  if (!titleDe || !titleEn || !eventDate || timeLeft === "0" || timeLeft === "0s" || timeLeft === "") return null;

  return (
    <section className="bg-primary text-black px-10 py-1 rounded-b-lg flex flex-col md:flex-row md:items-center md:gap-10">
      <h1 className="text-md md:text-2xl font-bold">
        {locale == "de" ? titleDe : titleEn}
      </h1>
      <p className="text-md">{starts_in}: {timeLeft}</p>
    </section>
  );
}
