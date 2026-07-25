import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site-url";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "AI Destekli Reklam",
    description: "Yapay zeka ile reklam kampanyalarınızı optimize edin.",
    alternates: {
      canonical: `${SITE_URL}${locale === "en" ? "/en" : ""}/ai-reklam`,
    },
  };
}

export default async function AiReklamPage({
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
          AI Destekli Reklam Yönetimi
        </h1>
        <p className="mt-6 text-lg text-white/50 max-w-2xl">
          Yapay zeka ile reklam kampanyalarınızı optimize edin.
        </p>
      </div>
    </div>
  );
}
