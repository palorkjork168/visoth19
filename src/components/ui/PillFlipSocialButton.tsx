import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface PillFlipSocialButtonProps {
  href: string;
  ariaLabel: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
  isAuraActive?: boolean;
  accentColor?: string; // Brand accent on hover (e.g. #0077B5, #0088CC, #FF5500)
  className?: string;
}

export const PillFlipSocialButton: React.FC<PillFlipSocialButtonProps> = ({
  href,
  ariaLabel,
  children,
  target = '_blank',
  rel = 'noreferrer',
  isAuraActive = false,
  accentColor,
  className = '',
}) => {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const circleRef = useRef<HTMLSpanElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const activeAccent = accentColor || (isAuraActive ? '#FF5500' : '#18181B');

  useEffect(() => {
    const btn = buttonRef.current;
    const circle = circleRef.current;
    if (!btn || !circle) return;

    const setupCircle = () => {
      const rect = btn.getBoundingClientRect();
      const w = rect.width || 56;
      const h = rect.height || 56;

      // Calculate radius for expanding circle to smoothly cover the button from bottom
      const R = ((w * w) / 4 + h * h) / (2 * h);
      const D = Math.ceil(2 * R) + 2;
      const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
      const originY = D - delta;

      circle.style.width = `${D}px`;
      circle.style.height = `${D}px`;
      circle.style.bottom = `-${delta}px`;

      gsap.set(circle, {
        xPercent: -50,
        scale: 0,
        transformOrigin: `50% ${originY}px`,
      });

      tlRef.current?.kill();
      const tl = gsap.timeline({ paused: true });
      tl.to(
        circle,
        {
          scale: 1.25,
          xPercent: -50,
          duration: 0.45,
          ease: 'power3.out',
          overwrite: 'auto',
        },
        0
      );

      tlRef.current = tl;
    };

    setupCircle();
    window.addEventListener('resize', setupCircle);

    return () => {
      window.removeEventListener('resize', setupCircle);
    };
  }, []);

  const handleMouseEnter = () => {
    tlRef.current?.play();
  };

  const handleMouseLeave = () => {
    tlRef.current?.reverse();
  };

  return (
    <a
      ref={buttonRef}
      href={href}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative w-13 h-13 sm:w-14 sm:h-14 rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 shadow-sm cursor-pointer select-none group active:scale-95 ${
        isAuraActive
          ? 'text-zinc-200 hover:text-white'
          : 'text-zinc-700 hover:text-white'
      } ${className}`}
    >
      {/* ─── Continuous Smooth Rotating Gradient Border (Always Animated) ─── */}
      <span
        className="absolute -inset-[2px] rounded-full pointer-events-none transition-opacity duration-300"
        style={{
          background: isAuraActive
            ? 'conic-gradient(from 0deg, transparent 0deg, #FF3300 90deg, #FFAA00 180deg, #FF3300 270deg, transparent 360deg)'
            : `conic-gradient(from 0deg, transparent 0deg, ${activeAccent} 180deg, transparent 360deg)`,
          animation: 'spin-continuous 6s linear infinite',
        }}
        aria-hidden="true"
      />

      {/* ─── Inner Button Face Container ─── */}
      <span
        className={`absolute inset-[1.5px] rounded-full z-[1] transition-colors duration-300 ${
          isAuraActive ? 'bg-[#111218]' : 'bg-white'
        }`}
        aria-hidden="true"
      />

      {/* ─── Rising Background Fill on Hover ─── */}
      <span
        ref={circleRef}
        className="pointer-events-none absolute left-1/2 bottom-0 rounded-full z-[2] block transition-colors duration-300"
        style={{
          background: isAuraActive
            ? 'linear-gradient(135deg, #FF4500, #FF6600)'
            : activeAccent === '#18181B'
            ? '#000000'
            : activeAccent,
        }}
        aria-hidden="true"
      />

      {/* ─── Always Continuously Spinning Icon (Not too fast, not too slow) ─── */}
      <div
        className="relative z-[3] flex items-center justify-center pointer-events-none animate-spin-continuous"
        style={{
          transformOrigin: '50% 50%',
          willChange: 'transform',
        }}
      >
        {children}
      </div>
    </a>
  );
};

export default PillFlipSocialButton;
