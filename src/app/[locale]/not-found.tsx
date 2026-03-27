import { useTranslations } from "next-intl";
import Link from "next/link";

export default function NotFound() {
  const t = useTranslations("errors");

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-2 text-8xl font-bold text-accent">404</h1>
      <h2 className="mb-4 text-2xl font-semibold text-foreground">
        {t("notFound")}
      </h2>
      <p className="mb-8 max-w-md text-muted">{t("notFoundDesc")}</p>
      <Link
        href="/"
        className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
      >
        {t("backHome")}
      </Link>
    </div>
  );
}
