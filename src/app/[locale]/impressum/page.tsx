import Header from "@/components/header"
import { Footer } from "@/components/footer"
import { loadHomeBannerContent } from "@/lib/utils"
import { Locale } from "next-intl"
import Impressum from "@/components/Impressum"
const data = loadHomeBannerContent(); // runs at build time, before component is even called

export default async function ImpressumPage(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;

  return (
    <div className="min-h-screen bg-background text-white flex flex-col justify-between">
      <Header bannerTitle={data.title} bannerDate={data.date} lang={lang}/>
      <main>
        <Impressum lang={lang}/>
      </main>
      
      <Footer lang={lang} />
    </div>
  )
}
