import { useState, useCallback } from 'react';
import { Flame, Sparkles } from 'lucide-react';

interface Aura3DButtonProps {
  isAuraActive: boolean;
  onToggle: () => void;
  className?: string;
}

export function Aura3DButton({ isAuraActive, onToggle, className = '' }: Aura3DButtonProps) {
  const [isPressed, setIsPressed] = useState(false);

  // Synthesized ignition whoosh via Web Audio API
  const playFlameSound = useCallback(() => {
    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const bufferSize = ctx.sampleRate * 0.75;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      let b0 = 0,
        b1 = 0,
        b2 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.969 * b2 + white * 0.153852;
        data[i] = (b0 + b1 + b2) * 0.24;
      }
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(260, ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(1400, ctx.currentTime + 0.18);
      filter.frequency.exponentialRampToValueAtTime(160, ctx.currentTime + 0.75);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.01, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.4, ctx.currentTime + 0.12);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.75);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      noise.start();
    } catch {
      // Audio not supported or policy blocked, silent fallback
    }
  }, []);

  const handleClick = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    try {
      playFlameSound();
    } catch {
      // AudioContext policy fallback
    }
    onToggle();
  };

  return (
    <div className={`relative inline-block select-none group ${className}`}>
      {/* ─── Glowing Hellfire / Cyber Aura Halo ─── */}
      <div
        className={`absolute -inset-1.5 rounded-2xl transition-all duration-500 blur-md ${
          isAuraActive
            ? 'bg-gradient-to-r from-[#FF3B00] via-[#FF8800] to-[#FFD700] opacity-90 animate-pulse'
            : 'bg-gradient-to-r from-orange-400/40 via-amber-300/30 to-orange-500/40 opacity-0 group-hover:opacity-75'
        }`}
      />

      {/* ─── Beacon Indicator to Re-ignite Ghost Rider Mode ─── */}
      {!isAuraActive && (
        <span className="absolute -top-1.5 -right-1.5 flex h-3.5 w-3.5 pointer-events-none z-20" title="Click to Ignite Ghost Rider">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5500] opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#FF5500] shadow-[0_0_8px_#FF5500]" />
        </span>
      )}

      {/* ─── Rotating Conic Gradient Outer Border ─── */}
      <div
        className={`relative p-[2px] rounded-2xl transition-all duration-500 ${
          isAuraActive
            ? 'bg-gradient-to-r from-[#FF4500] via-[#FFAA00] to-[#FF0033] shadow-[0_0_20px_rgba(255,85,0,0.7)]'
            : 'bg-zinc-300 group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-amber-500'
        }`}
      >
        {/* ─── 3D Button Pushable Base ─── */}
        <button
          type="button"
          id="aura-toggle-button"
          onClick={handleClick}
          onMouseDown={() => setIsPressed(true)}
          onMouseUp={() => setIsPressed(false)}
          onMouseLeave={() => setIsPressed(false)}
          className={`relative px-6 sm:px-7 py-3 rounded-2xl font-mono text-sm sm:text-base font-bold tracking-tight transition-all duration-150 cursor-pointer flex items-center gap-2.5 outline-none ${
            isPressed ? 'translate-y-[4px]' : 'translate-y-0'
          } ${
            isAuraActive
              ? 'bg-gradient-to-b from-[#2A0E00] to-[#120500] text-white border-t border-orange-400/50 shadow-[0_5px_0_#6E1E00,0_12px_24px_rgba(255,60,0,0.45)] active:shadow-[0_1px_0_#6E1E00]'
              : 'bg-gradient-to-b from-white via-zinc-50 to-zinc-100 text-black border border-zinc-200/80 shadow-[0_5px_0_#C4C4C7,0_8px_16px_rgba(0,0,0,0.06)] active:shadow-[0_1px_0_#C4C4C7] group-hover:border-zinc-300'
          }`}
        >
          {/* Flame Icon with dynamic jump */}
          <span className="relative flex items-center justify-center">
            {isAuraActive ? (
              <Flame className="w-5 h-5 text-orange-400 animate-bounce fill-orange-500 drop-shadow-[0_0_8px_#FF5500]" />
            ) : (
              <Sparkles className="w-4 h-4 text-orange-500 group-hover:scale-125 transition-transform" />
            )}
          </span>

          {/* Button Text */}
          <span
            className={`tracking-wide ${
              isAuraActive
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-300 to-amber-200 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] font-black'
                : 'text-zinc-900 group-hover:text-black font-bold'
            }`}
          >
            {isAuraActive ? 'AURA MAX (+9999)' : '+9999 Aura'}
          </span>

          {/* Mini 3D Pill Badge */}
          <span
            className={`text-[10px] font-mono px-2 py-0.5 rounded-full uppercase tracking-widest font-black ${
              isAuraActive
                ? 'bg-[#FF5500] text-black shadow-[0_0_8px_#FF5500]'
                : 'bg-zinc-200 text-zinc-600 group-hover:bg-orange-100 group-hover:text-orange-700'
            }`}
          >
            {isAuraActive ? 'ACTIVE' : '3D'}
          </span>
        </button>
      </div>
    </div>
  );
}
