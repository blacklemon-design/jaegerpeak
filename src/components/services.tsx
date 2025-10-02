import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Apple, Dumbbell, Users, Video } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Locale } from "next-intl";

export async function Services({ lang }: { lang: Locale }) {
  const t = await getTranslations({ namespace: "Hero", locale: lang });
  const services = [
    {
      id: "body-shaping",
      iconPath: "/images/Icon_Bodyshaping.png",
      title: "Body Shaping",
      subtitle: t("sbody-shaping_sub"),
      idealFor: [
        t("sbody-shaping_idealFor1"),
        t("sbody-shaping_idealFor2"),
        t("sbody-shaping_idealFor3"),
      ],
    },
    {
      id: "athletic-performance-coaching",
      iconPath: "/images/Icon_Athletik.png",
      title: "Athletic Performance Coaching",
      subtitle:
        t("sathletic_sub"),
      idealFor: [
        t("sathletic_idealFor1"),
        t("sathletic_idealFor2"),
        t("sathletic_idealFor3"),
      ],
    },
    {
      id: "functional-training",
      iconPath: "/images/Icon_Functional.png",
      title: "Functional Training",
      subtitle: t("sfunctional_sub"),
      idealFor: [
        t("sfunctional_idealFor1"),
        t("sfunctional_idealFor2"),
        t("sfunctional_idealFor3"),
      ],
    },
    {
      id: "trainings-einführung",
      iconPath: "/images/Icon_Trainingsanpassung.png",
      title: "Trainingseinführung/ -anpassung",
      subtitle: t("straining_sub"),
      idealFor: [
        t("straining_idealFor1"),
        t("straining_idealFor2"),
        t("straining_idealFor3"),
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            {t("sheader1")} <span className="text-primary">{t("sheader2")}</span>
          </h2>
          <p className="text-foreground text-lg max-w-2xl mx-auto">
            {t("stext")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card-dark border-border hover:border-primary transition-colors"
            >
              <CardHeader className="text-center">
                <div className="mb-4 mx-auto">
                  <Image
                    height={48}
                    width={48}
                    src={service.iconPath}
                    alt="athletic icon"
                  />
                </div>
                <CardTitle className="text-white">{service.title}</CardTitle>
                <CardDescription className="text-foreground">
                  {service.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 flex flex-col justify-between h-full">
                <ul className="space-y-2">
                  {service.idealFor.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="text-foreground text-sm flex items-center"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mr-2 flex-none">
                      </div>
                      <p>
                        {feature}
                      </p>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-card">
                  <Link href={`/services#${service.id}`} passHref>
                    <Button className="w-full bg-primary hover:bg-primary-hover text-white">
                      {t("sbutton")}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
