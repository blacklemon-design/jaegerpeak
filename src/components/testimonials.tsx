import { Card, CardContent } from "@/components/ui/card";
import { loadTestimonialsContent, Testimonial } from "@/lib/utils";
const testimonials: Testimonial[] = loadTestimonialsContent(); // runs at build time, before component is even called

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            What My <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-foreground text-lg max-w-2xl mx-auto">
            Don't just take my word for it. Here's what real clients have
            achieved with my coaching programs.
          </p>
        </div>

        <div className="w-full">
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card border-border">
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
