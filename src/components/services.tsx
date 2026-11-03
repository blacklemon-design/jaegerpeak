import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link as IntlLink } from "../i18n/navigation";

import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Locale } from "next-intl";
import { offerIcons } from "./services-details";

// Texts: messages/de.json and messages/en.json, namespace "Offers" -> "home"
type HomeOffer = { id: string; title: string; subtitle: string; points: string[]; price: string };
type OfferTitle = { id: string; title: string };

export async function Services({ lang }: { lang: Locale }) {
  const t = await getTranslations({ namespace: "Hero", locale: lang });
  const o = await getTranslations({ namespace: "Offers", locale: lang });
  const services = o.raw("home.items") as HomeOffer[];
  const moreIds = o.raw("home.moreIds") as string[];
  const allOffers = o.raw("items") as OfferTitle[];
  const more = moreIds.map((id) => allOffers.find((offer) => offer.id === id)!);

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
          {services.map((service) => (
            <Card
              key={service.id}
              className="card-hover bg-card-dark border-border"
            >
              <CardHeader className="text-center">
                <div className="mb-4 mx-auto">
                  <Image
                    height={48}
                    width={48}
                    src={offerIcons[service.id]}
                    alt=""
                    className="h-12 w-12 object-contain"
                  />
                </div>
                <CardTitle className="text-white hyphens-auto" lang={lang}>{service.title}</CardTitle>
                <CardDescription className="text-foreground">
                  {service.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 flex flex-col justify-between h-full">
                <ul className="space-y-2">
                  {service.points.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="text-foreground text-sm flex items-start"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mr-2 mt-1.5 flex-none">
                      </div>
                      <p>
                        {feature}
                      </p>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-card space-y-4">
                  <p className="text-primary font-semibold text-center">{service.price}</p>
                  <IntlLink href={{ pathname: '/services', hash: service.id }} passHref>
                    <Button className="w-full bg-primary hover:bg-primary-hover text-white">
                      {t("sbutton")}
                    </Button>
                  </IntlLink>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-foreground text-center mt-10">
          <span className="mr-1">{o("home.more")}</span>
          {more.map((offer, i) => (
            <span key={offer.id}>
              {i > 0 && <span className="mx-2 text-gray-500">·</span>}
              <IntlLink
                href={{ pathname: '/services', hash: offer.id }}
                className="text-white underline decoration-primary underline-offset-4 hover:text-primary transition-colors"
              >
                {offer.title}
              </IntlLink>
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
