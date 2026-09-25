import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { SeoBrowser } from "@/components/tools/seo-browser";
import { SITE_URL } from "@/lib/site-url";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "SEO Browser",
    description:
      "Googlebot'un sayfanızı nasıl gördüğünü görüntüleyin. Başlık yapısı, linkler, görseller ve metin içeriği.",
    alternates: {
      canonical: `${SITE_URL}${locale === "en" ? "/en" : ""}/araclar/seo-browser`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-[780px] mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-accent text-sm font-semibold mb-3">Ücretsiz Araç</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">SEO Browser</h1>
          <p className="mt-4 text-lg text-muted">Googlebot'un sayfanızı nasıl gördüğünü görüntüleyin. Başlık yapısı, linkler, görseller ve metin içeriği.</p>
        </div>
        <SeoBrowser />
      </div>
    </div>
  );
}
