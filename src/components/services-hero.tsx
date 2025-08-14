import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function ServicesHero() {
  return (
    <section className="pt-16 min-h-[60vh] flex items-center bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              My <span className="text-primary">Coaching Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from personalized training programs designed to help you achieve your specific fitness goals. Each
              service includes ongoing support, progress tracking, and proven methodologies.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary text-white px-8 py-3">
              Book Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-card text-white hover:bg-card-dark px-8 py-3 bg-transparent"
            >
              <ArrowDown className="h-5 w-5 mr-2" />
              Explore Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
