"use client";

import { useEffect } from "react";

// Google Analytics 4 — consent-gated via the Blakfy Cookie widget's
// window.BlakfyCookie.onConsent() API (specs/blakfy-cookie-consent.md).
// Mirrors ClarityScript.tsx / AhrefsAnalytics.tsx consent-gate pattern.
// gtag itself already exists (stubbed) via CONSENT_MODE_DEFAULT_SCRIPT in
// layout.tsx; this component only loads gtag.js and issues the config call
// once analytics consent is granted.

const GA_MEASUREMENT_ID = "G-PCKX9W2QDS";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __blakfyGa4Loaded?: boolean;
  }
}

function loadGa4(id: string) {
  if (typeof window === "undefined" || window.__blakfyGa4Loaded) return;
  window.__blakfyGa4Loaded = true;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== "function") {
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer!.push(args);
    };
  }
  window.gtag("js", new Date());
  window.gtag("config", id);
}

export function GA4Analytics() {
  useEffect(() => {
    const wireUp = () => {
      const bc = window.BlakfyCookie;
      if (!bc) return false;
      if (bc.getConsent?.("analytics")) {
        loadGa4(GA_MEASUREMENT_ID);
      }
      bc.onConsent("analytics", (granted) => {
        if (granted) loadGa4(GA_MEASUREMENT_ID);
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
