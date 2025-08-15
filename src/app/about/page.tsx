import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { PersonalStory } from "@/components/personal-story"
import { Qualifications } from "@/components/qualifications"
import { loadHomeContent } from "@/lib/utils"
const data = loadHomeContent(); // runs at build time, before component is even called

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-white">
      <Header bannerTitle={data.title} bannerDate={data.date} />
      <main>
        <AboutHero />
        <PersonalStory />
        <Qualifications />
        {/*<TrainingPhilosophy />
        <PersonalJourney />
        <WhyICoach />
        <PersonalLife />*/}
      </main>
      <Footer />
    </div>
  )
}
