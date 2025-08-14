// components/Hero.tsx
"use client";

import { useEffect, useState } from "react";

interface HeroProps {
  title?: string;
  eventDate?: string;
}

export default function Banner({ title, eventDate }: HeroProps) {
  const [timeLeft, setTimeLeft] = useState<string>("");
    console.log(eventDate?.toString());
  useEffect(() => {
    if (!eventDate) return;

    const updateCountdown = () => {
      const diff = new Date(eventDate).getTime() - new Date().getTime();
      if (diff <= 0) {
        setTimeLeft("Event has started!");
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  // Only show if data exists
  if (!title || !eventDate) return null;
  console.log(title);

  return (
    <section className="mt-16 bg-yellow-300 text-black p-6 rounded-lg shadow-lg flex flex-col items-center gap-4">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-lg">Starts in: {timeLeft}</p>
    </section>
  );
}