import { setRequestLocale } from "next-intl/server";

export default async function WebTasarimPage({
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
          Web Tasarım
        </h1>
        <p className="mt-6 text-lg text-white/50 max-w-2xl">
          48 saat içinde kurumsal web sitenizi kuralım.
        </p>
      </div>
    </div>
  );
}
