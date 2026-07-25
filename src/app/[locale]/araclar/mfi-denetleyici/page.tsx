import { setRequestLocale } from "next-intl/server";
import { MfiChecker } from "@/components/tools/mfi-checker";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-[780px] mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-accent text-sm font-semibold mb-3">Ücretsiz Araç</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">MFI Denetleyici</h1>
          <p className="mt-4 text-lg text-muted">Mobile-First Indexing uyumluluğunu denetleyin. Masaüstü ve mobil versiyonları karşılaştırın.</p>
        </div>
        <MfiChecker />
      </div>
    </div>
  );
}
