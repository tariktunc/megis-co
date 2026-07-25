import { setRequestLocale } from "next-intl/server";
import { SerpPreview } from "@/components/tools/serp-preview";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-[680px] mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-accent text-sm font-semibold mb-3">Ücretsiz Araç</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">SERP Önizleme</h1>
          <p className="mt-4 text-lg text-muted">Title ve description'ınızın Google arama sonuçlarında nasıl görüneceğini test edin.</p>
        </div>
        <SerpPreview />
      </div>
    </div>
  );
}
