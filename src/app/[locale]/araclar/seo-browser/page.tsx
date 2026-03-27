import { setRequestLocale } from "next-intl/server";
import { SeoBrowser } from "@/components/tools/seo-browser";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-[780px] mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-accent text-sm font-semibold mb-3">Ucretsiz Arac</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">SEO Browser</h1>
          <p className="mt-4 text-lg text-muted">Googlebot'un sayfanizi nasil gordugunu goruntuleyin. Baslik yapisi, linkler, gorseller ve metin icerigi.</p>
        </div>
        <SeoBrowser />
      </div>
    </div>
  );
}
