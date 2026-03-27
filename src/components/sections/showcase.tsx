"use client";

import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

export function Showcase() {
  const t = useTranslations("showcase");
  const items = t.raw("items") as Array<{ title: string; category: string; result: string }>;
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="py-20 sm:py-28 overflow-hidden">
      <div className="max-w-[980px] mx-auto px-6 mb-16">
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
      </div>

      <motion.div style={{ x }} className="flex gap-5 px-6">
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="flex-shrink-0 w-72 sm:w-80 rounded-2xl bg-surface p-8 cursor-pointer group"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-xs text-muted uppercase tracking-wider">
              {item.category}
            </span>
            <h3 className="text-xl font-semibold text-foreground mt-3 mb-2">
              {item.title}
            </h3>
            <p className="text-base text-accent font-medium">
              {item.result}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
