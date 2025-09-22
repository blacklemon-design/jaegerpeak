"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Dumbbell } from "lucide-react"
import { Button } from "@/components/ui/button"
import Banner from "./banner"
import { usePathname } from "next/navigation"

export function Header({bannerTitle, bannerDate}: {bannerTitle: string, bannerDate: string}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname();
  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border-dark z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          <Link className="flex items-center space-x-2" href="/">
            <img src="/logo_horizontal_white.svg" alt="logo" className="h-10" />
          </Link>
          <div className="flex items-center space-x-4">
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`text-foreground hover:text-primary transition-colors ${pathname === "/" ? "text-primary font-bold": ""}`}>
              Home
            </Link>
            <Link href="/about" className={`text-foreground hover:text-primary transition-colors ${pathname === "/about" ? "text-primary font-bold": ""}`}>
              Über mich
            </Link>
            <Link href="/services" className={`text-foreground hover:text-primary transition-colors ${pathname === "/services" ? "text-primary font-bold": ""}`}>
              Angebote
            </Link>
            <Link href="/#testimonials" className="text-foreground hover:text-primary transition-colors">
              Testimonials
            </Link>
          </nav>

          <div className="hidden md:flex ml-2">
            <Link className="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-md" href={"/#contact"}>Kontakt</Link>
          </div>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background-secondary rounded-lg mt-2">
              <Link
                href="/"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#testimonials"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href="#contact"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="px-3 py-2">
                <Button className="w-full bg-primary hover:bg-primary-hover text-white">Book Session</Button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Banner title={bannerTitle} eventDate={bannerDate}/>
    </header>
  )
}
