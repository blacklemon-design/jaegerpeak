import { About } from "@/components/about";
import  Contact  from "@/components/contact";
import {Faq} from "@/components/faq";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
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

  return (
    <div className="min-h-screen bg-background text-white">
      <Header bannerTitle={data.title} bannerDate={data.date} />
      <main>
        <Hero lang={lang}/>
        <LocaleSwitcher lang={lang}/>
        <About lang={lang}/>
        <Services lang={lang}/>
        {/** <Testimonials />*/}
        <Partners />
        <Faq lang={lang}/>
        <Contact lang={lang}/>
      </main>
      <Footer lang={lang}/>
    </div>
  );
}
