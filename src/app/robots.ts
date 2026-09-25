// src/app/robots.ts
// Yandex Webmaster: "Robots.txt file not found" — no robots.ts/route existed.
// BASE comes from the single site-url.ts SSOT (same source the sitemap uses).

import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site-url';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
