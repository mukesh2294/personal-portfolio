import React, { useState, useEffect } from 'react';
import WeatherBackground from './components/WeatherBackground';
import WeatherController from './components/WeatherController';
import FloatingDeck from './components/FloatingDeck';

export default function App() {
  const [weather, setWeather] = useState('sunny');
  const [hazeSeed, setHazeSeed] = useState(0);

  // Sync body class with current weather theme
  useEffect(() => {
    // Clear old weather classes
    document.body.className = '';
    // Add new weather class
    document.body.classList.add(`weather-${weather}`);
  }, [weather]);

  // Heat haze ripple animation timer (updates SVG turbulence seed)
  useEffect(() => {
    if (weather !== 'hot') return;

    const interval = setInterval(() => {
      setHazeSeed((prev) => (prev + 1) % 100);
    }, 150);

    return () => clearInterval(interval);
  }, [weather]);

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      {/* Dynamic Background Canvas */}
      <WeatherBackground weather={weather} />

      {/* Atmospheric overlay tint */}
      <div className={`weather-overlay weather-overlay-${weather}`} />

      {/* Climate controller remote */}
      <WeatherController weather={weather} setWeather={setWeather} />

      {/* Main floating deck containing resume pages */}
      <FloatingDeck weather={weather} />

      {/* Dynamic Heat Haze SVG filter definition */}
      <svg style={{ display: 'none' }}>
        <filter id="heatHaze">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.01 0.04" 
            numOctaves="2" 
            seed={hazeSeed} 
            result="noise" 
          />
          <feDisplacementMap 
            in="SourceGraphic" 
            in2="noise" 
            scale={weather === 'hot' ? 4 : 0} 
            xChannelSelector="R" 
            yChannelSelector="G" 
          />
        </filter>
      </svg>
    </div>
  );
}
