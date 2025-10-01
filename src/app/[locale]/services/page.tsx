import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServicesHero } from "@/components/services-hero"
import { ServiceDetails } from "@/components/services-details"
import { loadHomeBannerContent } from "@/lib/utils"
import { Locale } from "next-intl";
const data = loadHomeBannerContent(); // runs at build time, before component is even called

export default async function ServicesPage(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;
  return (
    <div className="min-h-screen bg-background text-white">
      <Header bannerTitle={data.title} bannerDate={data.date} />
      <main>
        <ServicesHero lang={lang}/>
        <ServiceDetails lang={lang}/>
        {/*<ServiceComparison />
        <ServicesFAQ />
        <ServicesContact />*/}
      </main>
      <Footer />
    </div>
  )
}
