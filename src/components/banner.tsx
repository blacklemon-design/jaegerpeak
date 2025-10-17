"use client";

import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

interface HeroProps {
  titleDe?: string;
  titleEn?: string;
  descriptionDe?: string;
  descriptionEn?: string;
  eventDate?: string;
  isStartDate: boolean;
  showDate: boolean;
  showBanner: boolean;
  starts_in: string;
  ends_in: string;
}

export default function Banner({
  titleDe,
  titleEn,
  descriptionDe,
  descriptionEn,
  eventDate,
  isStartDate,
  showDate,
  showBanner,
  starts_in,
  ends_in,
}: HeroProps) {
  const locale = useLocale();
  const [timeLeft, setTimeLeft] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

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

      const parts = [];
      if (days) parts.push(`${days}d`);
      if (hours || days) parts.push(`${hours}h`);
      if (minutes || hours || days) parts.push(`${minutes}m`);

      setTimeLeft(parts.join(" "));
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () =>  clearInterval(timer);

  }, [eventDate]);

  if (!showBanner) return null;
  if (!eventDate) return null;
  if ((eventDate === "" || timeLeft === "0s") && showDate) return null;
  if (new Date(eventDate).getTime() < new Date().getTime() && showDate) return null;

  const title = locale === "de" ? titleDe : titleEn;
  const description = locale === "de" ? descriptionDe : descriptionEn;

  return (
    <>
      {/* 🔹 Banner bleibt oben */}
      <section
        onClick={() => setIsPopupOpen(true)}
        className="bg-primary text-black px-10 py-3 rounded-b-lg flex flex-col md:flex-row md:items-center md:gap-10 cursor-pointer hover:bg-primary/90 transition-colors shadow-md"
      >
        <h1 className="text-md md:text-xl font-bold">{title}</h1>
        {showDate ? (
          <p className="text-md">
            {isStartDate ? starts_in : ends_in}: {timeLeft}
          </p>
        ) : null}
      </section>

      {isPopupOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center w-screen h-screen"
          onClick={() => setIsPopupOpen(false)}
        >
          <div
            className="bg-gray-200 rounded-2xl shadow-2xl p-6 w-[90%] sm:w-[50%] text-center"
            onClick={(e) => e.stopPropagation()} 
          >
            <h2 className="text-xl font-semibold text-black mb-3">{title}</h2>
            <p className="text-gray-700 mb-6">{description}</p>
            <button
              onClick={() => setIsPopupOpen(false)}
              className="bg-primary text-black px-4 py-2 rounded-lg font-medium hover:bg-primary/80 transition"
            >
              Schließen
            </button>
          </div>
        </div>
      )}
    </>
  );
}
