import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import { TestimonialQuote } from "./testimonial-quote";
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

        {/* Google reviews: equal height boxes, 5 stars, text word for word */}
        <div className={`grid gap-6 md:grid-cols-2 ${testimonials.length > 2 ? "lg:grid-cols-3" : ""} max-w-4xl mx-auto items-stretch`}>
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-hover bg-card border-border h-full">
              <CardContent className="p-6 flex flex-col gap-4 h-full">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-primary" aria-label={t("stars")} role="img">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} className="h-5 w-5 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-primary/40" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <TestimonialQuote quote={testimonial.quote} moreLabel={t("more")} lessLabel={t("less")} />
                </div>
                <div className="pt-4 border-t border-card">
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-sm text-gray-400">{t("source")}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
