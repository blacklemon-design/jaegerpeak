import Header from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { PersonalStory } from "@/components/personal-story"
import { Qualifications } from "@/components/qualifications"
import { loadHomeBannerContent } from "@/lib/utils"
import { Locale } from "next-intl"
const data = loadHomeBannerContent(); // runs at build time, before component is even called

export default async function AboutPage(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;

  return (
    <div className="min-h-screen bg-background text-white">
      <Header bannerTitleDe={data.title_de} bannerTitleEn={data.title_en} bannerDate={data.date} isBannerStartDate={data.is_start_date} showDate={data.show_date} showBanner={data.show_banner} lang={lang}/>
      <main>
        <AboutHero lang={lang} bannerDate={data.date}/>
        <PersonalStory lang={lang}/>
        <Qualifications lang={lang}/>
      </main>
      <Footer lang={lang}/>
    </div>
  )
}
