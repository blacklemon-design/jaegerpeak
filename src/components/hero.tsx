import { Button } from "@/components/ui/button";
import { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

export async function Hero({ lang }: { lang: Locale }) {
    const t = await getTranslations({ namespace: "Hero", locale: lang });

  return (
    <section
      id="home"
      className="pt-16 min-h-screen flex items-center bg-gradient-to-br bg-background mt-14 lg:mt-0 relative"
    >
      {/* Hintergrund-Bild für mobile Geräte */}
      <div className="absolute inset-0 z-0 md:hidden flex items-center justify-center">
        <div className="relative w-96 h-[28rem] sm:w-[28rem] sm:h-[32rem]">
          <Image
            src={"/images/ramon-hero_cut.webp"}
            alt="Athletic fitness coach in dynamic jumping pose"
            fill
            className="object-contain opacity-30"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 gap-0 md:gap-12">
          {/* Text-Bereich */}
          <div className="space-y-6 w-full lg:col-span-1 col-span-2 pt-8 md:pt-0">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight break-normal sm:reverse">
                Fitness,{" "}
                <span className="text-primary">Performance</span>{" "}
                Functionality
              </h1>
              <p className="text-xl text-foreground max-w-2xl">
                {t("htext")}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/#contact" passHref>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary-hover text-white px-8 py-3"
                >
                  {t("hbutton")}
                </Button>
              </Link>
            </div>
            <div className="grid-cols-3 gap-6 pt-4 grid">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{t("hpoint1_1")}</div>
                <div className="text-foreground text-xl">{t("hpoint1_2")}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{t("hpoint2_1")}</div>
                <div className="text-foreground text-xl">{t("hpoint2_2")}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{t("hpoint3_1")}</div>
                <div className="text-foreground text-xl">{t("hpoint3_2")}</div>
              </div>
            </div>
          </div>

          {/* Bild für Desktop-Geräte */}
          <div className="relative lg:col-span-1 col-span-2 max-h-160 lg:h-full h-90 sm:h-120 md:h-140 w-full md:w-1/2 lg:w-full mx-auto hidden md:block">
            <Image
              src={"/images/ramon-hero_cut.webp"}
              alt="Athletic fitness coach in dynamic jumping pose"
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
