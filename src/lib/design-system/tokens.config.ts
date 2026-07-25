// SINGLE SOURCE OF TRUTH — design tokens for megis.co
// Spec: site-builder/specs/design-tokens-ssot.md (WebForge Rule #1, "6 Core Decisions" #1)
//
// IMPORTANT — how this file relates to src/app/globals.css (read before editing either):
//   megis.co is the ONLY fleet site that had NO tokens.config.ts at all before this pass.
//   Unlike the other fleet sites (which mostly already had a mature tokens.css), this
//   site's ENTIRE token surface lives inline in globals.css's `@theme` block (9 custom
//   properties + font vars) plus an `html.light` override block. There is no separate
//   tokens.css file. The values below are a byte-for-byte transcription of what was
//   ALREADY in globals.css before this pass — nothing here was invented. globals.css
//   remains the file the browser actually reads; this file has no build step that
//   regenerates it (same "no generator" caveat every other fleet site's tokens.config.ts
//   already documents).
//
// TRUE DARK-DEFAULT SITE (not light-default like most of the fleet): `@theme` holds the
// DARK values, `html.light { ... }` overrides them for light mode — the opposite
// direction of a typical light-first site. Documented below with BOTH values for every
// mode-dependent token, dark value first (the default) since that is what a fresh visit
// actually renders.
//
// GENUINE GAPS vs. the rest of the fleet (flagged, not silently patched):
//   - No spacing scale, no radius scale, no shadow scale, no motion/easing scale, and no
//     typography scale (fontSize/lineHeight/letterSpacing) are defined anywhere in
//     globals.css — the site relies entirely on Tailwind v4's stock default scale for all
//     of these (e.g. `text-5xl`, `gap-6`, `rounded-2xl` appear as literal Tailwind
//     defaults throughout the codebase, never a site-specific override). Per the "do not
//     invent a token that is not already in globals.css" rule, none of those scales are
//     fabricated below — they are simply ABSENT from this file, same as they are absent
//     from the site's own source of truth.
//   - `--hero-dot-opacity: 0` is a one-off animation/effect variable on `:root` (not a
//     `@theme` entry, so it produces no Tailwind utility), presumably read by a hero
//     component's inline style — recorded under `misc` for completeness, not modeled as
//     a color/spacing/etc. token since it isn't one.

export const tokens = {
  // ─── COLORS ────────────────────────────────────────────────
  // Every entry below is a direct transcription of an existing `--color-*` custom
  // property in globals.css's `@theme` block (dark, the site default) and/or its
  // `html.light` override — no independent hex introduced.
  color: {
    background: { dark: '#000000', light: '#ffffff' }, // --color-background
    foreground: { dark: '#f5f5f7', light: '#1d1d1f' },  // --color-foreground
    muted: { dark: '#86868b', light: '#86868b' },       // --color-muted — SAME value both modes (already true in globals.css). Used site-wide as a secondary TEXT color (`text-muted`), NOT as a background tint — see "Tools Suite aliases" note below.
    accent: { dark: '#2997ff', light: '#0071e3' },       // --color-accent
    accentHover: { dark: '#0077ed', light: '#0077ed' },  // --color-accent-hover — SAME value both modes (already true in globals.css)
    surface: { dark: '#1d1d1f', light: '#f5f5f7' },      // --color-surface
    surfaceLight: { dark: '#2d2d2f', light: '#e8e8ed' }, // --color-surface-light
    border: { dark: '#424245', light: '#d2d2d7' },       // --color-border
    borderLight: { dark: '#6e6e73', light: '#86868b' },  // --color-border-light

    // ─── Tools Suite aliases (2026-07-25, site-builder/specs/tools-suite.md) ──────
    // ADDED to globals.css's `@theme` block (this pass) so the shared ToolShell/
    // ToolField/ToolResult/TextField components' shadcn-style semantic class names
    // (`bg-muted`, `text-muted-foreground`, `border-primary-500`, `text-error-700`,
    // etc.) resolve to a real value on this site. Every entry is either (a) a
    // DIFFERENT property name pointing at an ALREADY-EXISTING token via `var()`
    // (never self-referential — see the `theme_alias_trap` note in the delegation
    // brief), or (b) `color-mix()` over an existing token, or (c) a literal,
    // independently-verifiable Tailwind v4 FRAMEWORK DEFAULT value (read directly
    // from `node_modules/tailwindcss/theme.css`, not invented/typed from memory).
    // No new brand hex is introduced anywhere in this section.
    toolsSuite: {
      // muted-foreground: DIRECT alias to the site's existing `--color-muted`
      // (already used everywhere as secondary/caption text) — zero new value.
      mutedForeground: 'var(--color-muted)',

      // NOTE — deliberately NOT aliased: shadcn's "muted" role is a BACKGROUND tint,
      // but megis's own `--color-muted` is already a mid-gray used as a TEXT color
      // site-wide (`text-muted`). Re-pointing `--color-muted` itself to a different
      // value would (a) violate the parity requirement (it is a PRE-EXISTING
      // property, additions-only) and (b) visibly change every existing `text-muted`
      // usage across the whole site. Since megis ALREADY has its own established
      // "muted background surface" role — `--color-surface` (used exactly this way
      // on the current `/araclar` hub's tool cards: `bg-surface ... hover:bg-surface-
      // light`) — the shared tools-suite component COPIES on this site (NOT the
      // frozen upstream .tmpl files) have their literal `bg-muted` / `hover:bg-muted`
      // classes swapped for `bg-surface` / `hover:bg-surface-light` instead of
      // adding a `--color-muted` alias. Recorded here so the reasoning is not lost —
      // see `tools_installed` / component source for the actual edited files.

      // primary-500 / primary-600: DIRECT alias to the existing accent pair —
      // `accent-hover` already IS a darker/pressed variant of `accent`, the exact
      // semantic role primary-600 needs. Zero new value.
      primary500: 'var(--color-accent)',
      primary600: 'var(--color-accent-hover)',

      // primary-50: NOT a direct alias (no existing "very light/dark tint of accent"
      // token on this site) — derived via `color-mix()` over the existing `accent`
      // token, per mode (this site is genuinely dual-mode, unlike most of the fleet,
      // so a single fixed "white-tint" value — the approach used on the fleet's
      // light-default sites — would look wrong against megis's black default
      // background). Dark-mode default mixes toward black; the `html.light`
      // override mixes toward white.
      primary50: {
        dark: 'color-mix(in srgb, var(--color-accent) 12%, black)',
        light: 'color-mix(in srgb, var(--color-accent) 8%, white)',
      },

      // border: no alias needed — `border-border` already works as a Tailwind
      // utility directly from the existing `--color-border` property.

      // error-700 / success-700 / warning-700: megis has ZERO status colors (no red/
      // green/amber anywhere in globals.css) — a genuine gap, not silently patched.
      // `color-mix()` cannot invent a new hue family from the (blue) accent token, so
      // per the delegation brief's own example ("e.g. a success or warning colour")
      // these 3 are sourced from Tailwind v4's OWN published default palette —
      // verified by reading `node_modules/tailwindcss/theme.css` directly (NOT typed
      // from memory) — rather than a hand-picked independent hex:
      error700: 'oklch(50.5% 0.213 27.518)',   // Tailwind v4 default --color-red-700
      success700: 'oklch(52.7% 0.154 150.069)', // Tailwind v4 default --color-green-700
      warning700: 'oklch(55.5% 0.163 48.998)',  // Tailwind v4 default --color-amber-700
    },
  },

  // ─── TYPOGRAPHY ────────────────────────────────────────────
  typography: {
    fontFamily: {
      sans: 'var(--font-geist-sans)', // --font-sans
      mono: 'var(--font-geist-mono)', // --font-mono
    },
    // NO fontSize/lineHeight/letterSpacing scale exists in globals.css — the site
    // uses Tailwind v4's stock default type scale directly (e.g. "text-5xl sm:text-6xl
    // lg:text-7xl" as literal utility classes). Not fabricated here — see "GENUINE
    // GAPS" note at the top of this file.
  },

  // ─── SPACING / RADIUS / SHADOW / MOTION ─────────────────────
  // None of these scales exist in globals.css — Tailwind v4 stock defaults are used
  // throughout with no site-specific override to transcribe. Deliberately absent
  // rather than invented (see "GENUINE GAPS" note above). The one fixed exception is
  // the owner's global rule that EVERY new component (tools suite included) uses
  // border-radius 1px — that is a cross-fleet OWNER RULE (2026-07-23), not a value
  // that lives in this site's globals.css, so it is applied directly as the Tailwind
  // arbitrary value `rounded-[1px]` in component markup, never added here as a fake
  // "radius scale".

  // ─── MISC (non-color/typography root variables) ─────────────
  misc: {
    heroDotOpacity: '0', // --hero-dot-opacity — plain `:root` variable (not inside
    // `@theme`, so it emits no Tailwind utility on its own); presumably read via an
    // inline style by a hero-section component. Recorded for completeness only.
  },
} as const;

export type Tokens = typeof tokens;

// ─── KNOWN GAPS (do not silently "fix" — scope with the user first) ────────
// 1. No build-tokens.ts generator exists — this file does NOT auto-regenerate
//    globals.css.
// 2. No spacing/radius/shadow/motion/typography scale exists anywhere in this site's
//    CSS — Tailwind v4 stock defaults are the site's real, current behavior. Adding a
//    real named scale is a separate, larger design-system task, out of scope here.
// 3. Zero status colors (success/error/warning) existed before this pass anywhere in
//    the codebase, fleet-wide unique to this site — the 3 `toolsSuite.*700` values
//    above are the tools suite's own first introduction of status color, sourced from
//    Tailwind's own default palette (see comments above), not an invented brand color.
// 4. Canonical host mismatch — RESOLVED (2026-07-25). Page metadata, JSON-LD,
//    layout.tsx and llms.txt used to hardcode a canonical host directly, and the
//    host they named was one this business does NOT own. Every such literal is
//    now the shared `SITE_URL` constant (`src/lib/site-url.ts`, re-exported as
//    `BASE` from `src/lib/sitemap/generate.ts`), which resolves to megis.co, the
//    owner-confirmed canonical domain. Static copy in messages/*.json and
//    public/llms*.txt was corrected in the same pass. Never reintroduce a
//    hardcoded host here or anywhere else — use SITE_URL.
