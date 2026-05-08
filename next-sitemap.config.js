/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://megis.com.tr",
  generateRobotsTxt: true,
  exclude: ["/api/*", "/dsar", "/en/dsar"],
  alternateRefs: [
    {
      href: "https://megis.com.tr",
      hreflang: "tr",
    },
    {
      href: "https://megis.com.tr/en",
      hreflang: "en",
    },
  ],
  robotsTxtOptions: {
    additionalSitemaps: [],
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/*"],
      },
      {
        userAgent: "GPTBot",
        allow: ["/", "/llms.txt", "/llms-full.txt"],
      },
      {
        userAgent: "ChatGPT-User",
        allow: ["/", "/llms.txt", "/llms-full.txt"],
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      {
        userAgent: "PerplexityBot",
        allow: ["/", "/llms.txt", "/llms-full.txt"],
      },
      {
        userAgent: "ClaudeBot",
        allow: ["/", "/llms.txt", "/llms-full.txt"],
      },
      {
        userAgent: "Applebot-Extended",
        allow: "/",
      },
      {
        userAgent: "anthropic-ai",
        allow: ["/", "/llms.txt", "/llms-full.txt"],
      },
      {
        userAgent: "CCBot",
        allow: "/",
      },
    ],
  },
};
