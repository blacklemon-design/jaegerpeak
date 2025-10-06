"use client"

import { useState } from "react"
import {Link as IntlLink} from "../i18n/navigation"
import { Menu, X, Dumbbell } from "lucide-react"
import { Button } from "@/components/ui/button"
import Banner from "./banner"
import { usePathname } from "next/navigation"
import { getTranslations } from "next-intl/server"
import { Locale } from "next-intl"
import Link from "next/link"

type Labels = {
  home: string;
  about: string;
  services: string;
  contact: string;
  starts_in: string;
};

export default function HeaderClient({ bannerTitleDe, bannerTitleEn, bannerDate, labels }: { bannerTitleDe: string; bannerTitleEn: string; bannerDate: string; labels: Labels }){
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname();
  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border-dark z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          <IntlLink className="flex items-center space-x-2" href="/">
            <img src="/logo_horizontal_white.svg" alt="logo" className="h-10" />
          </IntlLink>
          <div className="hidden md:flex items-center space-x-4">
          <nav className="flex items-center space-x-8">
            <IntlLink href="/" className={`text-foreground hover:text-primary transition-colors ${pathname === "/" ? "text-primary font-bold": ""}`}>
              {labels.home}
            </IntlLink>
            <IntlLink href="/about" className={`text-foreground hover:text-primary transition-colors ${pathname === "/about" ? "text-primary font-bold": ""}`}>
              {labels.about}
            </IntlLink>
            <IntlLink href="/services" className={`text-foreground hover:text-primary transition-colors ${pathname === "/services" ? "text-primary font-bold": ""}`}>
              {labels.services}
            </IntlLink>
            {/** <IntlLink href="/#testimonials" className="text-foreground hover:text-primary transition-colors">
              Bewertungen
            </IntlLink>*/}
          </nav>

          <div className="hidden md:flex ml-2">
            <Link className="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-md" href={"/#contact"}>{labels.contact}</Link>
          </div>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mb-2">
            <div className="px-3 pt-2 pb-3 space-y-1 bg-background-secondary rounded-lg mt-2">
              <IntlLink
                href="/"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {labels.home}
              </IntlLink>
              <IntlLink
                href="/about"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {labels.about}
              </IntlLink>
              <IntlLink
                href="/services"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {labels.services}
              </IntlLink>
              {/** <IntlLink
                href="#testimonials"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </IntlLink> **/}
              <Link
                href="/#contact"
                className="block w-full bg-primary hover:bg-primary-hover text-white rounded-md text-center py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                {labels.contact}
              </Link>
              {/**<div className="px-3 py-2">
                <Button className="w-full bg-primary hover:bg-primary-hover text-white">Book Session</Button>
              </div> **/}
            </div>
          </div>
        )}
      </div>
      <Banner titleEn={bannerTitleEn} titleDe={bannerTitleDe} eventDate={bannerDate} starts_in={labels.starts_in}/>
    </header>
  )
}
