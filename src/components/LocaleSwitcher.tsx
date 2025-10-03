"use client";

import { Locale, useLocale } from "next-intl";
import { usePathname, Link } from "../i18n/navigation";

const LocaleSwitcher = ({ lang }: { lang: Locale }) => {
  const pathname = usePathname();
  const locale = useLocale();

  return (
    <div className="flex space-x-4 items-center">
      <Link href={pathname} locale="de" >
        <p style={{ height: 24 }} className={`rounded-xs ${locale === "de" ? "opacity-100": "opacity-50"}`}>Deutsch</p>
      </Link>
      <Link href={pathname} locale="en">
        <p style={{ height: 24 }} className={`rounded-xs ${locale === "en" ? "opacity-100": "opacity-50"}`}>English</p>
      </Link>
  </div>
  );
};

export default LocaleSwitcher;
