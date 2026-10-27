import { useEffect, useRef } from 'react';

interface FloatingFireEmbersProps {
  className?: string;
  isAuraActive?: boolean;
}

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  baseOpacity: number;
  flickerSpeed: number;
  color: string;
  angle: number;
  windFactor: number;
}

const AURA_COLORS = [
  '#FF3B00', // Crimson fire
  '#FF7700', // Bright orange
  '#FFAA00', // Golden amber
  '#FFD000', // Yellow spark
  '#FF1A00', // Deep hellfire
];

const NORMAL_COLORS = [
  '#FFAA00',
  '#FF8800',
  '#E0E0E0',
  '#FFB703',
];

export function FloatingFireEmbers({
  className = '',
  isAuraActive = false,
}: FloatingFireEmbersProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId = 0;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;

    const particles: Particle[] = [];
    const count = isAuraActive ? 75 : 22;
    const colors = isAuraActive ? AURA_COLORS : NORMAL_COLORS;

    const createParticle = (initY?: number): Particle => {
      const baseOpacity = isAuraActive ? 0.35 + Math.random() * 0.55 : 0.15 + Math.random() * 0.3;
      return {
        x: Math.random() * width,
        y: initY !== undefined ? initY : Math.random() * height,
        size: isAuraActive ? 1.5 + Math.random() * 3.5 : 1 + Math.random() * 2,
        speedY: isAuraActive ? -(1.2 + Math.random() * 2.2) : -(0.3 + Math.random() * 0.8),
        speedX: (Math.random() - 0.5) * (isAuraActive ? 1.2 : 0.4),
        opacity: baseOpacity,
        baseOpacity,
        flickerSpeed: 0.03 + Math.random() * 0.06,
        color: colors[Math.floor(Math.random() * colors.length)],
        angle: Math.random() * Math.PI * 2,
        windFactor: 0.5 + Math.random() * 1.5,
      };
    };

    for (let i = 0; i < count; i++) {
      particles.push(createParticle());
    }

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    const handlePointerMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handlePointerMove);

    let time = 0;
    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Organic floating motion with sine wave wind
        p.angle += p.flickerSpeed;
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(p.angle + time) * 0.45 * p.windFactor;

        // Subtle mouse repulsion/drift
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.hypot(dx, dy);
        if (dist < 120) {
          const force = (1 - dist / 120) * 1.2;
          p.x += (dx / dist) * force;
          p.y += (dy / dist) * force;
        }

        // Pulsing flickering glow
        p.opacity = p.baseOpacity * (0.7 + Math.sin(p.angle * 2.5) * 0.3);

        // Respawn when top edge reached
        if (p.y < -10 || p.x < -20 || p.x > width + 20) {
          particles[i] = createParticle(height + 10);
        }

        // Draw glowing ember
        ctx.save();
        ctx.globalAlpha = Math.max(0, Math.min(1, p.opacity));
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = isAuraActive ? 12 : 5;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handlePointerMove);
    };
  }, [isAuraActive]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 z-10 ${className}`}
    />
  );
}
