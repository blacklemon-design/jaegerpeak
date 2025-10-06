import { Button } from "@/components/ui/button";
import { Award, Calendar, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Locale } from "next-intl";

export async function AboutHero(
  { lang, bannerDate }: { lang: Locale; bannerDate: string },
) {
  const t = await getTranslations({ namespace: "About", locale: lang });
  const bannerDateAsDate = new Date(bannerDate);

  return (
    <section
      className={`lg:pt-16 min-h-screen flex items-center bg-background pb-20  ${
        bannerDateAsDate < new Date(Date.now()) ? "pt-24" : "pt-52 lg:pt-24"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Layout */}
        <div className="space-y-8 lg:hidden">
          {/* Überschrift */}
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              {t("htitle1")}
              <span className="text-primary">{t("htitle2")}</span>
            </h1>
          </div>

          <div className="space-y-6">
            <p className="text-xl text-foreground">
              {t("hsubtitle")}
            </p>
          </div>

          {/* Bild - nur auf mobilen Geräten */}
          <div className="relative w-full max-w-md mx-auto">
            <img
              src="/images/über_mich_2.jpeg"
              alt="Ramon Jäger - Personal Trainer"
              className="object-contain rounded-2xl"
            />
          </div>

          {/* Text-Inhalt */}
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              {t("htext")}
            </p>
          </div>

          {/* Button */}
          <div className="w-full">
            <Link href="/#contact" passHref>
              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary text-white px-8 py-3 whitespace-normal text-center"
              >
                <p className="">
                  {t("hbutton")}
                </p>
              </Button>
            </Link>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                {t("htitle1")}
                <span className="text-primary">{t("htitle2")}</span>
              </h1>
              <p className="text-xl text-foreground">
                {t("hsubtitle")}
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                {t("htext")}
              </p>
            </div>

            <div className="w-full">
              <Link href="/#contact" passHref>
                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary text-white px-8 py-3 whitespace-normal text-center"
                >
                  <p className="">
                    {t("hbutton")}
                  </p>
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative w-full">
            <img
              src="/images/über_mich_2.jpeg"
              alt="Ramon Jäger - Personal Trainer"
              className="object-contain rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
