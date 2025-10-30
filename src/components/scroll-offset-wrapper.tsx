"use client"

import type React from "react"
import { useEffect, useRef } from "react"

interface ScrollOffsetWrapperProps {
    children: React.ReactNode
    showBanner: boolean
}

export function ScrollOffsetWrapper({
    children,
    showBanner = false
}: ScrollOffsetWrapperProps) {
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (showBanner) {
            
            const hash = window.location.hash.slice(1)
            const targetElement = document.getElementById(hash)

            if (targetElement) {
                const elementRect = targetElement.getBoundingClientRect()
                const elementTop = elementRect.top + window.scrollY
                const offsetPosition = elementTop - 85

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "instant",
                })
            }
        }
    })

    return <div ref={sectionRef}>{children}</div>
}
