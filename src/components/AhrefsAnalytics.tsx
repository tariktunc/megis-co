"use client";

import { useEffect } from "react";

// Ahrefs Web Analytics — consent-gated via the Blakfy Cookie widget's
// window.BlakfyCookie.onConsent() API (specs/blakfy-cookie-consent.md).
// Mirrors the ClarityScript.tsx consent-gate pattern. Never fires before
// analytics consent is granted.

const AHREFS_DATA_KEY = "RVipGLGSPA8nV57JcvonWw";

declare global {
  interface Window {
    ahrefs?: unknown;
  }
}

function loadAhrefs(key: string) {
  if (typeof window === "undefined" || window.ahrefs) return;
  const script = document.createElement("script");
  script.src = "https://analytics.ahrefs.com/analytics.js";
  script.async = true;
  script.setAttribute("data-key", key);
  document.head.appendChild(script);
  window.ahrefs = true;
}

export function AhrefsAnalytics() {
  useEffect(() => {
    const wireUp = () => {
      const bc = window.BlakfyCookie;
      if (!bc) return false;
      if (bc.getConsent?.("analytics")) {
        loadAhrefs(AHREFS_DATA_KEY);
      }
      bc.onConsent("analytics", (granted) => {
        if (granted) loadAhrefs(AHREFS_DATA_KEY);
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
