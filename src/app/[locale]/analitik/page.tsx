import { setRequestLocale } from "next-intl/server";

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
