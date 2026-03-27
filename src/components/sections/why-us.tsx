"use client";

import { useTranslations } from "next-intl";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

export function WhyUs() {
  const t = useTranslations("whyUs");
  const reasons = t.raw("reasons") as Array<{ title: string; description: string }>;

  return (
    <section className="py-20 sm:py-28 bg-surface">
      <div className="max-w-[980px] mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
              {t("title")}
            </h2>
            <p className="text-muted mt-5 text-xl sm:text-2xl leading-relaxed">
              {t("subtitle")}
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {reasons.map((reason, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted text-base leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
