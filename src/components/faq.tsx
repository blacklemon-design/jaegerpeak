"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Brauche ich Vorkenntnisse oder muss ich schon fit sein?",
    answer:
      "Du brauchst keine Vorkenntnisse. Alle Trainings werden individuell auf dein aktuelles Niveau angepasst – egal ob du sportlich einsteigst, zurückkommst oder gezielt deine Performance verbessern willst.",
  },
  {
    question: "Was ist, wenn ich die Technik nicht beherrsche?",
    answer:
      "Das ist kein Problem. Ich bringe dir die Technik Schritt für Schritt bei und lege dabei grossen Wert auf eine saubere Ausführung. So holen wir das Maximum aus deinem Training raus und beugen Verletzungen vor.",
  },
  {
    question: "Gibt es ein Probetraining? Wie läuft es ab?",
    answer:
      "Ja. Im Probetraining analysiere ich deine Bewegungsmuster, Mobilität und deinen Ist-Zustand. Wir starten mit einem Gespräch, dann folgt ein Check deiner Basisbewegungen, daraufhin bestimmen wir das weitere Vorgehen.",
  },
  {
    question: "Was kostet das Training?",
    answer:
      "Echte und nachhaltige Veränderung entsteht nur durch konstantes Training über mehrere Monate. Deshalb biete ich Personal Coaching nur im Rahmen von mehrmonatigen Programmen an – individuell abgestimmt auf deine Ziele. Nur beim Athletiktraining gibt es auch Einzellektionen.",
  },
  {
    question: "Wo trainieren wir?",
    answer:
      "Das hängt von deinem Ziel ab. Je nach Training entweder im Kraftwerk Fitness in Heerbrugg, Auf der 400m-Bahn in Balgach oder Auf dem Tennisplatz (TC Widnau oder nach Absprache).",
  },
  {
    question: "Wie oft muss ich trainieren, damit sich was ändert?",
    answer:
      "Das hängt von deinem Ziel und deinem Ausgangspunkt ab. In der Regel empfehle ich mindestens 2 Trainingseinheiten pro Woche, um spürbare Fortschritte zu erzielen. Konstanz ist der wichtigste Erfolgsfaktor.",
  },
  {
    question: "Trainierst du auch Frauen? Wie alt muss ich sein?",
    answer:
      "Ja klar. Ich trainiere Frauen und Männer, je nach Ziel ob für gezielten Muskelaufbau, Straffung oder funktionelles Training zur Schmerzprävention. Beim Alter mache ich keine Einschränkungen. Grundsätzlich liegt meine Zielgruppe zwischen 12 und 60 Jahren. Im kostenlosen Beratungsgespräch klären wir gemeinsam ab, ob eine Zusammenarbeit sinnvoll und zielführend ist.",
  },
  {
    question: "Was ist, wenn ich krank bin?",
    answer:
      "Du kannst Einheiten rechtzeitig verschieben – wie genau erklären wir beim Coaching-Vertrag. Ziel ist, dass dein Fortschritt planbar bleibt, aber auch flexibel, wenn mal etwas dazwischenkommt.",
  },
  {
    question: "Kann ich auch online betreut werden?",
    answer:
      "Ja. Je nach Trainingsziel kann ich dich online betreuen – Mit Trainingsplan, Video-Feedback und regelmässiger 1:1-Kommunikation. Ideal wenn du flexibel und ortsunabhängig trainieren willst.",
  },
  {
    question: "Wie läuft die Zusammenarbeit ab?",
    answer:
      "Nach dem Erstgespräch erstellen wir deinen Trainingsplan und starten mit dem Coaching – mit 1:1-Betreuung, Trainingsplan, Ernährungstipps und regelmässiger Reflexion.",
  },
]

export default function Faq() {
  return (
    <section className="bg-background-secondary">
      <div className="max-w-2xl mx-auto py-12">

      <h2 className="text-3xl font-bold text-center mb-8">
        Häufig gestellte<span className="text-primary"> Fragen</span>
      </h2>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-xl">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-lg">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
        </div>
    </section>
  )
}