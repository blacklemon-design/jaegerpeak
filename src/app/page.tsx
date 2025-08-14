import { About } from "@/components/about";
import Banner from "@/components/banner";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Sponsors } from "@/components/sponsors";
import { Testimonials } from "@/components/testimonials";
import { loadHomeContent } from "@/lib/utils";
import Image from "next/image";
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
        <Sponsors />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
