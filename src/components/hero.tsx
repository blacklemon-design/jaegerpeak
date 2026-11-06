import { Button } from "@/components/ui/button";
import { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Link as IntlLink } from "../i18n/navigation";

export async function Hero({ lang, showBanner }: { lang: Locale, showBanner: boolean }) {
  const t = await getTranslations({ namespace: "Hero", locale: lang });
  return (
    <section
      id="home"
      className={`pt-16 md:min-h-screen mb-16 md:mb-0 flex md:items-center bg-gradient-to-br bg-background mt-14 lg:mt-0 relative ${!showBanner ? "pt-16": "pt-34 lg:pt-16"}`}
    > 
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 gap-10 md:gap-12">
          {/* Text-Bereich */}
          <div className="space-y-6 w-full lg:col-span-1 col-span-2 justify-center flex flex-col">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight break-normal sm:reverse">
                {t("htitle1")}
                <span className="text-primary">{t("htitle2")}</span>
                {t("htitle3")}
              </h1>
              <p className="text-xl text-foreground max-w-2xl">
                {t("htext")}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <IntlLink href={{ pathname: "/", hash: "contact" }}>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary-hover text-white px-4 sm:px-8 py-3 h-auto min-h-10 whitespace-normal text-center"
                >
                  {t("hbutton")}
                </Button>
              </IntlLink>
            </div>
            <div className="grid grid-cols-3 gap-2 sm:gap-6 pt-4">
              <div className="text-center">
                <div className="text-lg sm:text-3xl font-bold text-primary">{t("hpoint1_1")}</div>
                <div className="text-foreground text-sm sm:text-xl">{t("hpoint1_2")}</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-3xl font-bold text-primary">{t("hpoint2_1")}</div>
                <div className="text-foreground text-sm sm:text-xl">{t("hpoint2_2")}</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-3xl font-bold text-primary">{t("hpoint3_1")}</div>
                <div className="text-foreground text-sm sm:text-xl">{t("hpoint3_2")}</div>
              </div>
            </div>
          </div>

          {/* Bild für Desktop-Geräte */}
          <div className="relative lg:col-span-1 col-span-2 max-h-160 lg:h-full xl:h-[600px] h-90 sm:h-120 md:h-140 w-full md:w-1/2 lg:w-full mx-auto">
            <Image
              src={"/images/ramon-hero_cut.webp"}
              alt="Ramon Jäger - Athletiktraining"
              fill
              className="object-contain"
              priority
            />
          </div>
 
        </div>
      </div>
    </section>
  );
}
