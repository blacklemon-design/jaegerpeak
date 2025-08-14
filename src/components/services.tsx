import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dumbbell, Apple, Users, Video } from "lucide-react"

export function Services() {
  const services = [
    {
      id: "body-shaping",
      icon: Dumbbell,
      title: "Body Shaping",
      subtitle: "Muskeln aufbauen. Fett verlieren. Stark & ästhetisch aussehen",
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
      price: "$40",
      duration: "pro Tag",
      idealFor: [
        "Mitglied vom Kraftwerk Fitness bist",
        "Wenn du selbstständig trainierst, aber einen strukturierten Plan brauchst",      ],
    },
  ]

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Meine <span className="text-primary">Angebote</span>
          </h2>
          <p className="text-foreground text-lg max-w-2xl mx-auto">
            Finde das Coaching, das am besten zu deinem Lifestyle und deinen Zielen passt.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card-dark border-border hover:border-primary transition-colors">
              <CardHeader className="text-center">
                <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-white">{service.title}</CardTitle>
                <CardDescription className="text-foreground">{service.subtitle}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.idealFor.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-foreground text-sm flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-card">
                  <div className="text-2xl font-bold text-primary mb-4">{service.price}</div>
                  <Button className="w-full bg-primary hover:bg-primary-hover text-white">Get Started</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
