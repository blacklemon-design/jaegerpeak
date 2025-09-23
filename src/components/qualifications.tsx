import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, BookOpen, Users, Target } from "lucide-react"

export function Qualifications() {
  const certifications = [
    {
      title: "Fitness Trainer mit SAFS Fachausweis ",
      organization: "Swiss Academy of Fitness and sports (SAFS)",
      year: "April 2025",
      status: "finished",
    },
    {
      title: "Functional Trainer",
      organization: "SAFS",
      year: "Juli 2025",
      status: "finished",
    },
    {
      title: "Performance Trainer",
      organization: "SAFS",
      year: "August 2025",
      status: "finished",
    },
    {
      title: "Athletik Performance Trainer",
      organization: "SAFS",
      year: "",
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
            Ausbildungen & <span className="text-primary">Qualifikationen</span>
          </h2>
        </div>

        <div className="space-y-16">
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Meine Zertifizierungen</h3>
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
                        ? "Noch laufend …"
                        : `Abgeschlossen: ${cert.year}`}
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