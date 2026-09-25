import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { MetaTagChecker } from "@/components/tools/meta-tag-checker";
import { SITE_URL } from "@/lib/site-url";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Meta Tag Kontrol",
    description:
      "Herhangi bir URL'nin title, description, OG tag ve SEO durumunu analiz edin.",
    alternates: {
      canonical: `${SITE_URL}${locale === "en" ? "/en" : ""}/araclar/meta-tag-kontrol`,
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
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">Meta Tag Kontrol</h1>
          <p className="mt-4 text-lg text-muted">Herhangi bir URL'nin title, description, OG tag ve SEO durumunu analiz edin.</p>
        </div>
        <MetaTagChecker />
      </div>
    </div>
  );
}
