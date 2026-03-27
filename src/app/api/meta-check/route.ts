import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get("url");
  if (!url) return NextResponse.json({ error: "URL gerekli" }, { status: 400 });

  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "Megis-Meta-Checker/1.0" },
      signal: AbortSignal.timeout(10000),
    });
    const html = await res.text();

    const getTag = (pattern: RegExp) => {
      const match = html.match(pattern);
      return match ? match[1].trim() : "";
    };

    const title = getTag(/<title[^>]*>([^<]+)<\/title>/i);
    const description = getTag(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i)
      || getTag(/<meta[^>]*content=["']([^"']+)["'][^>]*name=["']description["']/i);
    const canonical = getTag(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i);
    const robots = getTag(/<meta[^>]*name=["']robots["'][^>]*content=["']([^"']+)["']/i);
    const ogTitle = getTag(/<meta[^>]*property=["']og:title["'][^>]*content=["']([^"']+)["']/i);
    const ogDescription = getTag(/<meta[^>]*property=["']og:description["'][^>]*content=["']([^"']+)["']/i);
    const ogImage = getTag(/<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']+)["']/i);
    const twitterCard = getTag(/<meta[^>]*name=["']twitter:card["'][^>]*content=["']([^"']+)["']/i);

    const h1Matches = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || [];
    const h1 = h1Matches.map((m) => m.replace(/<[^>]+>/g, "").trim()).filter(Boolean);

    const h2Count = (html.match(/<h2[^>]*>/gi) || []).length;
    const totalImages = (html.match(/<img[^>]*>/gi) || []).length;
    const imgWithoutAlt = (html.match(/<img(?![^>]*alt=["'][^"']+["'])[^>]*>/gi) || []).length;
    const totalLinks = (html.match(/<a[^>]*href/gi) || []).length;

    return NextResponse.json({
      title,
      description,
      canonical,
      robots,
      ogTitle,
      ogDescription,
      ogImage,
      twitterCard,
      h1,
      h2Count,
      totalImages,
      imgWithoutAlt,
      totalLinks,
    });
  } catch {
    return NextResponse.json({ error: "Sayfa yuklenemedi" }, { status: 500 });
  }
}
