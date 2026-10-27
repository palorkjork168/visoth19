import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Zap, Skull } from 'lucide-react';
import normalImg from '../../assets/profile/palorkJork.png';
import ghostImg from '../../assets/profile/ghostJork.png';

interface GhostRiderCardProps {
  className?: string;
  onModeChange?: (isGhost: boolean) => void;
}

export function GhostRiderCard({ className = '', onModeChange }: GhostRiderCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const isGhost = isHovered || isLocked;

  const handleToggle = () => {
    const nextState = !isLocked;
    setIsLocked(nextState);
    if (onModeChange) onModeChange(nextState);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (onModeChange) onModeChange(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (onModeChange) onModeChange(isLocked);
  };

  return (
    <div
      className={`relative group select-none ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Outer Hellfire / Cyber Aura */}
      <motion.div
        className="absolute -inset-[3px] rounded-xl pointer-events-none transition-all duration-700"
        style={{
          clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))',
          background: isGhost
            ? 'linear-gradient(135deg, #FF3B00, #FF8800, #FF0033, #FFB703)'
            : 'linear-gradient(135deg, #00D4FF, rgba(0,212,255,0.2), #0077B6)',
          filter: isGhost
            ? 'drop-shadow(0 0 30px rgba(255, 68, 0, 0.8)) blur(1px)'
            : 'drop-shadow(0 0 15px rgba(0, 212, 255, 0.4))',
          opacity: isGhost ? 1 : 0.6,
        }}
        animate={isGhost ? { scale: [1, 1.015, 1], opacity: [0.9, 1, 0.9] } : {}}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Main Card Frame with Chamfered Corners */}
      <div
        className="relative z-10 w-[300px] sm:w-[340px] md:w-[380px] bg-[#0A0B10] overflow-hidden border border-transparent transition-all duration-500"
        style={{
          clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))',
        }}
      >
        {/* Top Header Strip matching reference card HUD */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0E1017] border-b border-white/10">
          <div className="flex items-center gap-2">
            <span
              className={`w-2.5 h-2.5 rounded-full transition-colors duration-500 ${
                isGhost ? 'bg-[#FF4500] shadow-[0_0_10px_#FF4500]' : 'bg-[#00D4FF] shadow-[0_0_10px_#00D4FF]'
              }`}
            />
            <span
              className="text-[11px] font-bold tracking-widest uppercase transition-colors duration-500 font-gamer flex items-center gap-1.5"
              style={{ color: isGhost ? '#FF8800' : '#00D4FF' }}
            >
              {isGhost ? (
                <>
                  <Flame className="w-3.5 h-3.5 text-[#FF5500]" />
                  <span>SPIRIT OF VENGEANCE</span>
                </>
              ) : (
                'CHOU SEREYVISOTH'
              )}
            </span>
          </div>

          <span className="font-mono text-[10px] text-white/50 tracking-wider">
            {isGhost ? 'LVL.99 HELLFIRE' : 'LVL.24 DEV'}
          </span>
        </div>

        {/* Profile Image Viewport */}
        <div className="relative w-full h-[440px] sm:h-[480px] bg-[#07080C] overflow-hidden">
          {/* Normal Mode Image */}
          <img
            src="/assets/profile/palorkJork.png"
            alt="Sereyvisoth Normal"
            className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-700 ease-in-out ${
              isGhost ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
            }`}
          />

          {/* Ghost Rider Mode Image */}
          <img
            src="/assets/profile/ghostJork.png"
            alt="Sereyvisoth Ghost Rider"
            className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-700 ease-in-out ${
              isGhost ? 'opacity-100 scale-100 filter drop-shadow-[0_0_25px_rgba(255,85,0,0.8)]' : 'opacity-0 scale-95 pointer-events-none'
            }`}
          />

          {/* Hellfire Overlay Effects when Ghost Rider is active */}
          <AnimatePresence>
            {isGhost && (
              <>
                {/* Flame Heatwave Vignette */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 pointer-events-none mix-blend-screen bg-gradient-to-t from-[#FF2A00]/40 via-transparent to-[#FF8800]/25"
                />

                {/* Animated Hellfire Sparks / Embers */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute rounded-full bg-[#FFAA00]"
                      style={{
                        width: `${Math.random() * 4 + 2}px`,
                        height: `${Math.random() * 4 + 2}px`,
                        left: `${Math.random() * 90 + 5}%`,
                        bottom: '5%',
                        boxShadow: '0 0 8px #FF4500, 0 0 15px #FF8800',
                      }}
                      animate={{
                        y: [-10, -220 - Math.random() * 150],
                        x: [(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 60],
                        opacity: [0, 1, 0.8, 0],
                        scale: [0.8, 1.4, 0.2],
                      }}
                      transition={{
                        duration: 1.8 + Math.random() * 1.5,
                        repeat: Infinity,
                        delay: Math.random() * 1.5,
                        ease: 'easeOut',
                      }}
                    />
                  ))}
                </div>

                {/* Burning Chains Graphic Accents */}
                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  exit={{ scaleX: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-4 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-[#FF6600] to-transparent pointer-events-none shadow-[0_0_10px_#FF4500]"
                />
              </>
            )}
          </AnimatePresence>

          {/* Bottom Gradient for Text Legibility */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0A0B10] via-[#0A0B10]/70 to-transparent pointer-events-none" />

          {/* Floating HUD Tag on Avatar */}
          <div className="absolute top-4 right-4 z-20">
            <span
              className={`px-2.5 py-1 text-[10px] font-mono tracking-widest uppercase border backdrop-blur-md transition-colors duration-500 flex items-center gap-1.5 ${
                isGhost
                  ? 'border-[#FF5500]/60 bg-[#FF2200]/20 text-[#FFAA00]'
                  : 'border-[#00D4FF]/40 bg-[#00D4FF]/10 text-[#00D4FF]'
              }`}
            >
              {isGhost ? (
                <>
                  <Flame className="w-3 h-3 text-[#FF5500]" />
                  <span>PENANCE STARE</span>
                </>
              ) : (
                <>
                  <Zap className="w-3 h-3 text-[#00D4FF]" />
                  <span>HOVER TO IGNITE</span>
                </>
              )}
            </span>
          </div>

          {/* Transform Instruction Prompt */}
          <div className="absolute bottom-16 inset-x-4 z-20 flex flex-col items-center pointer-events-none">
            <motion.p
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-[11px] font-mono tracking-wider text-center"
              style={{ color: isGhost ? '#FFB703' : '#94A3B8' }}
            >
              {isGhost ? '« HELLFIRE PROTOCOL ENGAGED »' : '« HOVER CURSOR OR CLICK BUTTON TO TRANSFORM »'}
            </motion.p>
          </div>
        </div>

        {/* Card Footer Action Bar (Matches Reference Image "MINT NFT ->" style) */}
        <div
          onClick={handleToggle}
          className={`cursor-pointer w-full py-3.5 px-5 flex items-center justify-between transition-all duration-500 ${
            isGhost
              ? 'bg-gradient-to-r from-[#FF4500] to-[#D00000] text-white hover:brightness-110 shadow-[0_0_20px_rgba(255,69,0,0.6)]'
              : 'bg-[#121522] border-t border-[rgba(0,212,255,0.25)] text-[#00D4FF] hover:bg-[#00D4FF]/15'
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="flex items-center">
              {isGhost ? (
                <Skull className="w-4 h-4 text-white" />
              ) : (
                <Zap className="w-4 h-4 text-[#00D4FF]" />
              )}
            </span>
            <span className="font-gamer font-bold text-xs uppercase tracking-widest">
              {isGhost ? 'GHOST RIDER ACTIVE' : 'IGNITE GHOST RIDER'}
            </span>
          </div>

          <div className="flex items-center gap-1">
            <span className="text-xs font-mono">{isLocked ? '[LOCKED]' : 'CLICK'}</span>
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${isGhost ? 'translate-x-1' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
