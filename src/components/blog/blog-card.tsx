import { Link } from "@/i18n/navigation";
import type { BlogPostMeta } from "@/lib/blog";

export function BlogCard({ post }: { post: BlogPostMeta }) {
  return (
    <article className="group rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/30">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="mb-3 flex items-center gap-3 text-xs text-muted">
          <span className="rounded-full bg-accent/10 px-2.5 py-0.5 font-medium text-accent">
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
        </div>
        <h2 className="mb-2 text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
          {post.title}
        </h2>
        <p className="text-sm leading-relaxed text-muted line-clamp-3">
          {post.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-surface-light px-2 py-0.5 text-xs text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </article>
  );
}
