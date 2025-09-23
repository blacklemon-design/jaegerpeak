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

export function ServiceDetails() {
  const services = [
    {
      id: "body-shaping",
      iconPath: "/images/Icon_Bodyshaping.png",
      title: "Body Shaping",
      subtitle: "Muskeln aufbauen. Fett verlieren. Stark & ästhetisch aussehen",
      description:
        "Du willst sichtbare Muskeln, einen definierten Körper oder einfach wieder in Form kommen? Ich helfe dir, nachhaltig Fett zu verlieren und Muskelmasse aufzubauen – mit strukturiertem Krafttraining, gezieltem Ernährungs-Input und individueller Betreuung.",
      price: "",
      duration: "",
      idealFor: [
        "Deinen Körper sichtbar verändern willst",
        "Effizient trainieren statt planlos schwitzen willst",
        "Langfristig dranbleiben willst, ohne Jojo-Effekt",
      ],
      frequentGoals: [
        "Sichtbarer Muskelaufbau (trotz stressigem Alltag)",
        "Bauchfett verlieren, definierter & straffer werden",
        "Motivation wiederfinden und langfristig behalten",
        "Endlich konstant & nachhaltig dranbleiben",
      ],
    },
    {
      id: "athletic-performance-coaching",
      iconPath: "/images/Icon_Athletik.png",
      title: "Athletic Performance Coaching",
      subtitle:
        "Mehr Leistung im Sport, für dich als Einzelsportler oder auch als Team",
      description:
        "Du trainierst für Tennis, Fussball, Leichtathletik oder einen anderen Sport und willst schneller, stärker und explosiver werden? Willst du nochmals alles aus dir rausholen für den nächsten Hyrox? Hindert dich dein Körper daran, in deinem Sport den nächsten Schritt zu machen? Ich analysiere deine Bewegungsmuster, stärke deine Schwächen und entwickle ein sportartspezifisches, nachhaltiges und verletzungsvorbeugendes Athletiktraining, das dich wirklich voranbringt.",
      price: "",
      duration: "",
      idealFor: [
        "Deine Schnelligkeit, Kraft oder Agilität gezielt verbessern willst",
        "Verletzungsfrei durch die Saison kommen willst",
        "Dein volles athletisches Potenzial ausschöpfen willst",
      ],
      frequentGoals: [
        "Stabilität, Agilität, Schnelligkeit und Explosivität verbessern für den nächsten Wettkampf",
        "Schnellkraft & Core-Stabilität und Ausdauer gezielt verbessern",
        "Nach einer Verletzung zurück zur vollen Belastung",
      ],
    },
    {
      id: "functional-training",
      iconPath: "/images/Icon_Functional.png",
      title: "Functional Training",
      subtitle: "Schmerzfrei bewegen und den Alltag meistern",
      description:
        "Rückenschmerzen, verspannte Schultern oder ein instabiler Rumpf? Ich helfe dir, deine Haltung zu verbessern, Alltagsbewegungen neu zu erlernen und wieder Vertrauen in deinen Körper zu gewinnen – mit funktionellem Training, das auf deine Realität zugeschnitten ist.",
      price: "",
      duration: "",
      idealFor: [
        "Viel sitzt oder körperliche Beschwerden hast",
        "Ein Training willst, das dich nicht überfordert, sondern stärkt",
        "Langfristig gesünder und beweglicher leben willst",
      ],
      frequentGoals: [
        "Rückenschmerzen beim Sitzen oder Bücken loswerden",
        "Treppen steigen, ohne ausser Atem zu kommen",
        "Bewegung in den sitzenden Berufsalltag bekommen",
      ],
    },
    {
      id: "trainings-einführung",
      iconPath: "/images/Icon_Trainingsanpassung.png",
      title: "Trainingseinführung/ -anpassung",
      subtitle: "exklusiv für Kraftwerk Fitness Mitglieder",
      description:
        "Du trainierst im Kraftwerk Fitness und willst mehr aus deinem Training herausholen? Ich analysiere deine aktuelle Situation und erstelle dir in 60 Minuten einen individuellen Trainingsplan - inklusive Einführung, aber ohne laufendes Coaching.",
      price: "CHF 150",
      duration: "Einmalig für Analyse, Planerstellung, Einführung und Ernährungsinputs",
      idealFor: [
        "Mitglied vom Kraftwerk Fitness bist",
        "selbstständig trainierst, aber einen strukturierten Plan brauchst",
        "eine gesunde Einstellung zur Ernährung haben willst",
        "Mühe mit Zu- oder Abnehmen hast",
        
      ],
      frequentGoals: [
        "Einen Trainingsplan, der genau auf mich und meine Ziele zugeschnitten ist",
        "Mit der richtigen Technik trainieren, um schnellstmöglich Fortschritte ohne Verletzungen zu erreichen",
        "Mit einem klaren Einstieg ins Fitness starten, ohne mich überfordert zu fühlen",
                
      ],
    },
  ];

  return (
    <section className="pb-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="">
          {services.map((service, index) => (
            <div key={service.id} className="relative pt-16" id={service.id}>
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
                    <div className="space-y-6 flex flex-row space-x-20">
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                          <Users className="h-5 w-5 text-primary mr-2" />
                          Ideal für dich wenn du...
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
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                          <Users className="h-5 w-5 text-primary mr-2" />
                          Häufige Ziele meiner Kunden...
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
                        Lass uns starten!
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
