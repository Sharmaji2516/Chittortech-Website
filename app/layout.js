import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import { AuthProvider } from "@/components/AuthContext";
import LocalSchema from "@/components/LocalSchema";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800", "900"], variable: "--font-poppins" });

export const metadata = {
  metadataBase: new URL('https://www.chittortech.online'),
  title: {
    default: "ChittorTech | Best IT Company in Chittorgarh & Rajasthan",
    template: "%s | ChittorTech – Rajasthan's #1 IT Agency"
  },
  description: "ChittorTech is the best IT company in Chittorgarh, Udaipur, Bhilwara & Jaipur. We build premium websites, SaaS platforms, mobile apps (React Native & Kotlin), custom AI chatbots, and e-commerce systems. iStart Rajasthan approved startup.",
  applicationName: "ChittorTech",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  category: "Technology",
  classification: "Software Development & IT Services",
  keywords: [
    // --- Primary Brand & Local Keywords ---
    "ChittorTech",
    "Best IT company in Chittorgarh",
    "Best IT company in Udaipur",
    "Best IT company in Bhilwara",
    "Best IT company in Jaipur",
    "Best IT company in Rajasthan",
    "Top IT agency Rajasthan",
    "IT company near me Rajasthan",
    // --- Web Development Service Keywords ---
    "Web development company Chittorgarh",
    "Web development company Udaipur",
    "Web development company Jaipur",
    "Web development company Bhilwara",
    "Website design agency Rajasthan",
    "Professional website developers Rajasthan",
    "Next.js development company India",
    "React development agency Rajasthan",
    // --- Mobile App Keywords ---
    "Mobile app development Chittorgarh",
    "Mobile app development Udaipur",
    "Mobile app development Jaipur",
    "Android app development Rajasthan",
    "iOS app development Rajasthan",
    "React Native app development India",
    "Kotlin Android developer Rajasthan",
    "Cross-platform mobile app company Rajasthan",
    // --- E-Commerce Keywords ---
    "E-commerce website development Rajasthan",
    "E-commerce website developers Udaipur",
    "E-commerce website developers Jaipur",
    "Online store development Chittorgarh",
    "Shopify developer Rajasthan",
    // --- SaaS & Custom Software ---
    "Custom software development Rajasthan",
    "SaaS development company India",
    "Enterprise software development Rajasthan",
    "Custom ERP development Rajasthan",
    "CRM software development Udaipur",
    // --- AI & Chatbot Keywords ---
    "AI chatbot development Rajasthan",
    "Custom AI solutions India",
    "RAG chatbot development",
    "LLM integration services India",
    "AI automation company Rajasthan",
    // --- SEO & Digital Marketing ---
    "SEO services Chittorgarh",
    "SEO agency Udaipur",
    "Digital marketing company Rajasthan",
    "Google My Business optimization Rajasthan",
    "Local SEO services Rajasthan",
    // --- Regional IT Company Coverage ---
    "IT Company in Chittorgarh",
    "IT Company in Udaipur",
    "IT Company in Jaipur",
    "IT Company in Bhilwara",
    "IT Company in Jodhpur",
    "IT Company in Ajmer",
    "IT Company in Kota",
    "IT Company in Alwar",
    "IT Company in Bikaner",
    "IT Company in Sikar",
    "IT Company in Nagaur",
    "IT Company in Pali",
    "IT Company in Rajsamand",
    "IT Company in Dungarpur",
    "IT Company in Banswara",
    "IT Company in Pratapgarh",
    "IT Company in Jhalawar",
    "IT Company in Tonk",
    "IT Company in Sawai Madhopur",
    "IT Company in Dausa",
    "IT Company in Karauli",
    "IT Company in Bharatpur",
    "IT Company in Dholpur",
    "IT Company in Baran",
    "IT Company in Bundi",
    "IT Company in Jhunjhunu",
    "IT Company in Churu",
    "IT Company in Hanumangarh",
    "IT Company in Sri Ganganagar",
    "IT Company in Barmer",
    "IT Company in Jaisalmer",
    "IT Company in Jalore",
    "IT Company in Sirohi",
    "IT Company in Balotra",
    "IT Company in Beawar",
    "IT Company in Gangapur City",
    "IT Company in Shahpura",
    "IT Company in Deeg",
    // --- Brand & Trust Keywords ---
    "iStart Rajasthan approved startup",
    "MSME registered IT company Rajasthan",
    "Best IT startup Rajasthan 2025",
    "Affordable IT services Rajasthan",
    "ChittorTech internship Rajasthan",
  ],
  authors: [{ name: 'Kush Sharma', url: 'https://www.linkedin.com/in/kush-sharma-chittortech/' }],
  creator: 'ChittorTech',
  publisher: 'ChittorTech',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://www.chittortech.online",
    languages: {
      "x-default": "https://www.chittortech.online",
      "en-US": "https://www.chittortech.online",
      "en-GB": "https://www.chittortech.online",
      "en-CA": "https://www.chittortech.online",
      "en-AE": "https://www.chittortech.online",
      "en-AU": "https://www.chittortech.online",
      "en-DE": "https://www.chittortech.online",
      "en-SG": "https://www.chittortech.online",
      "en-IN": "https://www.chittortech.online",
      "hi-IN": "https://www.chittortech.online",
    }
  },
  openGraph: {
    title: "ChittorTech | #1 IT Company in Chittorgarh, Udaipur & Rajasthan",
    description: "ChittorTech engineers premium websites, mobile apps, SaaS platforms & AI chatbots. Serving Chittorgarh, Udaipur, Bhilwara, Jaipur & all of Rajasthan. iStart approved startup.",
    url: "https://www.chittortech.online",
    siteName: "ChittorTech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.chittortech.online/ChittorTech%20Banner.png",
        width: 1200,
        height: 630,
        alt: "ChittorTech – Best IT Company in Chittorgarh, Udaipur & Rajasthan"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "ChittorTech | Best IT Company & Web Development in Rajasthan",
    description: "Premium Web, Mobile App & AI development agency in Rajasthan. Serving Chittorgarh, Udaipur, Jaipur & Bhilwara. iStart Rajasthan approved startup.",
    images: ["https://www.chittortech.online/ChittorTech%20Banner.png"],
    creator: "@chittortech",
    site: "@chittortech",
  },
  appleWebApp: {
    title: 'ChittorTech',
    statusBarStyle: 'black-translucent',
    startupImage: ['/icon.png'],
  },
  verification: {
    google: 'google-site-verification-id-placeholder',
    yandex: 'yandex-verification-id-placeholder',
    yahoo: 'yahoo-site-verification-id-placeholder',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/icon.png',
  },
};

import ClientLayout from "@/components/ClientLayout";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
          crossOrigin="anonymous"
        />
        <LocalSchema />
      </head>
      <body className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
        {/* Google Analytics GA4 - lazyOnload for Maximum Mobile Speed */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-F4DTYXCDZL" strategy="lazyOnload" />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-F4DTYXCDZL');
          `}
        </Script>
        <AuthProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
        </AuthProvider>
      </body>
    </html>
  );
}
