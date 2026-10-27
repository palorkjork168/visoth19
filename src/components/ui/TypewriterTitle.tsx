import { useState, useEffect } from 'react';
import { Flame } from 'lucide-react';

interface TypewriterTitleProps {
  className?: string;
  isAuraActive?: boolean;
}

const titles = [
  'Junior Full-Stack Developer',
  'Software Developer',
  'Web Developer',
  'Ghost Rider',
];

export function TypewriterTitle({ className = '', isAuraActive = false }: TypewriterTitleProps) {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(70);

  useEffect(() => {
    const fullText = titles[currentTitleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        const nextText = fullText.slice(0, displayedText.length + 1);
        setDisplayedText(nextText);
        setTypingSpeed(55 + Math.random() * 30); // organic typing variation

        if (nextText === fullText) {
          // Pause when complete before deleting
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        // Deleting backward
        const nextText = fullText.slice(0, displayedText.length - 1);
        setDisplayedText(nextText);
        setTypingSpeed(30);

        if (nextText === '') {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTitleIndex, typingSpeed]);

  return (
    <div className={`flex flex-col gap-2 font-mono ${className}`}>
      {/* Status indicator tag */}
      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
              isAuraActive ? 'bg-[#FF5500]' : 'bg-emerald-500'
            }`}
          />
          <span
            className={`relative inline-flex rounded-full h-2 w-2 ${
              isAuraActive ? 'bg-[#FF5500]' : 'bg-emerald-600'
            }`}
          />
        </span>
        <span className="text-[11px] font-semibold tracking-wider uppercase text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
          {isAuraActive ? (
            <>
              <span>HELLFIRE OVERDRIVE</span>
              <Flame className="w-3.5 h-3.5 text-[#FF5500]" />
            </>
          ) : (
            'AVAILABLE FOR HIRE'
          )}
        </span>
      </div>

      {/* Dynamic Typewriter Text with animated cursor */}
      <div className="flex items-center min-h-[32px] sm:min-h-[36px]">
        <span className={isAuraActive ? "text-zinc-400 mr-2 text-sm sm:text-base font-normal" : "text-zinc-500 mr-2 text-sm sm:text-base font-semibold"}>&gt;</span>
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
          className={`inline-block w-2 sm:w-2.5 h-4 sm:h-5 ml-1 animate-pulse align-middle ${
            isAuraActive ? 'bg-[#FF5500] shadow-[0_0_8px_#FF5500]' : 'bg-zinc-950'
          }`}
        />
      </div>
    </div>
  );
}
