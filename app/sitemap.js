export default async function sitemap() {
  const BASE_URL = "https://www.chittortech.online";

  const CURRENT_DATE = new Date();

  /**
   * ============================================================
   * SEO PRIORITY ENGINE
   * ============================================================
   */

  const PRIORITY = {
    HOME: 1.0,

    CORE_SERVICE: 0.95,

    HIGH_VALUE: 0.92,

    BUSINESS_PAGE: 0.88,

    SUPPORT_PAGE: 0.82,

    LOW_PRIORITY: 0.72,
  };

  /**
   * ============================================================
   * CHANGE FREQUENCY ENGINE
   * ============================================================
   */

  const CHANGE_FREQUENCY = {
    DAILY: "daily",

    WEEKLY: "weekly",

    MONTHLY: "monthly",

    YEARLY: "yearly",
  };

  /**
   * ============================================================
   * ALL CURRENT WEBSITE ROUTES
   * ============================================================
   */

  const ROUTES = [
    {
      path: "",

      priority: PRIORITY.HOME,

      changeFrequency: CHANGE_FREQUENCY.DAILY,
    },

    {
      path: "/services",

      priority: PRIORITY.CORE_SERVICE,

      changeFrequency: CHANGE_FREQUENCY.WEEKLY,
    },

    {
      path: "/reviews",

      priority: PRIORITY.HIGH_VALUE,

      changeFrequency: CHANGE_FREQUENCY.WEEKLY,
    },

    {
      path: "/about",

      priority: PRIORITY.BUSINESS_PAGE,

      changeFrequency: CHANGE_FREQUENCY.MONTHLY,
    },

    {
      path: "/contact",

      priority: PRIORITY.BUSINESS_PAGE,

      changeFrequency: CHANGE_FREQUENCY.MONTHLY,
    },

    {
      path: "/internship",

      priority: PRIORITY.SUPPORT_PAGE,

      changeFrequency: CHANGE_FREQUENCY.MONTHLY,
    },

    {
      path: "/internship/apply",

      priority: 0.80,

      changeFrequency: CHANGE_FREQUENCY.MONTHLY,
    },

    {
      path: "/verify",

      priority: PRIORITY.LOW_PRIORITY,

      changeFrequency: CHANGE_FREQUENCY.YEARLY,
    },

    {
      path: "/projects",

      priority: PRIORITY.HIGH_VALUE,

      changeFrequency: CHANGE_FREQUENCY.WEEKLY,
    },
  ];

  /**
   * ============================================================
   * FINAL SITEMAP GENERATOR
   * ============================================================
   */

  const sitemapEntries = ROUTES.map((route) => ({
    url: `${BASE_URL}${route.path}`,

    lastModified: CURRENT_DATE,

    changeFrequency: route.changeFrequency,

    priority: route.priority,

    alternates: {
      languages: {
        "en-IN": `${BASE_URL}${route.path}`,
      },
    },
  }));

  return sitemapEntries;
}