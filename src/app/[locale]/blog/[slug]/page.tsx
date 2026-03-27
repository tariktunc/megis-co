import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { routing } from "@/i18n/routing";
import {
  getPostBySlug,
  getPostContent,
  getAllSlugs,
} from "@/lib/blog";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { Link } from "@/i18n/navigation";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getAllSlugs().map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Bulunamadı" };

  const localePath = locale === "en" ? "/en" : "";
  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `https://megis.com.tr${localePath}/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      url: `https://megis.com.tr${localePath}/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const post = getPostBySlug(slug);
  if (!post) notFound();

  const Content = await getPostContent(slug);
  const localePath = locale === "en" ? "/en" : "";

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <article className="mx-auto max-w-3xl">
        <ArticleJsonLd post={post} locale={locale} />
        <BreadcrumbJsonLd
          items={[
            { name: "Ana Sayfa", url: "https://megis.com.tr" },
            { name: "Blog", url: `https://megis.com.tr${localePath}/blog` },
            {
              name: post.title,
              url: `https://megis.com.tr${localePath}/blog/${post.slug}`,
            },
          ]}
        />

        <div className="mb-8">
          <Link
            href="/blog"
            className="mb-4 inline-block text-sm text-accent hover:underline"
          >
            &larr; Blog
          </Link>
          <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-muted">
            <span className="rounded-full bg-accent/10 px-3 py-0.5 font-medium text-accent">
              {post.category}
            </span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("tr-TR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span>{post.readingTime} dk okuma</span>
            <span>{post.author}</span>
          </div>
          <h1 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            {post.description}
          </p>
        </div>

        <div className="prose prose-invert max-w-none prose-headings:text-foreground prose-p:text-muted prose-a:text-accent prose-strong:text-foreground prose-li:text-muted prose-th:text-foreground prose-td:text-muted">
          <Content />
        </div>

        <div className="mt-10 flex flex-wrap gap-2 border-t border-border pt-6">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-surface px-2.5 py-1 text-xs text-muted"
            >
              #{tag}
            </span>
          ))}
        </div>
      </article>
    </div>
  );
}
