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
    default: "ChittorTech | Best IT Company & Web Development Agency in Chittorgarh",
    template: "%s | ChittorTech"
  },
  description: "Leading IT company and web development agency in Chittorgarh, Rajasthan. We engineer premium websites, SaaS enterprise applications, custom AI Chatbots (RAG), and high-performance native Android & iOS mobile apps built on Expo and Kotlin.",
  keywords: [
    "IT Company in Chittorgarh",
    "Web Development in Chittorgarh",
    "Best Web Development Agency Rajasthan",
    "Mobile App Development Chittorgarh",
    "React Native Expo App Development India",
    "Kotlin Android App Development Chittorgarh",
    "SaaS Architecture and Web Apps",
    "Custom AI Chatbots RAG Rajasthan",
    "Best IT Startup Chittorgarh",
    "ChittorTech Services and Projects"
  ],
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "https://www.chittortech.online"
    }
  },
  openGraph: {
    title: "ChittorTech | Best IT Company in Chittorgarh | Elite Web & Mobile App Development",
    description: "ChittorTech is the leading IT startup in Chittorgarh engineering custom web applications, SaaS booking systems, custom AI chatbots, and fluid cross-platform mobile apps.",
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
    title: "ChittorTech | Best IT Company & Web Development in Chittorgarh",
    description: "Elite IT company in Chittorgarh. Premium Web & E-Commerce systems, SaaS architectures, custom AI chatbots, and React Native Expo mobile apps.",
    images: ["/ChittorTech Banner.png"]
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
