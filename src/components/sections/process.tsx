"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

export function Process() {
  const t = useTranslations("process");
  const steps = t.raw("steps") as Array<{ number: string; title: string; description: string }>;

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

        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.12}>
              <motion.div className="text-center md:text-left">
                <div className="text-accent text-5xl font-bold tracking-tight mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
