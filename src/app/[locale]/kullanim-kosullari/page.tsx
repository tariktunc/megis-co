import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { getMessages } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const legal = (messages.legal as Record<string, Record<string, string>>)
    ?.terms;
  return {
    title: legal?.title || "Kullanım Koşulları",
    alternates: {
      canonical: `https://megis.com.tr${locale === "en" ? "/en" : ""}/kullanim-kosullari`,
    },
  };
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <TermsContent />;
}

function TermsContent() {
  const t = useTranslations("legal.terms");
  const sections = t.raw("sections") as Array<{
    title: string;
    content: string;
  }>;

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-2 text-4xl font-bold text-foreground">{t("title")}</h1>
        <p className="mb-8 text-sm text-muted">{t("lastUpdated")}</p>
        <p className="mb-10 text-lg leading-relaxed text-muted">{t("intro")}</p>
        <div className="space-y-8">
          {sections.map((section, i) => (
            <div key={i}>
              <h2 className="mb-3 text-xl font-semibold text-foreground">
                {section.title}
              </h2>
              <p className="leading-relaxed text-muted">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
