"use client";

import { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { useRouter, usePathname } from "../i18n/navigation";
import Flag from "react-world-flags";

const LocaleSwitcher = ({ lang }: { lang: Locale }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: string) => {
    // `pathname` is localized, e.g., /en/about or /de/kontakt
    router.replace(pathname, { locale: newLocale, scroll: false });
  };

  return (
    <div className="flex space-x-4 items-center">
      <button type="button" onClick={() => handleLocaleChange("de")}>
        <Flag code="DE" style={{ height: 24 }} className={`rounded-xs ${lang === "" ? "opacity-0": "opacity-50"}`} />
      </button>
      <button type="button" onClick={() => handleLocaleChange("en")}>
        <Flag code="GB" style={{ height: 24 }} className="rounded-xs" />
      </button>
    </div>
  );
};

export default LocaleSwitcher;
