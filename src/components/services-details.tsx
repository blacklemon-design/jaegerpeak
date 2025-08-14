import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dumbbell, Apple, Users, Video, Check, Target, Award } from "lucide-react"

export function ServiceDetails() {
  const services = [
    {
      id: "body-shaping",
      icon: Dumbbell,
      title: "Body Shaping",
      subtitle: "Muskeln aufbauen. Fett verlieren. Stark & ästhetisch aussehen",
      description:
        "Du willst sichtbare Muskeln, einen definierten Körper oder einfach wieder in Form kommen? Ich helfe dir, nachhaltig Fett zu verlieren und Muskelmasse aufzubauen – mit strukturiertem Krafttraining, gezieltem Ernährungs-Input und individueller Betreuung.",
      price: "1000€",
      duration: "pro Stunde",
      idealFor: [
        "Deinen Körper sichtbar verändern willst",
        "Effizient trainieren statt planlos schwitzen willst",
        "Langfristig dranbleiben willst, ohne Jojo-Effekt",
      ],
    },
    {
      id: "athletic-performance-coaching",
      icon: Apple,
      title: "Athletic Performance Coaching",
      subtitle: "Mehr Leistung im Sport, für dich als Einzelsportler oder auch als Team",
      description:
        "Du trainierst für Tennis, Fussball, Leichtathletik oder einen anderen Sport und willst schneller, stärker und explosiver werden? Willst du nochmals alles aus dir rausholen für den nächsten Hyrox? Hindert dich dein Körper daran, in deinem Sport den nächsten Schritt zu machen? Ich analysiere deine Bewegungsmuster, stärke deine Schwächen und entwickle ein sportartspezifisches, nachhaltiges und verletzungsvorbeugendes Athletiktraining, das dich wirklich voranbringt.",
      price: "$120",
      duration: "pro Monat",
      idealFor: [
        "Deine Schnelligkeit, Kraft oder Agilität gezielt verbessern willst",
        "Verletzungsfrei durch die Saison kommen willst",
        "Dein volles athletisches Potenzial ausschöpfen willst",
      ],
    },
    {
      id: "functional-training",
      icon: Users,
      title: "Functional Training",
      subtitle: "Schmerzfrei bewegen und den Alltag meistern",
      description:
        "Rückenschmerzen, verspannte Schultern oder ein instabiler Rumpf? Ich helfe dir, deine Haltung zu verbessern, Alltagsbewegungen neu zu erlernen und wieder Vertrauen in deinen Körper zu gewinnen – mit funktionellem Training, das auf deine Realität zugeschnitten ist.",
      price: "$40",
      duration: "pro Tag",
      idealFor: [
        "Viel sitzt oder körperliche Beschwerden hast",
        "Ein Training willst, das dich nicht überfordert, sondern stärkt",
        "Langfristig gesünder und beweglicher leben willst",
      ],
    },
    {
      id: "trainings-einführung",
      icon: Users,
      title: "Trainings Einführung/-anpassung",
      subtitle: "exklusiv für Kraftwerk Fitness Mitglieder",
      description: "Du trainierst im Kraftwerk Fitness und willst mehr aus deinem Training herausholen? Ich analysiere deine aktuelle Situation und erstelle dir in 60 Minuten einen individuellen Trainingsplan - inklusive Einführung, aber ohne laufendes Coaching.",
      price: "$40",
      duration: "pro Tag",
      idealFor: [
        "Mitglied vom Kraftwerk Fitness bist",
        "Wenn du selbstständig trainierst, aber einen strukturierten Plan brauchst",      ],
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={service.id} className="relative">
              <Card
                className={`bg-card-dark border-card`}
              >
                <CardHeader className="text-center pb-8">
                  <div className="flex justify-center mb-4">
                    <service.icon className="h-16 w-16 text-primary" />
                  </div>
                  <CardTitle className="text-3xl text-white mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-primary text-lg font-semibold">{service.subtitle}</CardDescription>
                  <p className="text-gray-300 mt-4 max-w-2xl mx-auto">{service.description}</p>
                  <div className="flex items-center justify-center mt-6">
                    <span className="text-4xl font-bold text-primary">{service.price}</span>
                    <span className="text-gray-400 ml-2">/{service.duration}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-8">
                  <div className="flex justify-center">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                          <Users className="h-5 w-5 text-primary mr-2" />
                          Ideal für dich wenn du...
                        </h4>
                        <ul className="space-y-2">
                          {service.idealFor.map((ideal, idealIndex) => (
                            <li key={idealIndex} className="text-gray-300 flex items-center">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                              {ideal}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-card">
                    <Button className="flex-1 bg-primary hover:bg-primary text-white">
                      Get Started with {service.title}
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 border-card text-white hover:bg-card bg-transparent"
                    >
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
