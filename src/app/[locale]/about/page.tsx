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
  const isBannerShown = () => {
    if (!data.show_banner) return false;
    const diff = new Date(data.date).getTime() - Date.now();
    console.log(diff);
    if (!data.show_date) return true;
    const showBanner = diff >= 0 && data.show_date;
    return showBanner;
  };

  return (
    <div className="min-h-screen bg-background text-white">
      <Header bannerTitleDe={data.title_de} bannerTitleEn={data.title_en} bannerDescriptionDe={data.description_de} bannerDescriptionEn={data.description_en} bannerDate={data.date} isBannerStartDate={data.is_start_date} showDate={data.show_date} showBanner={data.show_banner} lang={lang}/>
      <main>
        <AboutHero lang={lang} showBanner={isBannerShown()}/>
        <PersonalStory lang={lang}/>
        <Qualifications lang={lang}/>
      </main>
      <Footer lang={lang}/>
    </div>
  )
}
