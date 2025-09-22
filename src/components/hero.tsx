import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {

  return (
    <section
      id="home"
      className="pt-16 min-h-screen flex items-center bg-gradient-to-br bg-background mt-14 lg:mt-0"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              {
                /*}
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-foreground">Rated 5.0 by 200+ clients</span>
              </div>
              */
              }
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Fitness,
                <span className="text-primary"> Performance</span> {" "}
                Functionality
              </h1>
              <p className="text-xl text-foreground max-w-2xl">
                Individuelles Coaching für deinen Körper, Sport und Alltag. Für alle, die Fortschritt planen - nicht hoffen.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/#contact" passHref>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary-hover text-white px-8 py-3"
                >
                  Starte jetzt deine Transformation!
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">Stärke</div>
                <div className="text-foreground text-xl">aufbauen</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">Leistung</div>
                <div className="text-foreground text-xl">steigern</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">Gesund</div>
                <div className="text-foreground text-xl">bleiben</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="/images/ramon-hero.png"
                alt="Athletic fitness coach in dynamic jumping pose"
                className="w-auto max-h-160 obeject-cover mx-auto"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-primary/20 rounded-2xl -z-10">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
