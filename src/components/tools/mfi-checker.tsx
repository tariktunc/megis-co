"use client";

import { useState } from "react";

interface MfiResult {
  desktop: { title: string; description: string; h1: string[]; h2Count: number; linkCount: number; imageCount: number; wordCount: number };
  mobile: { title: string; description: string; h1: string[]; h2Count: number; linkCount: number; imageCount: number; wordCount: number };
  issues: string[];
  score: number;
}

export function MfiChecker() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<MfiResult | null>(null);
  const [error, setError] = useState("");

  const analyze = async () => {
    if (!url.trim()) return;
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const targetUrl = url.startsWith("http") ? url : `https://${url}`;
      const res = await fetch(`/api/mfi-check?url=${encodeURIComponent(targetUrl)}`);
      if (!res.ok) throw new Error();
      setResult(await res.json());
    } catch {
      setError("Sayfa analiz edilemedi. URL'yi kontrol edin.");
    } finally {
      setLoading(false);
    }
  };

  const Diff = ({ label, desktop, mobile }: { label: string; desktop: string | number; mobile: string | number }) => {
    const match = String(desktop) === String(mobile);
    return (
      <div className="flex items-center gap-3 py-3 border-b border-border last:border-b-0">
        <span className={`flex-shrink-0 ${match ? "text-accent" : "text-red-400"}`}>
          {match ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
          )}
        </span>
        <div className="flex-1 grid grid-cols-3 gap-4 text-sm">
          <span className="font-medium text-foreground">{label}</span>
          <span className="text-muted truncate" title={String(desktop)}>{desktop}</span>
          <span className={`truncate ${match ? "text-muted" : "text-red-400"}`} title={String(mobile)}>{mobile}</span>
        </div>
      </div>
    );
  };

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
          {loading ? "Denetleniyor..." : "Denetle"}
        </button>
      </div>

      {error && <div className="rounded-xl bg-surface p-4 text-sm text-red-400 mb-8">{error}</div>}

      {result && (
        <div>
          {/* Score */}
          <div className="text-center mb-10">
            <div className={`text-7xl font-bold tracking-tight ${result.score >= 90 ? "text-foreground" : result.score >= 70 ? "text-yellow-400" : "text-red-400"}`}>
              {result.score}
            </div>
            <div className="text-muted text-sm mt-2">MFI Uyumluluk Skoru (100 uzerinden)</div>
          </div>

          {/* Issues */}
          {result.issues.length > 0 && (
            <div className="rounded-xl bg-surface p-6 mb-8">
              <h3 className="text-sm font-semibold text-foreground mb-4">Tespit Edilen Sorunlar ({result.issues.length})</h3>
              <ul className="space-y-2">
                {result.issues.map((issue, i) => (
                  <li key={i} className="flex gap-2 text-sm text-muted">
                    <span className="text-red-400 mt-0.5 flex-shrink-0">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                    </span>
                    {issue}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {result.issues.length === 0 && (
            <div className="rounded-xl bg-surface p-6 mb-8 text-center">
              <span className="text-accent text-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="inline mr-2"><polyline points="20 6 9 17 4 12" /></svg>
              </span>
              <span className="text-foreground font-semibold">Sorun bulunamadi. MFI uyumlu!</span>
            </div>
          )}

          {/* Comparison Table */}
          <h3 className="text-sm font-semibold text-foreground mb-4">Masaustu vs Mobil Karsilastirma</h3>
          <div className="rounded-xl border border-border overflow-hidden">
            <div className="grid grid-cols-3 gap-4 px-4 py-3 bg-surface-light text-xs font-semibold text-muted uppercase tracking-wider">
              <span>Metrik</span>
              <span>Masaustu</span>
              <span>Mobil</span>
            </div>
            <div className="px-4">
              <Diff label="Title" desktop={result.desktop.title || "Eksik"} mobile={result.mobile.title || "Eksik"} />
              <Diff label="Description" desktop={result.desktop.description ? `${result.desktop.description.length} chr` : "Eksik"} mobile={result.mobile.description ? `${result.mobile.description.length} chr` : "Eksik"} />
              <Diff label="H1 Sayisi" desktop={result.desktop.h1.length} mobile={result.mobile.h1.length} />
              <Diff label="H2 Sayisi" desktop={result.desktop.h2Count} mobile={result.mobile.h2Count} />
              <Diff label="Link Sayisi" desktop={result.desktop.linkCount} mobile={result.mobile.linkCount} />
              <Diff label="Gorsel Sayisi" desktop={result.desktop.imageCount} mobile={result.mobile.imageCount} />
              <Diff label="Kelime Sayisi" desktop={result.desktop.wordCount} mobile={result.mobile.wordCount} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
