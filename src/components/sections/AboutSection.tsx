import { useState } from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from '../ui/FadeIn';
import { GhostRiderCard } from '../ui/GhostRiderCard';
import companionImg from '../../assets/cards/companion1.jpg';
import { Flame, Shield, Terminal, ArrowRight, Zap, Code2, Sparkles } from 'lucide-react';

export function AboutSection() {
  const [ghostModeActive, setGhostModeActive] = useState(false);

  return (
    <section
      id="about"
      className="relative bg-[#07070A] py-28 md:py-36 px-5 sm:px-8 md:px-12 overflow-hidden border-t border-white/5"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#FF4500]/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#00D4FF]/8 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid-cyber opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Slanted Category Tag matching Reference Image */}
        <FadeIn delay={0.1} y={15}>
          <div className="flex items-center gap-2 mb-3">
            <span className="font-gamer text-xs tracking-[0.25em] text-[#00D4FF] uppercase flex items-center gap-1.5">
              <span className="w-2 h-2 bg-[#00D4FF] rounded-sm transform rotate-45" />
              ABOUT
            </span>
          </div>
        </FadeIn>

        {/* Section Title matching "THE MAGICCRAFT" */}
        <FadeIn delay={0.2} y={20}>
          <h2 className="font-gamer font-black uppercase tracking-wider text-[clamp(2.4rem,6vw,4.5rem)] text-white mb-12 drop-shadow-[0_2px_20px_rgba(255,255,255,0.15)] flex flex-wrap items-center gap-3">
            <span>THE</span>
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#FF5500] via-[#FFB703] to-[#FB5607] drop-shadow-[0_0_25px_rgba(255,85,0,0.6)]">
              HELLFIRE CODER
            </span>
          </h2>
        </FadeIn>

        {/* Two-Column Section Layout matching Reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column — Bio & Action Buttons (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            <FadeIn delay={0.3} y={20}>
              <div className="relative pl-4 border-l-2 border-[#FF5500]/60 mb-8">
                <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed mb-4">
                  I&apos;m <span className="text-white font-bold">Chou Sereyvisoth</span>, a Year 4 Software Development student and full-stack engineer combining technical software architecture with high-impact visual design.
                </p>
                <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed">
                  When calm, I craft clean scalable architectures with React, Node.js, and PostgreSQL. But when the challenge strikes, the <span className="text-[#FF8800] font-semibold">Spirit of Vengeance</span> ignites — relentlessly optimizing code until perfection is achieved.
                </p>
              </div>
            </FadeIn>

            {/* Buttons Matrix matching Reference Image ("BETA TESTING", "MARKETPLACE", etc.) */}
            <FadeIn delay={0.4} y={20}>
              <div className="flex flex-col gap-3">
                {/* Row 1 — Large buttons */}
                <div className="flex flex-wrap sm:flex-nowrap gap-3">
                  <a
                    href="#projects"
                    className="relative group flex-1 py-3 px-5 text-center font-gamer text-xs font-bold tracking-widest uppercase transition-all duration-300"
                    style={{
                      clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00BFFF] to-[#0077B6] group-hover:from-[#FF5500] group-hover:to-[#D00000] transition-all duration-300 shadow-[0_0_15px_rgba(0,191,255,0.4)]" />
                    <span className="relative z-10 text-black font-black flex items-center justify-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 fill-current" />
                      VIEW PROJECTS
                    </span>
                  </a>

                  <a
                    href="#skills"
                    className="relative group flex-1 py-3 px-5 text-center font-gamer text-xs font-bold tracking-widest uppercase transition-all duration-300"
                    style={{
                      clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
                    }}
                  >
                    <div className="absolute inset-0 bg-[#0F1424] border border-[rgba(0,212,255,0.4)] group-hover:border-[#FF5500] transition-colors" />
                    <span className="relative z-10 text-[#00D4FF] group-hover:text-white flex items-center justify-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5" />
                      TECH 
                    </span>
                  </a>
                </div>

                {/* Row 2 — Secondary Pill buttons */}
                <div className="flex flex-wrap gap-2.5 pt-1">
                  <a
                    href="#contact"
                    className="px-3.5 py-1.5 rounded-sm bg-[#0B0F1A] border border-white/10 hover:border-[#00D4FF] text-[10px] font-mono tracking-widest uppercase text-white/70 hover:text-[#00D4FF] transition-all"
                  >
                    SUMMON DEV
                  </a>
                  <a
                    href="https://github.com/palorkjork168"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-1.5 rounded-sm bg-[#0B0F1A] border border-white/10 hover:border-[#FF5500] text-[10px] font-mono tracking-widest uppercase text-white/70 hover:text-[#FF5500] transition-all"
                  >
                    GITHUB REPOS
                  </a>
                  <span className="px-3.5 py-1.5 rounded-sm bg-[#160B08] border border-[#FF5500]/30 text-[10px] font-mono tracking-widest uppercase text-[#FF8800]">
                    PHNOM PENH, KH
                  </span>
                </div>

                {/* Interactive Status Tag */}
                <div className="mt-4 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#00FF66] animate-pulse" />
                  <span className="font-mono text-xs text-white/50 tracking-wider">
                    STATUS: READY FOR CONTRACT &amp; FULL-TIME ROLES
                  </span>
                </div>
              </div>
            </FadeIn>

          </div>

          {/* Right Column — 3 Character Cards Gallery matching Reference Image! (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-wrap md:flex-nowrap items-center justify-center lg:justify-end gap-5 sm:gap-6 relative">
            
            {/* CARD 1 (THE MAIN ATTRACTION: Normal <-> Ghost Rider Hover Transformation) */}
            <div className="relative z-30 transform hover:-translate-y-2 transition-transform duration-500">
              <GhostRiderCard onModeChange={setGhostModeActive} />
            </div>

            {/* CARD 2 (Tactical Operative Dev Class Card matching reference card 2) */}
            <div
              className="relative z-20 hidden sm:block w-[240px] md:w-[260px] bg-[#0A0D18] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(0,212,255,0.4)]"
              style={{
                clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))',
                border: '1px solid rgba(0, 212, 255, 0.35)',
              }}
            >
              {/* Card top banner */}
              <div className="px-3.5 py-2.5 bg-[#0D1220] border-b border-[#00D4FF]/20 flex items-center justify-between">
                <span className="font-gamer text-[10px] font-bold tracking-widest text-[#00D4FF]">
                  OPS // CYBER DEV
                </span>
                <span className="font-mono text-[9px] text-white/40">UNIT 02</span>
              </div>

              {/* Character Image */}
              <div className="relative h-[340px] overflow-hidden bg-[#070910]">
                <img
                  src={companionImg}
                  alt="Cyber Developer Companion"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0A0D18] via-[#0A0D18]/70 to-transparent" />
                
                {/* Tech stats floating overlay */}
                <div className="absolute bottom-4 inset-x-3 flex flex-col gap-1 text-[10px] font-mono text-white/80">
                  <div className="flex justify-between border-b border-white/10 pb-0.5">
                    <span className="text-[#00D4FF]">ROLE:</span>
                    <span>FULLSTACK</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-0.5">
                    <span className="text-[#00D4FF]">CORE:</span>
                    <span>REACT + NODE</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#00D4FF]">DATA:</span>
                    <span>POSTGRESQL</span>
                  </div>
                </div>
              </div>

              {/* Card bottom banner matching reference "MINT STAKING ->" */}
              <a
                href="#skills"
                className="w-full py-3 px-4 bg-[#0F172A] border-t border-[#00D4FF]/30 flex items-center justify-between text-[#00D4FF] hover:bg-[#00D4FF]/20 transition-colors"
              >
                <span className="font-gamer text-[10px] font-bold tracking-widest uppercase">
                  VIEW 
                </span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* CARD 3 (Right edge peeking card matching reference image) */}
            <div
              className="relative z-10 hidden xl:block w-[120px] h-[360px] bg-gradient-to-b from-[#1C0E0A] to-[#0A0707] overflow-hidden opacity-60 hover:opacity-100 transition-opacity border border-[#FF5500]/25"
              style={{
                clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 0 100%)',
              }}
            >
              <div className="h-full flex flex-col items-center justify-center p-3 text-center">
                <Flame className="w-6 h-6 text-[#FF5500] mb-2 animate-bounce" />
                <span className="font-gamer text-[9px] text-white/70 tracking-widest [writing-mode:vertical-lr] uppercase">
                  UI / UX ALCHEMY
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
