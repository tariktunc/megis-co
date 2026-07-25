"use client";

import { useState } from "react";

interface SeoResult {
  title: string;
  h1: string[];
  h2: string[];
  h3: string[];
  metaDescription: string;
  canonical: string;
  robots: string;
  links: { internal: number; external: number; nofollow: number };
  images: { total: number; withoutAlt: number; altTexts: string[] };
  wordCount: number;
  textContent: string;
}

export function SeoBrowser() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SeoResult | null>(null);
  const [error, setError] = useState("");
  const [tab, setTab] = useState<"overview" | "headings" | "links" | "images" | "text">("overview");

  const analyze = async () => {
    if (!url.trim()) return;
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const targetUrl = url.startsWith("http") ? url : `https://${url}`;
      const res = await fetch(`/api/seo-browser?url=${encodeURIComponent(targetUrl)}`);
      if (!res.ok) throw new Error();
      setResult(await res.json());
    } catch {
      setError("Sayfa analiz edilemedi. URL'yi kontrol edin.");
    } finally {
      setLoading(false);
    }
  };

  const tabs = [
    { id: "overview" as const, label: "Genel" },
    { id: "headings" as const, label: "Başlıklar" },
    { id: "links" as const, label: "Linkler" },
    { id: "images" as const, label: "Görseller" },
    { id: "text" as const, label: "Metin" },
  ];

  return (
    <div>
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
          className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-hover transition-colors disabled:opacity-50 flex-shrink-0"
        >
          {loading ? "Taranıyor..." : "Tara"}
        </button>
      </div>

      {error && <div className="rounded-xl bg-surface p-4 text-sm text-red-400 mb-8">{error}</div>}

      {result && (
        <div>
          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
            <div className="rounded-xl bg-surface p-4 text-center">
              <div className="text-2xl font-bold text-foreground">{result.h1.length + result.h2.length + result.h3.length}</div>
              <div className="text-xs text-muted mt-1">Başlık</div>
            </div>
            <div className="rounded-xl bg-surface p-4 text-center">
              <div className="text-2xl font-bold text-foreground">{result.links.internal + result.links.external}</div>
              <div className="text-xs text-muted mt-1">Link</div>
            </div>
            <div className="rounded-xl bg-surface p-4 text-center">
              <div className="text-2xl font-bold text-foreground">{result.images.total}</div>
              <div className="text-xs text-muted mt-1">Görsel</div>
            </div>
            <div className="rounded-xl bg-surface p-4 text-center">
              <div className="text-2xl font-bold text-foreground">{result.wordCount}</div>
              <div className="text-xs text-muted mt-1">Kelime</div>
            </div>
            <div className="rounded-xl bg-surface p-4 text-center">
              <div className={`text-2xl font-bold ${result.images.withoutAlt > 0 ? "text-red-400" : "text-foreground"}`}>{result.images.withoutAlt}</div>
              <div className="text-xs text-muted mt-1">Alt Eksik</div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 mb-6 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
            {tabs.map((t) => (
              <button key={t.id} onClick={() => setTab(t.id)} className={`px-4 py-1.5 text-xs rounded-full transition-colors flex-shrink-0 ${tab === t.id ? "bg-accent text-white" : "text-muted hover:text-foreground"}`}>
                {t.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {tab === "overview" && (
            <div className="space-y-3">
              {[
                { label: "Title", value: result.title, warn: !result.title || result.title.length > 60 },
                { label: "Meta Description", value: result.metaDescription, warn: !result.metaDescription || result.metaDescription.length > 160 },
                { label: "Canonical", value: result.canonical, warn: !result.canonical },
                { label: "Robots", value: result.robots || "index, follow (varsayılan)", warn: result.robots?.includes("noindex") },
                { label: "H1 Sayısı", value: `${result.h1.length} adet`, warn: result.h1.length !== 1 },
                { label: "Dahili Link", value: `${result.links.internal} adet`, warn: false },
                { label: "Harici Link", value: `${result.links.external} adet`, warn: false },
                { label: "Nofollow Link", value: `${result.links.nofollow} adet`, warn: false },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 py-3 border-b border-border last:border-b-0">
                  <span className={`mt-0.5 flex-shrink-0 ${item.warn ? "text-red-400" : "text-accent"}`}>
                    {item.warn ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                    )}
                  </span>
                  <div className="flex-1 min-w-0">
                    <span className="text-sm font-medium text-foreground">{item.label}</span>
                    <p className="text-sm text-muted break-all">{item.value || "Eksik"}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {tab === "headings" && (
            <div className="space-y-2">
              {result.h1.map((h, i) => (
                <div key={`h1-${i}`} className="flex gap-3 py-2 border-b border-border">
                  <span className="text-xs font-mono text-accent bg-accent/10 px-2 py-0.5 rounded flex-shrink-0">H1</span>
                  <span className="text-sm text-foreground">{h}</span>
                </div>
              ))}
              {result.h2.map((h, i) => (
                <div key={`h2-${i}`} className="flex gap-3 py-2 border-b border-border">
                  <span className="text-xs font-mono text-muted bg-surface px-2 py-0.5 rounded flex-shrink-0">H2</span>
                  <span className="text-sm text-foreground pl-4">{h}</span>
                </div>
              ))}
              {result.h3.map((h, i) => (
                <div key={`h3-${i}`} className="flex gap-3 py-2 border-b border-border">
                  <span className="text-xs font-mono text-muted bg-surface px-2 py-0.5 rounded flex-shrink-0">H3</span>
                  <span className="text-sm text-muted pl-8">{h}</span>
                </div>
              ))}
              {result.h1.length + result.h2.length + result.h3.length === 0 && (
                <p className="text-sm text-muted py-4">Hiçbir başlık bulunamadı.</p>
              )}
            </div>
          )}

          {tab === "links" && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-xl bg-surface p-5 text-center">
                <div className="text-4xl font-bold text-foreground">{result.links.internal}</div>
                <div className="text-sm text-muted mt-2">Dahili Link</div>
              </div>
              <div className="rounded-xl bg-surface p-5 text-center">
                <div className="text-4xl font-bold text-foreground">{result.links.external}</div>
                <div className="text-sm text-muted mt-2">Harici Link</div>
              </div>
              <div className="rounded-xl bg-surface p-5 text-center">
                <div className={`text-4xl font-bold ${result.links.nofollow > 0 ? "text-muted" : "text-foreground"}`}>{result.links.nofollow}</div>
                <div className="text-sm text-muted mt-2">Nofollow Link</div>
              </div>
            </div>
          )}

          {tab === "images" && (
            <div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="rounded-xl bg-surface p-5 text-center">
                  <div className="text-4xl font-bold text-foreground">{result.images.total}</div>
                  <div className="text-sm text-muted mt-2">Toplam Görsel</div>
                </div>
                <div className="rounded-xl bg-surface p-5 text-center">
                  <div className={`text-4xl font-bold ${result.images.withoutAlt > 0 ? "text-red-400" : "text-foreground"}`}>{result.images.withoutAlt}</div>
                  <div className="text-sm text-muted mt-2">Alt Text Eksik</div>
                </div>
              </div>
              {result.images.altTexts.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-3">Alt Text'ler</h4>
                  <div className="space-y-1">
                    {result.images.altTexts.slice(0, 20).map((alt, i) => (
                      <div key={i} className="text-xs text-muted py-1 border-b border-border">{alt || <span className="text-red-400">Eksik</span>}</div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {tab === "text" && (
            <div>
              <div className="text-xs text-muted mb-3">{result.wordCount} kelime, Googlebot'un gördüğü metin içeriği</div>
              <div className="rounded-xl bg-surface p-6 text-sm text-muted leading-relaxed max-h-[500px] overflow-y-auto whitespace-pre-wrap">
                {result.textContent.slice(0, 5000)}
                {result.textContent.length > 5000 && "\n\n... (devamı kısaltıldı)"}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
