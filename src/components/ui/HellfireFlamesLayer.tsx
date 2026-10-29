import { useState, useEffect, useRef } from 'react';

interface HellfireFlamesLayerProps {
  mode: 'back' | 'front';
  isAuraActive: boolean;
  className?: string;
}

interface FlameParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  maxSize: number;
  life: number;
  maxLife: number;
  seed: number;
}

interface Spark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  maxLife: number;
  seed: number;
}

export function HellfireFlamesLayer({
  mode,
  isAuraActive,
  className = '',
}: HellfireFlamesLayerProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [shouldRender, setShouldRender] = useState(isAuraActive);

  // Keep canvas rendering during smooth 500ms fade-out
  useEffect(() => {
    if (isAuraActive) {
      setShouldRender(true);
    } else {
      const timer = setTimeout(() => setShouldRender(false), 550);
      return () => clearTimeout(timer);
    }
  }, [isAuraActive]);

  useEffect(() => {
    if (!shouldRender) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const parent = canvas.parentElement;
      const w = parent?.clientWidth || 600;
      const h = parent?.clientHeight || 800;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize);

    const particles: FlameParticle[] = [];
    const sparks: Spark[] = [];

    const maxParticles = mode === 'back' ? 140 : 55;
    const maxSparks = mode === 'back' ? 35 : 20;

    const spawnParticle = (w: number, h: number, initial = false): FlameParticle => {
      const centerX = w * 0.5;
      const spreadX = mode === 'back' ? w * 0.46 : w * 0.32;
      const x = centerX + (Math.random() - 0.5) * spreadX;
      
      // Back flames originate from mid/lower torso; front flames originate at lower waist
      const baseY = mode === 'back' ? h * (0.62 + Math.random() * 0.34) : h * (0.80 + Math.random() * 0.18);
      const maxLife = mode === 'back' ? 50 + Math.random() * 40 : 38 + Math.random() * 26;

      return {
        x,
        y: initial ? baseY - Math.random() * (h * 0.5) : baseY,
        vx: (Math.random() - 0.5) * 1.4,
        vy: mode === 'back' ? -(3.2 + Math.random() * 4.6) : -(2.2 + Math.random() * 3.4),
        size: mode === 'back' ? 30 + Math.random() * 45 : 18 + Math.random() * 28,
        maxSize: mode === 'back' ? 65 + Math.random() * 55 : 36 + Math.random() * 32,
        life: initial ? Math.floor(Math.random() * maxLife) : 0,
        maxLife,
        seed: Math.random() * 100,
      };
    };

    const spawnSpark = (w: number, h: number): Spark => {
      const centerX = w * 0.5;
      const spreadX = mode === 'back' ? w * 0.55 : w * 0.38;
      const x = centerX + (Math.random() - 0.5) * spreadX;
      const baseY = mode === 'back' ? h * (0.75 + Math.random() * 0.22) : h * (0.85 + Math.random() * 0.12);

      return {
        x,
        y: baseY,
        vx: (Math.random() - 0.5) * 2.2,
        vy: -(3.5 + Math.random() * 5.0),
        size: 1.5 + Math.random() * 2.5,
        life: 0,
        maxLife: 45 + Math.random() * 40,
        seed: Math.random() * 100,
      };
    };

    // Pre-populate so fire is immediately roaring
    const initialW = canvas.width / dpr;
    const initialH = canvas.height / dpr;
    for (let i = 0; i < maxParticles; i++) {
      particles.push(spawnParticle(initialW, initialH, true));
    }

    let time = 0;

    const render = () => {
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      time += 0.038;

      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'lighter'; // Additive blending: overlapping flame layers organically merge

      // 1. Maintain & render fluid flame plumes
      while (particles.length < maxParticles) {
        particles.push(spawnParticle(w, h));
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;

        if (p.life >= p.maxLife) {
          particles.splice(i, 1);
          continue;
        }

        const progress = p.life / p.maxLife; // 0 (birth) to 1 (extinction)

        // Buoyancy acceleration & organic wind wave turbulence
        p.vy -= 0.06;
        p.y += p.vy;
        p.x += p.vx + Math.sin(time * 3.5 + p.seed) * 1.5 + (Math.sin(p.y * 0.02 + time) * 0.8);

        // Natural flame plume growth: expands rapidly at base, reaches peak, then tapers off at top
        const growthCurve = Math.sin(progress * Math.PI);
        const curSize = growthCurve * p.maxSize;
        if (curSize <= 1) continue;

        // Soft radial gradient for organic flame fluid
        const radGrad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, curSize);
        // Organic vertical dissipation near the top of canvas so flames never hit a sharp ceiling cut
        const topFade = Math.max(0, Math.min(1, (p.y - 15) / (h * 0.20)));
        const alpha = (1 - progress) * (mode === 'back' ? 0.42 : 0.48) * topFade;
        if (alpha <= 0.01) continue;

        if (progress < 0.28) {
          // White-hot core & yellow flame body
          radGrad.addColorStop(0, `rgba(255, 255, 210, ${alpha * 0.95})`);
          radGrad.addColorStop(0.35, `rgba(255, 190, 20, ${alpha * 0.8})`);
          radGrad.addColorStop(0.70, `rgba(255, 75, 0, ${alpha * 0.4})`);
          radGrad.addColorStop(1, 'rgba(180, 0, 0, 0)');
        } else if (progress < 0.68) {
          // Vibrant incandescent orange & crimson flame
          radGrad.addColorStop(0, `rgba(255, 205, 30, ${alpha * 0.85})`);
          radGrad.addColorStop(0.40, `rgba(255, 95, 0, ${alpha * 0.55})`);
          radGrad.addColorStop(0.75, `rgba(210, 25, 0, ${alpha * 0.25})`);
          radGrad.addColorStop(1, 'rgba(120, 0, 0, 0)');
        } else {
          // Dark crimson tips and smoke fade
          radGrad.addColorStop(0, `rgba(255, 110, 0, ${alpha * 0.6})`);
          radGrad.addColorStop(0.45, `rgba(190, 20, 0, ${alpha * 0.3})`);
          radGrad.addColorStop(1, 'rgba(60, 0, 0, 0)');
        }

        ctx.fillStyle = radGrad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, curSize, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. High-speed rising sparks & embers leaping in the air
      while (sparks.length < maxSparks) {
        sparks.push(spawnSpark(w, h));
      }

      for (let s = sparks.length - 1; s >= 0; s--) {
        const sp = sparks[s];
        sp.life++;

        if (sp.life >= sp.maxLife) {
          sparks.splice(s, 1);
          continue;
        }

        const spProgress = sp.life / sp.maxLife;
        sp.y += sp.vy;
        sp.x += sp.vx + Math.sin(time * 4.0 + sp.seed) * 1.8;

        const curSparkSize = sp.size * (1 - spProgress * 0.4);
        const spAlpha = (1 - spProgress) * (mode === 'back' ? 0.85 : 0.95);

        ctx.fillStyle = spProgress < 0.35 ? `rgba(255, 245, 180, ${spAlpha})` : `rgba(255, 110, 0, ${spAlpha})`;
        ctx.beginPath();
        ctx.arc(sp.x, sp.y, curSparkSize, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, [shouldRender, mode]);

  if (!shouldRender) return null;

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-500 ease-out ${
        isAuraActive ? 'opacity-100' : 'opacity-0'
      } ${className}`}
      style={{
        mixBlendMode: 'screen',
        filter: mode === 'back' ? 'blur(4px)' : 'blur(2px)', // Soft organic fluid fire blending
      }}
    />
  );
}

export default HellfireFlamesLayer;

