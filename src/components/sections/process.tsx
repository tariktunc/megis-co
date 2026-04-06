"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

export function Process() {
  const t = useTranslations("process");
  const steps = t.raw("steps") as Array<{ number: string; title: string; description: string }>;

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="relative z-10 max-w-[980px] mx-auto px-6">
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

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.12} className="h-full">
              <motion.div 
                className="group relative h-full flex flex-col p-8 rounded-3xl bg-surface-light/50 border border-border/50 hover:bg-surface-light hover:border-border transition-all duration-300"
                whileHover={{ y: -8 }}
              >
                {/* Accent line at the top */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-accent/0 via-accent/50 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="text-accent text-5xl font-black tracking-tighter mb-6 opacity-30 group-hover:opacity-100 transition-opacity">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 leading-snug">
                  {step.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mt-auto">
                  {step.description}
                </p>
                
                {/* Connecting arrow (hidden on last item) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-5 top-1/2 -translate-y-1/2 z-10 text-muted opacity-20">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
                )}
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
