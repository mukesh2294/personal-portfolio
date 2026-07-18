import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["C", "C++", "JavaScript", "Python"]
    },
    {
      title: "Frameworks & Tools",
      skills: ["HTML5 / CSS3", "TailwindCSS", "React.js", "Node.js", "Next.js", "Express", "REST APIs", "Websockets"]
    },
    {
      title: "AI / ML & DSP",
      skills: ["Machine Learning", "Deep Learning", "Scikit-learn", "PyTorch", "LangChain / LangGraph", "LLM Fine-tuning", "Retrieval-Augmented Generation (RAG)", "Digital Signal Processing", "Fuzzy Logic"]
    },
    {
      title: "Cloud & Databases",
      skills: ["PostgreSQL", "MongoDB", "Vector DBs (ChromaDB)"]
    },
    {
      title: "DevOps & Systems",
      skills: ["Git / GitHub", "Docker", "System Design", "Embedded Firmware"]
    }
  ];

  return (
    <div className="slider-panel" style={{ overflowY: 'auto' }}>
      <div>
        <h3 style={styles.sub}>ABILITIES & EXPERTISE</h3>
        <h1 style={styles.title}>Technical Skills</h1>
      </div>

      <div style={styles.grid}>
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="glass-panel" style={styles.card}>
            <h3 style={styles.catTitle}>{cat.title}</h3>
            <div style={styles.skillsWrapper}>
              {cat.skills.map((skill, sIdx) => (
                <span key={sIdx} style={styles.pill}>
                  {skill}
                </span>
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
    backgroundColor: 'rgba(255, 255, 255, 0.01)',
  },
  catTitle: {
    fontSize: '1rem',
    fontFamily: 'var(--font-display)',
    fontWeight: '700',
    color: 'var(--accent-color)',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: '1rem',
    borderBottom: '1px solid var(--border-color)',
    paddingBottom: '0.5rem',
  },
  skillsWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  pill: {
    fontSize: '0.82rem',
    fontWeight: '500',
    color: 'var(--text-primary)',
    backgroundColor: 'rgba(255,255,255,0.02)',
    border: '1px solid var(--border-color)',
    padding: '0.35rem 0.75rem',
    borderRadius: 'var(--radius-full)',
    transition: 'all var(--transition-fast)',
    cursor: 'default',
  }
};
// Add a simple hover rule in inline css using standard elements or let them inherit theme effects.
