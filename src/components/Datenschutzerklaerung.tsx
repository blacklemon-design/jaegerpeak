import type React from "react";
import { getTranslations } from "next-intl/server";
import { Locale } from "next-intl";

export default async function Datenschutzerklaerung({ lang }: { lang: Locale }) {
    const t = await getTranslations({ namespace: "Datenschutzerklaerung", locale: lang });

    return (
        <section id="datenschutzerklaerung" className="pt-24 bg-background min-h-100vh">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight pb-10 hyphens-auto break-words" lang={lang}>
                    {t("Header")}
                </h1>
                <p className="text-lg md:text-xl text-foreground pt-3 max-w-3xl break-words font-bold">
                    {t("1_header")}
                </p>
                <p className="text-lg md:text-xl text-foreground pt-3 max-w-3xl break-words pb-10">
                    {t("1_text")}
                </p>
                <p className="text-lg md:text-xl text-foreground pt-3 max-w-3xl break-words font-bold">
                    {t("2_header")}
                </p>
                <p className="text-lg md:text-xl text-foreground pt-3 max-w-3xl break-words">
                    {t("2_text")}
                </p>
                <p className="text-lg md:text-xl text-foreground pt-3 max-w-3xl break-words">
                    {t("2-1_text")}
                </p>
                <p className="text-lg md:text-xl text-foreground pt-3 max-w-3xl break-words">
                    {t("2-2_text")}
                </p>
                <p className="text-lg md:text-xl text-foreground pt-3 max-w-3xl break-words">
                    {t("2-3_text")}
                </p>
                <p className="text-lg md:text-xl text-foreground pt-3 max-w-3xl break-words pb-10">
                    {t("2-4_text")}
                </p>
                <p className="text-lg md:text-xl text-foreground pt-3 max-w-3xl break-words font-bold">
                    {t("3_header")}
                </p>
                <p className="text-lg md:text-xl text-foreground pt-3 max-w-3xl break-words">
                    {t("3-1_header")}
                </p>
                <p className="text-lg md:text-xl text-foreground pt-3 max-w-3xl break-words pb-10">
                    {t("3-1_text")}
                </p>
                <p className="text-lg md:text-xl text-foreground pt-3 max-w-3xl break-words font-bold">
                    {t("4_header")}
                </p>
                <p className="text-lg md:text-xl text-foreground pt-3 max-w-3xl break-words pb-10">
                    {t("4_text")}
                </p>
                <p className="text-lg md:text-xl text-foreground pt-3 max-w-3xl break-words font-bold">
                    {t("5_header")}
                </p>
                <p className="text-lg md:text-xl text-foreground pt-3 max-w-3xl break-words pb-10">
                    {t("5_text")}
                </p>
                <p className="text-lg md:text-xl text-foreground pt-3 max-w-3xl break-words font-bold">
                    {t("6_header")}
                </p>
                <p className="text-lg md:text-xl text-foreground pt-3 max-w-3xl break-words pb-20 hyphens-manual">
                    {t("6_text")}
                </p>
            </div>
        </section>
    );
}
