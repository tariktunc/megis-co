"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Link } from "@/i18n/navigation";
import { useState } from "react";

/* ─── Types ─── */

interface Feature {
  title: string;
  description: string;
}

interface Stat {
  value: string;
  label: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface CaseStudy {
  title: string;
  challenge: string;
  solution: string;
  result: string;
}

interface Included {
  title: string;
  items: string[];
}

interface ProductPageProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  introduction: string;
  features: Feature[];
  stats?: Stat[];
  process?: Feature[];
  whyMatters?: { title: string; description: string };
  included?: Included[];
  comparison?: { us: string[]; others: string[]; usTitle?: string; othersTitle?: string };
  caseStudies?: CaseStudy[];
  faqs?: FAQ[];
  timeline?: string;
  cta: string;
  ctaSecondary?: string;
  ctaBottom?: string;
}

/* ─── FAQ Accordion ─── */

function FAQItem({ faq, index }: { faq: FAQ; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-b-0">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-4 py-5 text-left">
        <span className="text-lg font-semibold text-foreground">{faq.question}</span>
        <motion.svg animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.2 }} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="flex-shrink-0 text-muted">
          <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
        </motion.svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <p className="pb-5 text-muted leading-relaxed">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Main Component ─── */

export function ProductPage({
  eyebrow, title, subtitle, introduction,
  features, stats, process, whyMatters,
  included, comparison, caseStudies, faqs,
  timeline, cta, ctaSecondary, ctaBottom,
}: ProductPageProps) {
  return (
    <div className="min-h-screen">

      {/* ════ 1. HERO ════ */}
      <section className="pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="max-w-[980px] mx-auto px-6 text-center">
          <motion.p className="text-accent text-lg sm:text-xl font-semibold mb-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>
            {eyebrow}
          </motion.p>
          <motion.h1 className="text-5xl sm:text-6xl lg:text-[80px] font-bold tracking-tight leading-[1.05] text-foreground" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            {title}
          </motion.h1>
          <motion.p className="mt-6 text-xl sm:text-2xl text-muted max-w-3xl mx-auto leading-relaxed" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
            {subtitle}
          </motion.p>
          <motion.div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
            <Link href="/iletisim" className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3 text-lg text-white hover:bg-accent-hover transition-colors">
              {cta}
            </Link>
            {ctaSecondary && (
              <a href="#neden-onemli" className="inline-flex items-center gap-1 text-xl text-accent hover:underline">
                {ctaSecondary}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
              </a>
            )}
          </motion.div>
        </div>
      </section>

      {/* ════ 2. STATS ════ */}
      {stats && stats.length > 0 && (
        <section className="border-t border-border py-12">
          <div className="max-w-[980px] mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-8">
              {stats.map((stat, i) => (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div className="text-center">
                    <div className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">{stat.value}</div>
                    <div className="text-muted text-sm mt-2">{stat.label}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ════ 3. WHY IT MATTERS (Introduction) ════ */}
      <section id="neden-onemli" className="py-20 sm:py-28 scroll-mt-12">
        <div className="max-w-[680px] mx-auto px-6">
          <ScrollReveal>
            {whyMatters ? (
              <>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-8">{whyMatters.title}</h2>
                <div className="text-lg text-muted leading-relaxed space-y-6">
                  {whyMatters.description.split("\n\n").map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-lg text-muted leading-relaxed space-y-6">
                {introduction.split("\n\n").map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            )}
          </ScrollReveal>
        </div>
      </section>

      {/* ════ 4. FEATURES (Detailed) ════ */}
      <section id="features" className="py-20 sm:py-28 bg-surface">
        <div className="max-w-[980px] mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground text-center mb-6">Neler sunuyoruz?</h2>
            <p className="text-muted text-xl text-center mb-20 max-w-2xl mx-auto">Her detay dusunulmus, her adim planlanmis.</p>
          </ScrollReveal>

          <div className="space-y-20">
            {features.map((feature, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className={`flex flex-col md:flex-row gap-8 md:gap-16 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                  <div className="md:w-1/3 flex-shrink-0">
                    <div className="text-accent text-6xl font-bold tracking-tight opacity-20">{String(i + 1).padStart(2, "0")}</div>
                    <h3 className="text-2xl font-semibold text-foreground mt-2">{feature.title}</h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-muted text-lg leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════ 5. WHAT'S INCLUDED ════ */}
      {included && included.length > 0 && (
        <section className="py-20 sm:py-28">
          <div className="max-w-[980px] mx-auto px-6">
            <ScrollReveal>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground text-center mb-20">Neler dahil?</h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
              {included.map((group, i) => (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">{group.title}</h3>
                    <ul className="space-y-2.5">
                      {group.items.map((item, j) => (
                        <li key={j} className="flex gap-3 text-muted">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0 mt-0.5 text-accent"><polyline points="20 6 9 17 4 12" /></svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ════ 6. PROCESS ════ */}
      {process && process.length > 0 && (
        <section className="py-20 sm:py-28 bg-surface">
          <div className="max-w-[980px] mx-auto px-6">
            <ScrollReveal>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground text-center mb-6">Nasil calisiyoruz?</h2>
              {timeline && <p className="text-muted text-xl text-center mb-20">{timeline}</p>}
            </ScrollReveal>

            <div className="space-y-12">
              {process.map((step, i) => (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div className="flex gap-8">
                    <div className="flex-shrink-0 w-16 text-right">
                      <span className="text-accent text-4xl font-bold tracking-tight">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <div className="flex-1 pb-12 border-b border-border last:border-b-0">
                      <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                      <p className="text-muted leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ════ 7. COMPARISON ════ */}
      {comparison && (
        <section className="py-20 sm:py-28">
          <div className="max-w-[980px] mx-auto px-6">
            <ScrollReveal>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground text-center mb-20">Fark nerede?</h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ScrollReveal delay={0.1}>
                <div className="rounded-2xl bg-surface p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-6">{comparison.usTitle || "Megis ile"}</h3>
                  <ul className="space-y-3">
                    {comparison.us.map((item, i) => (
                      <li key={i} className="flex gap-3 text-foreground">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0 mt-0.5 text-accent"><polyline points="20 6 9 17 4 12" /></svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="rounded-2xl bg-surface p-8">
                  <h3 className="text-xl font-semibold text-muted mb-6">{comparison.othersTitle || "Digerleri ile"}</h3>
                  <ul className="space-y-3">
                    {comparison.others.map((item, i) => (
                      <li key={i} className="flex gap-3 text-muted">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0 mt-0.5"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      )}

      {/* ════ 8. CASE STUDIES ════ */}
      {caseStudies && caseStudies.length > 0 && (
        <section className="py-20 sm:py-28 bg-surface">
          <div className="max-w-[980px] mx-auto px-6">
            <ScrollReveal>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground text-center mb-20">Basari hikayeleri</h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.map((cs, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="rounded-2xl bg-background p-8">
                    <h3 className="text-xl font-semibold text-foreground mb-4">{cs.title}</h3>
                    <div className="space-y-3 text-sm">
                      <div><span className="text-muted">Sorun:</span> <span className="text-foreground">{cs.challenge}</span></div>
                      <div><span className="text-muted">Cozum:</span> <span className="text-foreground">{cs.solution}</span></div>
                      <div><span className="text-accent font-semibold">Sonuc:</span> <span className="text-foreground font-semibold">{cs.result}</span></div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ════ 9. FAQ ════ */}
      {faqs && faqs.length > 0 && (
        <section className="py-20 sm:py-28">
          <div className="max-w-[680px] mx-auto px-6">
            <ScrollReveal>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground text-center mb-16">Sik sorulan sorular</h2>
            </ScrollReveal>
            <div className="border-t border-border">
              {faqs.map((faq, i) => (
                <FAQItem key={i} faq={faq} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ════ 10. BOTTOM CTA ════ */}
      <section className="py-20 sm:py-28 bg-surface">
        <div className="max-w-[980px] mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
              {ctaBottom || "Hemen baslayin."}
            </h2>
            <p className="text-muted text-xl mb-10 max-w-2xl mx-auto">
              Ucretsiz analiz ve danismanlik icin iletisime gecin. Projenizi birlikte buyutelim.
            </p>
            <Link href="/iletisim" className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3 text-lg text-white hover:bg-accent-hover transition-colors">
              {cta}
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
