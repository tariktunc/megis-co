import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { WordCounter } from "@/components/tools/word-counter";
import { SITE_URL } from "@/lib/site-url";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Kelime Sayacı",
    description:
      "Kelime, karakter, cümle sayısı, okuma süresi ve anahtar kelime yoğunluğu analizi.",
    alternates: {
      canonical: `${SITE_URL}${locale === "en" ? "/en" : ""}/araclar/kelime-sayaci`,
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
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">Kelime Sayacı</h1>
          <p className="mt-4 text-lg text-muted">Kelime, karakter, cümle sayısı, okuma süresi ve anahtar kelime yoğunluğu analizi.</p>
        </div>
        <WordCounter />
      </div>
    </div>
  );
}
