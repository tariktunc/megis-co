"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

export function CTA() {
  const t = useTranslations("cta");

  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-[980px] mx-auto px-6 text-center">
        <ScrollReveal>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
            {t("title")}
          </h2>
          <p className="text-muted mt-5 text-xl sm:text-2xl leading-relaxed max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3 text-lg text-white hover:bg-accent-hover transition-colors"
            >
              {t("button")}
            </Link>
            <a href="#" className="inline-flex items-center gap-1 text-xl text-accent hover:underline">
              {t("secondaryButton")}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
