import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import Faq from "@/components/faq";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Partners } from "@/components/partners";
import { Services } from "@/components/services";
import { loadHomeContent } from "@/lib/utils";
export const dynamic = "force-static"; // forces static generation
const data = loadHomeContent(); // runs at build time, before component is even called
export default async function Home() {
 
  return (
    <div className="min-h-screen bg-background text-white">
      <Header bannerTitle={data.title} bannerDate={data.date} />
      <main>
        <Hero />
        <About />
        <Services />
        <Partners />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
