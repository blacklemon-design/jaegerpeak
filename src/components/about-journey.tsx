import { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";

// "Mein Weg": same path style as the qualifications. Texts: messages/*.json -> About.journey
type Step = { when: string; title: string; text: string };

export async function AboutJourney({ lang }: { lang: Locale }) {
  const t = await getTranslations({ namespace: "About", locale: lang });
  const steps = t.raw("journey.items") as Step[];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            {t("journey.title1")}
            <span className="text-primary">{t("journey.title2")}</span>
          </h2>
        </div>

        <ol className="relative max-w-3xl mx-auto space-y-4 pl-8 sm:pl-10">
          <span className="absolute left-[11px] sm:left-[15px] top-6 bottom-6 w-0.5 bg-primary/40" aria-hidden="true"></span>
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;
            return (
              <li key={index} className="relative">
                <span
                  aria-hidden="true"
                  className={`absolute -left-8 sm:-left-10 top-1/2 -translate-y-1/2 ml-[5px] sm:ml-[9px] h-3.5 w-3.5 rounded-full border-2 border-primary bg-primary ${
                    isLast ? "ring-4 ring-primary/30" : ""
                  }`}
                ></span>
                <div className={`card-hover rounded-xl border bg-card-dark px-5 py-4 ${isLast ? "border-primary" : "border-border"}`}>
                  <p className="text-sm font-semibold text-primary">{step.when}</p>
                  <p className="text-white font-semibold">{step.title}</p>
                  <p className="text-gray-300 text-sm mt-1">{step.text}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
