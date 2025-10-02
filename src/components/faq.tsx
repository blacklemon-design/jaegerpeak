import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function Faq({ lang }: { lang: Locale }) {
  const t = await getTranslations({ namespace: "Hero", locale: lang });
  const faqs = [
    {
      question: t("f1_q"),
      answer: t("f1_a"),
    },
    {
      question: t("f2_q"),
      answer: t("f2_a"),
    },
    {
      question: t("f3_q"),
      answer: t("f3_a"),
    },
    {
      question: t("f4_q"),
      answer: t("f4_a"),
    },
    {
      question: t("f5_q"),
      answer: t("f5_a"),
    },
    {
      question: t("f6_q"),
      answer: t("f6_a"),
    },
    {
      question: t("f7_q"),
      answer: t("f7_a"),
    },
    {
      question: t("f8_q"),
      answer: t("f8_a"),
    },
    {
      question: t("f9_q"),
      answer: t("f9_a"),
    },
    {
      question: t("f10_q"),
      answer: t("f10_a"),
    },
    
  ];
  
  return (
    <section className="bg-background-secondary">
      <div className="max-w-2xl px-4 md:mx-auto py-12">

        <h2 className="text-3xl font-bold text-center mb-8">
          {t("fheader1")}<span className="text-primary">{t("fheader2")}</span>
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-xl">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-lg">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}