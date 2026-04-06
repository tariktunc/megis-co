"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const statKeys = ["firstPage", "delivery", "clients", "roi", "campaigns", "growth"] as const;

export function Stats() {
  const t = useTranslations("stats");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-12 border-t border-border overflow-hidden">
      <div className="relative z-10 max-w-[980px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-10 py-10">
          {statKeys.map((key, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
                {t(`${key}Value`)}
              </div>
              <div className="text-muted text-sm mt-2">
                {t(key)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
