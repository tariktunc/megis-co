"use client";

import { useEffect } from "react";

// Microsoft Clarity — MANDATORY on every WebForge build (owner ruling 2026-09-25),
// consent-gated via the Blakfy Cookie widget's window.BlakfyCookie.onConsent() API
// (specs/blakfy-cookie-consent.md). Never fires before analytics consent is granted.

declare global {
  interface Window {
    BlakfyCookie?: {
      onConsent(category: string, callback: (granted: boolean) => void): void;
      getConsent?(category: string): boolean;
    };
    clarity?: (...args: unknown[]) => void;
  }
}

function loadClarity(id: string) {
  if (typeof window === "undefined" || window.clarity) return;
  /* eslint-disable */
  (function (c: any, l: Document, a: string, r: string, i: string) {
    c[a] =
      c[a] ||
      function (...args: unknown[]) {
        (c[a].q = c[a].q || []).push(args);
      };
    const t = l.createElement(r) as HTMLScriptElement;
    t.async = true;
    t.src = "https://www.clarity.ms/tag/" + i;
    const y = l.getElementsByTagName(r)[0];
    if (y?.parentNode) y.parentNode.insertBefore(t, y);
  })(window, document, "clarity", "script", id);
  /* eslint-enable */
}

export function ClarityScript() {
  useEffect(() => {
    const id = process.env.NEXT_PUBLIC_CLARITY_ID;
    if (!id) return;

    const wireUp = () => {
      const bc = window.BlakfyCookie;
      if (!bc) return false;
      if (bc.getConsent?.("analytics")) {
        loadClarity(id);
      }
      bc.onConsent("analytics", (granted) => {
        if (granted) loadClarity(id);
      });
      return true;
    };

    if (wireUp()) return;

    // BlakfyCookie script loads afterInteractive — poll briefly until it's ready.
    const interval = setInterval(() => {
      if (wireUp()) clearInterval(interval);
    }, 300);
    const timeout = setTimeout(() => clearInterval(interval), 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return null;
}
