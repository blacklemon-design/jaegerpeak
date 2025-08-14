import { Award, Users, Target, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Das<span className="text-primary"> bin ICH</span>
              </h2>
              <p className="text-foreground text-lg">
                Mein Name ist Ramon Jäger – Sport ist seit meiner Kindheit ein fester Teil meines Lebens. Heute arbeite ich als Fitnesstrainer mit SAFS-Fachausweis und Spezialist für Athletik Performance.
              </p>
              <p className="text-foreground">
                Ich helfe Menschen, stärker, belastbarer und selbstbewusster zu werden – egal ob Profi-Athlet, Hobbysportler oder Neueinsteiger. Immer mit dem Ziel: maximale Leistung ohne die Gesundheit zu vernachlässigen.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <Card className="bg-card border-border m-2">
                <CardContent className="p-2 text-center">
                  <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-md text-foreground">Zertifizierter Trainer</div>
                </CardContent>
              </Card>
              <Card className="bg-card border-border m-2">
                <CardContent className="p-2 text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-md text-foreground">Für Einzelpersonen und Gruppen aller Art</div>
                </CardContent>
              </Card>
              <Card className="bg-card border-border m-2">
                <CardContent className="p-2 text-center">
                  <Target className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-md text-foreground">Deine Ziele stehen voll im Fokus</div>
                </CardContent>
              </Card>
              <Card className="bg-card border-border m-2">
                <CardContent className="p-2 text-center">
                  <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-md text-foreground">Resultate sind garantiert</div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="relative">
            <img
              src="/images/ramon-hero.png"
              alt="Alex Johnson - Fitness Coach"
              className="rounded-2xl w-full h-auto object-cover mx-auto max-h-160"
            />
            <div className="absolute -bottom-4 -left-4 w-full h-full bg-primary/20 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
