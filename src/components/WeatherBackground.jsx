import React, { useEffect, useRef } from 'react';

export default function WeatherBackground({ weather }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Handle sizing
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    // Particle Classes
    class Raindrop {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * -canvas.height;
        this.vy = 8 + Math.random() * 8; // speed
        this.len = 10 + Math.random() * 15; // length
        this.opacity = 0.15 + Math.random() * 0.3;
      }
      update() {
        this.y += this.vy;
        if (this.y > canvas.height) {
          this.reset();
        }
      }
      draw() {
        ctx.strokeStyle = `rgba(16, 185, 129, ${this.opacity})`; // green rain
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y + this.len);
        ctx.stroke();
      }
    }

    class Snowflakes {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * -canvas.height;
        this.r = 1 + Math.random() * 3; // radius
        this.vy = 1 + Math.random() * 1.5;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.opacity = 0.2 + Math.random() * 0.5;
        this.swingSpeed = 0.01 + Math.random() * 0.02;
        this.swingStep = Math.random() * 100;
      }
      update() {
        this.y += this.vy;
        this.swingStep += this.swingSpeed;
        this.x += this.vx + Math.sin(this.swingStep) * 0.3;

        if (this.y > canvas.height || this.x < 0 || this.x > canvas.width) {
          this.reset();
        }
      }
      draw() {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    class HeatSpark {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 100;
        this.r = 2 + Math.random() * 4;
        this.vy = -(1 + Math.random() * 1.5);
        this.vx = (Math.random() - 0.5) * 0.5;
        this.opacity = 0.1 + Math.random() * 0.3;
        this.life = 0;
        this.maxLife = 100 + Math.random() * 150;
      }
      update() {
        this.y += this.vy;
        this.x += this.vx;
        this.life++;
        this.opacity = (1 - this.life / this.maxLife) * 0.3;

        if (this.y < 0 || this.life >= this.maxLife) {
          this.reset();
        }
      }
      draw() {
        ctx.fillStyle = `rgba(249, 115, 22, ${this.opacity})`; // Orange heat spark
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    class SunRay {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * -100;
        this.r = 3 + Math.random() * 6;
        this.vy = 0.5 + Math.random() * 0.8;
        this.vx = (Math.random() - 0.2) * 0.3; // drift slightly right
        this.opacity = 0.05 + Math.random() * 0.15;
      }
      update() {
        this.y += this.vy;
        this.x += this.vx;
        if (this.y > canvas.height || this.x > canvas.width) {
          this.reset();
        }
      }
      draw() {
        ctx.fillStyle = `rgba(56, 189, 248, ${this.opacity})`; // Sky Blue sun ray particles
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize pools
    const rainPool = Array.from({ length: 80 }, () => new Raindrop());
    const snowPool = Array.from({ length: 60 }, () => new Snowflakes());
    const heatPool = Array.from({ length: 40 }, () => new HeatSpark());
    const sunPool = Array.from({ length: 30 }, () => new SunRay());

    // Loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (weather === 'rainy') {
        rainPool.forEach((drop) => {
          drop.update();
          drop.draw();
        });
      } else if (weather === 'cold') {
        snowPool.forEach((flake) => {
          flake.update();
          flake.draw();
        });
      } else if (weather === 'hot') {
        // Draw heat waves in background
        heatPool.forEach((spark) => {
          spark.update();
          spark.draw();
        });

        // Soft sun beam sweep
        const grad = ctx.createRadialGradient(
          canvas.width / 2, canvas.height * 1.5, 100,
          canvas.width / 2, canvas.height * 1.5, canvas.height
        );
        grad.addColorStop(0, 'rgba(249, 115, 22, 0.08)');
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      } else {
        // Sunny / Clear
        sunPool.forEach((ray) => {
          ray.update();
          ray.draw();
        });

        // Top right sun glow
        const grad = ctx.createRadialGradient(
          canvas.width, 0, 50,
          canvas.width, 0, 400
        );
        grad.addColorStop(0, 'rgba(56, 189, 248, 0.12)');
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [weather]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}
