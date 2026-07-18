import React from 'react';

export default function Projects() {
  const list = [
    {
      title: "Land Use and Land Cover Using LISS-IV Data",
      subtitle: "Remote Sensing & ML",
      desc: "Processed Resourcesat-2 satellite multi-spectral imagery to classify land features (vegetation, urban zones, water) using scikit-learn, achieving high spatial mapping accuracy.",
      tech: ["Scikit-learn", "NumPy", "Pandas", "QGIS", "LISS-IV"]
    },
    {
      title: "Smart Climate Controller",
      subtitle: "Fuzzy Logic Systems",
      desc: "Designed and implemented a fuzzy logic-based HVAC controller in Python, executing full inference pipelines (fuzzification, rule-base, defuzzification) for noisy sensor data.",
      tech: ["Python", "scikit-fuzzy", "NumPy", "VS Code"]
    },
    {
      title: "CivicBriefs.ai - UPSC study workflows",
      subtitle: "AI Summarization & Agentic Workflows",
      desc: "Architected news summarization pipelines using ChromaDB vector search and local Llama inference models. Integrated multi-agent workflows with Google Calendar API.",
      tech: ["React", "FastAPI", "SentenceTransformers", "ChromaDB", "Llama"]
    },
    {
      title: "Online Quiz Application",
      subtitle: "Full-Stack Web Development",
      desc: "Created a practice quiz portal using JWT auth and local sqlite storage, generating verified printable certificates. Implemented a fully responsive glassmorphic dark theme.",
      tech: ["React", "Express.js", "SQLite", "Node.js", "CSS Grid"]
    }
  ];

  return (
    <div className="slider-panel" style={{ overflowY: 'auto' }}>
      <div>
        <h3 style={styles.sub}>ACADEMIC & AI WORK</h3>
        <h1 style={styles.title}>Featured Projects</h1>
      </div>

      <div style={styles.grid}>
        {list.map((proj, idx) => (
          <div key={idx} className="glass-panel" style={styles.card}>
            <div style={styles.header}>
              <h3 style={styles.projTitle}>{proj.title}</h3>
              <span style={styles.projSub}>{proj.subtitle}</span>
            </div>
            <p style={styles.desc}>{proj.desc}</p>
            <div style={styles.techWrapper}>
              {proj.tech.map((t, tIdx) => (
                <span key={tIdx} style={styles.tag}>{t}</span>
              ))}
            </div>
          </div>
        ))}
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
    fontSize: '2rem',
    fontFamily: 'var(--font-display)',
    fontWeight: '800',
    marginBottom: '1rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1.25rem',
  },
  card: {
    padding: '1.5rem',
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '220px',
    backgroundColor: 'rgba(255, 255, 255, 0.01)',
  },
  header: {
    marginBottom: '0.8rem',
  },
  projTitle: {
    fontSize: '1.05rem',
    fontWeight: '700',
    lineHeight: '1.4',
  },
  projSub: {
    fontSize: '0.75rem',
    fontWeight: '600',
    color: 'var(--accent-color)',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginTop: '0.2rem',
    display: 'inline-block',
  },
  desc: {
    fontSize: '0.84rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.5',
    marginBottom: '1.2rem',
    flexGrow: 1,
  },
  techWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.4rem',
  },
  tag: {
    fontSize: '0.7rem',
    fontWeight: '600',
    backgroundColor: 'rgba(255,255,255,0.03)',
    color: 'var(--text-secondary)',
    padding: '0.15rem 0.45rem',
    border: '1px solid var(--border-color)',
    borderRadius: '4px',
  }
};
