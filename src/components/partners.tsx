import { Award, Target, Users, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export function Partners() {
    return (
        <section id="about" className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Partner
                    </h2>
                </div>
                <div className="grid md:grid-cols-3 gap-12 items-center">
                    <Link
                        href="https://www.nicojaeger.ch/"
                        className="hover:scale-110 duration-300 ease-in-out"
                    >
                        <img
                            src="/images/partners/jpt.webp"
                            alt="Athletic fitness coach in dynamic jumping pose"
                            className="w-40 md:w-auto max-h-60 obeject-cover mx-auto"
                        />
                    </Link>
                    <Link
                        href="https://jsp-photography.pixieset.com/"
                        className="hover:scale-110 duration-300 ease-in-out"
                    >
                        <img
                            src="/images/partners/jsp.png"
                            alt="Athletic fitness coach in dynamic jumping pose"
                            className="w-40 md:w-auto max-h-60 obeject-cover mx-auto"
                        />
                    </Link>
                    <Link
                        href="https://www.kraftwerk-fitness.ch/"
                        className="hover:scale-110 duration-300 ease-in-out"
                    >
                        <img
                            src="/images/partners/kraftwerk_fitness.jpg"
                            alt="Athletic fitness coach in dynamic jumping pose"
                            className="w-40 md:w-auto max-h-60 obeject-cover mx-auto"
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
}
