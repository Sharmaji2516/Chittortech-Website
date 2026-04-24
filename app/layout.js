import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import { AuthProvider } from "@/components/AuthContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata = {
  title: "ChittorTech | Architectural Digital Solutions",
  description: "Specialized in delivering premium, high-end digital experiences for architectural and construction firms.",
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientLayout from "@/components/ClientLayout";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <AuthProvider>
          <ClientLayout>
            <Navbar />
            {children}
            <Footer />
          </ClientLayout>
        </AuthProvider>
      </body>
    </html>
  );
}
