/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://koki.me",
  generateRobotsTxt: true,
  transform: async (config, path) => {
    /** @type import('next-sitemap').ISitemapField */
    const field = {
      loc: path,
      lastmod: new Date().toISOString(),
      priority: config.priority,
    };

    switch (path) {
      case "/":
        return { ...field, priority: 1.0, changefreq: "daily" };
      default:
        return { ...field, changefreq: "yearly" };
    }
  },
};
