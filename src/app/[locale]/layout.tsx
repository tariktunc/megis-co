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
import { SITE_URL } from "@/lib/site-url";
import { A11yServerHelper, A11yScript, A11yPreconnect } from "@blakfy/accessibility-widget-next";
import { BlakfyCookieProvider, ConsentModeDefault } from "@blakfy/cookie-next";
import type { Metadata } from "next";

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
  const a11yAttrs = await A11yServerHelper();

  return (
    <html
      lang={locale}
      {...a11yAttrs}
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
        <ConsentModeDefault />
        <A11yPreconnect />
        <OrganizationJsonLd locale={locale} />
        <WebSiteJsonLd locale={locale} />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <BlakfyCookieProvider
          locale="tr"
          policyUrl="/cerez-politikasi"
          presets="ga4,gtm,facebook,clarity"
          position="bottom-center"
          theme="auto"
          accent="#2997ff"
        >
          <NextIntlClientProvider messages={messages}>
            <Providers>
              <LenisProvider>
                <Navbar />
                <main className="flex-1">{children}</main>
                <Footer />
                <A11yScript locale={locale === "tr" ? "tr" : "en"} theme="auto" position="bottom-left" />
                <BlakfyFooter />
              </LenisProvider>
            </Providers>
          </NextIntlClientProvider>
        </BlakfyCookieProvider>
        {/* Yandex Metrica — counter 110019865 */}
        <Script id="yandex-metrica" strategy="afterInteractive">{`
          (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window,document,"script","https://mc.yandex.ru/metrika/tag.js?id=110019865","ym");
          ym(110019865,"init",{ssr:true,webvisor:true,clickmap:true,ecommerce:"dataLayer",accurateTrackBounce:true,trackLinks:true});
        `}</Script>
        <noscript><div><img src="https://mc.yandex.ru/watch/110019865" style={{position:"absolute",left:"-9999px"}} alt="" /></div></noscript>
      </body>
    </html>
  );
}
