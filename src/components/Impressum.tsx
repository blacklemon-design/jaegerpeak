import type React from "react";
import { getTranslations } from "next-intl/server";
import { Locale } from "next-intl";

export default async function Impressum({ lang }: { lang: Locale }) {
    const t = await getTranslations({ namespace: "Footer", locale: lang });

    return (
        <section id="impressum" className="pt-24 bg-background min-h-100vh pb-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight pb-10">
                    {t("impressum")}
                </h1>
                <p className="text-lg md:text-xl text-foreground pt-3 max-w-3xl break-words">
                    Ramon Jäger
                </p>
                <p className="text-lg md:text-xl text-foreground pt-3 max-w-3xl break-words">
                    ramon@jaegerpeak.ch
                </p>
                <p className="text-lg md:text-xl text-foreground pt-3 max-w-3xl break-words">
                    Unterbüntelistrasse 5, 9443 Widnau
                </p>
                <p className="text-lg md:text-xl text-foreground pt-3 max-w-3xl break-words">
                    UID: CHE-274.338.154
                </p>
            </div>
        </section>
    );
}
