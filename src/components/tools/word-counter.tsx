"use client";

import { useState, useMemo } from "react";

export function WordCounter() {
  const [text, setText] = useState("");

  const stats = useMemo(() => {
    const trimmed = text.trim();
    if (!trimmed) return { words: 0, chars: 0, charsNoSpace: 0, sentences: 0, paragraphs: 0, readingTime: "0 dk", speakingTime: "0 dk" };

    const words = trimmed.split(/\s+/).filter(Boolean).length;
    const chars = text.length;
    const charsNoSpace = text.replace(/\s/g, "").length;
    const sentences = trimmed.split(/[.!?]+/).filter((s) => s.trim()).length;
    const paragraphs = trimmed.split(/\n\s*\n/).filter((p) => p.trim()).length || 1;
    const readingMin = Math.ceil(words / 200);
    const speakingMin = Math.ceil(words / 130);

    return {
      words,
      chars,
      charsNoSpace,
      sentences,
      paragraphs,
      readingTime: readingMin < 1 ? "<1 dk" : `${readingMin} dk`,
      speakingTime: speakingMin < 1 ? "<1 dk" : `${speakingMin} dk`,
    };
  }, [text]);

  const keywordStats = useMemo(() => {
    if (!text.trim()) return [];
    const words = text.toLowerCase().replace(/[^\wığüşöçİĞÜŞÖÇ\s]/g, "").split(/\s+/).filter((w) => w.length > 2);
    const freq: Record<string, number> = {};
    for (const w of words) freq[w] = (freq[w] || 0) + 1;
    return Object.entries(freq)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([word, count]) => ({
        word,
        count,
        density: ((count / (stats.words || 1)) * 100).toFixed(1),
      }));
  }, [text, stats.words]);

  return (
    <div>
      {/* Text Input */}
      <div className="mb-8">
        <div className="flex justify-between mb-1.5">
          <label className="text-sm font-medium text-foreground">Metin</label>
          {text && (
            <button onClick={() => setText("")} className="text-xs text-muted hover:text-foreground transition-colors">
              Temizle
            </button>
          )}
        </div>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Analiz etmek istediğiniz metni buraya yapıştırın veya yazın..."
          rows={10}
          className="w-full border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/50 rounded-lg outline-none transition-all focus:border-accent focus:ring-1 focus:ring-accent/30 resize-y"
        />
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: "Kelime", value: stats.words },
          { label: "Karakter", value: stats.chars },
          { label: "Karakter (boşluksuz)", value: stats.charsNoSpace },
          { label: "Cümle", value: stats.sentences },
          { label: "Paragraf", value: stats.paragraphs },
          { label: "Okuma Süresi", value: stats.readingTime },
          { label: "Konuşma Süresi", value: stats.speakingTime },
          { label: "Ort. Kelime/Cümle", value: stats.sentences > 0 ? Math.round(stats.words / stats.sentences) : 0 },
        ].map((s) => (
          <div key={s.label} className="rounded-xl bg-surface p-4 text-center">
            <div className="text-2xl sm:text-3xl font-bold text-foreground">{s.value}</div>
            <div className="text-xs text-muted mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* SEO Checks */}
      {stats.words > 0 && (
        <div className="mb-10">
          <h3 className="text-lg font-semibold text-foreground mb-4">SEO Kontrol</h3>
          <div className="space-y-2">
            {[
              { label: "İçerik uzunluğu (blog için)", ok: stats.words >= 1500, msg: stats.words >= 1500 ? `${stats.words} kelime, iyi uzunluk` : `${stats.words} kelime, ideal 1500+ kelime` },
              { label: "Meta description uzunluğu", ok: true, msg: "Metin sayacında kontrol edilmez, SERP Önizleme aracını kullanın" },
              { label: "Ortalama cümle uzunluğu", ok: stats.sentences > 0 && stats.words / stats.sentences <= 20, msg: stats.sentences > 0 ? `${Math.round(stats.words / stats.sentences)} kelime/cümle, ${stats.words / stats.sentences <= 20 ? "okunabilir" : "çok uzun, kısa cümleler kullanın"}` : "–" },
              { label: "Paragraf sayısı", ok: stats.paragraphs >= 3, msg: stats.paragraphs >= 3 ? `${stats.paragraphs} paragraf, iyi yapılandırılmış` : "Daha fazla paragraf kullanın" },
            ].map((check) => (
              <div key={check.label} className="flex items-start gap-3 py-2">
                <span className={`mt-0.5 flex-shrink-0 ${check.ok ? "text-accent" : "text-muted"}`}>
                  {check.ok ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                  )}
                </span>
                <div>
                  <span className="text-sm font-medium text-foreground">{check.label}</span>
                  <span className="text-sm text-muted ml-2">{check.msg}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Keyword Density */}
      {keywordStats.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Anahtar Kelime Yoğunluğu (Top 10)</h3>
          <div className="rounded-xl border border-border overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface">
                  <th className="text-left px-4 py-3 text-xs font-semibold text-muted uppercase tracking-wider">Kelime</th>
                  <th className="text-right px-4 py-3 text-xs font-semibold text-muted uppercase tracking-wider">Sayı</th>
                  <th className="text-right px-4 py-3 text-xs font-semibold text-muted uppercase tracking-wider">Yoğunluk</th>
                  <th className="px-4 py-3 text-xs font-semibold text-muted uppercase tracking-wider">Bar</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {keywordStats.map((kw) => (
                  <tr key={kw.word}>
                    <td className="px-4 py-2.5 font-medium text-foreground">{kw.word}</td>
                    <td className="px-4 py-2.5 text-right text-muted">{kw.count}</td>
                    <td className="px-4 py-2.5 text-right text-muted">%{kw.density}</td>
                    <td className="px-4 py-2.5">
                      <div className="w-full h-2 bg-border rounded-full overflow-hidden">
                        <div className="h-full bg-accent rounded-full" style={{ width: `${Math.min(parseFloat(kw.density) * 10, 100)}%` }} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
