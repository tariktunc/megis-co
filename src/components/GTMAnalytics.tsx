"use client";

import { useEffect } from "react";

// Google Tag Manager loader — Consent Mode v2 ADVANCED (WEBFORGE 2026-09-27).
// Loads gtm.js on every page load, right after the consent default (all
// denied, set beforeInteractive via the inline CONSENT_MODE_DEFAULT_SCRIPT in
// layout.tsx). GTM sends cookieless pings pre-consent (gcs=G100); the
// @blakfy/cookie widget's "gtm" preset (data-blakfy-presets in layout.tsx)
// calls gtag('consent','update', ...) on accept, which GTM's dataLayer
// picks up — no custom onConsent wiring needed here.
//
// GA4 lives INSIDE this GTM container (tag "GA4 Configuration", type
// googtag, id G-PCKX9W2QDS, firing on the built-in All Pages trigger,
// published version 2 of GTM-T54FBW7Z) — GA4Analytics.tsx (direct gtag.js
// load) was removed so GA4 pageviews fire from exactly ONE path. Loading
// both this component and a direct gtag.js load would double-count.

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

declare global {
  interface Window {
    dataLayer?: unknown[];
    __blakfyGtmLoaded?: boolean;
  }
}

function loadGtm(id: string) {
  if (typeof window === "undefined" || window.__blakfyGtmLoaded) return;
  window.__blakfyGtmLoaded = true;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${id}`;
  document.head.appendChild(script);
}

export function GTMAnalytics() {
  useEffect(() => {
    if (GTM_ID) loadGtm(GTM_ID);
  }, []);

  return null;
}
