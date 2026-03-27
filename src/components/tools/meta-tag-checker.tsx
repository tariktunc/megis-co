"use client";

import { useState } from "react";

interface MetaResult {
  title: string;
  description: string;
  canonical: string;
  robots: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  twitterCard: string;
  h1: string[];
  h2Count: number;
  imgWithoutAlt: number;
  totalImages: number;
  totalLinks: number;
}

export function MetaTagChecker() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<MetaResult | null>(null);
  const [error, setError] = useState("");

  const analyze = async () => {
    if (!url.trim()) return;
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const targetUrl = url.startsWith("http") ? url : `https://${url}`;
      const res = await fetch(`/api/meta-check?url=${encodeURIComponent(targetUrl)}`);
      if (!res.ok) throw new Error("Sayfa analiz edilemedi");
      const data = await res.json();
      setResult(data);
    } catch {
      setError("Sayfa analiz edilemedi. URL'yi kontrol edin ve tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  };

  const Check = ({ label, value, good, tip }: { label: string; value: string; good: boolean; tip: string }) => (
    <div className="py-4 border-b border-border last:border-b-0">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className={good ? "text-accent" : "text-muted"}>
              {good ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
              )}
            </span>
            <span className="text-sm font-medium text-foreground">{label}</span>
          </div>
          {value && <p className="text-sm text-muted ml-6 break-all">{value}</p>}
          {!good && <p className="text-xs text-muted/60 ml-6 mt-1">{tip}</p>}
        </div>
        {value && <span className="text-xs font-mono text-muted flex-shrink-0">{value.length} chr</span>}
      </div>
    </div>
  );

  return (
    <div>
      {/* Input */}
      <div className="flex gap-3 mb-10">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && analyze()}
          placeholder="https://ornek.com"
          className="flex-1 border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/50 rounded-lg outline-none transition-all focus:border-accent focus:ring-1 focus:ring-accent/30"
        />
        <button
          onClick={analyze}
          disabled={loading || !url.trim()}
          className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
        >
          {loading ? "Analiz ediliyor..." : "Analiz Et"}
        </button>
      </div>

      {error && (
        <div className="rounded-xl bg-surface p-4 text-sm text-red-400 mb-8">{error}</div>
      )}

      {result && (
        <div>
          {/* Score Summary */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            <div className="rounded-xl bg-surface p-4 text-center">
              <div className={`text-3xl font-bold ${result.title ? "text-foreground" : "text-red-400"}`}>
                {result.title ? "OK" : "Eksik"}
              </div>
              <div className="text-xs text-muted mt-1">Title Tag</div>
            </div>
            <div className="rounded-xl bg-surface p-4 text-center">
              <div className={`text-3xl font-bold ${result.description ? "text-foreground" : "text-red-400"}`}>
                {result.description ? "OK" : "Eksik"}
              </div>
              <div className="text-xs text-muted mt-1">Description</div>
            </div>
            <div className="rounded-xl bg-surface p-4 text-center">
              <div className={`text-3xl font-bold ${result.ogTitle ? "text-foreground" : "text-muted"}`}>
                {result.ogTitle ? "OK" : "Eksik"}
              </div>
              <div className="text-xs text-muted mt-1">Open Graph</div>
            </div>
            <div className="rounded-xl bg-surface p-4 text-center">
              <div className={`text-3xl font-bold ${result.canonical ? "text-foreground" : "text-muted"}`}>
                {result.canonical ? "OK" : "Eksik"}
              </div>
              <div className="text-xs text-muted mt-1">Canonical</div>
            </div>
          </div>

          {/* Detailed Checks */}
          <h3 className="text-lg font-semibold text-foreground mb-4">Detayli Analiz</h3>
          <div className="rounded-xl border border-border">
            <Check label="Title Tag" value={result.title} good={result.title.length > 0 && result.title.length <= 60} tip="Title tag 50-60 karakter arasi olmali." />
            <Check label="Meta Description" value={result.description} good={result.description.length > 0 && result.description.length <= 160} tip="Description 140-160 karakter arasi olmali." />
            <Check label="Canonical URL" value={result.canonical} good={!!result.canonical} tip="Canonical URL eksik. Duplicate content sorununa yol acabilir." />
            <Check label="Robots Meta" value={result.robots || "index, follow (varsayilan)"} good={!result.robots || !result.robots.includes("noindex")} tip="noindex etiketi sayfanin indekslenmesini engeller." />
            <Check label="OG Title" value={result.ogTitle} good={!!result.ogTitle} tip="Open Graph title eksik. Sosyal medya paylasimlari basliksiz gorunur." />
            <Check label="OG Description" value={result.ogDescription} good={!!result.ogDescription} tip="Open Graph description eksik." />
            <Check label="OG Image" value={result.ogImage} good={!!result.ogImage} tip="OG image eksik. Sosyal medya paylasimlari gorselsiz gorunur." />
            <Check label="Twitter Card" value={result.twitterCard || "Eksik"} good={!!result.twitterCard} tip="Twitter Card meta etiketi eksik." />
            <Check label={`H1 Basligi (${result.h1.length} adet)`} value={result.h1.join(" | ") || "Eksik"} good={result.h1.length === 1} tip={result.h1.length === 0 ? "H1 baslik eksik." : result.h1.length > 1 ? "Birden fazla H1 var. Sayfa basina tek H1 olmali." : ""} />
          </div>

          {/* Quick Stats */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="rounded-xl bg-surface p-4 text-center">
              <div className="text-2xl font-bold text-foreground">{result.h2Count}</div>
              <div className="text-xs text-muted mt-1">H2 Basligi</div>
            </div>
            <div className="rounded-xl bg-surface p-4 text-center">
              <div className={`text-2xl font-bold ${result.imgWithoutAlt > 0 ? "text-red-400" : "text-foreground"}`}>
                {result.imgWithoutAlt}/{result.totalImages}
              </div>
              <div className="text-xs text-muted mt-1">Alt Text Eksik Gorsel</div>
            </div>
            <div className="rounded-xl bg-surface p-4 text-center">
              <div className="text-2xl font-bold text-foreground">{result.totalLinks}</div>
              <div className="text-xs text-muted mt-1">Toplam Link</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
