"use client";

import { useEffect, useRef, useState } from "react";

// Shows the review text (word for word) shortened to a few lines, with "Mehr lesen" if it is longer
export function TestimonialQuote({ quote, moreLabel, lessLabel }: { quote: string; moreLabel: string; lessLabel: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [open, setOpen] = useState(false);
  const [tooLong, setTooLong] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (el && !open) setTooLong(el.scrollHeight > el.clientHeight + 1);
  }, [open]);

  return (
    <div>
      <p ref={ref} className={`text-foreground leading-relaxed ${open ? "" : "line-clamp-6"}`}>
        {quote}
      </p>
      {(tooLong || open) && (
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="mt-2 text-sm font-semibold text-primary hover:underline underline-offset-4"
        >
          {open ? lessLabel : moreLabel}
        </button>
      )}
    </div>
  );
}
