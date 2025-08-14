import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, BookOpen, Users, Target } from "lucide-react"

export function Qualifications() {
  const certifications = [
    {
      title: "NASM Certified Personal Trainer",
      organization: "National Academy of Sports Medicine",
      year: "2019",
      status: "Current",
    },
    {
      title: "Precision Nutrition Level 1",
      organization: "Precision Nutrition",
      year: "2020",
      status: "Current",
    },
    {
      title: "Corrective Exercise Specialist",
      organization: "NASM",
      year: "2021",
      status: "Current",
    },
    {
      title: "Youth Exercise Specialist",
      organization: "NASM",
      year: "2022",
      status: "Current",
    },
  ]

  const education = [
    {
      degree: "Bachelor of Science in Kinesiology",
      school: "University of California, Los Angeles",
      year: "2018",
    },
    {
      degree: "Continuing Education in Sports Nutrition",
      school: "International Sports Sciences Association",
      year: "2023",
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
            Qualifications & <span className="text-primary">Credentials</span>
          </h2>
          <p className="text-foreground text-lg max-w-2xl mx-auto">
            I'm committed to staying current with the latest fitness and nutrition science to provide you with
            evidence-based coaching.
          </p>
        </div>

        <div className="space-y-16">
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Professional Certifications</h3>
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
                    <p className="text-gray-400 text-sm mt-1">Certified: {cert.year}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Education</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {education.map((edu, index) => (
                <Card key={index} className="bg-card-dark border-card">
                  <CardContent className="p-6">
                    <h4 className="text-white font-semibold text-lg mb-2">{edu.degree}</h4>
                    <p className="text-foreground">{edu.school}</p>
                    <p className="text-gray-400 text-sm mt-1">Graduated: {edu.year}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
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
          </div>
        </div>
      </div>
    </section>
  )
}