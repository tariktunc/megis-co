"use client";

import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const t = useTranslations("hero");
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -60]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div
        style={{ opacity, scale, y }}
        className="relative z-20 text-center px-6 max-w-4xl mx-auto"
      >
        <motion.p
          className="text-accent text-lg sm:text-xl font-semibold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t("badge")}
        </motion.p>

        <motion.h1
          className="text-5xl sm:text-6xl lg:text-[80px] font-bold tracking-tight leading-[1.05]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {t("title")
            .split("\n")
            .map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
        </motion.h1>

        <motion.p
          className="mt-6 text-xl sm:text-2xl text-muted max-w-2xl mx-auto leading-relaxed font-normal"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {t("subtitle")}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3 text-lg font-normal text-white hover:bg-accent-hover transition-colors"
          >
            {t("cta")}
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-1 text-xl text-accent hover:underline font-normal"
          >
            {t("ctaSecondary")}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5"><polyline points="9 18 15 12 9 6" /></svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
