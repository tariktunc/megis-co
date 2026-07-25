"use client";

import { useState } from "react";

export function SerpPreview() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("https://megis.co");
  const [view, setView] = useState<"desktop" | "mobile">("desktop");

  const titleLen = title.length;
  const descLen = description.length;
  const titleOk = titleLen > 0 && titleLen <= 60;
  const descOk = descLen > 0 && descLen <= 160;

  const displayUrl = (() => {
    try {
      const u = new URL(url.startsWith("http") ? url : `https://${url}`);
      return `${u.hostname}${u.pathname === "/" ? "" : u.pathname}`;
    } catch {
      return url;
    }
  })();

  const truncate = (text: string, max: number) =>
    text.length > max ? text.slice(0, max) + "..." : text;

  return (
    <div>
      {/* Inputs */}
      <div className="space-y-5 mb-12">
        <div>
          <div className="flex justify-between mb-1.5">
            <label className="text-sm font-medium text-foreground">Title Tag</label>
            <span className={`text-xs font-mono ${titleLen > 60 ? "text-red-400" : titleLen > 50 ? "text-yellow-400" : "text-muted"}`}>
              {titleLen}/60
            </span>
          </div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Sayfa başlığını girin..."
            className="w-full border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/50 rounded-lg outline-none transition-all focus:border-accent focus:ring-1 focus:ring-accent/30"
          />
          <div className="mt-1.5 h-1 rounded-full bg-border overflow-hidden">
            <div
              className={`h-full rounded-full transition-all ${titleLen > 60 ? "bg-red-400" : titleLen > 50 ? "bg-yellow-400" : "bg-accent"}`}
              style={{ width: `${Math.min((titleLen / 60) * 100, 100)}%` }}
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-1.5">
            <label className="text-sm font-medium text-foreground">Meta Description</label>
            <span className={`text-xs font-mono ${descLen > 160 ? "text-red-400" : descLen > 140 ? "text-yellow-400" : "text-muted"}`}>
              {descLen}/160
            </span>
          </div>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Meta açıklamasını girin..."
            rows={3}
            className="w-full border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/50 rounded-lg outline-none transition-all focus:border-accent focus:ring-1 focus:ring-accent/30 resize-none"
          />
          <div className="mt-1.5 h-1 rounded-full bg-border overflow-hidden">
            <div
              className={`h-full rounded-full transition-all ${descLen > 160 ? "bg-red-400" : descLen > 140 ? "bg-yellow-400" : "bg-accent"}`}
              style={{ width: `${Math.min((descLen / 160) * 100, 100)}%` }}
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-foreground mb-1.5 block">URL</label>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://ornek.com/sayfa"
            className="w-full border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/50 rounded-lg outline-none transition-all focus:border-accent focus:ring-1 focus:ring-accent/30"
          />
        </div>
      </div>

      {/* View Toggle */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setView("desktop")}
          className={`px-4 py-1.5 text-xs rounded-full transition-colors ${view === "desktop" ? "bg-accent text-white" : "text-muted hover:text-foreground"}`}
        >
          Masaüstü
        </button>
        <button
          onClick={() => setView("mobile")}
          className={`px-4 py-1.5 text-xs rounded-full transition-colors ${view === "mobile" ? "bg-accent text-white" : "text-muted hover:text-foreground"}`}
        >
          Mobil
        </button>
      </div>

      {/* Preview */}
      <div className={`rounded-2xl border border-border bg-white p-6 ${view === "mobile" ? "max-w-[400px]" : ""}`}>
        <div className="space-y-1">
          <div className="text-sm text-[#202124] flex items-center gap-2">
            <span className="w-7 h-7 rounded-full bg-[#f1f3f4] flex items-center justify-center text-[10px] font-bold text-[#202124]">
              {displayUrl.charAt(0).toUpperCase()}
            </span>
            <div>
              <div className="text-xs text-[#202124]">{displayUrl.split("/")[0]}</div>
              <div className="text-xs text-[#4d5156]">{displayUrl}</div>
            </div>
          </div>
          <h3 className={`text-[#1a0dab] ${view === "mobile" ? "text-lg" : "text-xl"} leading-snug cursor-pointer hover:underline`}>
            {title ? truncate(title, 60) : <span className="text-[#70757a]">Sayfa Başlığı</span>}
          </h3>
          <p className={`text-[#4d5156] ${view === "mobile" ? "text-xs" : "text-sm"} leading-relaxed`}>
            {description ? truncate(description, 160) : <span className="text-[#70757a]">Meta açıklaması burada görünecek. Arama sonuçlarında kullanıcıların göreceği metin budur.</span>}
          </p>
        </div>
      </div>

      {/* Analysis */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="rounded-xl bg-surface p-4">
          <div className="text-xs text-muted mb-1">Title</div>
          <div className={`text-lg font-bold ${titleOk ? "text-foreground" : titleLen === 0 ? "text-muted" : "text-red-400"}`}>
            {titleLen === 0 ? "–" : titleOk ? "Uygun" : titleLen > 60 ? "Çok uzun" : "Çok kısa"}
          </div>
          <div className="text-xs text-muted mt-1">İdeal: 50-60 karakter</div>
        </div>
        <div className="rounded-xl bg-surface p-4">
          <div className="text-xs text-muted mb-1">Description</div>
          <div className={`text-lg font-bold ${descOk ? "text-foreground" : descLen === 0 ? "text-muted" : "text-red-400"}`}>
            {descLen === 0 ? "–" : descOk ? "Uygun" : descLen > 160 ? "Çok uzun" : "Çok kısa"}
          </div>
          <div className="text-xs text-muted mt-1">İdeal: 140-160 karakter</div>
        </div>
        <div className="rounded-xl bg-surface p-4">
          <div className="text-xs text-muted mb-1">Pixel Genişliği (tahmini)</div>
          <div className="text-lg font-bold text-foreground">
            {titleLen === 0 ? "–" : `~${Math.round(titleLen * 8.5)}px`}
          </div>
          <div className="text-xs text-muted mt-1">Limit: ~580px masaüstü</div>
        </div>
      </div>
    </div>
  );
}
