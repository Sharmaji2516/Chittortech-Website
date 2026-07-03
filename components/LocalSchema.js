"use client";

import Script from "next/script";

export default function LocalSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "ChittorTech",
    "image": "https://www.chittortech.online/icon.png",
    "@id": "https://www.chittortech.online",
    "url": "https://www.chittortech.online",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Chittorgarh", // Update with specific street if any
      "addressLocality": "Chittorgarh",
      "addressRegion": "Rajasthan",
      "postalCode": "312001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 24.8887, // Approx Chittorgarh coords
      "longitude": 74.6269
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "19:00"
    },
    "sameAs": [
      "https://www.linkedin.com/company/chittortech"
      // Add other social links here
    ],
    "description": "Leading IT Company in Chittorgarh providing top-tier web development, AI solutions, and software services.",
    "priceRange": "$$",
    "founder": {
      "@type": "Person",
      "name": "Kush Sharma",
      "url": "https://www.linkedin.com/in/kush-sharma-chittortech/"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "IT Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SaaS & Enterprise Systems"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Web & E-Commerce Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile & Cross-Platform App Development (Expo & Kotlin)"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO & Digital Marketing Services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Chatbots & Software Systems"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Value-Added IT Solutions (GMB, SSL, Business Email)"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "25"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Siddhi Sharma"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Excellent service and a great experience overall! The team at ChittorTech is professional, responsive, and very supportive. Their work quality, communication, and dedication is really impressive. Highly recommended for anyone looking for reliable tech services and learning opportunities."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Vijay Laxmi Sharma"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "ChittorTech has developed the app and website system for Mewari Achaar with a modern and professional digital experience. Their services are best-in-class, highly supportive for local vendors and businesses, and delivered at very reasonable pricing."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Tahir Hussain"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "As a mentor associated with the ecosystem, I am happy to see ChittorTech growing as a promising registered startup. The team is doing remarkable work in the field of technology and digital innovation while creating positive impact at the local level."
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
