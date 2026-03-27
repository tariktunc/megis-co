import { posts, type BlogPostMeta } from "@/content/blog/_registry";

export type { BlogPostMeta };

export function getAllPosts(): BlogPostMeta[] {
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPostMeta | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: string): BlogPostMeta[] {
  return getAllPosts().filter((p) => p.category === category);
}

export function getPostsByTag(tag: string): BlogPostMeta[] {
  return getAllPosts().filter((p) => p.tags.includes(tag));
}

export function getPaginatedPosts(
  page: number,
  perPage = 12
): { posts: BlogPostMeta[]; totalPages: number; currentPage: number } {
  const all = getAllPosts();
  const totalPages = Math.ceil(all.length / perPage);
  const currentPage = Math.max(1, Math.min(page, totalPages));
  const start = (currentPage - 1) * perPage;
  return {
    posts: all.slice(start, start + perPage),
    totalPages,
    currentPage,
  };
}

export function getAllCategories(): string[] {
  return [...new Set(posts.map((p) => p.category))].sort();
}

export function getAllTags(): string[] {
  return [...new Set(posts.flatMap((p) => p.tags))].sort();
}

export function getAllSlugs(): string[] {
  return posts.map((p) => p.slug);
}

export async function getPostContent(
  slug: string
): Promise<React.ComponentType> {
  const mod = await import(`@/content/blog/posts/${slug}`);
  return mod.default;
}
