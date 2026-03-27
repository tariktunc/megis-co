"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

const serviceKeys = [
  "seo", "sem", "aiAds", "socialMedia", "ecommerce", "analytics", "web", "brand",
] as const;

export function Services() {
  const t = useTranslations("services");

  return (
    <section className="py-20 sm:py-28">
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

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-14">
          {serviceKeys.map((key, i) => (
            <ScrollReveal key={key} delay={i * 0.06}>
              <motion.div
                className="group"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  {t(`${key}.title`)}
                </h3>
                <p className="text-muted text-base leading-relaxed mb-4">
                  {t(`${key}.description`)}
                </p>
                <a href="#" className="inline-flex items-center gap-1 text-accent text-base hover:underline">
                  Daha fazla
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-px"><polyline points="9 18 15 12 9 6" /></svg>
                </a>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
