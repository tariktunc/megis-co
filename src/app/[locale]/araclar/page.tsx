import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site-url";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Ücretsiz SEO Araçları",
    description: "SERP önizleme, meta tag kontrol ve daha fazla ücretsiz SEO aracı.",
    alternates: {
      canonical: `${SITE_URL}${locale === "en" ? "/en" : ""}/araclar`,
    },
  };
}

const tools = [
  { href: "/araclar/serp-onizleme", title: "SERP Önizleme", desc: "Title ve description'ınızın Google'da nasıl görüneceğini test edin." },
  { href: "/araclar/kelime-sayaci", title: "Kelime Sayacı", desc: "Metin analizi: kelime, karakter, cümle sayısı ve anahtar kelime yoğunluğu." },
  { href: "/araclar/meta-tag-kontrol", title: "Meta Tag Kontrol", desc: "Herhangi bir URL'nin meta etiketlerini, OG tag'larını ve SEO durumunu analiz edin." },
  { href: "/araclar/seo-browser", title: "SEO Browser", desc: "Googlebot'un sayfanızı nasıl gördüğünü görüntüleyin. Başlık, link ve görsel analizi." },
  { href: "/araclar/mfi-denetleyici", title: "MFI Denetleyici", desc: "Mobile-First Indexing uyumluluğunu denetleyin. Masaüstü ve mobil karşılaştırma." },
];

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-[980px] mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-accent text-lg font-semibold mb-4">Ücretsiz SEO Araçları</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight">
            Araçlar
          </h1>
          <p className="mt-5 text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            SEO ve dijital pazarlama çalışmalarınız için ücretsiz araçlar. Hiçbir kayıt gerektirmez.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <Link key={tool.href} href={tool.href} className="group rounded-2xl bg-surface p-8 transition-colors hover:bg-surface-light">
              <h2 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                {tool.title}
              </h2>
              <p className="text-muted text-sm leading-relaxed">{tool.desc}</p>
              <span className="inline-flex items-center gap-1 text-sm text-accent mt-4">
                Kullan
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
