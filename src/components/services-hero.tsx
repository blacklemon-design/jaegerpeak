import { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function ServicesHero(
  { lang, showBanner }: { lang: Locale, showBanner: boolean },
) {
  const t = await getTranslations({ namespace: "Services", locale: lang });

  return (
    <section className={`flex items-center bg-background mt-14 lg:mt-0 ${!showBanner ? "pt-16 lg:pt-32": "pt-34 lg:pt-44"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              {t("htitle1")}{" "}
              <span className="text-primary">{t("htitle2")}</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t("htext1")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
