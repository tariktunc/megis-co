import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get("url");
  if (!url) return NextResponse.json({ error: "URL gerekli" }, { status: 400 });

  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" },
      signal: AbortSignal.timeout(15000),
    });
    const html = await res.text();

    const getTag = (pattern: RegExp) => {
      const match = html.match(pattern);
      return match?.[1]?.trim() ?? "";
    };

    const getAll = (pattern: RegExp) => {
      const matches: string[] = [];
      let m;
      const re = new RegExp(pattern.source, "gi");
      while ((m = re.exec(html)) !== null) {
        const clean = (m[1] ?? "").replace(/<[^>]+>/g, "").trim();
        if (clean) matches.push(clean);
      }
      return matches;
    };

    const title = getTag(/<title[^>]*>([^<]+)<\/title>/i);
    const metaDescription = getTag(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i)
      || getTag(/<meta[^>]*content=["']([^"']+)["'][^>]*name=["']description["']/i);
    const canonical = getTag(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i);
    const robots = getTag(/<meta[^>]*name=["']robots["'][^>]*content=["']([^"']+)["']/i);

    const h1 = getAll(/<h1[^>]*>([\s\S]*?)<\/h1>/);
    const h2 = getAll(/<h2[^>]*>([\s\S]*?)<\/h2>/);
    const h3 = getAll(/<h3[^>]*>([\s\S]*?)<\/h3>/);

    let hostname = "";
    try { hostname = new URL(url).hostname; } catch {}

    const linkMatches = html.match(/<a[^>]*href=["']([^"']+)["'][^>]*>/gi) || [];
    let internal = 0, external = 0, nofollow = 0;
    for (const link of linkMatches) {
      if (link.includes('rel="nofollow"') || link.includes("rel='nofollow'")) nofollow++;
      const hrefMatch = link.match(/href=["']([^"']+)["']/);
      const href = hrefMatch?.[1];
      if (href) {
        if (href.startsWith("/") || href.includes(hostname)) internal++;
        else if (href.startsWith("http")) external++;
      }
    }

    const imgMatches = html.match(/<img[^>]*>/gi) || [];
    const altTexts: string[] = [];
    let withoutAlt = 0;
    for (const img of imgMatches) {
      const altMatch = img.match(/alt=["']([^"']*)["']/);
      if (altMatch) {
        altTexts.push(altMatch[1] || "(bos alt)");
        if (!altMatch[1]) withoutAlt++;
      } else {
        altTexts.push("");
        withoutAlt++;
      }
    }

    const textContent = html
      .replace(/<script[\s\S]*?<\/script>/gi, "")
      .replace(/<style[\s\S]*?<\/style>/gi, "")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    const wordCount = textContent.split(/\s+/).filter(Boolean).length;

    return NextResponse.json({
      title,
      metaDescription,
      canonical,
      robots,
      h1, h2, h3,
      links: { internal, external, nofollow },
      images: { total: imgMatches.length, withoutAlt, altTexts: altTexts.slice(0, 30) },
      wordCount,
      textContent: textContent.slice(0, 6000),
    });
  } catch {
    return NextResponse.json({ error: "Sayfa yuklenemedi" }, { status: 500 });
  }
}
