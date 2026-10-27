import { motion } from 'framer-motion';
import { FadeIn } from '../ui/FadeIn';
import { Code, Flame, Palette, Database, Cpu, Terminal, Sparkles, ShieldAlert } from 'lucide-react';

const disciplines = [
  {
    id: 'frontend',
    title: 'FRONTEND WARRIOR',
    role: 'REACT & MODERN UI',
    color: '#00D4FF',
    glowColor: 'rgba(0, 212, 255, 0.4)',
    bgOrb: 'bg-gradient-to-br from-[#00D4FF] to-[#0055D4]',
    icon: Code,
    skills: ['React 18', 'TypeScript', 'Tailwind CSS', 'Vite', 'Framer Motion'],
    stats: 'LEVEL 95 // SPEED 99',
  },
  {
    id: 'backend',
    title: 'BACKEND DEMON',
    role: 'APIS & SERVERS',
    color: '#FF5500',
    glowColor: 'rgba(255, 85, 0, 0.5)',
    bgOrb: 'bg-gradient-to-br from-[#FF8800] to-[#D00000]',
    icon: Flame,
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'Middleware'],
    stats: 'LEVEL 92 // POWER 98',
  },
  {
    id: 'database',
    title: 'DATA CONJURER',
    role: 'RELATIONAL STORAGE',
    color: '#FFB800',
    glowColor: 'rgba(255, 184, 0, 0.4)',
    bgOrb: 'bg-gradient-to-br from-[#FFD000] to-[#E65100]',
    icon: Database,
    skills: ['PostgreSQL', 'Sequelize ORM', 'Schema Design', 'Query Tuning'],
    stats: 'LEVEL 88 // STORAGE 94',
  },
  {
    id: 'visual',
    title: 'VISUAL ALCHEMIST',
    role: 'GRAPHICS & UI/UX',
    color: '#BF5FFF',
    glowColor: 'rgba(191, 95, 255, 0.4)',
    bgOrb: 'bg-gradient-to-br from-[#E056FD] to-[#6807F9]',
    icon: Palette,
    skills: ['Figma', 'UI/UX Design', 'Poster Design', 'Social Branding'],
    stats: 'LEVEL 96 // CREATIVE 99',
  },
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative bg-[#07070A] py-28 md:py-36 px-5 sm:px-8 md:px-12 overflow-hidden border-t border-white/5"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#FF4500]/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid-dense opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header matching Reference Image "— MEET OUR TEAM —" */}
        <div className="flex flex-col items-center text-center mb-16">
          <FadeIn delay={0.1} y={15}>
            <div className="flex items-center gap-4 text-[#FF5500] mb-3">
              <span className="w-8 md:w-16 h-px bg-gradient-to-r from-transparent to-[#FF5500]" />
              <span className="font-gamer font-bold text-xs tracking-[0.3em] uppercase">
                CORE DISCIPLINES
              </span>
              <span className="w-8 md:w-16 h-px bg-gradient-to-l from-transparent to-[#FF5500]" />
            </div>
          </FadeIn>

          <FadeIn delay={0.2} y={20}>
            <h2 className="font-gamer font-black uppercase tracking-[0.1em] text-[clamp(2.2rem,6vw,4rem)] text-white drop-shadow-[0_4px_25px_rgba(255,255,255,0.2)] flex items-center justify-center gap-3">
              <span className="text-white/40 font-light">&mdash;</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E2E8F0] to-[#94A3B8]">
                TECH 
              </span>
              <span className="text-white/40 font-light">&mdash;</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.3} y={15}>
            <p className="mt-3 text-white/50 text-xs sm:text-sm font-mono tracking-widest max-w-lg">
              THE FOUR PILLARS OF SOFTWARE MASTERY &amp; VISUAL CREATION
            </p>
          </FadeIn>
        </div>

        {/* 4 Pods matching Reference Image ("MEET OUR TEAM" cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {disciplines.map((item, idx) => {
            const Icon = item.icon;

            return (
              <FadeIn key={item.id} delay={0.2 + idx * 0.1} y={30}>
                <div
                  className="group relative flex flex-col items-center p-7 rounded-2xl bg-[#0D101C]/90 border border-white/10 hover:border-transparent transition-all duration-500 overflow-hidden text-center hover:-translate-y-2"
                  style={{
                    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                  }}
                >
                  {/* Glowing neon bottom border gradient on hover */}
                  <div
                    className="absolute inset-x-0 bottom-0 h-1 transition-all duration-500 opacity-60 group-hover:opacity-100 group-hover:h-1.5"
                    style={{ backgroundColor: item.color, boxShadow: `0 0 15px ${item.color}` }}
                  />

                  {/* Circular glowing character/skill orb matching reference image */}
                  <div className="relative mb-6">
                    {/* Outer animated halo ring */}
                    <div
                      className="w-24 h-24 rounded-full p-1 flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
                      style={{
                        background: `radial-gradient(circle, ${item.color} 0%, transparent 70%)`,
                        boxShadow: `0 0 25px ${item.glowColor}`,
                      }}
                    >
                      <div className={`w-20 h-20 rounded-full ${item.bgOrb} flex items-center justify-center text-white shadow-inner shadow-black/50`}>
                        <Icon className="w-10 h-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]" />
                      </div>
                    </div>
                  </div>

                  {/* Title & Role matching Reference Image typography */}
                  <h3
                    className="font-gamer font-black text-sm tracking-widest uppercase text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-colors mb-1.5"
                  >
                    {item.title}
                  </h3>

                  <span
                    className="font-mono text-[10px] tracking-widest uppercase font-semibold mb-4"
                    style={{ color: item.color }}
                  >
                    {item.role}
                  </span>

                  {/* Skills tags list */}
                  <div className="flex flex-wrap gap-1.5 justify-center mb-5">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 text-[10px] font-mono tracking-wider bg-white/5 border border-white/5 text-white/70 rounded-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Card bottom stats tag */}
                  <div className="mt-auto pt-3 border-t border-white/5 w-full">
                    <span className="font-mono text-[9px] text-white/30 tracking-widest uppercase">
                      {item.stats}
                    </span>
                  </div>

                </div>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
}
