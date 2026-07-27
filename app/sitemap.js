export const dynamic = 'force-static';

export default async function sitemap() {
  const BASE_URL = "https://www.chittortech.online";
  const CURRENT_DATE = new Date();

  // Full hreflang language map for all pages
  const buildAlternates = (path) => ({
    languages: {
      "x-default": `${BASE_URL}${path}`,
      "en-US":     `${BASE_URL}${path}`,
      "en-GB":     `${BASE_URL}${path}`,
      "en-CA":     `${BASE_URL}${path}`,
      "en-AE":     `${BASE_URL}${path}`,
      "en-AU":     `${BASE_URL}${path}`,
      "en-DE":     `${BASE_URL}${path}`,
      "en-SG":     `${BASE_URL}${path}`,
      "en-IN":     `${BASE_URL}${path}`,
      "hi-IN":     `${BASE_URL}${path}`,
    },
  });

  // ─────────────────────────────────────────────────────────────
  // Priority Scale:
  //   1.0  = Homepage (most important)
  //   0.95 = Core conversion + international service pages
  //   0.90 = High-value social proof + portfolio pages
  //   0.85 = Brand, trust & lead generation pages
  //   0.80 = Secondary conversion pages
  //   0.75 = Utility pages
  // ─────────────────────────────────────────────────────────────
  const STATIC_ROUTES = [
    // Tier 1: Homepage
    {
      path: "",
      priority: 1.0,
      changeFrequency: "daily",
      lastModified: CURRENT_DATE,
    },
    // Tier 2: Primary conversion & global service pages
    {
      path: "/services",
      priority: 0.95,
      changeFrequency: "weekly",
      lastModified: CURRENT_DATE,
    },
    {
      path: "/services/web-development",
      priority: 0.95,
      changeFrequency: "weekly",
      lastModified: CURRENT_DATE,
    },
    {
      path: "/services/mobile-app-development",
      priority: 0.95,
      changeFrequency: "weekly",
      lastModified: CURRENT_DATE,
    },
    {
      path: "/services/e-commerce-solutions",
      priority: 0.95,
      changeFrequency: "weekly",
      lastModified: CURRENT_DATE,
    },
    {
      path: "/services/custom-software-development",
      priority: 0.95,
      changeFrequency: "weekly",
      lastModified: CURRENT_DATE,
    },
    {
      path: "/services/ai-integration",
      priority: 0.95,
      changeFrequency: "weekly",
      lastModified: CURRENT_DATE,
    },
    {
      path: "/offshore-software-development-usa",
      priority: 0.95,
      changeFrequency: "weekly",
      lastModified: CURRENT_DATE,
    },
    {
      path: "/hire-react-native-developers",
      priority: 0.95,
      changeFrequency: "weekly",
      lastModified: CURRENT_DATE,
    },
    {
      path: "/custom-ai-solutions-dubai-uae",
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
      path: "/projects",
      priority: 0.90,
      changeFrequency: "weekly",
      lastModified: CURRENT_DATE,
    },
    {
      path: "/reviews",
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

  // Build final sitemap array with full global hreflang alternates
  const sitemapEntries = STATIC_ROUTES.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    alternates: buildAlternates(route.path),
  }));

  return sitemapEntries;
}