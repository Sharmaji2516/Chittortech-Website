import React from 'react';

const row1 = [
  { name: 'JavaScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'HTML5', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
  { name: 'CSS3', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
  { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Next.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg', color: '#003ED8' },
  { name: 'Kotlin', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg' },
  { name: 'Android SDK', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg' },
  { name: 'Expo Go', url: 'https://api.iconify.design/simple-icons:expo.svg', color: '#09090b' },
  { name: 'Tailwind CSS', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Firebase', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg' },
  { name: 'AntiGravity', url: 'https://api.iconify.design/lucide:bot.svg', color: '#003ED8' },
];

const row2 = [
  { name: 'Node.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'Express.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg', color: '#003ED8' },
  { name: 'MongoDB', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
  { name: 'SQL', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
  { name: 'Socket.IO', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg', color: '#003ED8' },
  { name: 'GitHub', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', color: '#09090b' },
  { name: 'VS Code', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
  { name: 'Vercel', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg', color: '#09090b' },
  { name: 'Lottie Animations', url: 'https://api.iconify.design/simple-icons:lottiefiles.svg', color: '#003ED8' },
  { name: 'LangChain', url: 'https://api.iconify.design/simple-icons:langchain.svg', color: '#003ED8' },
  { name: 'REST APIs', url: 'https://api.iconify.design/carbon:api.svg', color: '#003ED8' },
];

const allTech = [...row1, ...row2];

export default function TechStack() {
  return (
    <section className="tech-stack-section" style={{ padding: 'clamp(40px, 6vw, 80px) 0', background: '#fbfbfb', borderTop: '1px solid rgba(0, 62, 216, 0.05)', borderBottom: '1px solid rgba(0, 62, 216, 0.05)', overflow: 'hidden' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '3px', color: 'var(--text-muted)', fontWeight: '800' }}>
          Powered by Industry-Leading Technologies
        </h2>
      </div>

      <div className="tech-marquee-wrapper" style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '40px', overflow: 'hidden', width: '100%' }}>
        {/* Left and Right Gradients for smooth fade */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '15%', height: '100%', background: 'linear-gradient(to right, #fbfbfb, transparent)', zIndex: 2, pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '15%', height: '100%', background: 'linear-gradient(to left, #fbfbfb, transparent)', zIndex: 2, pointerEvents: 'none' }}></div>

        {/* Row 1 (Scrolling Left) */}
        <div className="tech-marquee" style={{ display: 'flex', gap: '80px', paddingLeft: '80px', animation: 'scroll-left 60s linear infinite', whiteSpace: 'nowrap', alignItems: 'center' }}>
          {[...row1, ...row1, ...row1].map((tech, index) => (
            <div key={index} className="tech-item" style={{ display: 'flex', alignItems: 'center', gap: '15px', filter: 'grayscale(0%)', transition: 'all 0.3s ease', opacity: 0.8 }}
                 onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'scale(1.1)'; }}
                 onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.8'; e.currentTarget.style.transform = 'scale(1)'; }}>
              {tech.color ? (
                <div style={{
                  width: '45px',
                  height: '45px',
                  backgroundColor: tech.color,
                  WebkitMaskImage: `url(${tech.url})`,
                  WebkitMaskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                  maskImage: `url(${tech.url})`,
                  maskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'center'
                }} />
              ) : (
                <img 
                  src={tech.url} 
                  alt={tech.name} 
                  style={{ 
                    height: '45px', 
                    width: 'auto'
                  }} 
                />
              )}
              <span style={{ color: 'var(--text-main)', fontSize: '1.2rem', fontWeight: '700', letterSpacing: '1px' }}>{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Row 2 (Scrolling Right) */}
        <div className="tech-marquee" style={{ display: 'flex', gap: '80px', paddingLeft: '80px', animation: 'scroll-right 60s linear infinite', whiteSpace: 'nowrap', alignItems: 'center' }}>
          {[...row2, ...row2, ...row2].map((tech, index) => (
            <div key={index} className="tech-item" style={{ display: 'flex', alignItems: 'center', gap: '15px', filter: 'grayscale(0%)', transition: 'all 0.3s ease', opacity: 0.8 }}
                 onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'scale(1.1)'; }}
                 onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.8'; e.currentTarget.style.transform = 'scale(1)'; }}>
              {tech.color ? (
                <div style={{
                  width: '45px',
                  height: '45px',
                  backgroundColor: tech.color,
                  WebkitMaskImage: `url(${tech.url})`,
                  WebkitMaskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                  maskImage: `url(${tech.url})`,
                  maskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'center'
                }} />
              ) : (
                <img 
                  src={tech.url} 
                  alt={tech.name} 
                  style={{ 
                    height: '45px', 
                    width: 'auto'
                  }} 
                />
              )}
              <span style={{ color: 'var(--text-main)', fontSize: '1.2rem', fontWeight: '700', letterSpacing: '1px' }}>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Grid (hidden on desktop) */}
      <div className="tech-mobile-grid">
        {allTech.map((tech, index) => (
          <div key={index} className="tech-item-mobile">
            {tech.color ? (
              <div style={{
                width: '40px',
                height: '40px',
                backgroundColor: tech.color,
                WebkitMaskImage: `url(${tech.url})`,
                WebkitMaskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center',
                maskImage: `url(${tech.url})`,
                maskSize: 'contain',
                maskRepeat: 'no-repeat',
                maskPosition: 'center'
              }} />
            ) : (
              <img 
                src={tech.url} 
                alt={tech.name} 
                style={{ 
                  height: '40px', 
                  width: 'auto'
                }} 
              />
            )}
            <span style={{ color: 'var(--text-main)', fontSize: '0.9rem', fontWeight: '700', letterSpacing: '0.5px', textAlign: 'center' }}>{tech.name}</span>
          </div>
        ))}
      </div>

      <div className="container" style={{ textAlign: 'center', marginTop: '30px' }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontStyle: 'italic', maxWidth: '600px', margin: '0 auto' }}>
          *Note: Logo colors are modified for aesthetic purposes only and do not represent official brand guidelines.
        </p>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .tech-mobile-grid {
          display: none;
        }

        @media (max-width: 768px) {
          .tech-marquee-wrapper {
            display: none !important;
          }
          .tech-mobile-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
            gap: 15px;
            padding: 0 20px;
          }
          .tech-item-mobile {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 12px;
            background: #ffffff;
            border: 1px solid rgba(0, 62, 216, 0.08);
            padding: 20px 10px;
            border-radius: 16px;
            box-shadow: var(--shadow-soft);
            transition: all 0.3s ease;
          }
        }

        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0); }
        }
      `}} />
    </section>
  );
}
