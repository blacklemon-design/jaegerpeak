import { Button } from "@/components/ui/button";
import { Award, Calendar, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function AboutHero() {
  return (
    <section className="pt-16 min-h-screen flex items-center bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                LERNE <span className="text-primary">MICH KENNEN!</span>
              </h1>
              <p className="text-xl text-foreground">
                Experte für Athletik, Leistung & nachhaltige Fitness
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Mein Name ist Ramon Jäger, ich bin Jahrgang 2000 und seit meiner
                Kindheit sportlich aktiv. Bereits mit vier Jahren begann ich
                beim FC Widnau Fussball zu spielen und entdeckte dabei meine
                Begeisterung für Spielsportarten. Mit zwölf wechselte ich zum
                Tennis, weil ich merkte: Ich blühe in einer Sportart auf, in der
                allein meine eigene Leistung über Sieg oder Niederlage
                entscheidet. Mit 19 Jahren begann ich parallel zu meinem
                Maschinenbaustudium mit Krafttraining im Fitnessstudio. Die
                sichtbaren Fortschritte über die folgenden sechs Jahre erfüllten
                mich mit Stolz und weckten den Wunsch, mein Wissen
                weiterzugeben. Diesen Weg verfolge ich heute professionell. Im
                April 2025 schloss ich die Ausbildung zum Fitnesstrainer mit
                SAFS-Fachausweis ab und bildete mich danach zum Spezialisten
                Athletik Performance Trainer weiter.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/#contact" passHref>
                <Button
                  size="lg"
                  className=" bg-primary hover:bg-primary text-white px-8 py-3"
                >
                  Lass uns gemeinsam den ersten Schritt machen!
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src="/images/über_mich_2.jpeg"
              alt="Ramon Jäger - Personal Trainer"
              className="object-contain rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
