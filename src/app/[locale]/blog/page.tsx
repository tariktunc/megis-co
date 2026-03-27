import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { getPaginatedPosts, getAllCategories } from "@/lib/blog";
import { BlogCard } from "@/components/blog/blog-card";
import { BlogPagination } from "@/components/blog/blog-pagination";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Blog",
    description:
      "SEO, SEM, dijital pazarlama, web geliştirme ve AI teknolojileri hakkında kapsamlı rehberler ve güncel makaleler.",
    alternates: {
      canonical: `https://megis.com.tr${locale === "en" ? "/en" : ""}/blog`,
    },
  };
}

export default async function BlogPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ sayfa?: string; kategori?: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const sp = await searchParams;
  const page = parseInt(sp.sayfa || "1", 10);
  const { posts, totalPages, currentPage } = getPaginatedPosts(page, 12);
  const categories = getAllCategories();

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-2 text-4xl font-bold text-foreground sm:text-5xl">
          Blog
        </h1>
        <p className="mb-10 text-lg text-muted">
          SEO, SEM, dijital pazarlama ve web teknolojileri hakkında kapsamlı
          rehberler
        </p>

        {categories.length > 0 && (
          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <span
                key={cat}
                className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-muted"
              >
                {cat}
              </span>
            ))}
          </div>
        )}

        {posts.length === 0 ? (
          <p className="text-muted">Henüz blog yazısı bulunmuyor.</p>
        ) : (
          <>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
            <BlogPagination
              currentPage={currentPage}
              totalPages={totalPages}
            />
          </>
        )}
      </div>
    </div>
  );
}
