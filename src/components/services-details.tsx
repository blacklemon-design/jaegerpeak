import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Apple,
  Award,
  Check,
  Dumbbell,
  Target,
  Users,
  Video,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Locale } from "next-intl";

export async function ServiceDetails({ lang }: { lang: Locale }) {
      const t = await getTranslations({ namespace: "Services", locale: lang });
  const services = [
    {
      id: "body-shaping",
      iconPath: "/images/Icon_Bodyshaping.png",
      title: t("service1_title"),
      subtitle: t("service1_subtitle"),
      description:
        t("service1_description"),
      price: "",
      duration: t("service1_duration"),
      idealFor: [
        t("service1_idealFor1"),
        t("service1_idealFor2"),
        t("service1_idealFor3"),
      ],
      frequentGoals: [
        t("service1_frequentGoals1"),
        t("service1_frequentGoals2"),
        t("service1_frequentGoals3"),
        t("service1_frequentGoals4"),
      ],
    },
    {
      id: "athletic-performance-coaching",
      iconPath: "/images/Icon_Athletik.png",
      title: t("service2_title"),
      subtitle:
        t("service2_subtitle"),
      description:
        t("service2_description"),
      price: "",
      duration: t("service2_duration"),
      idealFor: [
        t("service2_idealFor1"),
        t("service2_idealFor2"),
        t("service2_idealFor3"),
      ],
      frequentGoals: [
        t("service2_frequentGoals1"),
        t("service2_frequentGoals2"),
        t("service2_frequentGoals3"),
      ],
    },
    {
      id: "functional-training",
      iconPath: "/images/Icon_Functional.png",
      title: t("service3_title"),
      subtitle: t("service3_subtitle"),
      description:
         t("service3_description"),
      price: "",
      duration: t("service3_duration"),
      idealFor: [
        t("service3_idealFor1"),
        t("service3_idealFor2"),
        t("service3_idealFor3"),
      ],
      frequentGoals: [
        t("service3_frequentGoals1"),
        t("service3_frequentGoals2"),
        t("service3_frequentGoals3"),
      ],
    },
    {
      id: "trainings-einführung",
      iconPath: "/images/Icon_Trainingsanpassung.png",
      title: t("service4_title"),
      subtitle: t("service4_subtitle"),
      description:
        t("service4_description"),
      price: "CHF 150",
      duration: t("service4_duration"),
      idealFor: [
        t("service4_idealFor1"),
        t("service4_idealFor2"),
        t("service4_idealFor3"),
        t("service4_idealFor4"),
        
      ],
      frequentGoals: [
        t("service4_frequentGoals1"),
        t("service4_frequentGoals2"),
        t("service4_frequentGoals3"),
      ],
    },
  ];

  return (
    <section className="pb-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="">
          {services.map((service, index) => (
            <div key={service.id} className="relative pt-22" id={service.id}>
              <Card
                className={`bg-card-dark border-card`}
              >
                <CardHeader className="text-center pb-8">
                  <div className="flex justify-center mb-4">
                    <Image
                          height={64}
                          width={64}
                          src={service.iconPath}
                          alt="athletic icon"
                        />
                  </div>
                  <CardTitle className="text-3xl text-white mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-primary text-lg font-semibold">
                    {service.subtitle}
                  </CardDescription>
                  <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
                    {service.description}
                  </p>
                  <span className="text-4xl font-bold text-primary">
                    {service.price}
                  </span>
                  <span className="text-gray-400 ml-2">{service.duration}</span>
                </CardHeader>

                <CardContent className="space-y-8">
                  <div className="flex justify-center">
                    <div className="space-y-6 flex flex-col md:flex-row space-x-20">
                      <div className="w-full">
                        <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                          <Users className="h-5 w-5 text-primary mr-2" />
                          {t("sidealFor")}
                        </h4>
                        <ul className="space-y-2">
                          {service.idealFor.map((ideal, idealIndex) => (
                            <li
                              key={idealIndex}
                              className="text-gray-300 flex items-center"
                            >
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-none">
                              </div>
                              {ideal}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="w-full">
                        <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                          <Users className="h-5 w-5 text-primary mr-2" />
                          {t("sfrequentGoals")}
                        </h4>
                        <ul className="space-y-2">
                        {service.frequentGoals.map((frequent, frequentIndex) => (
                            <li
                              key={frequentIndex}
                              className="text-gray-300 flex items-center"
                            >
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-none">
                              </div>
                              {frequent}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-card">
                    <Link href="/#contact" passHref className="w-full">
                      <Button className="flex-1 bg-primary w-full hover:bg-primary text-white">
                        {t("sbutton")}
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
