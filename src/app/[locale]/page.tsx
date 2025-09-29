import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import Faq from "@/components/faq";
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
    const t = await getTranslations({ namespace: "Hero", locale: lang });

  return (
    <div className="min-h-screen bg-background text-white">
      <Header bannerTitle={data.title} bannerDate={data.date} />
      <main>
        <h1 className="text-4xl">{t("title")}</h1>
        <Hero />
        <LocaleSwitcher />
        <About />
        <Services />
        {/** <Testimonials />*/}
        <Partners />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
