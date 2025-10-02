import { Award, Users, Target, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "./ui/button"
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Locale } from "next-intl";

export async function About({ lang }: { lang: Locale }) {
    const t = await getTranslations({ namespace: "Hero", locale: lang });
  return (
    <section id="about" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                {t("aheader1")}<span className="text-primary"> {t("aheader2")}</span>
              </h2>
              <p className="text-foreground text-lg">
                {t("atext1")}
              </p>
              <p className="text-foreground text-lg">
                {t("atext2")}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <Card className="bg-card border-border m-2">
                <CardContent className="p-2 text-center">
                  <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-md text-foreground">{t("afield1")}</div>
                </CardContent>
              </Card>
              <Card className="bg-card border-border m-2">
                <CardContent className="p-2 text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-md text-foreground">{t("afield2")}</div>
                </CardContent>
              </Card>
              <Card className="bg-card border-border m-2">
                <CardContent className="p-2 text-center">
                  <Target className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-md text-foreground">{t("afield3")}</div>
                </CardContent>
              </Card>
              <Card className="bg-card border-border m-2">
                <CardContent className="p-2 text-center">
                  <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-md text-foreground">{t("afield4")}</div>
                </CardContent>
              </Card>
            </div>
            <div className="flex flex-col sm:flex-col gap-4">
              <Link href="/about" passHref>
                <Button className="w-full h-10 bg-primary hover:bg-primary-hover text-white">
                  {t("abutton")}
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src="/images/über_mich.jpeg"
              alt="Alex Johnson - Fitness Coach"
              className="rounded-2xl w-full h-auto object-cover mx-auto max-h-160"
            />
            <div className="absolute -bottom-4 -left-4 w-full h-full bg-primary/20 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
