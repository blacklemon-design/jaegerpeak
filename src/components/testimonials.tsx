import { Card, CardContent } from "@/components/ui/card";
import { loadTestimonialsContent, Testimonial } from "@/lib/utils";
import { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";
const testimonials: Testimonial[] = loadTestimonialsContent(); // runs at build time, before component is even called

export async function Testimonials({ lang }: { lang: Locale }) {
  if (testimonials.length === 0) {
    return null;
  }
  const t = await getTranslations({ namespace: "Testimonials", locale: lang });

  return (
    <section id="testimonials" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            {t('titleBefore')} <span className="text-primary">{t('titleHighlight')}</span>          </h2>
          <p className="text-foreground text-lg max-w-2xl mx-auto">
            {t('description')}
          </p>
        </div>

        <div className="w-full flex justify-center">
          <div className={`grid gap-6 sm:grid-cols-1 md:grid-cols-${Math.min(2, testimonials.length)} lg:grid-cols-${Math.min(4, testimonials.length)} w-fit`}>
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card border-border max-w-100">
                <CardContent className="p-6 space-y-4 flex flex-col justify-between h-full">
                  <p className="text-foreground italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="font-semibold text-white">
                    {testimonial.author}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
