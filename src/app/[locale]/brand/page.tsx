import { setRequestLocale } from "next-intl/server";
import { BrandSystem } from "@/components/sections/brand-system";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Marka & Dijital Strateji",
    description: "Markanızın dijital kimliğini oluşturun.",
    alternates: {
      canonical: `https://megis.com.tr${locale === "en" ? "/en" : ""}/brand`,
    },
  };
}

export default async function BrandPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <BrandSystem />;
}
