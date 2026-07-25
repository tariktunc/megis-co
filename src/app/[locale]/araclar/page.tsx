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
  { href: "/araclar/serp-onizleme", title: "SERP Onizleme", desc: "Title ve description'inizin Google'da nasil gorunecegini test edin." },
  { href: "/araclar/kelime-sayaci", title: "Kelime Sayaci", desc: "Metin analizi: kelime, karakter, cumle sayisi ve anahtar kelime yogunlugu." },
  { href: "/araclar/meta-tag-kontrol", title: "Meta Tag Kontrol", desc: "Herhangi bir URL'nin meta etiketlerini, OG tag'larini ve SEO durumunu analiz edin." },
  { href: "/araclar/seo-browser", title: "SEO Browser", desc: "Googlebot'un sayfanizi nasil gordugunu goruntuleyin. Baslik, link ve gorsel analizi." },
  { href: "/araclar/mfi-denetleyici", title: "MFI Denetleyici", desc: "Mobile-First Indexing uyumlulugunu denetleyin. Masaustu ve mobil karsilastirma." },
];

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-[980px] mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-accent text-lg font-semibold mb-4">Ucretsiz SEO Araclari</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight">
            Araclar
          </h1>
          <p className="mt-5 text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            SEO ve dijital pazarlama calismalariniz icin ucretsiz araclar. Hicbir kayit gerektirmez.
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
