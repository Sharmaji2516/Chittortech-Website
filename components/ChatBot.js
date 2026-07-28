"use client";

import React, { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ChatBot({ onModalOpen }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [language, setLanguage] = useState('en'); 
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [userInfo, setUserInfo] = useState(null);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadData, setLeadData] = useState({ name: '', email: '', phone: '', consent: false });
  const [locationError, setLocationError] = useState(null);
  
  // Cookie Helper Functions
  const setCookie = (name, value, days = 3650) => {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "; expires=" + date.toUTCString();
    document.cookie = name + "=" + (JSON.stringify(value) || "") + expires + "; path=/; SameSite=Lax";
  };

  const getCookie = (name) => {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) {
        try {
          return JSON.parse(c.substring(nameEQ.length, c.length));
        } catch (e) {
          return null;
        }
      }
    }
    return null;
  };
  
  const getGreeting = () => {
    const path = pathname || '';
    if (path.includes('/services')) return "Welcome to our Solutions Hub! I see you're looking to engineer excellence. How can I help you explore our AI services?";
    if (path.includes('/contact')) return "Ready to build something great? I can help you with any questions before you reach out to Kush or Lav!";
    if (path.includes('/about')) return "Curious about the vision behind ChittorTech? I'd love to share more about our AI-First engineering philosophy.";
    return "Hello! I'm the ChittorTech Principal AI Assistant. How can I assist you with our digital products today?";
  };

  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [locating, setLocating] = useState(false);
  const messagesEndRef = useRef(null);
  const chatbotRef = useRef(null);

  // Initialize messages from localStorage or default greeting on mount
  useEffect(() => {
    const savedMessages = localStorage.getItem("chittortech_chat_history");
    let parsedMessages = [];
    if (savedMessages) {
      try { parsedMessages = JSON.parse(savedMessages); } catch (e) {}
    }
    
    if (Array.isArray(parsedMessages) && parsedMessages.length > 1) {
      setMessages(parsedMessages);
      setShowSuggestions(false);
    } else {
      setMessages([{ 
        role: "ai", 
        content: getGreeting(),
        isSystem: true 
      }]);
      setShowSuggestions(true);
    }
    setIsInitialized(true);
  }, []); // Run only once on mount

  // Update greeting and suggestions on every page change
  useEffect(() => {
    if (!pathname || !isInitialized) return;
    
    // Only show greeting/suggestions if it's a fresh start or first message
    if (messages.length <= 1) {
      setMessages([{ 
        role: "ai", 
        content: getGreeting(),
        isSystem: true 
      }]);
      setShowSuggestions(true);
    }
  }, [pathname, isInitialized]);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem("chittortech_chat_history", JSON.stringify(messages));
    }
  }, [messages]);

  // Load user info from localStorage or Cookies (Multi-layered persistence)
  useEffect(() => {
    // 1. Try LocalStorage first
    const savedUserLocal = localStorage.getItem("chittortech_user_lead");
    if (savedUserLocal) {
      try { 
        const parsed = JSON.parse(savedUserLocal);
        if (parsed && parsed.name) {
          setUserInfo(parsed);
          return;
        }
      } catch (e) {}
    }

    // 2. Fallback to Cookie (more persistent on mobile)
    const savedUserCookie = getCookie("chittortech_user_lead_v2");
    if (savedUserCookie && savedUserCookie.name) {
      setUserInfo(savedUserCookie);
      // Sync back to localStorage if it was missing
      localStorage.setItem("chittortech_user_lead", JSON.stringify(savedUserCookie));
    }
  }, []);

  const resetChat = () => {
    localStorage.removeItem("chittortech_chat_history");
    setMessages([{ 
      role: "ai", 
      content: getGreeting(),
      isSystem: true 
    }]);
    setShowSuggestions(true);
  };

  const path = pathname || '';
  const suggestions = path.includes('/services') 
    ? ["AI Content Systems", "Hospitality Hubs", "Enterprise Web"]
    : path.includes('/contact')
    ? ["Call Kush Sharma", "Email Support", "WhatsApp Us"]
    : ["What is ChittorTech?", "View Services", "Talk to Founder"];

  const [isListening, setIsListening] = useState(false);

  const startVoiceInput = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Voice recognition is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = language === 'hi' ? 'hi-IN' : 'en-US';
    
    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
    };

    recognition.start();
  };

  const handleSuggestion = (text) => {
    setInput(text);
    handleSend(text);
  };

  useEffect(() => {
    console.log("ChatBot component mounted");
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      if (messages.length > 1) {
        scrollToBottom();
      } else {
        const messagesContainer = document.querySelector('.chatbot-messages');
        if (messagesContainer) {
          messagesContainer.scrollTop = 0;
        }
      }
    }
  }, [isOpen, messages]);



  useEffect(() => {
    function handleClickOutside(event) {
      if (chatbotRef.current && !chatbotRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);


  const requestLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    setLocating(true);
    setLocationError(null);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLeadData(prev => ({
          ...prev,
          shareLocation: true,
          coords: { lat: latitude, lng: longitude },
          locationString: `Precise: ${latitude.toFixed(4)}, ${longitude.toFixed(4)}`
        }));
        setLocating(false);
        setLocationError(null);
      },
      (error) => {
        setLocating(false);
        if (error.code === 1) {
          setLocationError("Location Permission Denied. Please enable permissions in your browser settings to share your precise location.");
        } else {
          setLocationError("Unable to retrieve location. Please check your signal or try again.");
        }
        setLeadData(prev => ({ ...prev, shareLocation: false }));
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  };

  const saveLeadToFirestore = async (data) => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    try {
      const { db } = await import("@/lib/firebase");
      const { collection, addDoc } = await import("firebase/firestore");
      
      let location = "Not Shared";
      if (data.shareLocation) {
        if (data.coords) {
          // Use precise coordinates if available
          location = `https://www.google.com/maps?q=${data.coords.lat},${data.coords.lng}`;
        } else {
          // Fallback to IP lookup if needed
          try {
            const locRes = await fetch('https://ipapi.co/json/');
            const locData = await locRes.json();
            location = `${locData.city}, ${locData.region}, ${locData.country_name} (IP-based)`;
          } catch (e) {
            location = "Error fetching location";
          }
        }
      }

      const userObj = { name: data.name, email: data.email, phone: data.phone };
      
      // PERSIST IMMEDIATELY (Don't wait for Firestore to finish)
      // Layer 1: LocalStorage
      localStorage.setItem("chittortech_user_lead", JSON.stringify(userObj));
      // Layer 2: 10-Year Cookie (Resistant to mobile storage eviction)
      setCookie("chittortech_user_lead_v2", userObj, 3650);
      
      setUserInfo(userObj);
      setShowLeadForm(false);

      // Notify founders & customer via EmailJS
      import('@/lib/email-service').then(m => {
        m.sendChatbotLeadEmail({
          name: data.name,
          email: data.email,
          phone: data.phone,
          location
        }).catch(err => console.error("Email notification failed:", err));
      });

      // Now sync to Firestore in background
      await addDoc(collection(db, "chatbot_leads"), {
        name: data.name,
        email: data.email || "N/A",
        phone: data.phone || "N/A",
        location,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        source: window.location.href
      });
      
    } catch (error) {
      console.error("Error saving lead:", error);
      // If Firestore fails but we have the user locally, we don't alert the user
      // to avoid breaking the chat experience. We can retry later or rely on logs.
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSend = async (customMessage = null) => {
    // If customMessage is an event object (from onClick), ignore it and use input
    const messageText = (typeof customMessage === 'string' ? customMessage : null) || input;
    if (!messageText || typeof messageText !== 'string' || !messageText.trim() || isLoading) return;

    setShowSuggestions(false);
    const userMessage = { role: "user", content: messageText.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    const groqKey = process.env.NEXT_PUBLIC_GROQ_API_KEY;

    if (groqKey) {
      try {
        const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${groqKey}`
          },
          body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: [
              {
                role: "system",
                content: `You are the official ChittorTech Principal AI Assistant for ChittorTech.

STRICT BOUNDARY & RESTRICTION RULE:
- You MUST ONLY answer questions strictly related to ChittorTech company, its web & mobile services, digital products, portfolio projects, founders (Kush Sharma & Lav Sharma), contact information, pricing, and internship applications.
- If the user asks ANY general knowledge, general coding, politics, math, jokes, or unrelated off-topic questions (e.g. "Who is the Prime Minister?", "Write Python code for snake game", "What is quantum physics?"), politely decline by stating: "I am ChittorTech's official AI assistant. I can only assist you with questions regarding ChittorTech services, digital products, portfolio projects, and founder inquiries. How can I help you with ChittorTech today?"
- NEVER break character. Maintain an elite, high-end engineering tone.

CHITTORTECH KNOWLEDGE BASE:
- Company Name: ChittorTech (Premier IT Startup & Digital Product Engineering Agency).
- Location: Chittorgarh, Rajasthan, India.
- Founders: Kush Sharma (Founder) & Lav Sharma (Co-Founder).
- Email: chittortech@gmail.com
- Core Services: Web Development (Next.js, React, Node.js), Mobile App Development (React Native, iOS, Android), Custom AI Systems & RAG Chatbots, Cloud & SaaS Architecture.
- Key Projects: 
  1. AI Content & NotebookLLM Systems
  2. Mewari Achar E-Commerce (https://www.mewari-achar.shop/)
  3. Hospitality & Admin Hubs (https://dharamsala-admin-portal.vercel.app/)
  4. Shaadi Sutra Event SaaS (https://shaadi-sutra.vercel.app/)
  5. MailPulse Elite Bulk Email Engine
- Contact Link: [Contact Us](https://chittortech.online/contact)
- Internship Link: [Apply for Internship](https://chittortech.online/internship/apply)`
              },
              ...messages.map(m => ({ role: m.role === 'ai' ? 'assistant' : 'user', content: m.content })),
              userMessage
            ],
            temperature: 0.7,
            max_tokens: 512
          })
        });

        if (res.ok) {
          const data = await res.json();
          const aiReply = data.choices[0].message.content;
          setMessages((prev) => [...prev, { role: "ai", content: aiReply }]);
          setIsLoading(false);
          return;
        }
      } catch (e) {
        console.warn("Groq API Fallback to Knowledge Engine:", e);
      }
    }

    // Knowledge Engine Fallback
    setTimeout(() => {
      const getAIResponse = (userText) => {
        const text = userText.toLowerCase();

        if (text.includes("hi") || text.includes("hello") || text.includes("hey") || text.includes("namaste") || text.includes("hieee")) {
          return "Hello! I'm the ChittorTech Principal AI Assistant. How can I assist you with our digital products, services, or founders today?";
        }

        if (text.includes("founder") || text.includes("kush") || text.includes("lav") || text.includes("contact") || text.includes("owner") || text.includes("team") || text.includes("email") || text.includes("phone")) {
          return "ChittorTech was founded by Kush Sharma (Founder) & Lav Sharma (Co-Founder).\n\n📍 Location: Chittorgarh, Rajasthan, India\n📧 Email: chittortech@gmail.com\n\n[Contact Us Directly](https://chittortech.online/contact)";
        }

        if (text.includes("service") || text.includes("web") || text.includes("app") || text.includes("ai") || text.includes("build") || text.includes("develop") || text.includes("software")) {
          return "ChittorTech provides elite digital engineering services:\n\n1. Web Application Development (Next.js, React, Node.js)\n2. Mobile App Development (React Native, iOS & Android)\n3. Custom AI Integration & RAG Chatbots\n4. Cloud & SaaS Infrastructure\n\n[Explore Our Services](https://chittortech.online/services)";
        }

        if (text.includes("project") || text.includes("portfolio") || text.includes("work") || text.includes("demo") || text.includes("client")) {
          return "Here are some of ChittorTech's featured live projects:\n\n1. AI Content & NotebookLLM Systems\n[View Services](https://chittortech.online/services)\n\n2. Mewari Achar E-Commerce\n[View Live](https://www.mewari-achar.shop/)\n\n3. Hospitality & Admin Hubs\n[View Live](https://dharamsala-admin-portal.vercel.app/)\n\n4. Shaadi Sutra Event SaaS\n[View Live](https://shaadi-sutra.vercel.app/)\n\n[View All Projects](https://chittortech.online/projects)";
        }

        if (text.includes("intern") || text.includes("job") || text.includes("career") || text.includes("apply") || text.includes("hiring")) {
          return "We offer exciting engineering internships across Web Development, Mobile Apps, and AI Systems!\n\n[Apply for Internship](https://chittortech.online/internship/apply)";
        }

        if (text.includes("price") || text.includes("cost") || text.includes("rate") || text.includes("quote")) {
          return "Every project is custom-engineered to meet your exact business goals. Reach out to Kush & Lav Sharma for a free strategy session & quote!\n\n[Get a Free Quote](https://chittortech.online/contact)";
        }

        return "ChittorTech specializes in engineering high-end web applications, mobile apps, and custom AI automation for modern businesses.\n\nWould you like to explore our services or speak directly with our founders?\n\n[Talk to Founders](https://chittortech.online/contact)";
      };

      const reply = getAIResponse(messageText);
      setMessages((prev) => [
        ...prev,
        { role: "ai", content: reply },
      ]);
      setIsLoading(false);
    }, 400);
  };

  return (
    <>
      {/* Background Blur Overlay */}
      <div className={`chatbot-overlay ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(false)}></div>

      <div className="chatbot-container" ref={chatbotRef}>
        <button 
          className={`chatbot-fab ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close Chat Assistant" : "Open ChittorTech AI Assistant"}
          title={isOpen ? "Close Chat" : "Talk to ChittorTech AI"}
        >
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-comment-dots'}`}></i>
        </button>

      {/* Chat Window */}
      <div className={`chatbot-window ${isOpen ? 'open' : ''}`}>
        {showLeadForm ? (
          <div className="lead-form-wrapper">
            <div className="lead-form-container">
              {/* UI_RELOAD_FORCE: 2026-05-13_03:30 */}
              <button id="lead-back-btn-v3" className="lead-form-back" onClick={() => setIsOpen(false)} aria-label="Go Back" title="Go Back">
                <i className="fas fa-arrow-left"></i> <span>Back</span>
              </button>
              <div className="lead-form-header">
                <div className="lead-icon-wrapper">
                  <i className="fas fa-user-shield"></i>
                </div>
                <h3>Let's Get Started</h3>
                <p>Please introduce yourself to start the chat with our AI.</p>
              </div>
              <form onSubmit={(e) => {
                e.preventDefault();
                
                // 1. Name Validation
                if (!leadData.name || leadData.name.trim().length < 2) {
                  alert("Please enter your full name.");
                  return;
                }

                // 2. Strict Email Validation
                const email = leadData.email ? leadData.email.toLowerCase().trim() : '';
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                
                // Whitelist of allowed high-quality domains
                const allowedDomains = [
                  'gmail.com', 'yahoo.com', 'yahoo.co.in', 'outlook.com', 'hotmail.com', 
                  'live.com', 'icloud.com', 'me.com', 'zoho.com', 'zoho.in', 
                  'protonmail.com', 'ymail.com', 'googlemail.com'
                ];

                // Whitelist of allowed corporate/institutional TLDs
                const allowedTLDs = ['.co.in', '.edu.in', '.org.in', '.ac.in', '.gov.in'];
                
                if (email) {
                  if (!emailRegex.test(email)) {
                    alert("Please enter a valid email address.");
                    return;
                  }
                  
                  const domain = email.split('@')[1];
                  const isAllowedDomain = allowedDomains.includes(domain);
                  const isAllowedTLD = allowedTLDs.some(tld => domain.endsWith(tld));

                  if (!isAllowedDomain && !isAllowedTLD) {
                    alert(`"${domain}" is not a recognized email provider. Please use a common email (Gmail, Yahoo, etc.) or a professional business email.`);
                    return;
                  }
                }

                // 3. Phone Validation (10 Digits)
                const phone = leadData.phone ? leadData.phone.trim().replace(/\D/g, '') : '';
                if (phone) {
                  if (phone.length !== 10) {
                    alert("Please enter a valid 10-digit phone number.");
                    return;
                  }
                }

                // 4. Combined requirement
                if (!email && !phone) {
                  alert("Please provide at least an Email Address or Phone Number so we can reach you.");
                  return;
                }

                saveLeadToFirestore(leadData);
              }}>
                <div className="lead-input-group">
                  <i className="fas fa-user"></i>
                  <input 
                    type="text" 
                    placeholder="Full Name (Required)" 
                    required 
                    value={leadData.name}
                    onChange={(e) => setLeadData({...leadData, name: e.target.value})}
                  />
                </div>
                <div className="lead-input-group">
                  <i className="fas fa-envelope"></i>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    value={leadData.email}
                    onChange={(e) => setLeadData({...leadData, email: e.target.value})}
                  />
                </div>
                <div className="lead-input-group">
                  <i className="fas fa-phone"></i>
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    value={leadData.phone}
                    onChange={(e) => setLeadData({...leadData, phone: e.target.value})}
                  />
                </div>
                
                <div className="lead-location-toggle">
                  <label className="toggle-label">
                    <span>{locating ? 'Requesting Permission...' : 'Share Precise Location'}</span>
                    <input 
                      type="checkbox" 
                      checked={leadData.shareLocation || false}
                      onChange={(e) => {
                        if (e.target.checked) {
                          requestLocation();
                        } else {
                          setLeadData({...leadData, shareLocation: false, coords: null});
                          setLocationError(null);
                        }
                      }}
                      disabled={locating}
                    />
                  </label>
                  {locationError && (
                    <div className="location-error-badge">
                      <i className="fas fa-exclamation-triangle"></i> {locationError}
                    </div>
                  )}
                  {leadData.shareLocation && leadData.coords && (
                    <div className="location-success-badge">
                      <i className="fas fa-check-circle"></i> Precise Location Captured
                    </div>
                  ) }
                </div>

                <button type="submit" className="lead-submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>Initializing Chat <i className="fas fa-circle-notch fa-spin"></i></>
                  ) : (
                    <>Start Chat <i className="fas fa-arrow-right"></i></>
                  )}
                </button>
              </form>
            </div>
          </div>
        ) : (
          <>
            <div className="chatbot-header">
          <div className="chatbot-header-info">
            <div className="chatbot-avatar">
              <img src="/logo.png" alt="ChittorTech Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <div className="chatbot-header-text">
              <h4>ChittorTech AI</h4>
              <span>Principal AI Assistant</span>
            </div>
          </div>
          <div className="chatbot-header-actions">
            <button id="reset-btn" className="chatbot-reset-btn" onClick={resetChat} aria-label="Reset Chat History" title="Clear & Start New Chat">
              <i className="fas fa-trash-alt"></i>
            </button>
            <button id="close-btn" className="chatbot-close-btn" onClick={() => setIsOpen(false)} aria-label="Close Chat Window">
              <i className="fas fa-chevron-down"></i>
            </button>
          </div>
        </div>

        <div className="chatbot-messages">
          {messages.map((msg, index) => {
            // Function to parse markdown-style links into buttons
            const renderMessage = (content) => {
              const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
              const parts = content.split(linkRegex);
              
              if (parts.length === 1) return content;

              const elements = [];
              for (let i = 0; i < parts.length; i++) {
                if (i % 3 === 0) {
                  elements.push(parts[i]);
                } else if (i % 3 === 1) {
                  const text = parts[i];
                  const url = parts[i + 1];
                  elements.push(
                    <div key={i} className="message-btn-wrapper">
                      <a href={url} target="_blank" rel="noopener noreferrer" className="message-action-btn">
                        {text} <i className="fas fa-external-link-alt"></i>
                      </a>
                    </div>
                  );
                }
              }
              return elements;
            };

            return (
              <div key={index} className={`message ${msg.role}`}>
                {renderMessage(msg.content)}
              </div>
            );
          })}
          
          {/* Vertical Suggestion Buttons */}
          {!isLoading && showSuggestions && suggestions && (
            <div className="suggestion-vertical-menu">
              {suggestions.map((s, i) => (
                <button key={i} className="suggestion-btn" onClick={() => handleSuggestion(s)}>
                  {s} <i className="fas fa-chevron-right"></i>
                </button>
              ))}
            </div>
          )}

          {isLoading && (
            <div className="message ai typing">
              <div className="status-container">
                <span className="status-text">
                  {(() => {
                    const statuses = [
                      "Engineering Response...",
                      "Analyzing Architecture...",
                      "Synthesizing Solutions...",
                      "Optimizing Output...",
                      "Consulting Neural Core..."
                    ];
                    return statuses[Math.floor(Math.random() * statuses.length)];
                  })()}
                </span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="chatbot-disclaimer">
          <i className="fas fa-shield-alt"></i>
          <span>This AI bot can make mistakes. Please double-check information.</span>
        </div>
        <div className="chatbot-input-area">
          <input
            type="text"
            className="chatbot-input"
            placeholder="Ask about our services..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
          />
          <button 
            className="chatbot-send" 
            onClick={() => handleSend()}
            disabled={!input.trim() || isLoading}
            aria-label="Send Message"
          >
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </>
    )}
    </div>
  </div>
</>
  );
}
