import { getTranslations } from "next-intl/server";
import { Locale } from "next-intl";
import HeaderClient from "./header-client";

export default async function Header({ bannerTitleDe, bannerTitleEn, bannerDescriptionDe, bannerDescriptionEn, bannerDate, isBannerStartDate, showDate, showBanner, lang }: { bannerTitleDe: string; bannerTitleEn: string; bannerDescriptionDe: string; bannerDescriptionEn: string; bannerDate: string; isBannerStartDate: boolean; showDate: boolean; showBanner: boolean; lang: Locale }) {
  const t = await getTranslations({ locale: lang });
  const labels = {
    home: t("Header.home"),
    about: t("Header.about"),
    services: t("Header.services"),
    contact: t("Header.contact"),
    starts_in: t("Banner.starts_in"),
    ends_in: t("Banner.ends_in")
  };
  return (
    <HeaderClient
      bannerTitleDe={bannerTitleDe}
      bannerTitleEn={bannerTitleEn}
      bannerDescriptionDe={bannerDescriptionDe}
      bannerDescriptionEn={bannerDescriptionEn}
      bannerDate={bannerDate}
      isBannerStartDate={isBannerStartDate}
      showDate={showDate}
      showBanner={showBanner}
      labels={labels}
    />
  );
}
