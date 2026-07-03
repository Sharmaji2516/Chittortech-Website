import React from 'react';
import Link from 'next/link';

const reviews = [
  {
    name: "Vijay Laxmi Sharma",
    role: "Founder, Mewari Achaar",
    text: "ChittorTech has developed the app and website system for Mewari Achaar with a modern and professional digital experience. Their services are best-in-class, highly supportive for local vendors and businesses, and delivered at very reasonable pricing.",
    stars: 5,
  },
  {
    name: "Kush",
    role: "Founder, Shaadi Sutra",
    text: "ChittorTech developed the website and application system for Shaadi Sutra with a smooth and modern user experience. The platform includes wedding planning tools, vendor management, budget tracking, event coordination, and management features that make wedding organization simple and efficient.",
    stars: 5,
  },
  {
    name: "Ayush Sharma",
    role: "AI Product Manager, BrowserStack",
    text: "Really happy to see ChittorTech growing and achieving great things. The team has always been supportive, helpful, and inspiring, and their guidance and dedication towards technology and innovation are truly commendable. Wishing the entire ChittorTech team lots of success, growth, and many more achievements in the future ahead!",
    stars: 5,
  },
  {
    name: "Tahir Hussain",
    role: "Ecosystem Mentor, iStart Rajasthan",
    text: "As a mentor associated with the ecosystem, I am happy to see ChittorTech growing as a promising registered startup. The team is doing remarkable work in the field of technology and digital innovation while creating positive impact at the local level. Chittor tech is well known platform, reliable service.",
    stars: 5,
  },
  {
    name: "Siddhi Sharma",
    role: "College Junior",
    text: "Excellent service and a great experience overall! The team at ChittorTech is professional, responsive, and very supportive. Their work quality, communication, and dedication is really impressive. Highly recommended for anyone looking for reliable tech services and learning opportunities.",
    stars: 5,
  },
  {
    name: "Muskan Sisodia",
    role: "College Junior",
    text: "Proud to see my senior building an innovative startup like ChittorTech. It's inspiring to watch someone from our own circle work with such dedication, vision, and passion toward technology and digital innovation. Wishing him and the entire team great success, growth, and all the very best for the future ahead! 🚀",
    stars: 5,
  },
  {
    name: "Nisha Singh",
    role: "Sister",
    text: "As an elder sister, I feel truly proud to see my brother building something so meaningful through ChittorTech. His dedication, determination, and passion for creating innovative digital solutions are really inspiring. Watching him grow and work towards his dreams brings immense happiness to our family.",
    stars: 5,
  },
  {
    name: "Muskan Falwaria",
    role: "College Classmate",
    text: "It's amazing to see classmates building something so impactful through ChittorTech. Their creativity, consistency, and modern approach towards technology truly make them stand out. Wishing the team more growth, success, and recognition in the coming years! ✨🚀",
    stars: 5,
  },
  {
    name: "Priyanka Vyas",
    role: "School Junior",
    text: "Honestly, it feels really good to see your growth and how far you've come. Watching a friend work hard, improve, and achieve new things is something that truly makes me happy. You've been putting in great effort, and it's inspiring to see you growing with confidence.",
    stars: 5,
  }
];

export default function ReviewMarquee() {
  return (
    <section id="home-reviews" style={{ background: 'transparent', overflow: 'hidden', paddingBottom: '60px' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 className="section-title reveal" style={{ marginBottom: '4rem', color: 'var(--text-main)' }}>What People Say</h2>
      </div>

      <div style={{ position: 'relative', display: 'flex', width: '100%', overflow: 'hidden', padding: '10px 0' }}>
        {/* Gradients */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '15%', height: '100%', background: 'linear-gradient(to right, #ffffff, transparent)', zIndex: 2, pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '15%', height: '100%', background: 'linear-gradient(to left, #ffffff, transparent)', zIndex: 2, pointerEvents: 'none' }}></div>

        {/* Marquee Track */}
        <div className="reviews-marquee" style={{ display: 'flex', gap: '30px', paddingLeft: '30px', animation: 'scroll-left-reviews 120s linear infinite', alignItems: 'stretch' }}>
          {[...reviews, ...reviews].map((review, idx) => (
            <div key={idx} style={{ 
              width: '350px', 
              flexShrink: 0,
              background: '#ffffff', 
              border: '1px solid rgba(0, 62, 216, 0.08)', 
              borderRadius: '24px', 
              padding: '2rem', 
              display: 'flex', 
              flexDirection: 'column', 
              transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
              boxShadow: 'var(--shadow-soft)',
              cursor: 'pointer'
            }} 
            className="review-card"
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{ display: 'flex', gap: '4px', marginBottom: '1rem', color: '#FFD700' }}>
                {[...Array(review.stars)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, flexGrow: 1, fontStyle: 'italic', marginBottom: '1.5rem', whiteSpace: 'normal' }}>
                "{review.text}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid rgba(0, 62, 216, 0.05)', paddingTop: '1.5rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--gradient)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#ffffff', flexShrink: 0 }}>
                  {review.name.charAt(0)}
                </div>
                <div style={{ whiteSpace: 'normal' }}>
                  <h4 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)' }}>{review.name}</h4>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{review.role}</span>
                </div>
                <div style={{ marginLeft: 'auto', color: '#4285F4', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="fab fa-google"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '4rem' }} className="reveal">
        <Link href="/reviews" className="btn btn-outline" style={{ borderRadius: '50px' }}>View All Reviews</Link>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll-left-reviews {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .reviews-marquee:hover {
          animation-play-state: paused !important;
        }
        .review-card:hover {
          background: rgba(0, 62, 216, 0.01) !important;
          border-color: rgba(0, 62, 216, 0.15) !important;
          box-shadow: var(--shadow-glow) !important;
        }
      `}} />
    </section>
  );
}
