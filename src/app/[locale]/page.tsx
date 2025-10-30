import { About } from "@/components/about";
import Contact from "@/components/contact";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import Header from "@/components/header";
import { Hero } from "@/components/hero";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import { Partners } from "@/components/partners";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";
import { loadHomeBannerContent } from "@/lib/utils";
import { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";
export const dynamic = "force-static"; // forces static generation

const data = loadHomeBannerContent(); // runs at build time, before component is even called

export default async function Home(props: {
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
  console.log(isBannerShown());
  return (
    <div className="min-h-screen bg-background text-white">
      <Header
        bannerTitleDe={data.title_de}
        bannerTitleEn={data.title_en}
        bannerDescriptionDe={data.description_de} 
        bannerDescriptionEn={data.description_en}
        bannerDate={data.date}
        isBannerStartDate={data.is_start_date}
        showDate={data.show_date}
        showBanner={data.show_banner}
        lang={lang}
      />
      <main>
        <Hero lang={lang} showBanner={isBannerShown()} />
        <About lang={lang} />
        <Services lang={lang} />
        {/** <Testimonials />*/}
        <Partners />
        <Faq lang={lang} />
        <Contact lang={lang} showBanner={isBannerShown()}/>
      </main>
      <Footer lang={lang} />
    </div>
  );
}
