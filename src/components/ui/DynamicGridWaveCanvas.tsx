import React, { useEffect, useRef } from 'react';

interface DynamicGridWaveCanvasProps {
  isAuraActive?: boolean;
  className?: string;
  opacity?: number;
}

export const DynamicGridWaveCanvas: React.FC<DynamicGridWaveCanvasProps> = ({
  isAuraActive = false,
  className = '',
  opacity,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Completely disable in Dark / Aura mode
    if (isAuraActive) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId = 0;
    let width = 0;
    let height = 0;

    // Grid configuration: subtle ambient waves only for Light Mode
    const spacing = 48;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const parent = canvas.parentElement;
      width = parent?.clientWidth || window.innerWidth;
      height = parent?.clientHeight || window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize, { passive: true });

    let startTime = performance.now();

    const render = (now: number) => {
      const time = (now - startTime) * 0.0012; // Calming, smooth wave speed

      ctx.clearRect(0, 0, width, height);

      const cols = Math.ceil(width / spacing) + 3;
      const rows = Math.ceil(height / spacing) + 3;

      // Pure subtle Light Mode palette
      const baseLineColor = 'rgba(24, 24, 27, 0.04)';
      const dotColor = 'rgba(24, 24, 27, 0.10)';

      // Compute grid node positions with organic multi-frequency sine wave undulating math
      const gridPoints: Array<Array<{ x: number; y: number }>> = [];

      for (let r = 0; r < rows; r++) {
        gridPoints[r] = [];
        const baseY = (r - 1) * spacing;

        for (let c = 0; c < cols; c++) {
          const baseX = (c - 1) * spacing;

          // Gentle undulating waves across the surface
          const wave1 = Math.sin(c * 0.18 + time * 1.5) * 8;
          const wave2 = Math.cos(r * 0.22 + time * 1.2) * 7;
          const wave3 = Math.sin((c + r) * 0.12 + time * 0.9) * 5;
          const waveOffset = wave1 + wave2 + wave3;

          gridPoints[r][c] = { x: baseX, y: baseY + waveOffset };
        }
      }

      // ─── 1. Draw Horizontal Wavy Grid Lines ───
      ctx.lineWidth = 1;
      ctx.strokeStyle = baseLineColor;

      for (let r = 0; r < rows; r++) {
        ctx.beginPath();
        const startPt = gridPoints[r][0];
        ctx.moveTo(startPt.x, startPt.y);

        for (let c = 1; c < cols; c++) {
          const pt = gridPoints[r][c];
          const prev = gridPoints[r][c - 1];
          // Midpoint quadratic smoothing for beautiful, silky fluid wave curves
          const midX = (prev.x + pt.x) / 2;
          const midY = (prev.y + pt.y) / 2;
          ctx.quadraticCurveTo(prev.x, prev.y, midX, midY);
        }

        const last = gridPoints[r][cols - 1];
        ctx.lineTo(last.x, last.y);
        ctx.stroke();
      }

      // ─── 2. Draw Vertical Connecting Grid Lines ───
      for (let c = 0; c < cols; c++) {
        ctx.beginPath();
        const startPt = gridPoints[0][c];
        ctx.moveTo(startPt.x, startPt.y);

        for (let r = 1; r < rows; r++) {
          const pt = gridPoints[r][c];
          const prev = gridPoints[r - 1][c];
          const midX = (prev.x + pt.x) / 2;
          const midY = (prev.y + pt.y) / 2;
          ctx.quadraticCurveTo(prev.x, prev.y, midX, midY);
        }

        const last = gridPoints[rows - 1][c];
        ctx.lineTo(last.x, last.y);
        ctx.stroke();
      }

      // ─── 3. Draw Clean Grid Intersection Dots ───
      ctx.fillStyle = dotColor;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const pt = gridPoints[r][c];
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, 1.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, [isAuraActive]);

  // NEVER render in Dark / Aura mode
  if (isAuraActive) return null;

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none select-none transition-opacity duration-700 ${className}`}
      style={{
        zIndex: 0,
        opacity: opacity !== undefined ? opacity : 1,
      }}
    />
  );
};

export default DynamicGridWaveCanvas;
