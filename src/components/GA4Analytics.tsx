"use client";

import { useEffect } from "react";

// Google Analytics 4 — Consent Mode v2 ADVANCED (WEBFORGE 2026-09-27).
// Loads gtag.js on every page load, right after the consent default (all
// denied, set beforeInteractive via CONSENT_MODE_DEFAULT_SCRIPT in
// layout.tsx). This lets Google send cookieless pings (gcs=G100) before
// consent. analytics_storage is granted afterwards through the
// "ga4" preset on the @blakfy/cookie widget (data-blakfy-presets in
// layout.tsx), which calls gtag('consent','update', ...) on accept — no
// custom onConsent wiring needed here anymore.
// Previous BASIC-mode version only called loadGa4() after consent was
// granted, so zero data left the browser pre-accept (measured 2026-09-27:
// 0 GA collect requests on page load).

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
    loadGa4(GA_MEASUREMENT_ID);
  }, []);

  return null;
}
