import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServicesHero } from "@/components/services-hero"
import { ServiceDetails } from "@/components/services-details"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-white">
      <Header />
      <main>
        <ServicesHero />
        <ServiceDetails />
        {/*<ServiceComparison />
        <ServicesFAQ />
        <ServicesContact />*/}
      </main>
      <Footer />
    </div>
  )
}
