import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServicesHero } from "@/components/services-hero"
import { ServiceDetails } from "@/components/services-details"
import { loadHomeContent } from "@/lib/utils"
const data = loadHomeContent(); // runs at build time, before component is even called

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-white">
      <Header bannerTitle={data.title} bannerDate={data.date} />
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
