export default function LocalSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      // ============================================
      // 1. ORGANIZATION (Brand-level entity)
      // ============================================
      {
        "@type": "Organization",
        "@id": "https://www.chittortech.online/#organization",
        "name": "ChittorTech",
        "legalName": "ChittorTech IT Solutions",
        "url": "https://www.chittortech.online",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://www.chittortech.online/#logo",
          "url": "https://www.chittortech.online/icon.png",
          "contentUrl": "https://www.chittortech.online/icon.png",
          "width": 512,
          "height": 512,
          "caption": "ChittorTech Logo"
        },
        "image": { "@id": "https://www.chittortech.online/#logo" },
        "description": "ChittorTech is the best IT company in Chittorgarh, Rajasthan. We engineer premium websites, SaaS platforms, mobile apps, and custom AI chatbots for businesses across Rajasthan and India.",
        "foundingDate": "2024",
        "foundingLocation": {
          "@type": "Place",
          "name": "Chittorgarh, Rajasthan, India"
        },
        "numberOfEmployees": {
          "@type": "QuantitativeValue",
          "value": 10
        },
        "sameAs": [
          "https://www.linkedin.com/company/chittortech",
          "https://www.instagram.com/chittortech",
          "https://twitter.com/chittortech",
          "https://www.facebook.com/chittortech",
          "https://github.com/Sharmaji2516",
          "https://www.crunchbase.com/organization/chittortech"
        ],
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+91-8233816674",
            "contactType": "customer service",
            "areaServed": ["IN", "Rajasthan"],
            "availableLanguage": ["English", "Hindi"],
            "hoursAvailable": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "09:00",
              "closes": "20:00"
            }
          },
          {
            "@type": "ContactPoint",
            "email": "chittortech@gmail.com",
            "contactType": "sales",
            "areaServed": "IN",
            "availableLanguage": ["English", "Hindi"]
          }
        ],
        "award": "iStart Rajasthan Approved Startup",
        "knowsAbout": [
          "Web Development",
          "Mobile App Development",
          "SaaS Architecture",
          "Artificial Intelligence",
          "Search Engine Optimization",
          "E-Commerce Development",
          "React Native",
          "Next.js",
          "Kotlin Android"
        ]
      },

      // ============================================
      // 2. LOCAL BUSINESS (Map / GMB entity)
      // ============================================
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": "https://www.chittortech.online/#localbusiness",
        "name": "ChittorTech – Best IT Company in Chittorgarh & Rajasthan",
        "alternateName": "ChittorTech IT Solutions",
        "description": "ChittorTech is the best IT company in Chittorgarh, Udaipur, Bhilwara, Jaipur and across Rajasthan. We specialize in custom web development, React Native & Kotlin mobile apps, SaaS platforms, AI chatbots (RAG), e-commerce systems, and local SEO. iStart Rajasthan approved MSME startup.",
        "url": "https://www.chittortech.online",
        "image": [
          "https://www.chittortech.online/ChittorTech%20Banner.png",
          "https://www.chittortech.online/icon.png"
        ],
        "logo": "https://www.chittortech.online/icon.png",
        "telephone": "+91-8233816674",
        "email": "chittortech@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Chittorgarh",
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
        "hasMap": "https://maps.google.com/?q=Chittorgarh,Rajasthan,India",
        "areaServed": [
          { "@type": "Place", "name": "World" },
          { "@type": "Country", "name": "United States", "sameAs": "https://en.wikipedia.org/wiki/United_States" },
          { "@type": "Country", "name": "United Kingdom", "sameAs": "https://en.wikipedia.org/wiki/United_Kingdom" },
          { "@type": "Country", "name": "Canada", "sameAs": "https://en.wikipedia.org/wiki/Canada" },
          { "@type": "Country", "name": "United Arab Emirates", "sameAs": "https://en.wikipedia.org/wiki/United_Arab_Emirates" },
          { "@type": "Country", "name": "Australia", "sameAs": "https://en.wikipedia.org/wiki/Australia" },
          { "@type": "Country", "name": "Germany", "sameAs": "https://en.wikipedia.org/wiki/Germany" },
          { "@type": "Country", "name": "Singapore", "sameAs": "https://en.wikipedia.org/wiki/Singapore" },
          { "@type": "Country", "name": "Saudi Arabia", "sameAs": "https://en.wikipedia.org/wiki/Saudi_Arabia" },
          { "@type": "Country", "name": "Qatar", "sameAs": "https://en.wikipedia.org/wiki/Qatar" },
          { "@type": "Country", "name": "India", "sameAs": "https://en.wikipedia.org/wiki/India" },
          { "@type": "City", "name": "Chittorgarh", "sameAs": "https://en.wikipedia.org/wiki/Chittorgarh" },
          { "@type": "City", "name": "Udaipur", "sameAs": "https://en.wikipedia.org/wiki/Udaipur" },
          { "@type": "City", "name": "Bhilwara", "sameAs": "https://en.wikipedia.org/wiki/Bhilwara" },
          { "@type": "City", "name": "Jaipur", "sameAs": "https://en.wikipedia.org/wiki/Jaipur" },
          { "@type": "State", "name": "Rajasthan", "sameAs": "https://en.wikipedia.org/wiki/Rajasthan" }
        ],
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "00:00",
            "closes": "23:59"
          }
        ],
        "founder": {
          "@type": "Person",
          "@id": "https://www.chittortech.online/#founder",
          "name": "Kush Sharma",
          "jobTitle": "Founder & CEO",
          "url": "https://www.linkedin.com/in/kush-sharma-chittortech/",
          "sameAs": "https://www.linkedin.com/in/kush-sharma-chittortech/"
        },
        "parentOrganization": { "@id": "https://www.chittortech.online/#organization" },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": "87",
          "reviewCount": "87"
        },
        "priceRange": "$$",
        "currenciesAccepted": "USD, GBP, EUR, AED, CAD, AUD, INR",
        "paymentAccepted": "Credit Card, Debit Card, Wire Transfer, International Cards, PayPal, UPI, Net Banking",
        "isAccessibleForFree": false,
        "knowsAbout": [
          "Web Development Rajasthan",
          "Mobile App Development Rajasthan",
          "SaaS Development India",
          "AI Chatbot Development",
          "SEO Services Rajasthan",
          "E-Commerce Development"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "ChittorTech IT Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Website Development",
                "description": "Custom, high-performance websites using Next.js & React for businesses in Rajasthan."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Mobile App Development",
                "description": "React Native (Expo) & Kotlin Android apps for iOS and Android platforms."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "E-Commerce Development",
                "description": "Full-featured online stores with payment gateway integration for Rajasthan businesses."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AI Chatbot Development",
                "description": "Custom RAG-powered AI chatbots using LangChain, OpenAI & Groq for business automation."
              }
            }
          ]
        }
      },

      // ============================================
      // 3. WEBSITE
      // ============================================
      {
        "@type": "WebSite",
        "@id": "https://www.chittortech.online/#website",
        "url": "https://www.chittortech.online",
        "name": "ChittorTech",
        "description": "Best IT Company & Software Development Agency in Chittorgarh, Rajasthan",
        "publisher": { "@id": "https://www.chittortech.online/#organization" },
        "inLanguage": "en-IN",
        "copyrightYear": "2024",
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://www.chittortech.online/search?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      },

      // ============================================
      // 4. WEB PAGE (Home Page)
      // ============================================
      {
        "@type": "WebPage",
        "@id": "https://www.chittortech.online/#webpage",
        "url": "https://www.chittortech.online",
        "name": "ChittorTech | Best IT Company in Chittorgarh & Rajasthan",
        "isPartOf": { "@id": "https://www.chittortech.online/#website" },
        "about": { "@id": "https://www.chittortech.online/#localbusiness" },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://www.chittortech.online/ChittorTech%20Banner.png"
        },
        "inLanguage": "en-IN",
        "breadcrumb": { "@id": "https://www.chittortech.online/#breadcrumb" }
      },

      // ============================================
      // 5. BREADCRUMB (Home)
      // ============================================
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.chittortech.online/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.chittortech.online"
          }
        ]
      },

      // ============================================
      // 6. SERVICES (Individual ProfessionalService schemas)
      // ============================================
      {
        "@type": ["Service", "ProfessionalService"],
        "@id": "https://www.chittortech.online/#service-web",
        "name": "Premium Web & E-Commerce Development",
        "serviceType": "Web Development",
        "provider": { "@id": "https://www.chittortech.online/#localbusiness" },
        "areaServed": [
          { "@type": "State", "name": "Rajasthan" },
          { "@type": "City", "name": "Chittorgarh" },
          { "@type": "City", "name": "Udaipur" },
          { "@type": "City", "name": "Jaipur" },
          { "@type": "City", "name": "Bhilwara" }
        ],
        "description": "High-performance websites, SaaS platforms, and enterprise e-commerce systems using Next.js, React, Node.js & Firebase. Tailored for businesses in Chittorgarh, Udaipur, Jaipur & Bhilwara.",
        "url": "https://www.chittortech.online/services"
      },
      {
        "@type": ["Service", "ProfessionalService"],
        "@id": "https://www.chittortech.online/#service-app",
        "name": "Mobile App Development (React Native & Kotlin)",
        "serviceType": "Mobile Application Development",
        "provider": { "@id": "https://www.chittortech.online/#localbusiness" },
        "areaServed": [
          { "@type": "State", "name": "Rajasthan" },
          { "@type": "Country", "name": "India" }
        ],
        "description": "Fluid native and cross-platform mobile apps for iOS and Android built on React Native Expo and Kotlin. Fast delivery, offline support, and clean UI.",
        "url": "https://www.chittortech.online/services"
      },
      {
        "@type": ["Service", "ProfessionalService"],
        "@id": "https://www.chittortech.online/#service-ai",
        "name": "Custom AI Chatbot & Automation Development",
        "serviceType": "Artificial Intelligence Solutions",
        "provider": { "@id": "https://www.chittortech.online/#localbusiness" },
        "areaServed": [
          { "@type": "Country", "name": "India" }
        ],
        "description": "Bespoke RAG-powered AI chatbots using LangChain, OpenAI GPT, and Groq. Integrated with Firebase and REST APIs for intelligent business automation.",
        "url": "https://www.chittortech.online/services"
      },
      {
        "@type": ["Service", "ProfessionalService"],
        "@id": "https://www.chittortech.online/#service-seo",
        "name": "SEO & Digital Marketing Dominance",
        "serviceType": "Search Engine Optimization",
        "provider": { "@id": "https://www.chittortech.online/#localbusiness" },
        "areaServed": [
          { "@type": "State", "name": "Rajasthan" },
          { "@type": "City", "name": "Chittorgarh" },
          { "@type": "City", "name": "Udaipur" }
        ],
        "description": "Technical SEO, Google My Business optimization, and local search ranking strategies to make businesses the #1 result in their region across Rajasthan.",
        "url": "https://www.chittortech.online/services"
      },

      // ============================================
      // 7. PERSON (Founder)
      // ============================================
      {
        "@type": "Person",
        "@id": "https://www.chittortech.online/#founder",
        "name": "Kush Sharma",
        "jobTitle": "Founder & CEO",
        "description": "Founder of ChittorTech, Rajasthan's leading IT startup. Software engineer specializing in Next.js, React Native, and AI solutions.",
        "url": "https://www.linkedin.com/in/kush-sharma-chittortech/",
        "sameAs": [
          "https://www.linkedin.com/in/kush-sharma-chittortech/",
          "https://github.com/Sharmaji2516"
        ],
        "worksFor": { "@id": "https://www.chittortech.online/#organization" },
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "University of Rajasthan"
        },
        "knowsAbout": ["Next.js", "React Native", "Node.js", "Firebase", "AI Development", "LangChain"]
      },

      // ============================================
      // 8. FAQ PAGE (expanded, high-intent questions)
      // ============================================
      {
        "@type": "FAQPage",
        "@id": "https://www.chittortech.online/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Which is the best IT company in Chittorgarh?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ChittorTech is the best IT company in Chittorgarh, Rajasthan. We specialize in web development, mobile app development, SaaS platforms, AI chatbots, and digital marketing. We are an iStart Rajasthan approved and MSME registered startup."
            }
          },
          {
            "@type": "Question",
            "name": "Which is the best web development company in Udaipur?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ChittorTech is the top-rated web development company serving Udaipur. We build high-performance business websites, e-commerce platforms, and SaaS applications for businesses in Udaipur and the Mewar region."
            }
          },
          {
            "@type": "Question",
            "name": "Does ChittorTech offer mobile app development in Rajasthan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, ChittorTech offers full-stack mobile app development across Rajasthan, including React Native (Expo) cross-platform apps and native Kotlin Android apps. We serve clients in Chittorgarh, Udaipur, Jaipur, Bhilwara and across India."
            }
          },
          {
            "@type": "Question",
            "name": "What is the cost of website development in Rajasthan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ChittorTech offers premium website development at affordable prices starting from ₹15,000. We provide custom business websites, e-commerce portals, and SaaS platforms tailored to your budget. Contact us for a free consultation and exact quote."
            }
          },
          {
            "@type": "Question",
            "name": "Is ChittorTech approved by iStart Rajasthan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, ChittorTech is an officially approved startup under the iStart Rajasthan program and is also registered as an MSME. This makes us a government-recognized, reliable IT partner for businesses in Rajasthan."
            }
          },
          {
            "@type": "Question",
            "name": "Does ChittorTech offer IT internships in Rajasthan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, ChittorTech offers IT internship programs for students in Rajasthan. Interns get hands-on experience in Next.js, React Native, Node.js, and AI development, plus a verified internship certificate."
            }
          },
          {
            "@type": "Question",
            "name": "What technologies does ChittorTech use for development?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ChittorTech uses Next.js, React, Tailwind CSS, Node.js, Firebase, MongoDB, React Native (Expo), Kotlin, LangChain, OpenAI GPT, and Groq for building highly scalable and modern digital products."
            }
          },
          {
            "@type": "Question",
            "name": "Which is the best IT company in Bhilwara?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ChittorTech serves businesses in Bhilwara with elite web development, mobile app development, and digital marketing services. As the leading IT agency in the Mewar division, we help Bhilwara-based businesses go digital and scale online."
            }
          }
        ]
      },

      // ============================================
      // 9. EVENT (Internship — helps with Google indexing of structured programs)
      // ============================================
      {
        "@type": "Course",
        "@id": "https://www.chittortech.online/#internship-course",
        "name": "IT Internship Program – Web & App Development",
        "description": "ChittorTech's hands-on IT internship program in Chittorgarh, Rajasthan. Learn Next.js, React Native, Node.js, Firebase & AI development. Earn a verified internship certificate.",
        "provider": { "@id": "https://www.chittortech.online/#organization" },
        "url": "https://www.chittortech.online/internship",
        "inLanguage": "en-IN",
        "courseCode": "CT-INTERN-2025",
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": "ONLINE",
          "instructor": { "@id": "https://www.chittortech.online/#founder" }
        }
      }
    ]
  };

  return (
    <script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
