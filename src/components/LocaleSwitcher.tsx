"use client";

import { Locale, useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { useRouter, usePathname, Link } from "../i18n/navigation";
import Flag from "react-world-flags";
import { useEffect } from "react";
import { useParams } from "next/navigation";

const LocaleSwitcher = ({ lang }: { lang: Locale }) => {
  const pathname = usePathname();
  const locale = useLocale();
  return (
    <div className="flex space-x-4 items-center">
      <Link href={pathname} locale="de" >
        <Flag code="DE" style={{ height: 24 }} className={`rounded-xs ${locale === "de" ? "opacity-100": "opacity-50"}`} />
      </Link>
      <Link href={pathname} locale="en">
        <Flag code="GB" style={{ height: 24 }} className={`rounded-xs ${locale === "en" ? "opacity-100": "opacity-50"}`} />
      </Link>
    </div>
  );
};

export default LocaleSwitcher;
