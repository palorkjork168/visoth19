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
  const iconRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLSpanElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const iconTweenRef = useRef<gsap.core.Tween | null>(null);

  const activeAccent = accentColor || (isAuraActive ? '#FF5500' : '#18181B');

  useEffect(() => {
    const btn = buttonRef.current;
    const circle = circleRef.current;
    if (!btn || !circle) return;

    const setupCircle = () => {
      const rect = btn.getBoundingClientRect();
      const w = rect.width || 48;
      const h = rect.height || 48;

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
          duration: 0.5,
          ease: 'power3.out',
          overwrite: 'auto',
        },
        0
      );

      tlRef.current = tl;
    };

    setupCircle();
    window.addEventListener('resize', setupCircle);
    return () => window.removeEventListener('resize', setupCircle);
  }, []);

  const handleMouseEnter = () => {
    // 1. Rising background circle animation from PillNav
    tlRef.current?.play();

    // 2. Flip / 360 Elastic rotation on the icon from PillNav handleLogoEnter
    if (iconRef.current) {
      iconTweenRef.current?.kill();
      iconTweenRef.current = gsap.to(iconRef.current, {
        rotate: 360,
        scale: 1.18,
        duration: 0.85,
        ease: 'elastic.out(1, 0.45)',
        overwrite: 'auto',
        onComplete: () => {
          gsap.set(iconRef.current, { rotate: 0, scale: 1.1 });
        },
      });
    }
  };

  const handleMouseLeave = () => {
    tlRef.current?.reverse();
    if (iconRef.current) {
      iconTweenRef.current?.kill();
      gsap.to(iconRef.current, {
        scale: 1,
        rotate: 0,
        duration: 0.3,
        ease: 'power2.out',
      });
    }
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
      className={`relative w-13 h-13 sm:w-14 sm:h-14 rounded-full border flex items-center justify-center overflow-hidden transition-all duration-300 shadow-sm cursor-pointer select-none group active:scale-95 ${
        isAuraActive
          ? 'border-zinc-800 bg-zinc-900/90 text-zinc-300 hover:text-white hover:border-orange-500/60 hover:shadow-[0_0_20px_rgba(255,85,0,0.35)]'
          : 'border-zinc-300 bg-white text-zinc-700 hover:text-white hover:border-black hover:shadow-md'
      } ${className}`}
    >
      {/* ─── Rising Background Circle (PillNav style) ─── */}
      <span
        ref={circleRef}
        className="pointer-events-none absolute left-1/2 bottom-0 rounded-full z-[1] block transition-colors duration-300"
        style={{
          background: isAuraActive
            ? 'linear-gradient(135deg, #FF4500, #FF6600)'
            : activeAccent === '#18181B'
            ? '#000000'
            : activeAccent,
        }}
        aria-hidden="true"
      />

      {/* ─── Flipping Icon Container ─── */}
      <div
        ref={iconRef}
        className="relative z-[2] flex items-center justify-center transition-transform pointer-events-none"
        style={{ willChange: 'transform' }}
      >
        {children}
      </div>
    </a>
  );
};

export default PillFlipSocialButton;
