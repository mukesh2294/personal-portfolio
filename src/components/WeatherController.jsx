import React from 'react';

export default function WeatherController({ weather, setWeather }) {
  const modes = [
    { id: 'sunny', label: '☀️ Sunny', desc: 'Clear sky & floating light flares' },
    { id: 'rainy', label: '🌧️ Rainy', desc: 'Falling green rain & deep atmosphere' },
    { id: 'hot', label: '🔥 Hot', desc: 'Heat waves & amber temperature glow' },
    { id: 'cold', label: '❄️ Cold', desc: 'Frosty winter theme & falling snow' }
  ];

  return (
    <div style={styles.container} className="glass-panel">
      <div style={styles.title}>Climate Control</div>
      <div style={styles.buttonRow}>
        {modes.map((mode) => {
          const isActive = weather === mode.id;
          return (
            <button
              key={mode.id}
              onClick={() => setWeather(mode.id)}
              title={mode.desc}
              style={{
                ...styles.btn,
                backgroundColor: isActive ? 'var(--accent-color)' : 'rgba(255, 255, 255, 0.02)',
                color: isActive ? '#000000' : 'var(--text-secondary)',
                fontWeight: isActive ? '700' : '500',
                borderColor: isActive ? 'var(--accent-color)' : 'var(--border-color)',
                boxShadow: isActive ? '0 0 15px var(--accent-glow)' : 'none'
              }}
            >
              {mode.label.split(' ')[0]}
            </button>
          );
        })}
      </div>
      <div style={styles.desc}>
        Active Mode: <strong style={{ color: 'var(--accent-color)' }}>{weather.toUpperCase()}</strong>
      </div>
    </div>
  );
}

const styles = {
  container: {
    position: 'fixed',
    top: '20px',
    right: '20px',
    padding: '1rem',
    borderRadius: 'var(--radius-md)',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.6rem',
    zIndex: 1000,
    width: '210px',
  },
  title: {
    fontSize: '0.8rem',
    fontWeight: '700',
    color: 'var(--text-secondary)',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
  },
  buttonRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '0.4rem',
  },
  btn: {
    border: '1px solid',
    borderRadius: '8px',
    height: '36px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.1rem',
    cursor: 'pointer',
    transition: 'all var(--transition-fast)',
    fontFamily: 'var(--font-sans)',
  },
  desc: {
    fontSize: '0.72rem',
    color: 'var(--text-muted)',
    marginTop: '0.2rem',
  }
};
