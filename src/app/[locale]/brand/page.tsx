import { setRequestLocale } from "next-intl/server";
import { BrandSystem } from "@/components/sections/brand-system";

export default async function BrandPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <BrandSystem />;
}
