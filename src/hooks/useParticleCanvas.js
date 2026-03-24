import { useEffect } from 'react';

const GOLD = [201, 168, 76];
const NUM_PARTICLES = 110;
const NUM_STARS = 25;
const MAX_DIST = 120;
const MOUSE_RADIUS = 130;

class Particle {
  constructor(W, H, initial = false) {
    this.W = W;
    this.H = H;
    this.reset(initial);
  }

  reset(initial = false) {
    this.x = Math.random() * this.W;
    this.y = initial
      ? Math.random() * this.H
      : Math.random() < 0.5
      ? -10
      : this.H + 10;
    this.baseX = this.x;
    this.baseY = this.y;
    this.size = Math.random() * 1.5 + 0.3;
    this.speedX = (Math.random() - 0.5) * 0.3;
    this.speedY = (Math.random() - 0.5) * 0.3;
    this.opacity = Math.random() * 0.5 + 0.1;
    this.opacityDir = (Math.random() > 0.5 ? 1 : -1) * 0.003;
  }

  update(mouse) {
    const dx = this.x - mouse.x;
    const dy = this.y - mouse.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < mouse.radius) {
      const force = (mouse.radius - dist) / mouse.radius;
      const angle = Math.atan2(dy, dx);
      this.x += Math.cos(angle) * force * 2.5;
      this.y += Math.sin(angle) * force * 2.5;
    } else {
      this.x += (this.baseX - this.x) * 0.02 + this.speedX;
      this.y += (this.baseY - this.y) * 0.02 + this.speedY;
    }

    this.baseX += this.speedX;
    this.baseY += this.speedY;
    if (this.baseX < 0) this.baseX = this.W;
    if (this.baseX > this.W) this.baseX = 0;
    if (this.baseY < 0) this.baseY = this.H;
    if (this.baseY > this.H) this.baseY = 0;

    this.opacity += this.opacityDir;
    if (this.opacity > 0.65 || this.opacity < 0.05) this.opacityDir *= -1;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${GOLD[0]},${GOLD[1]},${GOLD[2]},${this.opacity})`;
    ctx.fill();
  }
}

/**
 * Attaches and drives the gold particle canvas animation.
 * Must be called once; the canvas element must exist in the DOM.
 */
const useParticleCanvas = () => {
  useEffect(() => {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);
    const mouse = { x: W / 2, y: H / 2, radius: MOUSE_RADIUS };

    const onResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('resize', onResize);
    window.addEventListener('mousemove', onMouseMove);

    const particles = Array.from({ length: NUM_PARTICLES }, () => new Particle(W, H, true));
    const stars = Array.from({ length: NUM_STARS }, () => {
      const p = new Particle(W, H, true);
      p.size = Math.random() * 2.5 + 1;
      p.opacity = Math.random() * 0.3 + 0.05;
      return p;
    });

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < MAX_DIST) {
            const alpha = (1 - d / MAX_DIST) * 0.15;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${GOLD[0]},${GOLD[1]},${GOLD[2]},${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };

    let raf;
    const animate = () => {
      ctx.clearRect(0, 0, W, H);
      drawConnections();
      [...stars, ...particles].forEach((p) => {
        p.update(mouse);
        p.draw(ctx);
      });
      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);
};

export default useParticleCanvas;
