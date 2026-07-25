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
    title: "Hakkımızda",
    description: "Megis dijital ajans hakkında bilgi edinin.",
    alternates: {
      canonical: `${SITE_URL}${locale === "en" ? "/en" : ""}/hakkimizda`,
    },
  };
}

export default async function HakkimizdaPage({
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
          Hakkımızda
        </h1>
        <p className="mt-6 text-lg text-white/50 max-w-2xl">
          Megis dijital ajans hikayesi.
        </p>
      </div>
    </div>
  );
}
