import React from 'react';

export default function About() {
  return (
    <div className="slider-panel">
      <div>
        <h3 style={styles.sub}>ABOUT ME</h3>
        <h1 style={styles.title}>Makineni Mukesh</h1>
        <p style={styles.tagline}>
          B.Tech in Electronics & Communication Engineering @ <span style={{ color: 'var(--accent-color)', fontWeight: '600' }}>NIT Patna (2026)</span>
        </p>
      </div>

      <div className="glass-panel" style={{ ...styles.section, ...styles.card, padding: '1.5rem', borderRadius: '12px' }}>
        <h4 style={styles.secTitle}>Professional Summary</h4>
        <p style={styles.body}>
          I am a passionate engineering student bridging the gap between Hardware Engineering and Artificial Intelligence. 
          With a solid foundation in Electronics & Communication and a deep focus on Computer Science, AI/ML pipelines, 
          and Web Development, I design and build software and firmware to solve complex real-world challenges.
        </p>
      </div>

      <div style={styles.grid}>
        <div className="glass-panel" style={styles.card}>
          <h4 style={styles.secTitle}>Education</h4>
          <h5 style={styles.cardHeader}>National Institute of Technology, Patna</h5>
          <p style={styles.cardSub}>Bachelor of Technology (B.Tech)</p>
          <p style={styles.cardSub}>Major: Electronics and Communication Engineering</p>
          <div style={styles.metaRow}>
            <span>Graduation: 2026</span>
            <span style={{ ...styles.badge, backgroundColor: 'var(--accent-glow)', color: 'var(--accent-color)' }}>
              CGPA: 7.59
            </span>
          </div>
        </div>

        <div className="glass-panel" style={styles.card}>
          <h4 style={styles.secTitle}>Interests & Core Focus</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <span style={styles.bullet}>⚡</span> Embedded Systems & Microcontrollers (C/C++)
            </li>
            <li style={styles.listItem}>
              <span style={styles.bullet}>🧠</span> AI/ML Models, RAG, & LLM Fine-tuning
            </li>
            <li style={styles.listItem}>
              <span style={styles.bullet}>🌐</span> Full-Stack Web App Development (React, Node, Next.js)
            </li>
            <li style={styles.listItem}>
              <span style={styles.bullet}>📊</span> Remote Sensing & Climate Control Systems
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

const styles = {
  sub: {
    fontSize: '0.8rem',
    fontWeight: '700',
    color: 'var(--accent-color)',
    letterSpacing: '3px',
    marginBottom: '0.4rem',
  },
  title: {
    fontSize: '2.5rem',
    fontFamily: 'var(--font-display)',
    fontWeight: '800',
    lineHeight: '1.1',
  },
  tagline: {
    color: 'var(--text-secondary)',
    fontSize: '1rem',
    marginTop: '0.4rem',
  },
  section: {
    marginTop: '1rem',
  },
  secTitle: {
    fontSize: '1.05rem',
    fontFamily: 'var(--font-display)',
    fontWeight: '700',
    color: 'var(--accent-color)',
    marginBottom: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  body: {
    color: 'var(--text-secondary)',
    fontSize: '0.92rem',
    lineHeight: '1.6',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 1fr',
    gap: '1.25rem',
  },
  card: {
    padding: '1.5rem',
    borderRadius: '12px',
    backgroundColor: 'rgba(255, 255, 255, 0.01)',
  },
  cardHeader: {
    fontSize: '1.05rem',
    fontWeight: '600',
    marginBottom: '0.2rem',
  },
  cardSub: {
    fontSize: '0.88rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.4',
  },
  metaRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '1.2rem',
    fontSize: '0.85rem',
    color: 'var(--text-secondary)',
  },
  badge: {
    padding: '0.2rem 0.6rem',
    borderRadius: '4px',
    fontWeight: '700',
  },
  list: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.6rem',
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
    fontSize: '0.88rem',
    color: 'var(--text-secondary)',
  },
  bullet: {
    fontSize: '1rem',
  }
};
