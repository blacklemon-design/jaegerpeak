import Link from "next/link"
import { Dumbbell, Facebook, Instagram, Twitter, Youtube, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background-secondary border-t border-border-dark">
      <div className="container mx-auto pb-0 px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Dumbbell className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-white">FitCoach Pro</span>
            </div>
            <p className="text-foreground">
              Transform your body and mind with personalized fitness coaching that delivers real results.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-foreground hover:text-primary transition-colors">
                  Personal Training
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground hover:text-primary transition-colors">
                  Nutrition Coaching
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground hover:text-primary transition-colors">
                  Group Training
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground hover:text-primary transition-colors">
                  Online Coaching
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-foreground hover:text-primary transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-foreground">
              <li>123 Fitness Street</li>
              <li>New York, NY 10001</li>
              <li>(555) 123-4567</li>
              <li>alex@fitcoachpro.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border text-center text-sm text-muted-foreground py-2">
          <div className="w-full flex justify-center">
            <div className="p-3 text-center text-zinc-500 flex">
              Entwickelt mit {" "}
              <Heart className="text-primary h-4 w-4 fill-current ml-1 mr-1" />
              von
              <Link target="_blank" href="https://blacklemon.design" className="hover:text-primary ml-1 text-primary">
                <strong>BlackLemon</strong>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
