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
  { href: "/erisilebilirlik", label: "a11y" },
  { href: "/tema-gorsel", label: "theme" },
  { href: "/ux-temelleri", label: "ux" },
  { href: "/urun-hizmet", label: "productMarketing" },
] as const;

// Hardcoded labels, not routed through next-intl "nav" messages
// (2026-07-26 footer tools column) - same precedent as the hesaplama-araclari
// hub link above.
const footerToolsColumnA = [
  { href: "/hesaplama-araclari/kdv-hesaplama", label: "KDV Hesaplama" },
  { href: "/hesaplama-araclari/yuzde-hesaplama", label: "Yüzde Hesaplama" },
  { href: "/hesaplama-araclari/iskonto-hesaplama", label: "İskonto Hesaplama" },
  { href: "/hesaplama-araclari/maliyet-hesaplama", label: "Maliyet Hesaplama" },
  { href: "/hesaplama-araclari/desi-hesaplama", label: "Desi Hesaplama" },
  { href: "/hesaplama-araclari/trendyol-komisyon-hesaplama", label: "Trendyol Komisyon" },
  { href: "/hesaplama-araclari/hepsiburada-komisyon-hesaplama", label: "Hepsiburada Komisyon" },
  { href: "/hesaplama-araclari/n11-komisyon-hesaplama", label: "n11 Komisyon" },
  { href: "/hesaplama-araclari/ciceksepeti-komisyon-hesaplama", label: "Çiçeksepeti Komisyon" },
] as const;

const footerToolsColumnB = [
  { href: "/hesaplama-araclari/amazon-komisyon-hesaplama", label: "Amazon Komisyon" },
  { href: "/hesaplama-araclari/etsy-komisyon-hesaplama", label: "Etsy Komisyon" },
  { href: "/hesaplama-araclari/qr-kod-olusturucu", label: "QR Kod Oluşturucu" },
  { href: "/hesaplama-araclari/whatsapp-link-olusturma", label: "WhatsApp Link" },
  { href: "/hesaplama-araclari/meta-title-description-onizleyici", label: "Meta Önizleyici" },
  { href: "/hesaplama-araclari/alan-adi-olusturucu", label: "Alan Adı Üretici" },
] as const;

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");

  return (
    <footer className="bg-surface" role="contentinfo" aria-label="Site footer">
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
              {/* Hardcoded label, not routed through next-intl "nav" messages,
                  (2026-07-25 tools-suite install), see navbar.tsx's identical note. */}
              <li>
                <Link href="/hesaplama-araclari" className="text-xs text-muted hover:text-foreground transition-colors">
                  Hesaplama Araçları
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-foreground mb-4">{t("company")}</h4>
            <ul className="space-y-3">
              <li><Link href="/hakkimizda" className="text-xs text-muted hover:text-foreground transition-colors">{tNav("about")}</Link></li>
              <li><Link href="/marka" className="text-xs text-muted hover:text-foreground transition-colors">{tNav("brand")}</Link></li>
              <li><Link href="/iletisim" className="text-xs text-muted hover:text-foreground transition-colors">{tNav("contact")}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-foreground mb-4">{t("legal")}</h4>
            <ul className="space-y-3">
              <li><Link href="/gizlilik-politikasi" className="text-xs text-muted hover:text-foreground transition-colors">{t("privacy")}</Link></li>
              <li><Link href="/cerez-politikasi" className="text-xs text-muted hover:text-foreground transition-colors">{t("cookies")}</Link></li>
              <li><Link href="/kullanim-kosullari" className="text-xs text-muted hover:text-foreground transition-colors">{t("terms")}</Link></li>
              <li><Link href="/kvkk" className="text-xs text-muted hover:text-foreground transition-colors">{t("kvkk")}</Link></li>
              <li><Link href="/dsar" className="text-xs text-muted hover:text-foreground transition-colors">{t("dsar")}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-foreground mb-4">megis</h4>
            <p className="text-xs text-muted leading-relaxed">{t("description")}</p>
          </div>
        </div>

        <div className="border-t border-border py-8">
          <h4 className="text-xs font-semibold text-foreground mb-4">Araçlar</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <ul className="space-y-3">
              {footerToolsColumnA.map((tool) => (
                <li key={tool.href}>
                  <Link href={tool.href} className="text-xs text-muted hover:text-foreground transition-colors">
                    {tool.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              {footerToolsColumnB.map((tool) => (
                <li key={tool.href}>
                  <Link href={tool.href} className="text-xs text-muted hover:text-foreground transition-colors">
                    {tool.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border py-4 text-xs text-muted">
          Copyright &copy; {new Date().getFullYear()} Megis. {t("rights")}
        </div>
      </div>
    </footer>
  );
}
