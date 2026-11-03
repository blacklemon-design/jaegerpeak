import { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";

type Cert = { title: string; organization: string; year: string; status: "finished" | "running"; highlight?: boolean };

export async function Qualifications({ lang }: { lang: Locale }) {
  const t = await getTranslations({ namespace: "About", locale: lang });
  const SAFS = "SAFS";
  const RD = "RD®SAS GmbH";
  // chronological: completed first, then the ones still in training
  const certifications: Cert[] = [
    { title: t("c1_title"), organization: "Swiss Academy of Fitness and Sports (SAFS)", year: t("c1_year"), status: "finished", highlight: true },
    { title: t("c2_title"), organization: SAFS, year: t("c2_year"), status: "finished" },
    { title: t("c3_title"), organization: SAFS, year: t("c3_year"), status: "finished" },
    { title: t("c4_title"), organization: SAFS, year: t("c4_year"), status: "finished" },
    { title: t("c7_title"), organization: SAFS, year: t("c7_year"), status: "running" },
    { title: t("c8_title"), organization: SAFS, year: t("c8_year"), status: "running" },
    { title: t("c5_title"), organization: RD, year: t("c5_year"), status: "running" },
    { title: t("c6_title"), organization: RD, year: t("c6_year"), status: "running" },
  ]

  const statusText = (cert: Cert) =>
    cert.status === "running" ? t("status2") : `${t("status1")}: ${cert.year}`;

  const StatusPill = ({ cert }: { cert: Cert }) =>
    cert.status === "running" ? (
      <span className="inline-flex items-center gap-2 self-start sm:self-center whitespace-nowrap rounded-full border border-border bg-background px-3 py-1 text-sm text-gray-300">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true"></span>
        {statusText(cert)}
      </span>
    ) : (
      <span className="inline-flex self-start sm:self-center whitespace-nowrap rounded-full bg-primary/25 px-3 py-1 text-sm font-medium text-white">
        {statusText(cert)}
      </span>
    );

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            {t("qheader1")} <span className="text-primary">{t("qheader2")}</span>
          </h2>
        </div>

        <h3 className="text-2xl font-bold text-white mb-8 text-center">{t("qsubtitle")}</h3>

        {/* Path: one line with a point per qualification */}
          <ol className="relative max-w-3xl mx-auto space-y-4 pl-8 sm:pl-10">
            <span className="absolute left-[11px] sm:left-[15px] top-6 bottom-6 w-0.5 bg-primary/40" aria-hidden="true"></span>
            {certifications.map((cert, index) => (
              <li key={index} className="relative">
                <span
                  aria-hidden="true"
                  className={`absolute -left-8 sm:-left-10 top-1/2 -translate-y-1/2 ml-[5px] sm:ml-[9px] h-3.5 w-3.5 rounded-full border-2 border-primary ${
                    cert.status === "finished" ? "bg-primary" : "bg-background"
                  }`}
                ></span>
                <div className="card-hover rounded-xl border border-border bg-card-dark px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <p className="text-white font-semibold">{cert.title}</p>
                    <p className="text-gray-400 text-sm">{cert.organization}</p>
                  </div>
                  <StatusPill cert={cert} />
                </div>
              </li>
            ))}
          </ol>
      </div>
    </section>
  )
}
