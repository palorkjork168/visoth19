import { useState } from 'react';
import { Star, Building2 } from 'lucide-react';
import { LiquidPortraitReveal } from '../ui/LiquidPortraitReveal';
import { TypewriterTitle } from '../ui/TypewriterTitle';
import { Aura3DButton } from '../ui/Aura3DButton';
import { FloatingFireEmbers } from '../ui/FloatingFireEmbers';
import { LensFlareOverlay } from '../ui/LensFlareOverlay';
import { HellfireFlamesLayer } from '../ui/HellfireFlamesLayer';
import { DynamicGridWaveCanvas } from '../ui/DynamicGridWaveCanvas';
import normalImg from '../../assets/profile/user_normal_hero.png';
import ghostImg from '../../assets/profile/user_ghost_hero.png';
import normalMobileImg from '../../assets/profile/user_normal_mobile.png';
import ghostMobileImg from '../../assets/profile/user_ghost_mobile.png';

interface HeroSectionProps {
  isAuraActive?: boolean;
  onAuraToggle?: (active: boolean) => void;
  onOpenResume?: () => void;
}

export function HeroSection({ isAuraActive, onAuraToggle, onOpenResume }: HeroSectionProps) {
  const [internalAura, setInternalAura] = useState(false);
  const isFullAura = isAuraActive !== undefined ? isAuraActive : internalAura;

  const toggleFullAura = () => {
    const next = !isFullAura;
    setInternalAura(next);
    onAuraToggle?.(next);
  };

  return (
    <section
      id="home"
      className={`relative min-h-screen w-full flex flex-col justify-between overflow-hidden pt-4 pb-8 select-none transition-colors duration-500 ${
        isFullAura ? 'bg-[#0A0B10]' : 'bg-white'
      }`}
    >
      {/* ─── Dynamic Wavy Grid with Interactive Cursor Repulsion & Glow ─── */}
      <DynamicGridWaveCanvas isAuraActive={isFullAura} />

      {/* ─── Floating Fire Embers Particle Canvas ─── */}
      <FloatingFireEmbers isAuraActive={isFullAura} />

      {/* ─── Optical Lens Flare & Anamorphic Light Streaks ─── */}
      <LensFlareOverlay isAuraActive={isFullAura} />

      {/* Top spacing buffer for global floating pill navbar */}
      <div className="h-16 sm:h-20 lg:h-20 w-full shrink-0 pointer-events-none" />

      {/* Subtle Mobile Divider Line directly beneath Navbar (from user wireframe sketch) */}
      <div className="w-16 h-[1.5px] bg-zinc-200 dark:bg-zinc-800 mx-auto my-1 shrink-0 lg:hidden pointer-events-none" />

      {/* ─── Hero Canvas ─── */}
      <div className="relative w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 my-auto flex flex-col lg:flex-row items-center justify-between min-h-[auto] lg:min-h-[calc(100vh-6rem)] lg:max-h-[920px] gap-2 sm:gap-4 lg:gap-8">
        
        {/* ─── Top/Left: Name "CHOU SEREYVISOTH" + Dynamic Animated Title ─── */}
        <div className="relative z-30 flex flex-col items-center lg:items-start justify-center w-full max-w-xl pointer-events-none select-none order-1 text-center lg:text-left mx-auto lg:mx-0 lg:pl-2 xl:pl-4 animate-fade-up">
          
          {/* Mobile: Single-line display (from user wireframe request) */}
          <div className="flex lg:hidden items-center justify-center gap-2 sm:gap-2.5 font-heading font-black tracking-tight text-[clamp(1.5rem,6.8vw,2.5rem)] leading-none text-center">
            <span className={`transition-colors duration-500 ${isFullAura ? 'text-white' : 'text-black'}`}>CHOU</span>
            <span className={`transition-colors duration-500 flex items-baseline ${isFullAura ? 'text-white' : 'text-black'}`}>
              <span>SERE</span>
              <span
                className="inline-block transition-all duration-300 select-none"
                style={{
                  WebkitTextStroke: isFullAura ? '1.5px #FFFFFF' : '1.5px #000000',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent',
                }}
              >
                Y
              </span>
            </span>
            <span className="text-[#FF5500] flex items-center gap-1.5 sm:gap-2">
              <span className="flex items-baseline">
                <span>VISOT</span>
                <span
                  className="inline-block transition-all duration-300 select-none"
                  style={{
                    WebkitTextStroke: '1.5px #FF5500',
                    WebkitTextFillColor: 'transparent',
                    color: 'transparent',
                  }}
                >
                  H
                </span>
              </span>
              <span className="inline-block w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FF5500]" />
            </span>
          </div>

          {/* Desktop: Big multi-line display (preserved) */}
          <div
            className={`hidden lg:flex flex-col items-start font-heading font-black tracking-tighter text-[clamp(2.75rem,7vw,7.5rem)] leading-[0.88] transition-colors duration-500 ${
              isFullAura ? 'text-white' : 'text-black'
            }`}
          >
            <div className="tracking-tight hover:opacity-90 transition-opacity">CHOU</div>
            <div className="tracking-tight hover:opacity-90 transition-opacity flex items-baseline">
              <span>SERE</span>
              <span
                className="inline-block transition-all duration-300 select-none"
                style={{
                  WebkitTextStroke: isFullAura ? '2.5px #FFFFFF' : '2.5px #000000',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent',
                }}
              >
                Y
              </span>
            </div>
            <div className="tracking-tight text-[#FF5500] flex items-center gap-2 sm:gap-3">
              <span className="flex items-baseline">
                <span>VISOT</span>
                <span
                  className="inline-block transition-all duration-300 select-none"
                  style={{
                    WebkitTextStroke: '2.5px #FF5500',
                    WebkitTextFillColor: 'transparent',
                    color: 'transparent',
                  }}
                >
                  H
                </span>
              </span>
              <span className="inline-block w-3.5 h-3.5 sm:w-5 sm:h-5 rounded-full bg-[#FF5500]" />
            </div>
          </div>

          {/* Dynamic Animated Typewriter Title */}
          <div className="mt-2 sm:mt-3 lg:mt-6 pointer-events-auto relative z-30 flex justify-center lg:justify-start w-full">
            <TypewriterTitle isAuraActive={isFullAura} />
          </div>
        </div>

        {/* ─── MOBILE ONLY: Clean Normal Remove-BG Profile (No WebGL liquid/hover effect on mobile) ─── */}
        <div className="relative w-full max-w-[340px] xs:max-w-[380px] sm:max-w-[440px] h-[390px] xs:h-[450px] sm:h-[510px] mx-auto flex items-end justify-center z-20 pointer-events-none order-2 my-1 lg:hidden">
          {/* Ambient Glow */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 bottom-2 w-[280px] xs:w-[320px] h-[260px] xs:h-[300px] rounded-full pointer-events-none transition-all duration-700 blur-[45px] ${
              isFullAura
                ? 'bg-gradient-to-t from-[#FF2200]/90 via-[#FF7700]/70 to-[#FFAA00]/50 scale-110 opacity-100'
                : 'bg-black/10 opacity-40 scale-95'
            }`}
          />

          {/* Clean, perfectly centered remove-bg mobile portrait */}
          <img
            src={isFullAura ? ghostMobileImg : normalMobileImg}
            alt="Chou Sereyvisoth"
            className="h-full w-auto max-w-full object-contain object-bottom pointer-events-none select-none drop-shadow-md transition-opacity duration-300 relative z-10"
          />
        </div>

        {/* ─── DESKTOP ONLY: WebGL Liquid Hover Reveal Stage (Full interactive 3D effect) ─── */}
        <div
          className="hidden lg:flex lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:bottom-0 lg:w-[760px] xl:w-[900px] 2xl:w-[1040px] lg:h-[calc(100vh-6.5rem)] lg:max-h-[820px] xl:max-h-[880px] 2xl:max-h-[940px] items-end justify-center z-20 pointer-events-none order-2"
          style={{
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)',
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)',
          }}
        >
          {/* 1. Deep Silhouette Back Shadow & Ambient Hellfire Bloom */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 bottom-3 sm:bottom-4 w-[420px] xs:w-[480px] sm:w-[560px] md:w-[620px] lg:w-[680px] xl:w-[780px] h-[360px] xs:h-[420px] sm:h-[480px] md:h-[540px] lg:h-[600px] xl:h-[680px] rounded-full pointer-events-none transition-all duration-700 blur-[40px] sm:blur-[60px] lg:blur-[80px] ${
              isFullAura
                ? 'bg-gradient-to-t from-[#FF2200]/90 via-[#FF7700]/70 to-[#FFAA00]/50 scale-125 opacity-100'
                : 'bg-black/15 opacity-40 scale-95'
            }`}
          />

          {/* 2. REAL HELLFIRE FLAMES BEHIND HIS BACK */}
          <HellfireFlamesLayer
            mode="back"
            isAuraActive={isFullAura}
            className="z-0"
          />

          {/* 3. WebGL Liquid Reveal Canvas (Authentic Character Portrait) */}
          <LiquidPortraitReveal
            photoSrc={normalImg}
            altSrc={ghostImg}
            isAltActive={isFullAura}
            glowColor="#FFAA00"
            className="w-full h-full pointer-events-auto flex items-end justify-center z-10"
          />

          {/* 4. REAL LICKING HELLFIRE FLAMES IN FRONT OF HIM */}
          <HellfireFlamesLayer
            mode="front"
            isAuraActive={isFullAura}
            className="z-20"
          />
        </div>

        {/* ─── Glassmorphic Project Highlights & 3D Aura Button (Centered on mobile, right on desktop) ─── */}
        <div className="relative z-30 flex flex-col items-center lg:items-end text-left lg:text-right font-mono select-none space-y-3 sm:space-y-3.5 w-full max-w-sm lg:max-w-[320px] xl:max-w-sm order-3 pointer-events-auto mx-auto lg:mx-0 lg:pr-2 xl:pr-4 animate-fade-up-delay-1 mt-4 lg:mt-0">
          
          {/* Latest project glassmorphic card */}
          <div
            className={`w-full p-3.5 rounded-2xl border transition-all duration-300 group ${
              isFullAura
                ? 'border-zinc-800 bg-zinc-900/80 backdrop-blur-md hover:border-orange-500/50 hover:shadow-[0_4px_25px_rgba(255,85,0,0.15)]'
                : 'border-zinc-200/80 bg-white/85 backdrop-blur-md shadow-xs hover:border-zinc-400 hover:shadow-sm'
            }`}
          >
            <div className="flex items-center justify-between lg:justify-end gap-2 mb-1">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#FF5500] flex items-center gap-1">
                <Star className="w-3 h-3 fill-current" />
                <span>Productivity Tool</span>
              </span>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                  isFullAura
                    ? 'bg-zinc-800 text-zinc-300'
                    : 'bg-zinc-100 text-zinc-700'
                }`}
              >
                React 19
              </span>
            </div>
            <div
              className={`font-sans font-bold text-base transition-colors ${
                isFullAura ? 'text-white group-hover:text-orange-400' : 'text-black group-hover:text-[#FF5500]'
              }`}
            >
              CV Builder
            </div>
          </div>

          {/* Current project glassmorphic card */}
          <div
            className={`w-full p-3.5 rounded-2xl border transition-all duration-300 group ${
              isFullAura
                ? 'border-zinc-800 bg-zinc-900/80 backdrop-blur-md hover:border-emerald-500/50 hover:shadow-[0_4px_25px_rgba(16,185,129,0.15)]'
                : 'border-zinc-200/80 bg-white/85 backdrop-blur-md shadow-xs hover:border-zinc-400 hover:shadow-sm'
            }`}
          >
            <div className="flex items-center justify-between lg:justify-end gap-2 mb-1">
              <span className="flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-wider text-emerald-500">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                <Building2 className="w-3 h-3" />
                <span>HR Tech</span>
              </span>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                  isFullAura
                    ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-800/50'
                    : 'bg-emerald-50 text-emerald-700'
                }`}
              >
                Full-Stack
              </span>
            </div>
            <div
              className={`font-sans font-bold text-base transition-colors ${
                isFullAura ? 'text-white group-hover:text-emerald-400' : 'text-black group-hover:text-emerald-600'
              }`}
            >
              Attendance System
            </div>
          </div>

          {/* Achievements glassmorphic card */}
          <div
            className={`w-full p-3.5 rounded-2xl border transition-all duration-300 group ${
              isFullAura
                ? 'border-zinc-800 bg-zinc-900/80 backdrop-blur-md hover:border-amber-500/50'
                : 'border-zinc-200/80 bg-white/85 backdrop-blur-md shadow-xs hover:border-zinc-400 hover:shadow-sm'
            }`}
          >
            <div className="flex items-center justify-between lg:justify-end gap-2 mb-1">
              <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-400">
                Credentials
              </span>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                  isFullAura
                    ? 'bg-orange-950/80 text-orange-400 border border-orange-800/50'
                    : 'bg-zinc-100 text-zinc-800'
                }`}
              >
                Year 4
              </span>
            </div>
            <div
              className={`font-sans font-bold text-base ${
                isFullAura ? 'text-white' : 'text-black'
              }`}
            >
              Norton CS &bull; Sala-IT
            </div>
          </div>

          {/* 3D Tactile Aura Button with rotating flame border */}
          <div className="pt-2 w-full flex flex-col items-center lg:items-end">
            <Aura3DButton
              isAuraActive={isFullAura}
              onToggle={toggleFullAura}
            />
          </div>

        </div>

      </div>

      {/* ─── Bottom Scroll Down Indicator ─── */}
      <div className="w-full flex justify-center pb-2 z-20">
        <a
          href="#about"
          className={`font-mono text-xs flex items-center gap-1.5 transition-colors ${
            isFullAura ? 'text-zinc-400 hover:text-orange-400' : 'text-zinc-400 hover:text-black'
          }`}
        >
          

        </a>
      </div>
    </section>
  );
}
