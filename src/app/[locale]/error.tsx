"use client";

import { useTranslations } from "next-intl";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("errors");

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-2 text-8xl font-bold text-accent">500</h1>
      <h2 className="mb-4 text-2xl font-semibold text-foreground">
        {t("serverError")}
      </h2>
      <p className="mb-8 max-w-md text-muted">{t("serverErrorDesc")}</p>
      <button
        onClick={reset}
        className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
      >
        {t("tryAgain")}
      </button>
    </div>
  );
}
