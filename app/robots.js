export default function robots() {
  const baseUrl = "https://www.chittortech.online";

  /**
   * ============================================================
   * CHITTORTECH ENTERPRISE ROBOTS CONFIGURATION
   * ============================================================
   *
   * Optimized For:
   * ✔ Googlebot
   * ✔ Bingbot
   * ✔ AI Crawlers
   * ✔ SEO Crawl Efficiency
   * ✔ Security
   * ✔ Crawl Budget Optimization
   * ✔ Production Deployment
   *
   * ============================================================
   */

  return {
    rules: [
      /**
       * ========================================================
       * MAIN SEARCH ENGINE RULES
       * ========================================================
       */

      {
        userAgent: "*",

        allow: [
          "/",
        ],

        disallow: [
          /**
           * ====================================================
           * PRIVATE / SYSTEM ROUTES
           * ====================================================
           */

          "/admin/",

          "/api/",

          "/dashboard/",

          "/private/",

          "/tmp/",

          "/_next/",

          /**
           * ====================================================
           * SECURITY / INTERNAL FILES
           * ====================================================
           */

          "/config/",

          "/server/",

          "/internal/",

          /**
           * ====================================================
           * DUPLICATE / LOW SEO VALUE
           * ====================================================
           */

          "/thank-you",

          "/success",
        ],
      },

      /**
       * ========================================================
       * GOOGLEBOT PRIORITY ACCESS
       * ========================================================
       */

      {
        userAgent: "Googlebot",

        allow: "/",
      },

      /**
       * ========================================================
       * BINGBOT PRIORITY ACCESS
       * ========================================================
       */

      {
        userAgent: "Bingbot",

        allow: "/",
      },

      /**
       * ========================================================
       * AI SEARCH ENGINE CRAWLERS
       * ========================================================
       */

      {
        userAgent: "GPTBot",

        allow: "/",
      },

      {
        userAgent: "ChatGPT-User",

        allow: "/",
      },

      {
        userAgent: "Google-Extended",

        allow: "/",
      },

      {
        userAgent: "ClaudeBot",

        allow: "/",
      },
    ],

    /**
     * ==========================================================
     * SITEMAP LOCATION
     * ==========================================================
     */

    sitemap: `${baseUrl}/sitemap.xml`,

    /**
     * ==========================================================
     * HOST DECLARATION
     * ==========================================================
     */

    host: baseUrl,
  };
}