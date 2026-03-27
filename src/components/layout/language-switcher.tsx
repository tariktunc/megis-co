"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useState, useRef, useEffect, useCallback } from "react";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("language");
  const [open, setOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const ref = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function switchLocale(newLocale: string) {
    setOpen(false);
    router.replace(pathname, { locale: newLocale as "tr" | "en" });
  }

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      const locales = routing.locales;
      if (!open) {
        if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setOpen(true);
          setFocusedIndex(0);
        }
        return;
      }

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setFocusedIndex((i) => (i + 1) % locales.length);
          break;
        case "ArrowUp":
          e.preventDefault();
          setFocusedIndex((i) => (i - 1 + locales.length) % locales.length);
          break;
        case "Enter":
        case " ":
          e.preventDefault();
          if (focusedIndex >= 0) switchLocale(locales[focusedIndex]);
          break;
        case "Escape":
          e.preventDefault();
          setOpen(false);
          break;
      }
    },
    [open, focusedIndex]
  );

  useEffect(() => {
    if (open && focusedIndex >= 0 && listRef.current) {
      const btns = listRef.current.querySelectorAll<HTMLElement>('[role="option"]');
      btns[focusedIndex]?.focus();
    }
  }, [focusedIndex, open]);

  return (
    <div ref={ref} className="relative" onKeyDown={handleKeyDown}>
      <button
        onClick={() => {
          setOpen(!open);
          setFocusedIndex(open ? -1 : 0);
        }}
        className="flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-[13px] font-medium text-muted transition-colors hover:text-foreground hover:bg-black/[0.05] dark:hover:bg-white/[0.04]"
        aria-label="Language"
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <span className="uppercase">{locale}</span>
        <svg
          className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div
          ref={listRef}
          role="listbox"
          aria-label="Language"
          className="absolute right-0 top-full mt-1 min-w-[140px] rounded-lg border border-border bg-surface/95 backdrop-blur-xl shadow-xl overflow-hidden z-50"
        >
          {routing.locales.map((loc, i) => (
            <div
              key={loc}
              role="option"
              aria-selected={loc === locale}
              tabIndex={0}
              onClick={() => switchLocale(loc)}
              className={`flex w-full items-center gap-2.5 px-3.5 py-2.5 text-left text-sm transition-colors cursor-pointer ${
                loc === locale
                  ? "bg-accent/10 text-accent font-medium"
                  : "text-muted hover:bg-black/[0.05] dark:hover:bg-white/[0.04] hover:text-foreground"
              } ${i === focusedIndex ? "ring-1 ring-accent ring-inset" : ""}`}
            >
              <span className="uppercase text-[11px] font-bold tracking-wider w-5">
                {loc}
              </span>
              <span>{t(loc)}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
