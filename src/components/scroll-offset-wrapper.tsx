"use client";

import type React from "react";
import { useEffect } from "react";

interface ScrollOffsetWrapperProps {
    children: React.ReactNode;
    showBanner: boolean;
}

// Every jump target on the offers page has 88px space on top (pt-22).
// The fixed header (with banner) can be higher, so we add the difference,
// so that jumps never end up under the header.
const TARGET_SPACE = 88;

export function ScrollOffsetWrapper({
    children,
    showBanner = false,
}: ScrollOffsetWrapperProps) {
    useEffect(() => {
        const header = document.querySelector("header");
        const root = document.documentElement;

        const update = () => {
            const extra = header ? header.getBoundingClientRect().height - TARGET_SPACE + 12 : 0;
            root.style.scrollPaddingTop = `${Math.max(0, Math.round(extra))}px`;
        };
        update();

        // Opened with a #link: jump to the target with the correct offset
        const target = document.getElementById(window.location.hash.slice(1));
        if (target) target.scrollIntoView({ behavior: "instant" });

        const observer = header ? new ResizeObserver(update) : null;
        if (header && observer) observer.observe(header);
        window.addEventListener("resize", update);
        return () => {
            observer?.disconnect();
            window.removeEventListener("resize", update);
            root.style.scrollPaddingTop = "";
        };
    }, [showBanner]);

    return <div>{children}</div>;
}
