import Link from "next/link"
import { Dumbbell, Facebook, Instagram, Twitter, Youtube, Heart, Linkedin } from "lucide-react"
import LocaleSwitcher from "./LocaleSwitcher"
import { getTranslations } from "next-intl/server";
import { Locale } from "next-intl";

export async function Footer({ lang }: { lang: Locale }) {
  const t = await getTranslations({ namespace: "About", locale: lang });
  return (
    <footer className="bg-background-secondary border-t border-border-dark">
      <div className="container mx-auto pb-0 px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Link className="flex items-center space-x-2" href="/">
                <img src="/logo_horizontal_white.svg" alt="logo" className="h-8" />
              </Link>
            </div>
            <div className="flex space-x-4">
              <Link href="https://www.instagram.com/jaegerpeak/" className="text-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://www.linkedin.com/in/ramon-j%C3%A4ger-05661a23a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="text-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
            <LocaleSwitcher lang={lang} />
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Angebote</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#body-shaping" className="text-foreground hover:text-primary transition-colors">
                  Body Shaping
                </Link>
              </li>
              <li>
                <Link href="/services#athletic-performance-coaching" className="text-foreground hover:text-primary transition-colors">
                  Athletic Performance Coaching
                </Link>
              </li>
              <li>
                <Link href="/services#functional-training" className="text-foreground hover:text-primary transition-colors">
                  Functional Training
                </Link>
              </li>
              <li>
                <Link href="/services#trainings-einführung" className="text-foreground hover:text-primary transition-colors">
                  Trainingseinführung/ -anpassung
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-foreground hover:text-primary transition-colors">
                  Über mich
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-foreground hover:text-primary transition-colors">
                  Angebote
                </Link>
              </li>
              {/**}
              <li>
                <Link href="#testimonials" className="text-foreground hover:text-primary transition-colors">
                  Bewertungen
                </Link>
              </li>
              */}
              <li>
                <Link href="#contact" className="text-foreground hover:text-primary transition-colors">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link href="/impressum" className="text-foreground hover:text-primary transition-colors">
                  Impressum
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-2 text-foreground">
              <li><Link href={"mailto:info@jaegerpeak.ch"} className="hover:text-primary duration-300">info@jaegerpeak.ch</Link></li>
              <li>              <Link className="text-white hover:text-primary duration-300" href={"tel:+41763867705"}>+41 76 386 77 05</Link></li>
              <Link className="text-white hover:text-primary duration-300" href={"https://maps.app.goo.gl/9ub5LKuiPHpjzZGY9"}>
                Diepoldsau - Schweiz
              </Link>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border text-center text-sm text-muted-foreground py-2">
          <div className="w-full flex justify-center">
            <div className="p-3 text-center text-zinc-500 flex">
              Entwickelt mit {" "}
              <Heart className="text-blacklemon h-4 w-4 fill-current ml-1 mr-1" />
              von
              <Link target="_blank" href="https://blacklemon.design" className="hover:text-blacklemon ml-1 text-blacklemon">
                <strong>BlackLemon</strong>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
