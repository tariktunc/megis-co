import { NextRequest, NextResponse } from "next/server";

async function fetchAs(url: string, userAgent: string) {
  const res = await fetch(url, {
    headers: { "User-Agent": userAgent },
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
  const description = getTag(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i)
    || getTag(/<meta[^>]*content=["']([^"']+)["'][^>]*name=["']description["']/i);
  const h1 = getAll(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  const h2Count = (html.match(/<h2[^>]*>/gi) || []).length;
  const linkCount = (html.match(/<a[^>]*href/gi) || []).length;
  const imageCount = (html.match(/<img[^>]*>/gi) || []).length;

  const textContent = html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const wordCount = textContent.split(/\s+/).filter(Boolean).length;

  return { title, description, h1, h2Count, linkCount, imageCount, wordCount };
}

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get("url");
  if (!url) return NextResponse.json({ error: "URL gerekli" }, { status: 400 });

  try {
    const desktopUA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";
    const mobileUA = "Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36";

    const [desktop, mobile] = await Promise.all([
      fetchAs(url, desktopUA),
      fetchAs(url, mobileUA),
    ]);

    const issues: string[] = [];

    if (desktop.title !== mobile.title) issues.push("Title tag masaustu ve mobilde farkli.");
    if (desktop.description !== mobile.description) issues.push("Meta description masaustu ve mobilde farkli.");
    if (desktop.h1.length !== mobile.h1.length) issues.push(`H1 sayisi farkli: masaustu ${desktop.h1.length}, mobil ${mobile.h1.length}.`);
    if (desktop.h2Count !== mobile.h2Count) issues.push(`H2 sayisi farkli: masaustu ${desktop.h2Count}, mobil ${mobile.h2Count}.`);
    if (Math.abs(desktop.linkCount - mobile.linkCount) > 5) issues.push(`Link sayisi onemli olcude farkli: masaustu ${desktop.linkCount}, mobil ${mobile.linkCount}.`);
    if (Math.abs(desktop.imageCount - mobile.imageCount) > 3) issues.push(`Gorsel sayisi farkli: masaustu ${desktop.imageCount}, mobil ${mobile.imageCount}.`);
    if (Math.abs(desktop.wordCount - mobile.wordCount) > desktop.wordCount * 0.1) issues.push(`Icerik miktari farkli: masaustu ${desktop.wordCount} kelime, mobil ${mobile.wordCount} kelime.`);
    if (mobile.h1.length === 0) issues.push("Mobil versiyonda H1 basligi bulunamadi.");
    if (!mobile.title) issues.push("Mobil versiyonda title tag eksik.");
    if (!mobile.description) issues.push("Mobil versiyonda meta description eksik.");

    const maxIssues = 10;
    const score = Math.max(0, Math.round(100 - (issues.length / maxIssues) * 100));

    return NextResponse.json({ desktop, mobile, issues, score });
  } catch {
    return NextResponse.json({ error: "Sayfa yuklenemedi" }, { status: 500 });
  }
}
