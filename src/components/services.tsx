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

export function Services() {
  const services = [
    {
      id: "body-shaping",
      icon: Dumbbell,
      title: "Body Shaping",
      subtitle: "Muskeln aufbauen. Fett verlieren. Stark & ästhetisch aussehen",
      idealFor: [
        "Sichtbare Körperveränderung",
        "Effizient & zielgerichtet trainieren",
        "Dranbleiben ohne Jojo-Effekt",
      ],
    },
    {
      id: "athletic-performance-coaching",
      icon: Apple,
      title: "Athletic Performance Coaching",
      subtitle:
        "Mehr Leistung im Sport, für dich als Einzelsportler oder auch als Team",
      idealFor: [
        "Schnelligkeit, Kraft & Agilität verbessern",
        "Verletzungen vorbeugen",
        "Athletisches Potenzial ausschöpfen",
      ],
    },
    {
      id: "functional-training",
      icon: Users,
      title: "Functional Training",
      subtitle: "Schmerzfrei bewegen und den Alltag meistern",
      idealFor: [
        "Beschwerden durch Sitzen oder Dysbalancen bekämpfen",
        "Gelenkschonendes, stärkendes Training",
        "Gesunder & beweglicher Lebensstil nach dem Healthy Performance Konzept",
      ],
    },
    {
      id: "trainings-einführung",
      icon: Users,
      title: "Trainingseinführung/ -anpassung",
      subtitle: "exklusiv für Kraftwerk Fitness Mitglieder",
      idealFor: [
        "Klarer Trainingsplan für selbstständiges Training",
        "Struktur statt Überforderung im Gym",
        "Kompakter Einstieg mit persönlicher Einführung",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Meine <span className="text-primary">Angebote</span>
          </h2>
          <p className="text-foreground text-lg max-w-2xl mx-auto">
            Finde das Coaching, das am besten zu deinem Lifestyle und deinen
            Zielen passt.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card-dark border-border hover:border-primary transition-colors"
            >
              <CardHeader className="text-center">
                <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
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
                  <Link href="/services" passHref>
                    <Button className="w-full bg-primary hover:bg-primary-hover text-white">
                      Mehr erfahen!
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
