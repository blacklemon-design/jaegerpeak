"use client";

import { ReactNode, useEffect, useRef } from "react";

// Keeps the closed review boxes in one row equally high (measured on load and when the width changes).
// Opening a box does not re-measure, so only that box grows and the others stay exactly as they are.
export function TestimonialGrid({ className, children }: { className: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = ref.current;
    if (!grid) return;

    const equalize = () => {
      const cards = Array.from(grid.children) as HTMLElement[];
      const closed = cards.filter((c) => !c.querySelector("[data-open='true']"));
      // measure the natural height of every closed box
      closed.forEach((c) => (c.style.minHeight = ""));
      const rows = new Map<number, HTMLElement[]>();
      cards.forEach((c) => {
        const top = c.offsetTop;
        rows.set(top, [...(rows.get(top) ?? []), c]);
      });
      rows.forEach((row) => {
        const rowClosed = row.filter((c) => closed.includes(c));
        if (rowClosed.length === 0) return;
        const height = row.length < 2 ? 0 : Math.max(...rowClosed.map((c) => c.offsetHeight));
        rowClosed.forEach((c) => (c.style.minHeight = height ? `${height}px` : ""));
      });
    };

    // only re-measure when the width changes (and once the font has loaded), not when a box opens or closes
    let width = -1;
    document.fonts?.ready.then(equalize);
    const observer = new ResizeObserver(() => {
      if (grid.clientWidth === width) return;
      width = grid.clientWidth;
      equalize();
    });
    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
