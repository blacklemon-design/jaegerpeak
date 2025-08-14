import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dumbbell, Apple, Users, Video } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Dumbbell,
      title: "Personal Training",
      description: "One-on-one training sessions tailored to your specific goals and fitness level.",
      features: ["Customized workout plans", "Form correction", "Progress tracking", "Flexible scheduling"],
      price: "$80/session",
    },
    {
      icon: Apple,
      title: "Nutrition Coaching",
      description: "Personalized meal plans and nutrition guidance to fuel your transformation.",
      features: ["Custom meal plans", "Macro tracking", "Supplement advice", "Recipe suggestions"],
      price: "$150/month",
    },
    {
      icon: Users,
      title: "Group Training",
      description: "Small group sessions that combine motivation with personalized attention.",
      features: ["Max 4 people per group", "Varied workouts", "Community support", "Cost effective"],
      price: "$40/session",
    },
    {
      icon: Video,
      title: "Online Coaching",
      description: "Remote coaching with video calls, custom programs, and ongoing support.",
      features: ["Weekly video calls", "Custom workout videos", "24/7 chat support", "Progress monitoring"],
      price: "$200/month",
    },
  ]

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="text-primary">Services</span>
          </h2>
          <p className="text-foreground text-lg max-w-2xl mx-auto">
            Choose the coaching option that best fits your lifestyle and goals. All programs include ongoing support and
            progress tracking.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card-dark border-border hover:border-primary transition-colors">
              <CardHeader className="text-center">
                <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-white">{service.title}</CardTitle>
                <CardDescription className="text-foreground">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
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
