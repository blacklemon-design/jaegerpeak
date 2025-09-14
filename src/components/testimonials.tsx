import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Marketing Manager",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "Alex transformed not just my body, but my entire relationship with fitness. I've lost 30 pounds and gained so much confidence!",
      rating: 5,
    },
    {
      name: "Mike Rodriguez",
      role: "Software Engineer",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "The online coaching program was perfect for my busy schedule. Alex's guidance helped me build muscle while working from home.",
      rating: 5,
    },
    {
      name: "Emily Chen",
      role: "Teacher",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "I never thought I could enjoy working out until I started training with Alex. The personalized approach made all the difference.",
      rating: 5,
    },
    {
      name: "David Thompson",
      role: "Business Owner",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "Alex's nutrition coaching completely changed how I fuel my body. I have more energy than I've had in years!",
      rating: 5,
    },
  ];

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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="p-6 space-y-4 flex-col flex justify-between h-full">
                <p className="text-foreground italic">
                  "{testimonial.content}"
                </p>
                <div className="font-semibold text-white">
                  {testimonial.name}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
