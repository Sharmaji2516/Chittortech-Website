export default async function sitemap() {
  const BASE_URL = "https://www.chittortech.online";
  const CURRENT_DATE = new Date();

  // ─────────────────────────────────────────────────────────────
  // Priority Scale:
  //   1.0 = Homepage (most important)
  //   0.95 = Core service/conversion pages
  //   0.90 = High-value content pages
  //   0.85 = Supporting business pages
  //   0.75 = Secondary pages
  // ─────────────────────────────────────────────────────────────
  const STATIC_ROUTES = [
    // Tier 1: Homepage
    {
      path: "",
      priority: 1.0,
      changeFrequency: "daily",
      lastModified: CURRENT_DATE,
    },
    // Tier 2: Primary conversion & service pages
    {
      path: "/services",
      priority: 0.95,
      changeFrequency: "weekly",
      lastModified: CURRENT_DATE,
    },
    {
      path: "/contact",
      priority: 0.95,
      changeFrequency: "monthly",
      lastModified: CURRENT_DATE,
    },
    // Tier 3: High-value content & social proof pages
    {
      path: "/reviews",
      priority: 0.90,
      changeFrequency: "weekly",
      lastModified: CURRENT_DATE,
    },
    {
      path: "/projects",
      priority: 0.90,
      changeFrequency: "weekly",
      lastModified: CURRENT_DATE,
    },
    // Tier 4: Brand & trust pages
    {
      path: "/about",
      priority: 0.85,
      changeFrequency: "monthly",
      lastModified: CURRENT_DATE,
    },
    {
      path: "/internship",
      priority: 0.85,
      changeFrequency: "monthly",
      lastModified: CURRENT_DATE,
    },
    {
      path: "/internship/apply",
      priority: 0.80,
      changeFrequency: "monthly",
      lastModified: CURRENT_DATE,
    },
    // Tier 5: Utility pages
    {
      path: "/verify",
      priority: 0.75,
      changeFrequency: "yearly",
      lastModified: CURRENT_DATE,
    },
  ];

  // ─────────────────────────────────────────────────────────────
  // Build final sitemap array
  // Each entry includes:
  //   - Absolute URL
  //   - lastModified date
  //   - changeFrequency
  //   - priority
  //   - hreflang alternates (en-IN for India targeting)
  // ─────────────────────────────────────────────────────────────
  const sitemapEntries = STATIC_ROUTES.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    alternates: {
      languages: {
        "x-default": `${BASE_URL}${route.path}`,
        "en-IN": `${BASE_URL}${route.path}`,
        "en-US": `${BASE_URL}${route.path}`,
      },
    },
  }));

  return sitemapEntries;
}