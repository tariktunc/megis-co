"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const footerServices = [
  { href: "/seo", label: "seo" },
  { href: "/sem", label: "sem" },
  { href: "/geo", label: "geo" },
  { href: "/aio-llmo", label: "aio" },
  { href: "/analitik-performans", label: "analyticsPerf" },
  { href: "/guvenlik", label: "security" },
] as const;

const footerMore = [
  { href: "/temel-kimlik", label: "identity" },
  { href: "/yasal-uyumluluk", label: "legal" },
  { href: "/erisilebirlik", label: "a11y" },
  { href: "/tema-gorsel", label: "theme" },
  { href: "/ux-temelleri", label: "ux" },
  { href: "/urun-hizmet", label: "productMarketing" },
] as const;

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");

  return (
    <footer className="bg-surface">
      <div className="max-w-[980px] mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-8 py-12">
          <div>
            <h4 className="text-xs font-semibold text-foreground mb-4">{t("services")}</h4>
            <ul className="space-y-3">
              {footerServices.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-xs text-muted hover:text-foreground transition-colors">
                    {tNav(s.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-foreground mb-4">Daha Fazla</h4>
            <ul className="space-y-3">
              {footerMore.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-xs text-muted hover:text-foreground transition-colors">
                    {tNav(s.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-foreground mb-4">{t("company")}</h4>
            <ul className="space-y-3">
              <li><Link href="/hakkimizda" className="text-xs text-muted hover:text-foreground transition-colors">{tNav("about")}</Link></li>
              <li><Link href="/brand" className="text-xs text-muted hover:text-foreground transition-colors">{tNav("brand")}</Link></li>
              <li><Link href="/iletisim" className="text-xs text-muted hover:text-foreground transition-colors">{tNav("contact")}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-foreground mb-4">{t("legal")}</h4>
            <ul className="space-y-3">
              <li><span className="text-xs text-muted hover:text-foreground transition-colors cursor-pointer">{t("privacy")}</span></li>
              <li><span className="text-xs text-muted hover:text-foreground transition-colors cursor-pointer">{t("terms")}</span></li>
              <li><span className="text-xs text-muted hover:text-foreground transition-colors cursor-pointer">{t("kvkk")}</span></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-foreground mb-4">megis</h4>
            <p className="text-xs text-muted leading-relaxed">{t("description")}</p>
          </div>
        </div>

        <div className="border-t border-border py-4 text-xs text-muted">
          Copyright &copy; {new Date().getFullYear()} Megis. {t("rights")}
        </div>
      </div>
    </footer>
  );
}
