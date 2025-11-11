import { Link as IntlLink } from "../i18n/navigation";
import Link from "next/link";
import {
  Dumbbell,
  Facebook,
  Heart,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import LocaleSwitcher from "./LocaleSwitcher";
import { getTranslations } from "next-intl/server";
import { Locale } from "next-intl";

export async function Footer({ lang }: { lang: Locale }) {
  const t = await getTranslations({ namespace: "Footer", locale: lang });
  return (
    <footer className="bg-background-secondary border-t border-border-dark">
      <div className="container mx-auto pb-0 px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <IntlLink className="flex items-center space-x-2" href="/">
                <img
                  src="/logo_horizontal_white.svg"
                  alt="logo"
                  className="h-8"
                />
              </IntlLink>
            </div>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/jaegerpeak/"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/company/jäger-peak/"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
            <LocaleSwitcher lang={lang} />
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t("services")}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services#body-shaping"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  {t("body-shaping")}
                </Link>
              </li>
              <li>
                <Link
                  href="/services#athletic-performance-coaching"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  {t("athletic-performance-coaching")}
                </Link>
              </li>
              <li>
                <Link
                  href="/services#functional-training"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  {t("functional-training")}
                </Link>
              </li>
              <li>
                <Link
                  href="/services#trainings-einführung"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  {t("training-introduction")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t("links")}</h3>
            <ul className="space-y-2">
              <li>
                <IntlLink
                  href="/about"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  {t("about")}
                </IntlLink>
              </li>
              <li>
                <IntlLink
                  href="/services"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  {t("services")}
                </IntlLink>
              </li>
              {
                /**}
              <li>
                <Link href="#testimonials" className="text-foreground hover:text-primary transition-colors">
                  Bewertungen
                </Link>
              </li>
              */
              }
              <li>
                <a
                  href="/#contact"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  {t("contact")}
                </a>
              </li>
              <li>
                <IntlLink
                  href="/impressum"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  {t("impressum")}
                </IntlLink>
              </li>
              <li>
                <IntlLink
                  href="/datenschutzerklaerung"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  {t("datenschutzerklaerung")}
                </IntlLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t("contact")}</h3>
            <ul className="space-y-2 text-foreground">
              <li>
                <Link
                  href={"mailto:info@jaegerpeak.ch"}
                  className="hover:text-primary duration-300"
                >
                  info@jaegerpeak.ch
                </Link>
              </li>
              <li>
                <Link
                  className="text-white hover:text-primary duration-300"
                  href={"tel:+41763867705"}
                >
                  +41 76 386 77 05
                </Link>
              </li>
              <Link
                className="text-white hover:text-primary duration-300"
                href={"https://maps.app.goo.gl/9ub5LKuiPHpjzZGY9"}
              >
                {t("place")}
              </Link>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border text-center text-sm text-muted-foreground py-2">
          <div className="w-full flex justify-center">
            <div className="p-3 text-center text-zinc-500 flex">
              {t("developedby")}{"  "}
              <Heart className="text-blacklemon h-4 w-4 fill-current ml-1 mr-1" />
              {t("by")}
              <Link
                target="_blank"
                href="https://blacklemon.design"
                className="hover:text-blacklemon ml-1 text-blacklemon"
              >
                <strong>BlackLemon</strong>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
