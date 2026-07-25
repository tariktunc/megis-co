import { setRequestLocale } from "next-intl/server";
import { MetaTagChecker } from "@/components/tools/meta-tag-checker";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-[780px] mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-accent text-sm font-semibold mb-3">Ücretsiz Araç</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">Meta Tag Kontrol</h1>
          <p className="mt-4 text-lg text-muted">Herhangi bir URL'nin title, description, OG tag ve SEO durumunu analiz edin.</p>
        </div>
        <MetaTagChecker />
      </div>
    </div>
  );
}
