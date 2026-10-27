import React from 'react';
import { MagicBentoCard } from './MagicBentoCard';

export interface SkillItem {
  name: string;
  category?: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
}

interface SkillsMarqueeProps {
  skills: SkillItem[];
  isAuraActive?: boolean;
}

export function SkillsMarquee({ skills, isAuraActive = false }: SkillsMarqueeProps) {
  // Duplicate skills list to ensure seamless infinite looping
  const duplicatedSkills = [...skills, ...skills];

  return (
    <div className="relative w-full overflow-hidden py-3 select-none group">
      {/* ─── Alpha Gradient Mask on Left and Right Edges ─── */}
      <style>
        {`
          @keyframes infinite-skills-marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .skills-marquee-track {
            display: flex;
            width: max-content;
            animation: infinite-skills-marquee 38s linear infinite;
          }

          .skills-marquee-container:hover .skills-marquee-track {
            animation-play-state: paused;
          }

          .skills-alpha-mask {
            mask-image: linear-gradient(
              to right,
              transparent 0%,
              rgba(0, 0, 0, 1) 7%,
              rgba(0, 0, 0, 1) 93%,
              transparent 100%
            );
            -webkit-mask-image: linear-gradient(
              to right,
              transparent 0%,
              rgba(0, 0, 0, 1) 7%,
              rgba(0, 0, 0, 1) 93%,
              transparent 100%
            );
          }
        `}
      </style>

      {/* ─── Scrolling Container with Alpha Mask ─── */}
      <div className="skills-marquee-container skills-alpha-mask w-full overflow-hidden">
        <div className="skills-marquee-track gap-4 py-3">
          {duplicatedSkills.map((skill, index) => {
            const IconComp = skill.icon;
            return (
              <div
                key={`${skill.name}-${index}`}
                className="flex-shrink-0"
              >
                <MagicBentoCard
                  isAuraActive={isAuraActive}
                  enableTilt={true}
                  enableMagnetism={true}
                  className={`px-5 py-3.5 rounded-2xl border transition-all duration-300 flex items-center gap-3.5 cursor-default ${
                    isAuraActive
                      ? 'bg-zinc-900/85 border-zinc-800 shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:border-[#FF5500]/50'
                      : 'bg-white border-zinc-200/90 shadow-xs hover:border-zinc-400 hover:shadow-sm'
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                      isAuraActive
                        ? 'bg-zinc-800/90 border border-zinc-700/60 shadow-[0_0_12px_rgba(255,85,0,0.12)]'
                        : 'bg-zinc-100 border border-zinc-200'
                    }`}
                  >
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col pr-1">
                    <span
                      className={`font-sans font-bold text-sm sm:text-base whitespace-nowrap ${
                        isAuraActive ? 'text-white' : 'text-zinc-900'
                      }`}
                    >
                      {skill.name}
                    </span>
                    {skill.category && (
                      <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">
                        {skill.category}
                      </span>
                    )}
                  </div>
                </MagicBentoCard>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
