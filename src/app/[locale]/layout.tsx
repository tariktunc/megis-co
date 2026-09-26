import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { LenisProvider } from "@/components/animations/lenis-provider";
import { BlakfyFooter } from "@/components/BlakfyFooter";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/seo/json-ld";
import { ClarityScript } from "@/components/ClarityScript";
import { SITE_URL } from "@/lib/site-url";
import type { Metadata } from "next";

// WEBFORGE 2026-09-23: Google Consent Mode v2 default-deny, inline, before every
// tag script (CLAUDE.md mandatory_consent_rule). Replaces the removed npm cookie
// provider's `<ConsentModeDefault />` component.
const CONSENT_MODE_DEFAULT_SCRIPT = `(function(){if(typeof window==='undefined')return;if(window.__blakfyConsentDefaultsLoaded)return;window.__blakfyConsentDefaultsLoaded=true;try{window.dataLayer=window.dataLayer||[];if(typeof window.gtag!=='function'){window.gtag=function(){window.dataLayer.push(arguments);};}window.gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',functionality_storage:'denied',personalization_storage:'denied',security_storage:'granted',wait_for_update:500});}catch(e){}try{window.uetq=window.uetq||[];window.uetq.push('consent','default',{ad_storage:'denied'});}catch(e){}try{if(typeof window.ym!=='function'){window.ym=function(){};window.ym.__blakfyStub=true;}}catch(e){}})();`;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const metadata = messages.metadata as Record<string, string>;

  const siteUrl = SITE_URL;
  const localePath = locale === "tr" ? "" : `/${locale}`;

  return {
    title: {
      default: metadata?.title || "Megis",
      template: "%s | Megis",
    },
    description: metadata?.description || "",
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: `${siteUrl}${localePath}`,
      languages: {
        tr: siteUrl,
        en: `${siteUrl}/en`,
      },
    },
    openGraph: {
      title: metadata?.title || "Megis",
      description: metadata?.description || "",
      url: `${siteUrl}${localePath}`,
      siteName: "Megis",
      locale: locale === "tr" ? "tr_TR" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: metadata?.title || "Megis",
      description: metadata?.description || "",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    manifest: "/manifest.json",
    other: {
      "theme-color": "#000000",
      "msvalidate.01": "81F0AD857C8DC6F856F5D6AFDFCE9402",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "tr" | "en")) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Theme FOUC guard — Tailwind class strategy (specs/theme-system.md) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme')||'system';var d=t==='dark'||(t==='system'&&matchMedia('(prefers-color-scheme: dark)').matches);if(d)document.documentElement.classList.add('dark');}catch(e){}})();`,
          }}
        />
        <Script
          id="blakfy-consent-defaults"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: CONSENT_MODE_DEFAULT_SCRIPT }}
        />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <OrganizationJsonLd locale={locale} />
        <WebSiteJsonLd locale={locale} />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {/* WEBFORGE 2026-09-23: CDN @latest standard (site-builder spec.md
            "Site script tag standard"). No data-blakfy-theme (light is now
            the package default) and no data-blakfy-fab. */}
        <Script
          id="blakfy-cookie-script"
          src="https://cdn.jsdelivr.net/npm/@blakfy/cookie@latest/dist/cookie.min.js"
          strategy="afterInteractive"
          data-blakfy-locale="tr"
          data-blakfy-policy-url="/cerez-politikasi"
          data-blakfy-presets="ga4,gtm,facebook,clarity"
          data-blakfy-accent="#2997ff"
          data-blakfy-position="bottom-center"
        />
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <LenisProvider>
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
              <Script
                src="https://cdn.jsdelivr.net/npm/@blakfy/accessibility-widget@latest/dist/widget.js"
                data-locale={locale === "tr" ? "tr" : "en"}
                strategy="afterInteractive"
              />
              <BlakfyFooter />
            </LenisProvider>
          </Providers>
        </NextIntlClientProvider>
        {/* Yandex Metrica — counter 110019865 */}
        <Script id="yandex-metrica" strategy="afterInteractive">{`
          (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window,document,"script","https://mc.yandex.ru/metrika/tag.js?id=110019865","ym");
          ym(110019865,"init",{ssr:true,webvisor:true,clickmap:true,ecommerce:"dataLayer",accurateTrackBounce:true,trackLinks:true});
        `}</Script>
        <noscript><div><img src="https://mc.yandex.ru/watch/110019865" style={{position:"absolute",left:"-9999px"}} alt="" /></div></noscript>
        <ClarityScript />
      </body>
    </html>
  );
}
