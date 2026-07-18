import React, { useState } from 'react';
import About from '../pages/About';
import Experience from '../pages/Experience';
import Projects from '../pages/Projects';
import Skills from '../pages/Skills';

export default function FloatingDeck({ weather }) {
  const [activeIdx, setActiveIdx] = useState(0);

  const tabs = [
    {
      label: 'About',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      )
    },
    {
      label: 'Experience',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      )
    },
    {
      label: 'Projects',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      )
    },
    {
      label: 'Skills',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      )
    }
  ];

  // Dynamic climate description message shown in sidebar
  const getClimateMessage = () => {
    switch (weather) {
      case 'rainy':
        return '⛈️ Monsoon rain shower in Hyderabad | 24°C';
      case 'hot':
        return '☀️ Extreme Heat advisory active | 41°C';
      case 'cold':
        return '❄️ Frosty winter chill | 14°C';
      default:
        return '🌤️ Clear, sunny day in Hyderabad | 30°C';
    }
  };

  return (
    <div style={styles.outerContainer}>
      <div 
        style={styles.card} 
        className={`glass-panel ${weather === 'hot' ? 'heat-distort' : ''}`}
      >
        {/* Sidebar Navigation */}
        <div style={styles.sidebar}>
          <div style={styles.brandBox}>
            <h2 style={styles.brandName}>Mukesh M.</h2>
            <div style={styles.climateTag} className="animate-fade">
              {getClimateMessage()}
            </div>
          </div>

          <nav style={styles.nav}>
            {tabs.map((tab, idx) => (
              <button
                key={tab.label}
                onClick={() => setActiveIdx(idx)}
                className={`nav-btn ${activeIdx === idx ? 'active' : ''}`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>

          {/* Socials / Action shortcuts */}
          <div style={styles.socialBox}>
            {/* Email link */}
            <a 
              href="mailto:2294mukeshmakineni@gmail.com" 
              title="Mail Me"
              className="float-btn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>

            {/* GitHub link */}
            <a 
              href="https://github.com/Mukesh2294" 
              target="_blank" 
              rel="noopener noreferrer"
              title="GitHub"
              className="float-btn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>

            {/* LinkedIn link */}
            <a 
              href="https://www.linkedin.com/in/mukesh-makineni-0b6b80284 " 
              target="_blank" 
              rel="noopener noreferrer"
              title="LinkedIn"
              className="float-btn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            {/* LeetCode link */}
            <a 
              href="takeuforward.org/profile/Mukeshmakineni" 
              target="_blank" 
              rel="noopener noreferrer"
              title="Leetcode Profile"
              className="float-btn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="4 17 10 11 20 21" />
                <polyline points="20 9 14 15 4 5" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            </a>
          </div>
        </div>

        {/* Sliding Viewport area */}
        <div style={styles.viewport}>
          <div 
            className="slider-container"
            style={{ transform: `translateX(-${activeIdx * 100}%)` }}
          >
            <About />
            <Experience />
            <Projects />
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  outerContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    zIndex: 10,
  },
  card: {
    width: '100%',
    maxWidth: '1050px',
    height: '80vh',
    borderRadius: 'var(--radius-lg)',
    display: 'grid',
    gridTemplateColumns: '260px 1fr',
    overflow: 'hidden',
  },
  sidebar: {
    borderRight: '1px solid var(--border-color)',
    padding: '2.5rem 1.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(11, 15, 25, 0.25)',
  },
  brandBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
  },
  brandName: {
    fontSize: '1.5rem',
    fontWeight: '800',
    fontFamily: 'var(--font-display)',
    letterSpacing: '-0.5px',
  },
  climateTag: {
    fontSize: '0.72rem',
    fontWeight: '600',
    color: 'var(--accent-color)',
    backgroundColor: 'var(--accent-glow)',
    padding: '0.3rem 0.6rem',
    borderRadius: '6px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
    margin: '2rem 0',
  },
  socialBox: {
    display: 'flex',
    gap: '0.6rem',
    justifyContent: 'center',
  },
  viewport: {
    overflow: 'hidden',
    position: 'relative',
    height: '100%',
    backgroundColor: 'rgba(15, 23, 42, 0.1)',
  }
};
