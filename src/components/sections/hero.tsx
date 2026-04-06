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
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
    >
      {/* Ön Plan İçeriği */}
      <motion.div
        style={{ opacity, scale, y }}
        className="relative z-20 text-center px-6 max-w-5xl mx-auto mt-[-5vh] p-10"
      >
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 border border-foreground/10 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
          <p className="text-accent text-sm sm:text-base font-medium tracking-wide">
            {t("badge")}
          </p>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-7xl lg:text-[90px] font-black tracking-tighter leading-[1.05] bg-clip-text text-transparent bg-gradient-to-br from-foreground via-foreground to-foreground/60"
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
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
          className="mt-8 text-xl sm:text-2xl text-muted-foreground/90 max-w-3xl mx-auto leading-relaxed font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {t("subtitle")}
        </motion.p>

        <motion.div
          className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <a
            href="#"
            className="group relative inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-lg font-medium text-white hover:bg-accent-hover transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(17,109,255,0.5)]"
          >
            {t("cta")}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2 group-hover:translate-x-1 transition-transform"><polyline points="9 18 15 12 9 6" /></svg>
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-lg text-foreground/70 hover:text-foreground transition-colors font-medium border border-transparent hover:border-foreground/10 px-8 py-4 rounded-full bg-foreground/0 hover:bg-foreground/5"
          >
            {t("ctaSecondary")}
          </a>
        </motion.div>
      </motion.div>

      {/* Kaydırma İndikatörü */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center justify-center gap-3 opacity-60 hover:opacity-100 transition-opacity"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <span className="text-xs uppercase tracking-[0.2em] font-medium text-foreground/50">Keşfet</span>
        <motion.div 
          className="w-[30px] h-[50px] rounded-full border-2 border-foreground/20 flex justify-center p-1"
        >
          <motion.div 
            className="w-1.5 h-3 bg-foreground/80 rounded-full"
            animate={{ 
              y: [0, 20, 0],
              opacity: [1, 0.5, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
