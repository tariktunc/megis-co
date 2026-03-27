import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Veri Analitiği",
    description: "Google Analytics 4, özel dashboard ve dönüşüm analizi.",
    alternates: {
      canonical: `https://megis.com.tr${locale === "en" ? "/en" : ""}/analitik`,
    },
  };
}

export default async function AnalitikPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold gradient-text">
          Veri Analitiği & Raporlama
        </h1>
        <p className="mt-6 text-lg text-white/50 max-w-2xl">
          Gerçek zamanlı performans takibi ve veri odaklı kararlar.
        </p>
      </div>
    </div>
  );
}
