import type React from "react";
import { getTranslations } from "next-intl/server";
import { Locale } from "next-intl";

export default async function Datenschutzerklaerung({ lang }: { lang: Locale }) {
    const t = await getTranslations({ namespace: "Datenschutzerklaerung", locale: lang });

    return (
        <section id="datenschutzerklaerung" className="pt-24 bg-background min-h-100vh">
            <div>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight pb-10 pl-5">
                    {t("Header")}
                </h1>
                <p className="text-xl text-foreground pt-3 pl-10 font-bold">
                    {t("1_header")}
                </p>
                <p className="text-xl text-foreground pt-3 pl-10 pb-10">
                    {t("1_text")}
                </p>
                <p className="text-xl text-foreground pt-3 pl-10 font-bold">
                    {t("2_header")}
                </p>
                <p className="text-xl text-foreground pt-3 pl-10">
                    {t("2_text")}
                </p>
                <p className="text-xl text-foreground pt-3 pl-10">
                    {t("2-1_text")}
                </p>
                <p className="text-xl text-foreground pt-3 pl-10">
                    {t("2-2_text")}
                </p>
                <p className="text-xl text-foreground pt-3 pl-10">
                    {t("2-3_text")}
                </p>
                <p className="text-xl text-foreground pt-3 pl-10 pb-10">
                    {t("2-4_text")}
                </p>
                <p className="text-xl text-foreground pt-3 pl-10 font-bold">
                    {t("3_header")}
                </p>
                <p className="text-xl text-foreground pt-3 pl-10">
                    {t("3-1_header")}
                </p>
                <p className="text-xl text-foreground pt-3 pl-10 pb-10">
                    {t("3-1_text")}
                </p>
                <p className="text-xl text-foreground pt-3 pl-10 font-bold">
                    {t("4_header")}
                </p>
                <p className="text-xl text-foreground pt-3 pl-10 pb-10">
                    {t("4_text")}
                </p>
                <p className="text-xl text-foreground pt-3 pl-10 font-bold">
                    {t("5_header")}
                </p>
                <p className="text-xl text-foreground pt-3 pl-10 pb-10">
                    {t("5_text")}
                </p>
                <p className="text-xl text-foreground pt-3 pl-10 font-bold">
                    {t("6_header")}
                </p>
                <p className="text-xl text-foreground pt-3 pl-10 pb-20">
                    {t("6_text")}
                </p>
            </div>
        </section>
    );
}
