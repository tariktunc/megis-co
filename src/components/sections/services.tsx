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

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-[280px]">
          {serviceKeys.map((key, i) => {
            // Create an asymmetrical bento pattern
            const isLarge = i === 0 || i === 4; // SEO, Ecommerce
            const isWide = i === 3 || i === 7;  // SocialMedia, Brand
            
            let spanClass = "col-span-1 row-span-1";
            if (isLarge) spanClass = "col-span-1 md:col-span-2 row-span-2";
            else if (isWide) spanClass = "col-span-1 md:col-span-2 row-span-1";

            return (
              <ScrollReveal key={key} delay={i * 0.05} className={spanClass}>
                <motion.div
                  className="group relative h-full flex flex-col justify-between overflow-hidden p-8 rounded-3xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.06] hover:border-white/[0.1] transition-all backdrop-blur-md shadow-lg"
                  whileHover={{ scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Glowing background blob on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/10 group-hover:to-transparent transition-colors duration-500 rounded-3xl" />
                  
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                      <h3 className={`font-semibold text-foreground mb-3 ${isLarge ? 'text-3xl sm:text-4xl' : 'text-2xl'}`}>
                        {t(`${key}.title`)}
                      </h3>
                      <p className={`text-muted leading-relaxed ${isLarge ? 'text-lg mt-4 max-w-sm' : 'text-base'}`}>
                        {t(`${key}.description`)}
                      </p>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                      <a href="#" className="inline-flex items-center gap-1 text-accent text-base hover:underline font-medium">
                        Detayları Keşfet
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-px"><polyline points="9 18 15 12 9 6" /></svg>
                      </a>
                      
                      {/* Decorative icon or element would go here */}
                      <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
