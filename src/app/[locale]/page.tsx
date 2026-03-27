import { setRequestLocale, getMessages } from "next-intl/server";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Stats } from "@/components/sections/stats";
import { Process } from "@/components/sections/process";
import { Showcase } from "@/components/sections/showcase";
import { WhyUs } from "@/components/sections/why-us";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import { FaqJsonLd } from "@/components/seo/json-ld";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();
  const faq = messages.faq as { items: { question: string; answer: string }[] };

  return (
    <>
      <FaqJsonLd items={faq.items} />
      <Hero />
      <Stats />
      <Services />
      <Process />
      <Showcase />
      <WhyUs />
      <FAQ />
      <CTA />
    </>
  );
}
