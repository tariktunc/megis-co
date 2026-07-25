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
    title: "E-Ticaret Çözümleri",
    description: "Online mağazanızı kurun ve satışlarınızı katlayın.",
    alternates: {
      canonical: `${SITE_URL}${locale === "en" ? "/en" : ""}/e-ticaret`,
    },
  };
}

export default async function ETicaretPage({
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
          E-Ticaret Çözümleri
        </h1>
        <p className="mt-6 text-lg text-white/50 max-w-2xl">
          Online mağazanızı kurun ve satışlarınızı katlayın.
        </p>
      </div>
    </div>
  );
}
