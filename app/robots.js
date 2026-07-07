export default function robots() {
  const baseUrl = "https://www.chittortech.online";

  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/services",
          "/about",
          "/projects",
          "/reviews"
        ],
        disallow: [
          "/admin/",
          "/api/",
          "/dashboard/",
          "/private/",
          "/tmp/",
          "/_next/",
          "/config/",
          "/server/",
          "/internal/",
          "/thank-you",
          "/success",
          "/*.json$",
        ],
        crawlDelay: 2, // Conserve resources for unknown bots
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/admin/", "/api/"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/admin/", "/api/"],
        crawlDelay: 1, // Let Bing crawl faster
      },
      {
        userAgent: "YandexBot",
        allow: "/",
        disallow: ["/admin/", "/api/"],
        crawlDelay: 5, // Throttle Yandex slightly
      },
      {
        userAgent: "Baiduspider",
        allow: "/",
        disallow: ["/admin/", "/api/"],
        crawlDelay: 5,
      },
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
      {
        userAgent: "PerplexityBot",
        allow: "/",
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}