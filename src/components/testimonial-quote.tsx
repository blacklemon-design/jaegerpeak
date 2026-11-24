"use client";

import { useEffect, useRef, useState } from "react";

// Shows the review text (word for word) shortened to a few lines, with "Mehr lesen" if it is longer.
// Opening only grows this one box, exactly as far as the text needs.
export function TestimonialQuote({ quote, moreLabel, lessLabel }: { quote: string; moreLabel: string; lessLabel: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [open, setOpen] = useState(false);
  const [tooLong, setTooLong] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const check = () => {
      if (!open) setTooLong(el.scrollHeight > el.clientHeight + 1);
    };
    check();
    const observer = new ResizeObserver(check);
    observer.observe(el);
    return () => observer.disconnect();
  }, [open]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // after closing a long review, bring the box back into view if its top is above the screen
    if (!open) {
      const card = el.closest("[data-slot='card']");
      const headerHeight = document.querySelector("header")?.getBoundingClientRect().height ?? 0;
      const top = card ? card.getBoundingClientRect().top : 0;
      if (card && top < headerHeight) {
        window.scrollBy({ top: top - headerHeight - 16, behavior: "smooth" });
      }
    }
  }, [open]);

  return (
    <div data-open={open ? "true" : "false"}>
      <p ref={ref} className={`text-foreground leading-relaxed ${open ? "" : "line-clamp-6"}`}>
        {quote}
      </p>
      {(tooLong || open) && (
        <button
          type="button"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="mt-2 text-sm font-semibold text-primary hover:underline underline-offset-4"
        >
          {open ? lessLabel : moreLabel}
        </button>
      )}
    </div>
  );
}
