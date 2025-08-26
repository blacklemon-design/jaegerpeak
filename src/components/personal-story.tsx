import { Card, CardContent } from "@/components/ui/card"

export function PersonalStory() {
  return (
    <section className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Wofür ich stehe
            </h2>
            <h2 className="text-2xl md:text-2xl font-bold leading-tight mt-10">
              Ich glaube an Training, das den Körper stärkt <span className="text-primary">- und den Menschen dahinter.</span>
            </h2>
          </div>
          <div className="space-y-8">
            <Card className="bg-card border-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Meine <span className="text-primary">Vision</span></h3>
                <p className="text-foreground leading-relaxed mb-4">
                  Ich will nicht nur Trainings anbieten, sondern echte Veränderung möglich machen.
                  Mehr Kraft. Maximale Performance. Ein besseres Körpergefühl.
                </p>
                <p className="text-foreground leading-relaxed">
                  Mein Ziel ist es, Menschen wieder in Verbindung mit ihrem Körper zu bringen: leistungsfähiger, belastbarer und selbstbewusster.
                  Ob Profi-Athlet, Hobbysportler oder jemand, der präventiv trainieren will – ich begleite dich individuell und führe dich zielgerichtet zu deinem Ziel.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Meine <span className="text-primary">Mission</span></h3>
                <p className="text-foreground leading-relaxed mb-4">
                  Gesundheit steht bei mir an erster Stelle. Denn was bringt die stärkste Leistung, wenn sie auf Kosten des Körpers geht? Deswegen arbeite ich nach dem Healthy Performance Konzept.
                  Mein Ansatz beginnt immer mit einem stabilen Fundament:
                  Stabilität, Mobilität, funktionelle Bewegungen, saubere Technik und gezielter Belastungsaufbau.
                </p>
                <p className="text-foreground leading-relaxed">
                  Verletzungsprävention ist für mich kein Nebenziel, sondern die Voraussetzung für echten Fortschritt. Egal ob im Sport oder im Alltag – wer klug trainiert, bleibt leistungsfähig, belastbar und beweglich.
                  Ich helfe Menschen, genau das zu erreichen: Kraft und Leistung gezielt aufzubauen, ohne den Körper zu überfordern. Ziel ist ein Körper, der langfristig funktioniert, sich gut anfühlt und auch unter Belastung trägt.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
