import { SITE_URL } from "@/lib/site-url";

export function OrganizationJsonLd({ locale }: { locale: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Megis",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    description:
      locale === "tr"
        ? "SEO, SEM, AI destekli reklam yönetimi, e-ticaret çözümleri ve web tasarım alanında dijital çözümler sunuyoruz."
        : "We provide digital solutions in SEO, SEM, AI-powered ad management, e-commerce, and web design.",
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@megis.com.tr",
      contactType: "customer service",
      availableLanguage: ["Turkish", "English"],
    },
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FaqJsonLd({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleJsonLd({
  post,
  locale,
}: {
  post: { slug: string; title: string; description: string; date: string; author: string; tags: string[] };
  locale: string;
}) {
  const localePath = locale === "en" ? "/en" : "";
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: {
      "@type": "Organization",
      name: "Megis",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.svg` },
    },
    mainEntityOfPage: `${SITE_URL}${localePath}/blog/${post.slug}`,
    inLanguage: locale === "tr" ? "tr-TR" : "en-US",
    keywords: post.tags.join(", "),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteJsonLd({ locale }: { locale: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Megis",
    url: SITE_URL,
    inLanguage: locale === "tr" ? "tr-TR" : "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/${locale === "en" ? "en/" : ""}araclar?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
