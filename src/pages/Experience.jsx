import React from 'react';

export default function Experience() {
  return (
    <div className="slider-panel">
      <div>
        <h3 style={styles.sub}>CAREER TIMELINE</h3>
        <h1 style={styles.title}>Work Experience</h1>
      </div>

      <div style={styles.timeline}>
        {/* Timeline Item 1 */}
        <div style={styles.timelineItem}>
          <div style={styles.timelineMarker}>
            <div style={styles.markerDot}></div>
            <div style={styles.markerLine}></div>
          </div>
          
          <div className="glass-panel" style={styles.timelineCard}>
            <div style={styles.cardHeader}>
              <div>
                <h3 style={styles.jobTitle}>Embedded Engineer</h3>
                <h4 style={styles.company}>Nacharam Industries, Hyderabad</h4>
              </div>
              <span style={{ ...styles.badge, backgroundColor: 'var(--accent-glow)', color: 'var(--accent-color)' }}>
                Jan 2026 - May 2026
              </span>
            </div>

            <ul style={styles.bulletList}>
              <li style={styles.bulletItem}>
                Engineered robust embedded systems and hardware solutions for heavy industrial automation applications.
              </li>
              <li style={styles.bulletItem}>
                Programmed STM32 and Arduino-based microcontrollers in C/C++ to interface with high-precision analog temperature and pressure sensors.
              </li>
              <li style={styles.bulletItem}>
                Developed and optimized modular firmware routines implementing interrupts, DMA channels, and custom filters to ensure noise-free, real-time sensor data acquisition.
              </li>
              <li style={styles.bulletItem}>
                Designed, tested, and troubleshot SPI/I2C communication buses on PCBs, achieving 99.8% stability under electromagnetic interference (EMI) conditions.
              </li>
            </ul>

            <div style={styles.techStack}>
              <span style={styles.techTag}>C / C++</span>
              <span style={styles.techTag}>Microcontrollers</span>
              <span style={styles.techTag}>Firmware</span>
              <span style={styles.techTag}>Analog Sensors</span>
              <span style={styles.techTag}>SPI/I2C</span>
            </div>
          </div>
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
    fontSize: '2rem',
    fontFamily: 'var(--font-display)',
    fontWeight: '800',
    marginBottom: '1rem',
  },
  timeline: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '1rem',
  },
  timelineItem: {
    display: 'flex',
    gap: '1.5rem',
  },
  timelineMarker: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '20px',
  },
  markerDot: {
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    backgroundColor: 'var(--accent-color)',
    border: '3px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 0 10px var(--accent-glow)',
    zIndex: 2,
  },
  markerLine: {
    width: '2px',
    flexGrow: 1,
    backgroundColor: 'var(--border-color)',
    minHeight: '150px',
  },
  timelineCard: {
    flexGrow: 1,
    padding: '1.75rem',
    borderRadius: '12px',
    backgroundColor: 'rgba(255, 255, 255, 0.01)',
    marginBottom: '2rem',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '1.25rem',
    flexWrap: 'wrap',
    gap: '0.8rem',
  },
  jobTitle: {
    fontSize: '1.25rem',
    fontWeight: '700',
  },
  company: {
    fontSize: '0.9rem',
    color: 'var(--text-secondary)',
    marginTop: '0.1rem',
    fontWeight: '500',
  },
  badge: {
    fontSize: '0.78rem',
    fontWeight: '700',
    padding: '0.25rem 0.65rem',
    borderRadius: '6px',
    letterSpacing: '0.5px',
  },
  bulletList: {
    paddingLeft: '1.2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.6rem',
    marginBottom: '1.5rem',
  },
  bulletItem: {
    fontSize: '0.88rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.5',
  },
  techStack: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  techTag: {
    fontSize: '0.72rem',
    fontWeight: '600',
    color: 'var(--text-secondary)',
    backgroundColor: 'rgba(255,255,255,0.04)',
    border: '1px solid var(--border-color)',
    padding: '0.2rem 0.5rem',
    borderRadius: '4px',
  }
};
