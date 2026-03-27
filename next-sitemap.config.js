/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://megis.com.tr",
  generateRobotsTxt: true,
  exclude: ["/api/*"],
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
};
