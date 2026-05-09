import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

// WebForge Kural #41 — Canonical host (NEXT_PUBLIC_SITE_URL'den)
const CANONICAL_HOST = (() => {
  const url = process.env.NEXT_PUBLIC_SITE_URL;
  if (!url) return null;
  try {
    return new URL(url).host;
  } catch {
    return null;
  }
})();

function applyNoindexIfNonCanonical(req: NextRequest, res: NextResponse): NextResponse {
  const host = req.headers.get("host") ?? "";

  // Canonical match → indexlenebilir, hicbir sey ekleme
  if (CANONICAL_HOST && host === CANONICAL_HOST) return res;

  // Localhost (dev) ve diger tum host'lar → noindex
  res.headers.set("X-Robots-Tag", "noindex, nofollow");
  return res;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // URL Normalization: lowercase enforcement
  if (pathname !== pathname.toLowerCase()) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.toLowerCase();
    return NextResponse.redirect(url, 301);
  }

  // URL Normalization: remove trailing slash (except root)
  if (pathname.length > 1 && pathname.endsWith("/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(0, -1);
    return NextResponse.redirect(url, 301);
  }

  // URL Normalization: remove /index
  if (pathname.endsWith("/index")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/\/index$/, "") || "/";
    return NextResponse.redirect(url, 301);
  }

  const intlResponse = intlMiddleware(request);

  // next-intl response her zaman NextResponse — header ekleyebiliriz
  if (intlResponse instanceof NextResponse) {
    return applyNoindexIfNonCanonical(request, intlResponse);
  }
  return intlResponse;
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
