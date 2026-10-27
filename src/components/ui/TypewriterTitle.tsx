import { useState, useEffect } from 'react';
import { Flame } from 'lucide-react';

interface TypewriterTitleProps {
  className?: string;
  isAuraActive?: boolean;
}

const titles = [
  'Software Developer',
  'Web Developer',
  'Ghost Rider',
];

export function TypewriterTitle({ className = '', isAuraActive = false }: TypewriterTitleProps) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    // 1. Pause when full word is typed so visitor has plenty of time to read
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 3800); // comfortable 3.8s read time
      return () => clearTimeout(pauseTimer);
    }

    // 2. Deleting characters smoothly
    if (isDeleting) {
      if (subIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % titles.length);
        return;
      }
      const deleteTimer = setTimeout(() => {
        setSubIndex((prev) => prev - 1);
      }, 35);
      return () => clearTimeout(deleteTimer);
    }

    // 3. Typing characters forward with steady, fluid cadence
    const currentWord = titles[index];
    if (subIndex === currentWord.length) {
      setIsPaused(true);
      return;
    }

    const typeTimer = setTimeout(() => {
      setSubIndex((prev) => prev + 1);
    }, 75);
    return () => clearTimeout(typeTimer);
  }, [subIndex, isDeleting, isPaused, index]);

  const displayedText = titles[index].substring(0, subIndex);

  return (
    <div className={`flex flex-col gap-2.5 font-mono ${className}`}>
      {/* ─── Status Indicator Tag (Calm, elegant radar pulse) ─── */}
      <div className="flex items-center gap-2">
        <span
          className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-[11px] font-mono font-medium tracking-wider uppercase transition-all duration-300 border ${
            isAuraActive
              ? 'bg-orange-500/10 text-orange-400 border-orange-500/30 shadow-[0_0_12px_rgba(255,85,0,0.15)]'
              : 'bg-emerald-50 text-emerald-700 border-emerald-200/80 shadow-xs'
          }`}
        >
          <span className="relative flex h-2 w-2">
            <span
              className={`absolute inline-flex h-full w-full rounded-full opacity-60 animate-ping ${
                isAuraActive ? 'bg-[#FF5500]' : 'bg-emerald-500'
              }`}
              style={{ animationDuration: '2.5s' }}
            />
            <span
              className={`relative inline-flex rounded-full h-2 w-2 ${
                isAuraActive ? 'bg-[#FF5500]' : 'bg-emerald-600'
              }`}
            />
          </span>
          {isAuraActive ? (
            <span className="flex items-center gap-1.5 font-bold">
              <span>HELLFIRE OVERDRIVE</span>
              <Flame className="w-3.5 h-3.5 text-[#FF5500]" />
            </span>
          ) : (
            <span className="font-semibold">AVAILABLE FOR HIRE</span>
          )}
        </span>
      </div>

      {/* ─── Dynamic Typewriter Text with Animated Terminal Cursor ─── */}
      <div className="flex items-center min-h-[32px] sm:min-h-[36px]">
        <span className={isAuraActive ? 'text-zinc-400 mr-2 text-sm sm:text-base font-normal' : 'text-zinc-500 mr-2 text-sm sm:text-base font-semibold'}>
          &gt;
        </span>
        <span
          className={`text-sm sm:text-base md:text-lg font-bold tracking-tight transition-colors duration-300 ${
            isAuraActive
              ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#FF5500] via-[#FFAA00] to-[#FF3B00] drop-shadow-[0_0_10px_rgba(255,85,0,0.5)]'
              : 'text-zinc-950 font-extrabold'
          }`}
        >
          {displayedText}
        </span>
        <span
          className={`inline-block w-2 sm:w-2.5 h-4 sm:h-5 ml-1.5 rounded-xs animate-pulse align-middle ${
            isAuraActive ? 'bg-[#FF5500] shadow-[0_0_8px_#FF5500]' : 'bg-zinc-950'
          }`}
        />
      </div>
    </div>
  );
}
