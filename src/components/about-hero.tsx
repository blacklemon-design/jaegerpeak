import { Button } from "@/components/ui/button";
import { Award, Calendar, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Locale } from "next-intl";

export async function AboutHero({ lang }: { lang: Locale }) {
      const t = await getTranslations({ namespace: "About", locale: lang });

  return (
    <section className="pt-24 lg:pt-16 min-h-screen flex items-center bg-background pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                {t("htitle1")}<span className="text-primary">{t("htitle2")}</span>
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
