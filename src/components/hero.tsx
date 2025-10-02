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
      className="pt-16 min-h-screen flex items-center bg-gradient-to-br bg-background mt-14 lg:mt-0"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-0 md:gap-12">
          <div className="space-y-8 w-full lg:col-span-1 col-span-2">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight break-normal">
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
            <div className="grid-cols-3 gap-8 pt-8 hidden md:grid">
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

          <div className="relative lg:col-span-1 col-span-2 max-h-160 lg:h-full h-90 sm:h-120 md:h-140 w-full md:w-1/2 lg:w-full mx-auto">
            {
              /* <img
                src="/images/ramon-hero.png"
                alt="Athletic fitness coach in dynamic jumping pose"
                className="w-auto max-h-160 obeject-cover mx-auto"
              /> */
            }
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
