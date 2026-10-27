import React, { useRef, useEffect, useCallback } from 'react';
import { gsap } from 'gsap';

export interface MagicBentoCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string; // RGB string like "255, 85, 0"
  enableTilt?: boolean;
  enableMagnetism?: boolean;
  enableStars?: boolean;
  enableSpotlight?: boolean;
  enableBorderGlow?: boolean;
  clickEffect?: boolean;
  particleCount?: number;
  spotlightRadius?: number;
  isAuraActive?: boolean;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const DEFAULT_PARTICLE_COUNT = 8;
const DEFAULT_SPOTLIGHT_RADIUS = 280;

export const MagicBentoCard: React.FC<MagicBentoCardProps> = ({
  children,
  className = '',
  glowColor,
  enableTilt = true,
  enableMagnetism = true,
  enableStars = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  clickEffect = true,
  particleCount = DEFAULT_PARTICLE_COUNT,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  isAuraActive = false,
  onClick,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);
  const timeoutsRef = useRef<number[]>([]);
  const isHoveredRef = useRef(false);
  const magnetismAnimationRef = useRef<gsap.core.Tween | null>(null);

  // Dynamic glow color matching portfolio guidelines
  const activeGlowColor = glowColor || (isAuraActive ? '255, 85, 0' : '255, 100, 20');

  const clearAllParticles = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    magnetismAnimationRef.current?.kill();
    particlesRef.current.forEach((particle) => {
      gsap.to(particle, {
        scale: 0,
        opacity: 0,
        duration: 0.25,
        ease: 'power2.in',
        onComplete: () => {
          particle.parentNode?.removeChild(particle);
        },
      });
    });
    particlesRef.current = [];
  }, []);

  const animateParticles = useCallback(() => {
    if (!enableStars || !cardRef.current || !isHoveredRef.current) return;
    const { width, height } = cardRef.current.getBoundingClientRect();

    for (let i = 0; i < particleCount; i++) {
      const timeoutId = window.setTimeout(() => {
        if (!isHoveredRef.current || !cardRef.current) return;
        const x = Math.random() * width;
        const y = Math.random() * height;

        const particle = document.createElement('div');
        particle.className = 'magic-particle';
        particle.style.cssText = `
          position: absolute;
          width: 3.5px;
          height: 3.5px;
          border-radius: 50%;
          background: rgba(${activeGlowColor}, 0.95);
          box-shadow: 0 0 8px rgba(${activeGlowColor}, 0.8), 0 0 16px rgba(${activeGlowColor}, 0.4);
          pointer-events: none;
          z-index: 30;
          left: ${x}px;
          top: ${y}px;
        `;

        cardRef.current.appendChild(particle);
        particlesRef.current.push(particle);

        gsap.fromTo(
          particle,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' }
        );

        gsap.to(particle, {
          x: (Math.random() - 0.5) * 80,
          y: -15 - Math.random() * 50,
          rotation: Math.random() * 360,
          duration: 1.8 + Math.random() * 1.5,
          ease: 'power1.out',
          opacity: 0,
          onComplete: () => {
            particle.parentNode?.removeChild(particle);
            particlesRef.current = particlesRef.current.filter((p) => p !== particle);
          },
        });
      }, i * 90);

      timeoutsRef.current.push(timeoutId);
    }
  }, [enableStars, particleCount, activeGlowColor]);

  useEffect(() => {
    const element = cardRef.current;
    if (!element) return;

    const handleMouseEnter = () => {
      isHoveredRef.current = true;
      animateParticles();
    };

    const handleMouseLeave = () => {
      isHoveredRef.current = false;
      clearAllParticles();
      gsap.to(element, {
        rotateX: 0,
        rotateY: 0,
        x: 0,
        y: 0,
        duration: 0.35,
        ease: 'power2.out',
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Update spotlight and border glow CSS variables
      element.style.setProperty('--mouse-x', `${x}px`);
      element.style.setProperty('--mouse-y', `${y}px`);
      element.style.setProperty('--spotlight-radius', `${spotlightRadius}px`);
      element.style.setProperty(
        '--spotlight-glow',
        isAuraActive ? `rgba(${activeGlowColor}, 0.16)` : `rgba(${activeGlowColor}, 0.08)`
      );
      element.style.setProperty(
        '--border-glow-color',
        isAuraActive ? `rgba(${activeGlowColor}, 0.85)` : `rgba(${activeGlowColor}, 0.65)`
      );

      // 3D Perspective Tilt
      if (enableTilt) {
        const rotateX = ((y - centerY) / centerY) * -6.5;
        const rotateY = ((x - centerX) / centerX) * 6.5;
        gsap.to(element, {
          rotateX,
          rotateY,
          duration: 0.12,
          ease: 'power2.out',
          transformPerspective: 1000,
        });
      }

      // Magnetism
      if (enableMagnetism) {
        const magnetX = (x - centerX) * 0.04;
        const magnetY = (y - centerY) * 0.04;
        magnetismAnimationRef.current = gsap.to(element, {
          x: magnetX,
          y: magnetY,
          duration: 0.25,
          ease: 'power2.out',
        });
      }
    };

    const handleClick = (e: MouseEvent) => {
      if (!clickEffect) return;
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const ripple = document.createElement('div');
      ripple.style.cssText = `
        position: absolute;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: rgba(${activeGlowColor}, 0.55);
        box-shadow: 0 0 20px rgba(${activeGlowColor}, 0.8);
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
        z-index: 50;
        transform: translate(-50%, -50%);
      `;
      element.appendChild(ripple);

      gsap.fromTo(
        ripple,
        { scale: 0, opacity: 1 },
        {
          scale: 45,
          opacity: 0,
          duration: 0.75,
          ease: 'power2.out',
          onComplete: () => ripple.remove(),
        }
      );
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);
    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('click', handleClick);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('click', handleClick);
      clearAllParticles();
    };
  }, [
    animateParticles,
    clearAllParticles,
    enableTilt,
    enableMagnetism,
    clickEffect,
    activeGlowColor,
    spotlightRadius,
    isAuraActive,
  ]);

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      className={`magic-bento-card group relative overflow-hidden transition-colors duration-300 ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        willChange: 'transform',
      }}
    >
      {/* ─── Spotlight Overlay ─── */}
      {enableSpotlight && (
        <div
          className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          style={{
            background:
              'radial-gradient(var(--spotlight-radius, 280px) circle at var(--mouse-x, 50%) var(--mouse-y, 50%), var(--spotlight-glow, rgba(255,85,0,0.12)), transparent 75%)',
          }}
        />
      )}

      {/* ─── Reactive Border Glow ─── */}
      {enableBorderGlow && (
        <div
          className="pointer-events-none absolute -inset-[1px] rounded-[inherit] z-20 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          style={{
            padding: '1.5px',
            background:
              'radial-gradient(var(--spotlight-radius, 280px) circle at var(--mouse-x, 50%) var(--mouse-y, 50%), var(--border-glow-color, rgba(255,85,0,0.75)), transparent 50%)',
            WebkitMask:
              'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          }}
        />
      )}

      {/* ─── Inner Content ─── */}
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
};

export default MagicBentoCard;
