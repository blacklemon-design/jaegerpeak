import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export async function ServicesHero(
  { lang, bannerDate }: { lang: Locale; bannerDate: string },
) {
  const t = await getTranslations({ namespace: "Services", locale: lang });
  const bannerDateAsDate = new Date(bannerDate);

  return (
    <section className={`min-h-[60vh] flex items-center bg-background ${bannerDateAsDate < new Date(Date.now()) ? "pt-16": "pt-52 lg:pt-16"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              {t("htitle1")}{" "}
              <span className="text-primary">{t("htitle2")}</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t("htext1")}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" passHref>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary text-white px-8 py-3 w-full whitespace-normal text-center"
              >
                {t("hbutton1")}
              </Button>
            </Link>
            <Link href="/services#body-shaping" passHref>
              <Button
                size="lg"
                variant="outline"
                className="border-card text-white hover:bg-card-dark px-8 py-3 bg-transparent max-w-full whitespace-normal text-center"
              >
                <ArrowDown className="h-5 w-5 mr-2" />
                {t("hbutton2")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
