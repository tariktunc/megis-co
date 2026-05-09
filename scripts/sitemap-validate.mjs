#!/usr/bin/env node
// scripts/sitemap-validate.mjs
// Otomatik üretildi — /webforge-sitemap (v2.1)
// Production sitesinde sitemap pattern doğrulaması.
// Audit komutu (commands/webforge-audit.md Madde 13) çağırır.

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || process.argv[2] || "http://localhost:3000";

async function main() {
  console.log(`🔍 Sitemap pattern doğrulama: ${SITE_URL}/sitemap.xml`);

  // 1. /sitemap.xml fetch
  const indexRes = await fetch(`${SITE_URL}/sitemap.xml`);
  if (!indexRes.ok) {
    console.error(`❌ /sitemap.xml HTTP ${indexRes.status}`);
    process.exit(1);
  }
  const indexXml = await indexRes.text();

  // 2. INDEX pattern doğrula
  if (!indexXml.includes("<sitemapindex")) {
    console.error("❌ FLAT sitemap tespit edildi (urlset).");
    console.error("   INDEX pattern (sitemapindex) zorunlu — webforge/specs/sitemap-format.md §8.");
    console.error("   Çözüm: /webforge-sitemap çalıştır.");
    process.exit(1);
  }

  // 3. Yasaklı tag taraması (root)
  if (indexXml.includes("<changefreq>") || indexXml.includes("<priority>")) {
    console.error("❌ <changefreq> veya <priority> tag'leri var. Spec yasaklıyor (Yaygın Hata #12).");
    process.exit(1);
  }

  // 4. Alt-sitemap'leri parse et + URL'leri test et
  const subs = [...indexXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  if (subs.length === 0) {
    console.error("❌ INDEX boş — hiç alt-sitemap yok.");
    process.exit(1);
  }

  let totalUrls = 0;
  let warnings = 0;

  for (const sub of subs) {
    const subRes = await fetch(sub);
    if (!subRes.ok) {
      console.error(`❌ ${sub} HTTP ${subRes.status}`);
      process.exit(1);
    }
    const subXml = await subRes.text();

    // <changefreq> + <priority> alt-sitemap'lerde yasak
    if (subXml.includes("<changefreq>") || subXml.includes("<priority>")) {
      console.error(`❌ ${sub} <changefreq>/<priority> içeriyor.`);
      process.exit(1);
    }

    // Tüm lastmod'lar aynı mı (sahte timestamp tespit)
    const lastmods = [...subXml.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)].map((m) => m[1]);
    const unique = [...new Set(lastmods)];
    totalUrls += lastmods.length;
    if (lastmods.length > 3 && unique.length === 1) {
      console.warn(
        `⚠️  ${sub.split("/").pop()} → ${lastmods.length} URL, hepsi aynı lastmod (${unique[0]}). Sahte timestamp şüphesi.`,
      );
      warnings++;
    }

    // <loc> URL'leri http(s) mı
    const locs = [...subXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    for (const loc of locs) {
      if (!loc.startsWith("https://") && !loc.startsWith("http://")) {
        console.error(`❌ ${sub} — relative URL: ${loc}`);
        process.exit(1);
      }
    }
  }

  console.log(`\n✅ Sitemap pattern doğrulandı`);
  console.log(`   • ${subs.length} alt-sitemap, ${totalUrls} URL`);
  console.log(`   • INDEX pattern OK`);
  console.log(`   • Tag disiplini OK (changefreq/priority yok)`);
  if (warnings > 0) console.log(`   ⚠️  ${warnings} uyarı (sahte lastmod şüphesi)`);
}

main().catch((e) => {
  console.error("❌ Doğrulama hatası:", e.message);
  process.exit(1);
});
