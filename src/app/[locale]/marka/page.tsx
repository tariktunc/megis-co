import { setRequestLocale } from "next-intl/server";
import { BrandSystem } from "@/components/sections/brand-system";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site-url";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Marka / Tasarım Sistemi",
    description:
      "Megis tasarım sistemi referansı: renk paleti, tipografi ve bileşenlerin tokens.config.ts'ten beslenen canlı görünümü.",
    alternates: {
      canonical: `${SITE_URL}${locale === "en" ? "/en" : ""}/marka`,
    },
    // Style-guide sayfası — arama amacı yok, indekslenirse gerçek içerikle
    // kanibalize olur (site-builder/specs/brand-page.md, /_studio ile aynı
    // gerekçe sınıfı). pages-sitemap.xml'den de _legal-slugs.ts üzerinden
    // AUTH_GATED_SLUGS ile hariç tutulur.
    robots: { index: false, follow: false },
  };
}

export default async function BrandPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <BrandSystem />;
}
