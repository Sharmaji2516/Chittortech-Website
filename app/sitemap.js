export default async function sitemap() {
  const BASE_URL = "https://www.chittortech.online";
  const CURRENT_DATE = new Date();

  const PRIORITY = {
    HOME: 1.0,
    CORE_SERVICE: 0.95,
    HIGH_VALUE: 0.90,
    BUSINESS_PAGE: 0.85,
    SUPPORT_PAGE: 0.80,
    LOW_PRIORITY: 0.70,
  };

  const CHANGE_FREQUENCY = {
    ALWAYS: "always",
    HOURLY: "hourly",
    DAILY: "daily",
    WEEKLY: "weekly",
    MONTHLY: "monthly",
    YEARLY: "yearly",
  };

  // Define static highly-valuable routes
  const STATIC_ROUTES = [
    { path: "", priority: PRIORITY.HOME, changeFrequency: CHANGE_FREQUENCY.DAILY },
    { path: "/services", priority: PRIORITY.CORE_SERVICE, changeFrequency: CHANGE_FREQUENCY.WEEKLY },
    { path: "/projects", priority: PRIORITY.HIGH_VALUE, changeFrequency: CHANGE_FREQUENCY.WEEKLY },
    { path: "/reviews", priority: PRIORITY.HIGH_VALUE, changeFrequency: CHANGE_FREQUENCY.WEEKLY },
    { path: "/about", priority: PRIORITY.BUSINESS_PAGE, changeFrequency: CHANGE_FREQUENCY.MONTHLY },
    { path: "/contact", priority: PRIORITY.BUSINESS_PAGE, changeFrequency: CHANGE_FREQUENCY.MONTHLY },
    { path: "/internship", priority: PRIORITY.SUPPORT_PAGE, changeFrequency: CHANGE_FREQUENCY.MONTHLY },
    { path: "/internship/apply", priority: 0.80, changeFrequency: CHANGE_FREQUENCY.MONTHLY },
  ];

  // We are programmatically generating virtual service query routes that we want indexed,
  // pointing to the main services page but helping Google understand our specific offerings.
  const SERVICE_INTENT_KEYWORDS = [
    "?service=web-development-rajasthan",
    "?service=mobile-app-development-rajasthan",
    "?service=saas-development-company",
    "?service=seo-services-chittorgarh",
    "?service=react-native-apps",
    "?service=custom-ai-chatbots"
  ];

  const REGIONAL_INTENT_KEYWORDS = [
    "?region=chittorgarh",
    "?region=udaipur",
    "?region=jaipur",
    "?region=bhilwara",
    "?region=jodhpur"
  ];

  const sitemapEntries = [];

  // 1. Add Static Routes
  for (const route of STATIC_ROUTES) {
    sitemapEntries.push({
      url: `${BASE_URL}${route.path}`,
      lastModified: CURRENT_DATE,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: {
          "en-IN": `${BASE_URL}${route.path}`,
          "hi-IN": `${BASE_URL}${route.path}`, // Indicating Hindi availability for local SEO
        },
      },
    });
  }

  // 2. Add Regional Intents (Pointing to Home but creating crawlable URL variations for local indexing)
  for (const region of REGIONAL_INTENT_KEYWORDS) {
    sitemapEntries.push({
      url: `${BASE_URL}/${region}`,
      lastModified: CURRENT_DATE,
      changeFrequency: CHANGE_FREQUENCY.WEEKLY,
      priority: 0.88,
      alternates: {
        languages: { "en-IN": `${BASE_URL}/${region}` },
      },
    });
  }

  // 3. Add Service Intents (Pointing to Services)
  for (const service of SERVICE_INTENT_KEYWORDS) {
    sitemapEntries.push({
      url: `${BASE_URL}/services${service}`,
      lastModified: CURRENT_DATE,
      changeFrequency: CHANGE_FREQUENCY.WEEKLY,
      priority: 0.92,
      alternates: {
        languages: { "en-IN": `${BASE_URL}/services${service}` },
      },
    });
  }

  return sitemapEntries;
}