"use client";

import { useState, useCallback } from "react";

function useCopy() {
  const [copied, setCopied] = useState<string | null>(null);
  const copy = useCallback((text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 1500);
  }, []);
  return { copied, copy };
}

const brandColors = [
  { name: "Accent", dark: "#2997ff", light: "#0071e3", usage: "Links, buttons, interactive" },
  { name: "Accent Hover", dark: "#0077ed", light: "#0077ed", usage: "Hover states" },
];

const neutralColors = [
  { name: "Background", dark: "#000000", light: "#ffffff" },
  { name: "Foreground", dark: "#f5f5f7", light: "#1d1d1f" },
  { name: "Muted", dark: "#86868b", light: "#86868b" },
  { name: "Surface", dark: "#1d1d1f", light: "#f5f5f7" },
  { name: "Border", dark: "#424245", light: "#d2d2d7" },
];

const sections = [
  { id: "logo", label: "Logo" },
  { id: "colors", label: "Renkler" },
  { id: "typography", label: "Tipografi" },
  { id: "buttons", label: "Butonlar" },
  { id: "layout", label: "Layout" },
  { id: "guidelines", label: "Kurallar" },
];

export function BrandSystem() {
  const { copied, copy } = useCopy();

  return (
    <div className="min-h-screen pt-24 pb-32">
      <div className="max-w-[980px] mx-auto px-6">

        <div className="text-center mb-20">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight">
            Megis Brand
          </h1>
          <p className="mt-5 text-xl sm:text-2xl text-muted max-w-2xl mx-auto leading-relaxed">
            Tutarlı bir marka deneyimi için tasarım ilkeleri, renk paleti ve UI kuralları.
          </p>
        </div>

        <nav className="sticky top-12 z-30 -mx-6 px-6 py-3 bg-background/80 backdrop-blur-xl backdrop-saturate-150 mb-16">
          <div className="flex gap-6 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="flex-shrink-0 text-xs text-muted hover:text-foreground transition-colors">
                {s.label}
              </a>
            ))}
          </div>
        </nav>

        {/* LOGO */}
        <section id="logo" className="mb-24 scroll-mt-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">Logo</h2>
          <p className="text-muted text-lg mb-12">Megis wordmark ve kullanım kuralları.</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-black p-12 flex items-center justify-center">
              <span className="text-4xl font-bold tracking-tighter text-white">megis</span>
            </div>
            <div className="rounded-2xl bg-white p-12 flex items-center justify-center border border-border">
              <span className="text-4xl font-bold tracking-tighter text-black">megis</span>
            </div>
            <div className="rounded-2xl p-12 flex items-center justify-center" style={{ background: "#0071e3" }}>
              <span className="text-4xl font-bold tracking-tighter text-white">megis</span>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold text-foreground mb-4">Koruma Alanı</h3>
            <p className="text-muted mb-6">Logo etrafında minimum &quot;m&quot; harfi yüksekliği kadar boş alan bırakılmalıdır.</p>
            <div className="inline-flex border-2 border-dashed border-border p-10 rounded-xl relative">
              <span className="text-3xl font-bold tracking-tighter text-foreground">megis</span>
              <span className="absolute top-2 left-1/2 -translate-x-1/2 text-[10px] text-accent">m</span>
              <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] text-accent">m</span>
              <span className="absolute left-2 top-1/2 -translate-y-1/2 text-[10px] text-accent">m</span>
              <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-accent">m</span>
            </div>
          </div>
        </section>

        {/* COLORS */}
        <section id="colors" className="mb-24 scroll-mt-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">Renkler</h2>
          <p className="text-muted text-lg mb-12">Tek accent rengi. Geri kalan her şey nötr.</p>

          <h3 className="text-xl font-semibold text-foreground mb-6">Accent</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            {brandColors.map((c) => (
              <div key={c.name} className="rounded-2xl overflow-hidden">
                <div className="flex h-32">
                  <div className="flex-1 relative flex items-end p-4" style={{ background: c.dark }}>
                    <button onClick={() => copy(c.dark)} className="text-xs text-white/60 hover:text-white font-mono transition-colors">
                      {copied === c.dark ? "Kopyalandı" : c.dark}
                    </button>
                    <span className="absolute top-4 left-4 text-[10px] text-white/40">Dark</span>
                  </div>
                  <div className="flex-1 relative flex items-end p-4" style={{ background: c.light }}>
                    <button onClick={() => copy(c.light)} className="text-xs text-white/60 hover:text-white font-mono transition-colors">
                      {copied === c.light ? "Kopyalandı" : c.light}
                    </button>
                    <span className="absolute top-4 left-4 text-[10px] text-white/40">Light</span>
                  </div>
                </div>
                <div className="bg-surface p-4">
                  <div className="text-sm font-semibold text-foreground">{c.name}</div>
                  <div className="text-xs text-muted mt-1">{c.usage}</div>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold text-foreground mb-6">Nötr</h3>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {neutralColors.map((c) => (
              <div key={c.name} className="rounded-xl overflow-hidden">
                <div className="flex h-16">
                  <div className="flex-1" style={{ background: c.dark }} />
                  <div className="flex-1" style={{ background: c.light }} />
                </div>
                <div className="py-2">
                  <div className="text-xs font-semibold text-foreground">{c.name}</div>
                  <button onClick={() => copy(c.dark)} className="text-[10px] font-mono text-muted hover:text-foreground transition-colors">
                    {c.dark}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TYPOGRAPHY */}
        <section id="typography" className="mb-24 scroll-mt-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">Tipografi</h2>
          <p className="text-muted text-lg mb-12">Geist font ailesi. Temiz, okunabilir, modern.</p>

          <div className="mb-12">
            <div className="text-6xl font-bold text-foreground tracking-tight mb-2">Geist Sans</div>
            <div className="text-2xl font-mono text-muted">Geist Mono</div>
          </div>

          <div className="divide-y divide-border">
            {[
              { label: "Display", cls: "text-5xl sm:text-6xl font-bold tracking-tight", spec: "48-60px / Bold" },
              { label: "Title 1", cls: "text-4xl sm:text-5xl font-bold tracking-tight", spec: "36-48px / Bold" },
              { label: "Title 2", cls: "text-2xl sm:text-3xl font-semibold tracking-tight", spec: "24-30px / Semibold" },
              { label: "Title 3", cls: "text-xl font-semibold", spec: "20px / Semibold" },
              { label: "Body", cls: "text-lg", spec: "18px / Regular" },
              { label: "Caption", cls: "text-sm text-muted", spec: "14px / Regular" },
              { label: "Footnote", cls: "text-xs text-muted", spec: "12px / Regular" },
            ].map((t) => (
              <div key={t.label} className="flex flex-col sm:flex-row sm:items-baseline gap-2 py-6">
                <div className="w-28 flex-shrink-0 text-xs text-muted">{t.label}</div>
                <div className={`flex-1 text-foreground ${t.cls}`}>Megis Dijital</div>
                <div className="text-xs text-muted font-mono">{t.spec}</div>
              </div>
            ))}
          </div>
        </section>

        {/* BUTTONS */}
        <section id="buttons" className="mb-24 scroll-mt-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">Butonlar</h2>
          <p className="text-muted text-lg mb-12">İki buton stili: filled ve text link.</p>

          <div className="space-y-12">
            <div>
              <h3 className="text-xs text-muted uppercase tracking-wider mb-6">Filled</h3>
              <div className="flex flex-wrap items-center gap-4">
                <span className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3 text-lg text-white cursor-pointer">Default</span>
                <span className="inline-flex items-center justify-center rounded-full bg-accent-hover px-7 py-3 text-lg text-white cursor-pointer">Hover</span>
                <span className="inline-flex items-center justify-center rounded-full bg-accent/40 px-7 py-3 text-lg text-white/50">Disabled</span>
                <span className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2 text-sm text-white cursor-pointer">Small</span>
              </div>
              <p className="text-xs text-muted mt-4 font-mono">rounded-full bg-accent px-7 py-3 text-lg text-white</p>
            </div>

            <div>
              <h3 className="text-xs text-muted uppercase tracking-wider mb-6">Text Link</h3>
              <div className="flex flex-wrap items-center gap-6">
                <span className="inline-flex items-center gap-1 text-xl text-accent cursor-pointer hover:underline">
                  Default link
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
                </span>
                <span className="inline-flex items-center gap-1 text-base text-accent cursor-pointer hover:underline">
                  Small link
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
                </span>
              </div>
              <p className="text-xs text-muted mt-4 font-mono">text-accent hover:underline + chevron</p>
            </div>
          </div>
        </section>

        {/* LAYOUT */}
        <section id="layout" className="mb-24 scroll-mt-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">Layout</h2>
          <p className="text-muted text-lg mb-12">İçerik odaklı, sade, geniş boşluklu tasarım ilkeleri.</p>

          <div className="divide-y divide-border">
            {[
              ["Max Width", "980px", "İçerik alanı standardı"],
              ["Section Padding", "py-20 sm:py-28", "Bölümler arası genişlik"],
              ["Navbar Height", "h-12 (48px)", "İnce, minimal header"],
              ["Card Radius", "rounded-2xl (16px)", "Kartlar ve gruplar"],
              ["Nav Font", "text-xs (12px)", "Navigasyon metni"],
              ["Hover", "color change only", "Efekt yok, sadece renk"],
              ["Backdrop", "blur-xl saturate-150", "Saydam arka planlar"],
              ["Divider", "border-t border-border", "Border ile ayırma"],
            ].map(([prop, val, desc]) => (
              <div key={prop} className="flex flex-col sm:flex-row gap-2 py-4">
                <div className="w-40 flex-shrink-0 text-sm font-semibold text-foreground">{prop}</div>
                <div className="flex-1 text-sm font-mono text-accent">{val}</div>
                <div className="text-xs text-muted">{desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* GUIDELINES */}
        <section id="guidelines" className="mb-24 scroll-mt-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">Kurallar</h2>
          <p className="text-muted text-lg mb-12">Marka tutarlılığı için uyulması gereken ilkeler.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">Yapin</h3>
              <ul className="space-y-4 text-muted">
                <li className="flex gap-3"><span className="text-accent mt-0.5">+</span>İçerik süslemeye her zaman baskın olmalı</li>
                <li className="flex gap-3"><span className="text-accent mt-0.5">+</span>Geniş boşluk ve nefes alan layout kullanın</li>
                <li className="flex gap-3"><span className="text-accent mt-0.5">+</span>Tek accent rengi tutarlı kullanın</li>
                <li className="flex gap-3"><span className="text-accent mt-0.5">+</span>Border yerine whitespace ile ayırın</li>
                <li className="flex gap-3"><span className="text-accent mt-0.5">+</span>Hover sadece renk değişimi olsun</li>
                <li className="flex gap-3"><span className="text-accent mt-0.5">+</span>Tipografi hiyerarsisini net tutun</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">Yapmayin</h3>
              <ul className="space-y-4 text-muted">
                <li className="flex gap-3"><span className="text-foreground mt-0.5">&minus;</span>Gradient, glow veya shadow efekti kullanmayın</li>
                <li className="flex gap-3"><span className="text-foreground mt-0.5">&minus;</span>Kartları border ile çevreleyin</li>
                <li className="flex gap-3"><span className="text-foreground mt-0.5">&minus;</span>Birden fazla accent rengi kullanmayın</li>
                <li className="flex gap-3"><span className="text-foreground mt-0.5">&minus;</span>Animasyonu dikkat dağıtıcı yapmayın</li>
                <li className="flex gap-3"><span className="text-foreground mt-0.5">&minus;</span>Logoya efekt veya dekorasyon eklemeyin</li>
                <li className="flex gap-3"><span className="text-foreground mt-0.5">&minus;</span>980px container genişliğini aşmayın</li>
              </ul>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
