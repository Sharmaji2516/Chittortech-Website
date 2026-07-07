"use client";

import Script from "next/script";

export default function LocalSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.chittortech.online/#organization",
        "name": "ChittorTech",
        "url": "https://www.chittortech.online",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.chittortech.online/icon.png",
          "width": 512,
          "height": 512
        },
        "sameAs": [
          "https://www.linkedin.com/company/chittortech",
          "https://www.instagram.com/chittortech",
          "https://twitter.com/chittortech",
          "https://www.facebook.com/chittortech"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-8233816674",
          "contactType": "customer service",
          "areaServed": "IN",
          "availableLanguage": ["English", "Hindi"]
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.chittortech.online/#localbusiness",
        "name": "ChittorTech - Best IT Company in Rajasthan",
        "description": "ChittorTech is the best IT company and premier web development agency operating in Chittorgarh, Udaipur, Bhilwara, Jaipur, Jodhpur, and across Rajasthan. We specialize in enterprise software, SEO, React Native apps, and AI solutions.",
        "url": "https://www.chittortech.online",
        "image": "https://www.chittortech.online/ChittorTech%20Banner.png",
        "telephone": "+91-8233816674",
        "email": "chittortech@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Chittorgarh Headquarters",
          "addressLocality": "Chittorgarh",
          "addressRegion": "Rajasthan",
          "postalCode": "312001",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "24.8887",
          "longitude": "74.6269"
        },
        "areaServed": [
          { "@type": "City", "name": "Chittorgarh" },
          { "@type": "City", "name": "Udaipur" },
          { "@type": "City", "name": "Bhilwara" },
          { "@type": "City", "name": "Jaipur" },
          { "@type": "City", "name": "Jodhpur" },
          { "@type": "City", "name": "Kota" },
          { "@type": "City", "name": "Ajmer" },
          { "@type": "State", "name": "Rajasthan" },
          { "@type": "Country", "name": "India" }
        ],
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "20:00"
        },
        "founder": {
          "@type": "Person",
          "name": "Kush Sharma",
          "url": "https://www.linkedin.com/in/kush-sharma-chittortech/"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "bestRating": "5",
          "ratingCount": "87"
        },
        "priceRange": "$$"
      },
      {
        "@type": "WebSite",
        "@id": "https://www.chittortech.online/#website",
        "url": "https://www.chittortech.online",
        "name": "ChittorTech",
        "description": "Elite IT Company & Software Development Agency in Rajasthan",
        "publisher": { "@id": "https://www.chittortech.online/#organization" },
        "inLanguage": "en-IN",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.chittortech.online/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Service",
        "@id": "https://www.chittortech.online/#service-web",
        "name": "Premium Web & E-Commerce Development",
        "provider": { "@id": "https://www.chittortech.online/#localbusiness" },
        "areaServed": { "@type": "State", "name": "Rajasthan" },
        "description": "High-performance web development, SaaS platforms, and enterprise e-commerce systems tailored for businesses in Udaipur, Chittorgarh, and Jaipur."
      },
      {
        "@type": "Service",
        "@id": "https://www.chittortech.online/#service-app",
        "name": "Mobile App Development (React Native & Kotlin)",
        "provider": { "@id": "https://www.chittortech.online/#localbusiness" },
        "areaServed": { "@type": "State", "name": "Rajasthan" },
        "description": "Fluid native and cross-platform mobile apps for iOS and Android built on React Native Expo and Kotlin."
      },
      {
        "@type": "Service",
        "@id": "https://www.chittortech.online/#service-seo",
        "name": "SEO & Digital Marketing Dominance",
        "provider": { "@id": "https://www.chittortech.online/#localbusiness" },
        "areaServed": { "@type": "State", "name": "Rajasthan" },
        "description": "Technical SEO, Google My Business optimization, and search ranking strategies making businesses the #1 in their region."
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.chittortech.online/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Which is the best IT company in Rajasthan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ChittorTech is recognized as the best IT company in Rajasthan, specializing in elite web development, mobile apps, SaaS systems, and digital marketing."
            }
          },
          {
            "@type": "Question",
            "name": "Does ChittorTech provide services in Udaipur and Bhilwara?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, ChittorTech is a leading IT agency providing custom software, app development, and SEO services heavily in Udaipur, Bhilwara, Jaipur, and Chittorgarh."
            }
          },
          {
            "@type": "Question",
            "name": "What software technologies does ChittorTech use?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We build highly scalable architectures using Next.js, React Native Expo, Kotlin, Node.js, and advanced AI RAG integrations."
            }
          }
        ]
      }
    ]
  };

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
