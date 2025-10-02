import { getTranslations } from "next-intl/server";
import { Locale } from "next-intl";
import HeaderClient from "./header-client";

export default async function Header({ bannerTitle, bannerDate, lang }: { bannerTitle: string; bannerDate: string; lang: Locale }) {
  const t = await getTranslations({ namespace: "Header", locale: lang });

  const labels = {
    home: t("home"),
    about: t("about"),
    services: t("services"),
    contact: t("contact"),
  };

  return (
    <HeaderClient
      bannerTitle={bannerTitle}
      bannerDate={bannerDate}
      labels={labels}
    />
  );
}
