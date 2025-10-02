import { Card, CardContent } from "@/components/ui/card"
import { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function PersonalStory({ lang }: { lang: Locale }) {
      const t = await getTranslations({ namespace: "About", locale: lang });

  return (
    <section className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              {t("psheader")}
            </h2>
            <h2 className="text-2xl md:text-2xl font-bold leading-tight mt-10">
              {t("pssubtitle1")}<span className="text-primary">{t("pssubtitle2")}</span>
            </h2>
          </div>
          <div className="space-y-8">
            <Card className="bg-card border-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{t("pspoint1_header1")} <span className="text-primary">{t("pspoint1_header2")}</span></h3>
                <p className="text-foreground leading-relaxed mb-4">
                  {t("pspoint1_text1")}
                </p>
                <p className="text-foreground leading-relaxed">
                  {t("pspoint1_text2")}
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{t("pspoint2_header1")}<span className="text-primary">{t("pspoint2_header2")}</span></h3>
                <p className="text-foreground leading-relaxed mb-4">
                  {t("pspoint2_text1")}
                </p>
                <p className="text-foreground leading-relaxed">
                  {t("pspoint2_text2")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
