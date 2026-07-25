import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { getMessages } from "next-intl/server";
import { SITE_URL } from "@/lib/site-url";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const legal = (messages.legal as Record<string, Record<string, string>>)
    ?.kvkk;
  return {
    title: legal?.title || "KVKK Aydınlatma Metni",
    alternates: {
      canonical: `${SITE_URL}${locale === "en" ? "/en" : ""}/kvkk`,
    },
  };
}

export default async function KvkkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <KvkkContent />;
}

function KvkkContent() {
  const t = useTranslations("legal.kvkk");
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
