"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ThemeToggle } from "./theme-toggle";
import { LanguageSwitcher } from "./language-switcher";
import { useThemeStore } from "@/store/theme-store";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const serviceLinks = [
  { href: "/temel-kimlik", label: "identity" },
  { href: "/yasal-uyumluluk", label: "legal" },
  { href: "/erisilebirlik", label: "a11y" },
  { href: "/tema-gorsel", label: "theme" },
  { href: "/seo", label: "seo" },
  { href: "/sem", label: "sem" },
  { href: "/geo", label: "geo" },
  { href: "/aio-llmo", label: "aio" },
  { href: "/analitik-performans", label: "analyticsPerf" },
  { href: "/guvenlik", label: "security" },
  { href: "/ux-temelleri", label: "ux" },
  { href: "/urun-hizmet", label: "productMarketing" },
] as const;

const mainLinks = [
  { href: "/araclar", label: "tools" },
  { href: "/hakkimizda", label: "about" },
  { href: "/brand", label: "brand" },
  { href: "/iletisim", label: "contact" },
] as const;

export function Navbar() {
  const t = useTranslations("nav");
  const { isScrolled, setIsScrolled, isMobileMenuOpen, setIsMobileMenuOpen } =
    useThemeStore();
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setIsScrolled]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-xl backdrop-saturate-150"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-[980px] mx-auto px-6 h-12 flex items-center justify-between">
          <Link href="/" className="text-sm font-semibold text-foreground hover:text-muted transition-colors tracking-tight">
            megis
          </Link>

          <div className="hidden lg:flex items-center gap-0">
            <Link href="/" className="px-3 py-1 text-xs text-muted hover:text-foreground transition-colors">
              {t("home")}
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="px-3 py-1 text-xs text-muted hover:text-foreground transition-colors flex items-center gap-0.5">
                {t("services")}
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full pt-3"
                  >
                    <div className="bg-surface/95 backdrop-blur-xl backdrop-saturate-150 rounded-2xl p-2 min-w-[200px] shadow-2xl shadow-black/20">
                      {serviceLinks.map((link) => (
                        <Link key={link.label} href={link.href} className="block px-4 py-2 text-sm text-muted hover:text-foreground rounded-lg transition-colors">
                          {t(link.label)}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {mainLinks.map((link) => (
              <Link key={link.label} href={link.href} className="px-3 py-1 text-xs text-muted hover:text-foreground transition-colors">
                {t(link.label)}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>

          <button
            className="lg:hidden w-9 h-9 flex items-center justify-center text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
            )}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-12 bottom-0 z-40 bg-background/95 backdrop-blur-xl lg:hidden overflow-y-auto"
          >
            <nav className="max-w-[980px] mx-auto px-8 py-6">
              <Link href="/" className="block py-3 text-2xl font-semibold text-foreground border-b border-border" onClick={() => setIsMobileMenuOpen(false)}>
                {t("home")}
              </Link>

              <div className="py-3 border-b border-border">
                <span className="text-2xl font-semibold text-foreground">{t("services")}</span>
                <div className="mt-3 space-y-2">
                  {serviceLinks.map((link) => (
                    <Link key={link.label} href={link.href} className="block py-1 text-lg text-muted hover:text-foreground" onClick={() => setIsMobileMenuOpen(false)}>
                      {t(link.label)}
                    </Link>
                  ))}
                </div>
              </div>

              {mainLinks.map((link) => (
                <Link key={link.label} href={link.href} className="block py-3 text-2xl font-semibold text-foreground border-b border-border" onClick={() => setIsMobileMenuOpen(false)}>
                  {t(link.label)}
                </Link>
              ))}

              <div className="mt-6 flex items-center gap-4">
                <LanguageSwitcher />
                <ThemeToggle />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
