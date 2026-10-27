import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '../../lib/utils';

export interface LightBeamButtonProps {
  children: React.ReactNode;
  className?: string;
  gradientColors?: [string, string, string];
  href?: string;
  target?: string;
  rel?: string;
  download?: string | boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  innerClassName?: string;
  pill?: boolean;
  isDark?: boolean;
}

/**
 * LightBeamButton
 * 
 * A futuristic button component featuring a rotating light beam border effect,
 * implemented with CSS @property animations and tuned to our Hellfire Orange (#FF5500 / #FFAA00) palette.
 * Automatically adapts seamlessly to both Light Mode and Dark Mode.
 */
export function LightBeamButton({
  children,
  className,
  gradientColors = ['#FF5500', '#FFAA00', '#FF5500'],
  href,
  target,
  rel,
  download,
  onClick,
  type = 'button',
  disabled,
  innerClassName,
  pill = true,
  isDark,
  ...rest
}: LightBeamButtonProps) {
  // Construct rotating conic gradient
  const gradientString = `conic-gradient(from var(--gradient-angle), transparent 0%, ${gradientColors[0]} 35%, ${gradientColors[1]} 50%, transparent 65%, transparent 100%)`;

  const roundedClasses = pill ? 'rounded-full' : 'rounded-2xl';

  // Compute theme styles: if isDark is provided use it, otherwise fall back to responsive dark: variants
  const isExplicitDark = isDark === true;
  const isExplicitLight = isDark === false;

  const themeClasses = isExplicitDark
    ? 'bg-neutral-950 text-white border-transparent shadow-[0_0_20px_-5px_rgba(255,85,0,0.35)] hover:shadow-[0_0_25px_-5px_rgba(255,85,0,0.6)]'
    : isExplicitLight
    ? 'bg-white text-zinc-900 border border-zinc-200/90 shadow-[0_2px_12px_rgba(255,85,0,0.14)] hover:shadow-[0_4px_20px_rgba(255,85,0,0.3)] hover:border-[#FF5500]/40'
    : 'bg-white dark:bg-neutral-950 text-zinc-900 dark:text-white border border-zinc-200/90 dark:border-transparent shadow-[0_2px_12px_rgba(255,85,0,0.14)] hover:shadow-[0_4px_20px_rgba(255,85,0,0.3)] dark:shadow-[0_0_20px_-5px_rgba(255,85,0,0.35)] dark:hover:shadow-[0_0_25px_-5px_rgba(255,85,0,0.6)]';

  const innerBgClasses = isExplicitDark
    ? 'bg-neutral-950/95 group-hover:bg-neutral-900/90'
    : isExplicitLight
    ? 'bg-white group-hover:bg-orange-50/50'
    : 'bg-white dark:bg-neutral-950/95 group-hover:bg-orange-50/50 dark:group-hover:bg-neutral-900/90';

  const textColorClasses = isExplicitDark
    ? 'text-white group-hover:text-orange-300'
    : isExplicitLight
    ? 'text-zinc-900 group-hover:text-[#FF5500]'
    : 'text-zinc-900 dark:text-white group-hover:text-[#FF5500] dark:group-hover:text-orange-300';

  const shineClasses = isExplicitDark
    ? 'bg-[radial-gradient(circle_at_50%_0%,rgba(255,85,0,0.25)_0%,transparent_70%)]'
    : isExplicitLight
    ? 'bg-[radial-gradient(circle_at_50%_0%,rgba(255,85,0,0.12)_0%,transparent_70%)]'
    : 'bg-[radial-gradient(circle_at_50%_0%,rgba(255,85,0,0.12)_0%,transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(255,85,0,0.25)_0%,transparent_70%)]';

  const commonClasses = cn(
    'group relative isolate overflow-hidden px-4 py-2 text-xs sm:text-sm font-semibold transition-all inline-flex items-center justify-center cursor-pointer select-none',
    themeClasses,
    disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
    roundedClasses,
    className
  );

  const innerContent = (
    <>
      <span className={cn('relative z-10 flex items-center justify-center gap-2 font-mono transition-colors', textColorClasses)}>
        {children}
      </span>

      {/* Rotating Gradient Light Beam Border */}
      <div
        className={cn('absolute inset-0 -z-10 p-[1.5px] animate-border-spin pointer-events-none', roundedClasses)}
        style={{
          '--gradient-angle': '0deg',
          background: gradientString,
        } as React.CSSProperties}
      />

      {/* Inner Mask Background (maintains contrast & readability in light/dark mode) */}
      <div
        className={cn(
          'absolute inset-[1.5px] -z-10 transition-colors duration-200',
          innerBgClasses,
          roundedClasses,
          innerClassName
        )}
      />

      {/* Hellfire Radial Shine Glow on Hover */}
      <div
        className={cn(
          'absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none',
          shineClasses,
          roundedClasses
        )}
      />
    </>
  );

  return (
    <>
      <style>{`
        @property --gradient-angle {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }
        @keyframes border-spin {
          from { --gradient-angle: 0deg; }
          to { --gradient-angle: 360deg; }
        }
        .animate-border-spin {
          animation: border-spin 2.2s linear infinite;
        }
      `}</style>

      {href ? (
        <motion.a
          href={href}
          target={target}
          rel={target === '_blank' ? (rel || 'noopener noreferrer') : rel}
          download={download as any}
          onClick={onClick as any}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className={commonClasses}
          {...(rest as HTMLMotionProps<'a'>)}
        >
          {innerContent}
        </motion.a>
      ) : (
        <motion.button
          type={type}
          disabled={disabled}
          onClick={onClick}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className={commonClasses}
          {...(rest as HTMLMotionProps<'button'>)}
        >
          {innerContent}
        </motion.button>
      )}
    </>
  );
}

export default LightBeamButton;
