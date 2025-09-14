import { Award, Target, Users, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Partners() {
    return (
        <section id="about" className="py-20 bg-background-secondary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Partner
                    </h2>
                </div>
                <div className="grid lg:grid-cols-3 gap-12 items-center">
                    <img
                    src="/images/partners/tc-widnau-grey.webp"
                        alt="Athletic fitness coach in dynamic jumping pose"
                        className="w-auto max-h-60 obeject-cover mx-auto"
                        />
                    <img
                        src="/images/partners/jsp.png"
                        alt="Athletic fitness coach in dynamic jumping pose"
                        className="w-auto max-h-60 obeject-cover mx-auto"
                    />
                    <img
                        src="/images/partners/kraftwerk_fitness.jpg"
                        alt="Athletic fitness coach in dynamic jumping pose"
                        className="w-auto max-h-60 obeject-cover mx-auto"
                    />
                </div>
            </div>
        </section>
    );
}
