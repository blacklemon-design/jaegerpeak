import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { getTranslations } from "next-intl/server"
import type { Locale } from "next-intl"
import { Link as IntlLink } from "../i18n/navigation"
import { ScrollOffsetWrapper } from "./scroll-offset-wrapper"

// All texts live in messages/de.json and messages/en.json (namespace "Offers").
type Point = { title: string; text: string }
type PriceTable = { title?: string; stack?: boolean; columns: string[]; rows: string[][] }
type Variant = { name: string; forWhom: string; training: string; plan: string; price: string; priceNote: string }
type Offer = {
  id: string
  title: string
  subtitle: string
  description: string
  highlight?: Point
  pointsTitle?: string
  points?: Point[]
  tables?: PriceTable[]
  variantsTitle?: string
  variantLabels?: { forWhom: string; training: string; plan: string; price: string }
  variants?: Variant[]
  notes?: string[]
}
type FinderRow = { id: string; want: string; offer: string; price: string }

// Icon per offer (same order as in the texts)
export const offerIcons: Record<string, string> = {
  "athletic-performance-training": "/images/Icon_Athletik.png",
  "personal-training": "/images/Icon_Functional.png",
  parkinson: "/images/Icon_Parkinson.svg",
  coaching: "/images/Icon_Bodyshaping.png",
  "performance-training": "/images/Icon_Performance.svg",
  trainingsplanung: "/images/Icon_Trainingsanpassung.png",
  kurse: "/images/Icon_Kurse.svg",
}

function Bullet() {
  return <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2.5 flex-none"></div>
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="text-gray-300 flex items-start">
          <Bullet />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function PriceTableView({ table }: { table: PriceTable }) {
  // Two columns (offer | price): rows side by side, on phones price below the offer
  if (table.columns.length === 2) {
    return (
      <div>
        {table.title && <h4 className="text-xl font-semibold text-white mb-3">{table.title}</h4>}
        <div className="rounded-lg border border-card overflow-hidden">
          <div className="hidden sm:flex justify-between gap-6 bg-background px-4 py-2 text-sm font-medium text-gray-400">
            <span>{table.columns[0]}</span>
            <span>{table.columns[1]}</span>
          </div>
          {table.rows.map((row, r) => (
            <div
              key={r}
              className={`flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-6 px-4 py-3 ${r > 0 ? "border-t" : "sm:border-t"} border-card`}
            >
              <span className="text-gray-300">{row[0]}</span>
              <span className="text-white font-semibold sm:text-right">{row[1]}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }
  return (
    <div>
      {table.title && <h4 className="text-xl font-semibold text-white mb-3">{table.title}</h4>}
      {/* Normal table (on phones only if the table is short) */}
      <div className={`${table.stack ? "hidden sm:block" : ""} rounded-lg border border-card overflow-hidden`}>
        <table className="w-full text-left">
          <thead className="bg-background">
            <tr>
              {table.columns.map((col, i) => (
                <th key={i} className="px-2 sm:px-4 py-2 text-sm font-medium text-gray-400">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, r) => (
              <tr key={r} className="border-t border-card align-top">
                {row.map((cell, c) => (
                  <td
                    key={c}
                    className={`px-2 sm:px-4 py-3 ${
                      c === 0 ? "text-gray-300" : table.stack && c === 2 ? "text-gray-300" : "text-white font-semibold"
                    } ${c === 1 || (!table.stack && c > 0) ? "whitespace-nowrap" : ""}`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Phones: long tables as small blocks, one below the other */}
      {table.stack && (
        <div className="sm:hidden space-y-3">
          {table.rows.map((row, r) => (
            <div key={r} className="rounded-lg border border-card bg-background p-4">
              <div className="flex items-baseline justify-between gap-3">
                <span className="text-white font-semibold">{row[0]}</span>
                <span className="text-white font-semibold text-right">{row[1]}</span>
              </div>
              {row.slice(2).map((cell, c) => (
                <p key={c} className="text-gray-300 mt-2">
                  {cell}
                </p>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export async function ServiceDetails({ lang, showBanner }: { lang: Locale; showBanner: boolean }) {
  const t = await getTranslations({ namespace: "Offers", locale: lang })
  const offers = t.raw("items") as Offer[]
  const finder = t.raw("finder") as FinderRow[]
  const goodToKnow = t.raw("goodToKnow") as string[]

  return (
    <ScrollOffsetWrapper showBanner={showBanner}>
      <section className="pb-40 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Overview: one tile per offer (icon, name, for whom, price), jumps to the offer */}
          <div id="angebot-finden" className="relative pt-10 md:pt-12 scroll-mt-12 md:scroll-mt-10">
            <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-4 md:gap-4">
              {finder.map((row, i) => (
                <li key={row.id} className={i === 0 ? "md:col-span-2" : ""}>
                  <a
                    href={`#${row.id}`}
                    className="card-hover group flex md:flex-col gap-4 md:gap-3 h-full rounded-xl border border-card bg-card-dark p-4 md:p-5"
                  >
                    <Image height={40} width={40} src={offerIcons[row.id]} alt="" className="h-10 w-10 object-contain flex-none" />
                    <span className="flex flex-col gap-1 min-w-0 md:flex-1">
                      <span className="text-white font-semibold group-hover:text-primary transition-colors hyphens-auto" lang={lang}>
                        {row.offer}
                      </span>
                      <span className="text-gray-300 text-sm md:flex-1">{row.want}</span>
                      <span className="text-primary font-semibold text-sm mt-1">{row.price}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {offers.map((offer) => {
            return (
              <div key={offer.id} className="relative pt-22" id={offer.id}>
                <Card className="card-hover card-hover-lg bg-card-dark border-card">
                  <CardHeader className="text-center pb-8">
                    <div className="flex justify-center mb-4">
                      <Image height={64} width={64} src={offerIcons[offer.id]} alt="" className="h-16 w-16 object-contain" />
                    </div>
                    <CardTitle className="text-3xl text-white mb-2 hyphens-auto [overflow-wrap:anywhere]" lang={lang}>
                      {offer.title}
                    </CardTitle>
                    <CardDescription className="text-primary text-lg font-semibold">{offer.subtitle}</CardDescription>
                    <p className="text-gray-300 mt-4 max-w-2xl mx-auto">{offer.description}</p>
                  </CardHeader>

                  <CardContent className="space-y-8">
                    <div className="max-w-3xl mx-auto space-y-8">
                      {offer.highlight && (
                        <div className="rounded-lg border border-primary bg-background p-5">
                          <h4 className="text-xl font-semibold text-primary mb-2">{offer.highlight.title}</h4>
                          <p className="text-gray-300">{offer.highlight.text}</p>
                        </div>
                      )}

                      {offer.points && (
                        <div>
                          {offer.pointsTitle && <h4 className="text-xl font-semibold text-white mb-4">{offer.pointsTitle}</h4>}
                          <ul className="space-y-3">
                            {offer.points.map((point, i) => (
                              <li key={i} className="text-gray-300 flex items-start">
                                <Bullet />
                                <span>
                                  {point.title && <span className="text-white font-semibold">{point.title}: </span>}
                                  {point.text}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {offer.variants && offer.variantLabels && (
                        <div>
                          {offer.variantsTitle && <h4 className="text-xl font-semibold text-white mb-4">{offer.variantsTitle}</h4>}
                          <div className="grid gap-4 md:grid-cols-3 md:gap-y-3">
                            {offer.variants.map((v) => (
                              // md+: subgrid, so labels and prices sit at the same height in all three cards
                              <div
                                key={v.name}
                                className="rounded-lg border border-card bg-background p-5 flex flex-col gap-3 md:grid md:grid-rows-subgrid md:row-span-5"
                              >
                                <h5 className="text-lg font-semibold text-white mb-1">{v.name}</h5>
                                <div>
                                  <div className="text-sm text-gray-400">{offer.variantLabels!.forWhom}</div>
                                  <div className="text-gray-300">{v.forWhom}</div>
                                </div>
                                <div>
                                  <div className="text-sm text-gray-400">{offer.variantLabels!.training}</div>
                                  <div className="text-gray-300">{v.training}</div>
                                </div>
                                <div>
                                  <div className="text-sm text-gray-400">{offer.variantLabels!.plan}</div>
                                  <div className="text-gray-300">{v.plan}</div>
                                </div>
                                <div className="mt-1 pt-4 border-t border-card">
                                  <div className="text-sm text-gray-400">{offer.variantLabels!.price}</div>
                                  <div className="text-2xl font-bold text-primary">{v.price}</div>
                                  {v.priceNote && <div className="text-sm text-gray-300">{v.priceNote}</div>}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {offer.tables?.map((table, i) => <PriceTableView key={i} table={table} />)}

                      {offer.notes?.map((note, i) => (
                        <p key={i} className="text-sm text-gray-400">
                          {note}
                        </p>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-card">
                      <IntlLink href={{ pathname: "/", hash: "contact" }} className="w-full">
                        <Button className="flex-1 bg-primary w-full hover:bg-primary text-white">{t("button")}</Button>
                      </IntlLink>
                    </div>
                    <div className="text-center">
                      <a
                        href="#angebot-finden"
                        className="text-sm text-gray-300 hover:text-primary underline decoration-primary underline-offset-4 transition-colors"
                      >
                        <span aria-hidden="true">↑ </span>
                        {t("backToOverview")}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )
          })}

          {/* Gut zu wissen */}
          <div id="gut-zu-wissen" className="relative pt-22">
            <Card className="card-hover card-hover-lg bg-card-dark border-card">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-3xl text-white">{t("goodToKnowTitle")}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="max-w-3xl mx-auto">
                  <BulletList items={goodToKnow} />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </ScrollOffsetWrapper>
  )
}
