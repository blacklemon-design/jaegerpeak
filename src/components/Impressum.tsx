import type React from "react";
import { getTranslations } from "next-intl/server";
import { Locale } from "next-intl";

export default async function Impressum({ lang }: { lang: Locale }) {
    const t = await getTranslations({ namespace: "Footer", locale: lang });

    return (
        <section id="impressum" className="pt-24 bg-background min-h-100vh pb-20">
            <div>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight pb-10 pl-5">
                    {t("impressum")}
                </h1>
                <p className="text-xl text-foreground pt-3 pl-10">
                    Ramon Jäger
                </p>
                <p className="text-xl text-foreground pt-3 pl-10">
                    ramon@jaegerpeak.ch
                </p>
                <p className="text-xl text-foreground pt-3 pl-10">
                    Unterbüntelistrasse 5 - 9443 Widnau
                </p>
                <p className="text-xl text-foreground pt-3 pl-10">
                    UID: CHE-274.338.154
                </p>
            </div>
        </section>
    );
}
