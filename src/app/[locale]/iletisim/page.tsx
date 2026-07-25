import { setRequestLocale } from "next-intl/server";
import { getMessages } from "next-intl/server";
import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { SITE_URL } from "@/lib/site-url";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const contact = messages.contact as Record<string, string>;
  return {
    title: contact?.title || "İletişim",
    description: contact?.subtitle || "",
    alternates: {
      canonical: `${SITE_URL}${locale === "en" ? "/en" : ""}/iletisim`,
    },
  };
}

export default async function IletisimPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ContactForm />;
}
