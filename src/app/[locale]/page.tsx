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
import { ThreeWaveGlobal } from "@/components/animations/three-wave-global";

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
      <ThreeWaveGlobal />
      
      {/* Sections with transparent background over the 3D wave */}
      <Hero />
      <Stats />
      <Services />
      <Process />

      {/* Sections with solid background to hide the wave */}
      <div className="relative z-20 bg-background">
        <Showcase />
        <WhyUs />
        <FAQ />
        <CTA />
      </div>
    </>
  );
}
