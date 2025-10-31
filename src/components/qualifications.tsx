import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, BookOpen, Users, Target } from "lucide-react"
import { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function Qualifications({ lang }: { lang: Locale }) {
      const t = await getTranslations({ namespace: "About", locale: lang });
  const certifications = [
    {
      title: t("c1_title"),
      organization: "Swiss Academy of Fitness and sports (SAFS)",
      year: t("c1_year"),
      status: "finished",
    },
    {
      title: t("c2_title"),
      organization: "SAFS",
      year: t("c2_year"),
      status: "finished",
    },
    {
      title: t("c3_title"),
      organization: "SAFS",
      year: t("c3_year"),
      status: "finished",
    },
    {
      title: t("c4_title"),
      organization: "SAFS",
      year: t("c4_year"),
      status: "finished",
    },
    {
      title: t("c5_title"),
      organization: "RD®SAS GmbH",
      year: t("c5_year"),
      status: "running",
    },
    {
      title: t("c6_title"),
      organization: "RD®SAS GmbH",
      year: t("c6_year"),
      status: "running",
    },
  ]

  const achievements = [
    { icon: Users, title: "500+ Clients Trained", description: "Successfully guided over 500 individuals" },
    { icon: Target, title: "98% Success Rate", description: "Clients achieving their primary goals" },
    { icon: Award, title: "Top Trainer Award", description: "Fitness Center Excellence Award 2023" },
    { icon: BookOpen, title: "Continuing Education", description: "40+ hours annually in professional development" },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            {t("qheader1")} <span className="text-primary">{t("qheader2")}</span>
          </h2>
        </div>

        <div className="space-y-16">
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">{t("qsubtitle")}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="bg-card-dark border-border">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-white text-lg">{cert.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground">{cert.organization}</p>
                    
                    <p className="text-gray-400 text-sm mt-1">
                      {cert.status === "running"
                        ? t("status2")
                        : t("status1") + `: ${cert.year}`}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements */}
          {/*<div>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Professional Achievements</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="bg-card-dark border-card text-center">
                  <CardContent className="p-6">
                    <achievement.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h4 className="text-white font-semibold mb-2">{achievement.title}</h4>
                    <p className="text-foreground text-sm">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div> 
          </div> */}
        </div>
      </div>
    </section>
  )
}