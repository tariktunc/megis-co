import { Link } from "@/i18n/navigation";

export function BlogPagination({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) {
  if (totalPages <= 1) return null;

  const pages: (number | "...")[] = [];
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || Math.abs(i - currentPage) <= 2) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== "...") {
      pages.push("...");
    }
  }

  return (
    <nav aria-label="Blog sayfalama" className="mt-12 flex items-center justify-center gap-2">
      {currentPage > 1 && (
        <Link
          href={`/blog${currentPage === 2 ? "" : `?sayfa=${currentPage - 1}`}`}
          className="rounded-lg border border-border px-3 py-2 text-sm text-muted transition-colors hover:text-foreground"
        >
          Önceki
        </Link>
      )}
      {pages.map((p, i) =>
        p === "..." ? (
          <span key={`dots-${i}`} className="px-2 text-muted">
            ...
          </span>
        ) : (
          <Link
            key={p}
            href={`/blog${p === 1 ? "" : `?sayfa=${p}`}`}
            className={`rounded-lg px-3 py-2 text-sm transition-colors ${
              p === currentPage
                ? "bg-accent text-white"
                : "border border-border text-muted hover:text-foreground"
            }`}
          >
            {p}
          </Link>
        )
      )}
      {currentPage < totalPages && (
        <Link
          href={`/blog?sayfa=${currentPage + 1}`}
          className="rounded-lg border border-border px-3 py-2 text-sm text-muted transition-colors hover:text-foreground"
        >
          Sonraki
        </Link>
      )}
    </nav>
  );
}
