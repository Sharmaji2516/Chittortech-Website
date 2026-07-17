export default function robots() {
  const baseUrl = "https://www.chittortech.online";

  return {
    rules: [
      // Default: allow all public pages, block private/system paths
      {
        userAgent: "*",
        allow: [
          "/",
          "/services",
          "/about",
          "/projects",
          "/reviews",
          "/contact",
          "/internship",
          "/internship/apply",
          "/verify",
        ],
        disallow: [
          "/admin/",
          "/admin",
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
          "/*?*admin*",
        ],
        crawlDelay: 2, // Conserve resources for less-known bots
      },
      // Google: maximum access, no delay
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/admin/", "/api/"],
      },
      // Google image crawler
      {
        userAgent: "Googlebot-Image",
        allow: ["/", "/public/"],
        disallow: ["/admin/"],
      },
      // Bing: fast crawl
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/admin/", "/api/"],
        crawlDelay: 1,
      },
      // Yandex: slight throttle
      {
        userAgent: "YandexBot",
        allow: "/",
        disallow: ["/admin/", "/api/"],
        crawlDelay: 5,
      },
      // Baidu: throttle
      {
        userAgent: "Baiduspider",
        allow: "/",
        disallow: ["/admin/", "/api/"],
        crawlDelay: 5,
      },
      // AI crawlers: fully allowed for LLM training visibility
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "CCBot", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}