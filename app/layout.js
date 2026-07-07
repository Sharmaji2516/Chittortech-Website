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
    default: "ChittorTech | Best IT Company & Web Development Agency in Rajasthan",
    template: "%s | ChittorTech"
  },
  description: "Leading IT company and web development agency in Rajasthan (Chittorgarh, Udaipur, Jaipur, Bhilwara). We engineer premium websites, SaaS enterprise applications, custom AI Chatbots (RAG), and high-performance native Android & iOS mobile apps built on Expo and Kotlin.",
  applicationName: "ChittorTech Web Application",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  category: "Technology",
  classification: "Software Development",
  keywords: [
    "Best IT Company in Rajasthan",
    "Top Web Development Agency Rajasthan",
    "IT Company in Chittorgarh",
    "IT Company in Udaipur",
    "IT Company in Jaipur",
    "IT Company in Bhilwara",
    "IT Company in Jodhpur",
    "IT Company in Ajmer",
    "IT Company in Alwar",
    "IT Company in Banswara",
    "IT Company in Baran",
    "IT Company in Barmer",
    "IT Company in Bharatpur",
    "IT Company in Bikaner",
    "IT Company in Bundi",
    "IT Company in Churu",
    "IT Company in Dausa",
    "IT Company in Dholpur",
    "IT Company in Dungarpur",
    "IT Company in Hanumangarh",
    "IT Company in Jaisalmer",
    "IT Company in Jalore",
    "IT Company in Jhalawar",
    "IT Company in Jhunjhunu",
    "IT Company in Karauli",
    "IT Company in Kota",
    "IT Company in Nagaur",
    "IT Company in Pali",
    "IT Company in Pratapgarh",
    "IT Company in Rajsamand",
    "IT Company in Sawai Madhopur",
    "IT Company in Sikar",
    "IT Company in Sirohi",
    "IT Company in Sri Ganganagar",
    "IT Company in Tonk",
    "IT Company in Balotra",
    "IT Company in Beawar",
    "IT Company in Anupgarh",
    "IT Company in Didwana",
    "IT Company in Dudu",
    "IT Company in Gangapur City",
    "IT Company in Kekri",
    "IT Company in Kotputli",
    "IT Company in Khairthal",
    "IT Company in Neem Ka Thana",
    "IT Company in Phalodi",
    "IT Company in Salumbar",
    "IT Company in Sanchore",
    "IT Company in Shahpura",
    "IT Company in Deeg",
    "Software Development Rajasthan",
    "Mobile App Development Rajasthan",
    "React Native Expo App Development India",
    "Kotlin Android App Development Rajasthan",
    "SaaS Architecture and Web Apps",
    "Custom AI Chatbots RAG Rajasthan",
    "Best IT Startup Rajasthan",
    "ChittorTech Services and Projects"
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
    canonical: "/",
    languages: {
      "en-IN": "https://www.chittortech.online",
      "hi-IN": "https://www.chittortech.online"
    }
  },
  openGraph: {
    title: "ChittorTech | Best IT Company in Rajasthan | Elite Web & Mobile App Development",
    description: "ChittorTech is the leading IT startup in Rajasthan engineering custom web applications, SaaS booking systems, custom AI chatbots, and fluid cross-platform mobile apps.",
    url: "https://www.chittortech.online",
    siteName: "ChittorTech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/ChittorTech Banner.png",
        width: 1200,
        height: 630,
        alt: "ChittorTech | Empowering Businesses with Elite Digital Solutions"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "ChittorTech | Best IT Company & Web Development in Rajasthan",
    description: "Elite IT company in Rajasthan. Premium Web & E-Commerce systems, SaaS architectures, custom AI chatbots, and React Native Expo mobile apps.",
    images: ["/ChittorTech Banner.png"],
    creator: "@chittortech",
  },
  appleWebApp: {
    title: 'ChittorTech',
    statusBarStyle: 'black-translucent',
    startupImage: [
      '/icon.png',
    ],
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
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
};

import ClientLayout from "@/components/ClientLayout";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <LocalSchema />
      </head>
      <body className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
        {/* Google Analytics GA4 */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-F4DTYXCDZL" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
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
