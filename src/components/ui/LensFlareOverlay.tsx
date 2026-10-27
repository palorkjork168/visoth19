import { useEffect, useState } from 'react';

interface LensFlareOverlayProps {
  className?: string;
  isAuraActive?: boolean;
}

export function LensFlareOverlay({ className = '', isAuraActive = false }: LensFlareOverlayProps) {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  // Parallax inverse positions for secondary lens flare ghosts
  const flare1X = mousePos.x;
  const flare1Y = mousePos.y;
  const flare2X = 100 - mousePos.x * 0.7;
  const flare2Y = 100 - mousePos.y * 0.7;
  const flare3X = 50 + (mousePos.x - 50) * 1.3;
  const flare3Y = 50 + (mousePos.y - 50) * 1.3;

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden select-none z-15 ${className}`}>
      {/* Primary Warm Glow Core */}
      <div
        className="absolute rounded-full blur-3xl transition-transform duration-300 ease-out"
        style={{
          left: `${flare1X}%`,
          top: `${flare1Y}%`,
          transform: 'translate(-50%, -50%)',
          width: isAuraActive ? '450px' : '300px',
          height: isAuraActive ? '450px' : '300px',
          background: isAuraActive
            ? 'radial-gradient(circle, rgba(255, 90, 0, 0.22) 0%, rgba(255, 170, 0, 0.10) 45%, transparent 70%)'
            : 'radial-gradient(circle, rgba(255, 180, 50, 0.12) 0%, rgba(255, 120, 0, 0.05) 40%, transparent 65%)',
        }}
      />

      {/* Cinematic Anamorphic Horizontal Flare Streak */}
      <div
        className="absolute transition-transform duration-200 ease-out"
        style={{
          left: `${flare1X}%`,
          top: `${flare1Y}%`,
          transform: 'translate(-50%, -50%)',
          width: isAuraActive ? '650px' : '400px',
          height: '2px',
          background: isAuraActive
            ? 'linear-gradient(90deg, transparent, rgba(255, 60, 0, 0.8), rgba(255, 200, 50, 0.9), rgba(255, 60, 0, 0.8), transparent)'
            : 'linear-gradient(90deg, transparent, rgba(255, 150, 50, 0.45), rgba(255, 230, 150, 0.7), rgba(255, 150, 50, 0.45), transparent)',
          filter: 'blur(1px)',
        }}
      />

      {/* Secondary Ghost Flare Ring 1 */}
      <div
        className="absolute rounded-full transition-transform duration-500 ease-out border opacity-40"
        style={{
          left: `${flare2X}%`,
          top: `${flare2Y}%`,
          transform: 'translate(-50%, -50%)',
          width: '120px',
          height: '120px',
          borderColor: isAuraActive ? 'rgba(255, 120, 0, 0.35)' : 'rgba(255, 200, 100, 0.25)',
          background: isAuraActive
            ? 'radial-gradient(circle, rgba(255, 80, 0, 0.08) 0%, transparent 70%)'
            : 'transparent',
          filter: 'blur(2px)',
        }}
      />

      {/* Secondary Ghost Flare Ring 2 */}
      <div
        className="absolute rounded-full transition-transform duration-700 ease-out border opacity-30"
        style={{
          left: `${flare3X}%`,
          top: `${flare3Y}%`,
          transform: 'translate(-50%, -50%)',
          width: '60px',
          height: '60px',
          borderColor: isAuraActive ? 'rgba(255, 60, 0, 0.4)' : 'rgba(255, 160, 50, 0.2)',
          filter: 'blur(1px)',
        }}
      />
    </div>
  );
}
