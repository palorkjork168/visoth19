import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BookOpen, Code2, Palette, Flame, Zap, Milestone, Compass } from 'lucide-react';

interface ExperienceItem {
  km: string;
  year: string;
  role: string;
  company: string;
  desc: string;
  tags: string[];
  icon: typeof BookOpen;
  accent: string;
  side: 'left' | 'right';
}

const experiences: ExperienceItem[] = [
  {
    km: 'KM 01 // UNIVERSITY',
    year: '2023 - Present',
    role: "Bachelor's in Computer Science (Year 4)",
    company: 'Norton University · Phnom Penh',
    desc: 'Final-year student focusing on computer science fundamentals, data structures, algorithms, and relational database architecture.',
    tags: ['Algorithms', 'Data Structures', 'Database Systems', 'OOP'],
    icon: BookOpen,
    accent: '#00D4FF',
    side: 'left',
  },
  {
    km: 'KM 02 // FULL-STACK',
    year: '09/2025 - 04/2026',
    role: 'Full-Stack Web Development',
    company: 'Sala-IT · Phnom Penh',
    desc: 'Professional full-stack program mastering modern React 19, TypeScript, Node.js, Express.js 5, PostgreSQL, and RESTful API engineering.',
    tags: ['React 19', 'TypeScript', 'Node.js', 'Express 5', 'PostgreSQL'],
    icon: Code2,
    accent: '#FF5500',
    side: 'right',
  },
  {
    km: 'KM 03 // DESIGN',
    year: '2025 - 2026',
    role: 'Graphic & UI Designer',
    company: 'Training Media · Corporate Internship',
    desc: 'Completed 3-month graphic design internship. Designed corporate visual identities, typography, and UI prototypes in Figma and Adobe Suite.',
    tags: ['Figma', 'Photoshop', 'Illustrator', 'UI Design'],
    icon: Palette,
    accent: '#FFAA00',
    side: 'left',
  },
];

interface RoadExperienceTimelineProps {
  isAuraActive?: boolean;
}

export function RoadExperienceTimeline({ isAuraActive = false }: RoadExperienceTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Headlight / Beacon position along the vertical highway
  const bikeY = useTransform(scrollYProgress, [0.15, 0.85], ['5%', '92%']);
  const tireGlowOpacity = useTransform(scrollYProgress, [0.1, 0.85], [0.3, 1]);

  return (
    <section
      id="experience"
      ref={containerRef}
      className={`relative w-full py-28 sm:py-36 px-4 sm:px-8 transition-colors duration-700 overflow-hidden ${
        isAuraActive ? 'bg-[#0A0B10]' : 'bg-[#0E0F14]'
      }`}
    >
      {/* ─── Ambient Highway Night Sky & Distant City Light Gradients ─── */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full blur-[140px] opacity-25"
          style={{
            background: isAuraActive
              ? 'radial-gradient(circle, #FF4500, #FF8800, transparent)'
              : 'radial-gradient(circle, #00D4FF, #0077B6, transparent)',
          }}
        />
        {/* Subtle perspective grid ground lines */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* ─── Section Header ─── */}
        <div className="text-center max-w-2xl mx-auto mb-20 sm:mb-24">
          <h2 className="font-sans font-black text-3xl sm:text-5xl md:text-6xl tracking-tight text-white mb-4">
            EXPERIENCE ROADMAP
          </h2>

          <p className="font-mono text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Scroll down the highway to travel through academic milestones, engineering expeditions,
            and creative design checkpoints.
          </p>
        </div>

        {/* ─── The Vertical Asphalt Road Highway ─── */}
        <div className="relative w-full">
          {/* Central Road Track */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-20 sm:w-28 md:w-32 bg-[#12131A] rounded-2xl border-x-2 border-zinc-800 shadow-[0_0_35px_rgba(0,0,0,0.8)_inset] overflow-hidden">
            {/* Asphalt Texture noise gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/40 to-transparent" />

            {/* Left Hellfire Molten Tire Track */}
            <motion.div
              className="absolute left-2.5 sm:left-4 top-0 bottom-0 w-1 sm:w-1.5 rounded-full"
              style={{
                opacity: tireGlowOpacity,
                background: isAuraActive
                  ? 'linear-gradient(180deg, #FF3B00, #FFAA00, #FF1A00)'
                  : 'linear-gradient(180deg, rgba(255,85,0,0.3), rgba(255,170,0,0.7), rgba(255,85,0,0.3))',
                boxShadow: isAuraActive
                  ? '0 0 12px #FF5500, 0 0 24px rgba(255,85,0,0.8)'
                  : '0 0 8px rgba(255,85,0,0.4)',
              }}
            />

            {/* Right Hellfire Molten Tire Track */}
            <motion.div
              className="absolute right-2.5 sm:right-4 top-0 bottom-0 w-1 sm:w-1.5 rounded-full"
              style={{
                opacity: tireGlowOpacity,
                background: isAuraActive
                  ? 'linear-gradient(180deg, #FF3B00, #FFAA00, #FF1A00)'
                  : 'linear-gradient(180deg, rgba(255,85,0,0.3), rgba(255,170,0,0.7), rgba(255,85,0,0.3))',
                boxShadow: isAuraActive
                  ? '0 0 12px #FF5500, 0 0 24px rgba(255,85,0,0.8)'
                  : '0 0 8px rgba(255,85,0,0.4)',
              }}
            />

            {/* Scrolling Dashed Road Centerlines */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 flex flex-col items-center justify-around py-4">
              {Array.from({ length: 18 }).map((_, i) => (
                <div
                  key={i}
                  className="w-1 h-8 sm:h-10 rounded-full bg-amber-400/70 shadow-[0_0_8px_rgba(251,191,36,0.6)] my-3"
                />
              ))}
            </div>

            {/* Moving Motorcycle Headlight Beacon */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 z-20 pointer-events-none"
              style={{ top: bikeY }}
            >
              {/* Dual Headlight Beams illuminating the road forward */}
              <div className="relative flex flex-col items-center">
                {/* Intense Front Light Cone */}
                <div
                  className="w-24 sm:w-36 h-36 -mb-6"
                  style={{
                    background:
                      'radial-gradient(ellipse at 50% 100%, rgba(255,230,150,0.95) 0%, rgba(255,140,0,0.45) 45%, transparent 75%)',
                    filter: 'blur(3px)',
                  }}
                />

                {/* Fiery Rider Motorcycle Beacon */}
                <div className="relative w-8 h-8 rounded-full bg-black border-2 border-orange-500 shadow-[0_0_20px_#FF5500] flex items-center justify-center">
                  <Flame className="w-4 h-4 text-orange-400 animate-pulse fill-orange-500" />
                  <span className="absolute -inset-1 rounded-full border border-orange-400/60 animate-ping" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* ─── Checkpoint Cards Along The Road ─── */}
          <div className="relative z-10 space-y-24 sm:space-y-36 py-8">
            {experiences.map((exp, index) => {
              const IconComp = exp.icon;
              const isLeft = exp.side === 'left';

              return (
                <div
                  key={exp.role}
                  className={`flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-10 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Roadside Signpost / Milestone Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.94 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.65, ease: 'easeOut' }}
                    className={`w-full md:w-[calc(50%-4rem)] lg:w-[calc(50%-5rem)] ${
                      isLeft ? 'md:text-right' : 'md:text-left'
                    }`}
                  >
                    <div
                      className={`relative p-6 sm:p-8 rounded-3xl border transition-all duration-500 group backdrop-blur-xl ${
                        isAuraActive
                          ? 'bg-zinc-900/80 border-zinc-800 hover:border-[#FF5500] hover:shadow-[0_0_35px_rgba(255,85,0,0.25)]'
                          : 'bg-zinc-900/60 border-zinc-800/90 hover:border-zinc-700 hover:shadow-[0_12px_40px_rgba(0,0,0,0.6)]'
                      }`}
                    >
                      {/* Top Highway Distance Indicator & Road Badge */}
                      <div
                        className={`flex items-center gap-3 mb-4 ${
                          isLeft ? 'md:justify-end' : 'md:justify-start'
                        }`}
                      >
                        <span
                          className="px-3 py-1 rounded-full font-mono text-[11px] font-black tracking-wider uppercase flex items-center gap-1.5"
                          style={{
                            backgroundColor: `${exp.accent}15`,
                            color: exp.accent,
                            border: `1px solid ${exp.accent}35`,
                          }}
                        >
                          <Milestone className="w-3 h-3" />
                          <span>{exp.km}</span>
                        </span>

                        <span className="font-mono text-xs font-bold text-zinc-400">
                          {exp.year}
                        </span>
                      </div>

                      {/* Role & Company */}
                      <h3 className="font-sans font-black text-xl sm:text-2xl text-white group-hover:text-orange-400 transition-colors mb-1">
                        {exp.role}
                      </h3>

                      <div
                        className={`font-mono text-xs text-orange-400 font-semibold mb-3 flex items-center gap-1.5 ${
                          isLeft ? 'md:justify-end' : 'md:justify-start'
                        }`}
                      >
                        <Compass className="w-3.5 h-3.5" />
                        <span>{exp.company}</span>
                      </div>

                      {/* Description */}
                      <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-5">
                        {exp.desc}
                      </p>

                      {/* Tech Chips */}
                      <div
                        className={`flex flex-wrap gap-1.5 ${
                          isLeft ? 'md:justify-end' : 'md:justify-start'
                        }`}
                      >
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-[10px] sm:text-[11px] px-2.5 py-1 rounded-lg bg-zinc-800/80 text-zinc-300 border border-zinc-700/50 font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Highway Chevrons Accent */}
                      <div
                        className={`hidden md:flex items-center gap-1 mt-4 text-xs font-mono text-zinc-600 font-black ${
                          isLeft ? 'justify-end' : 'justify-start'
                        }`}
                      >
                        <span>&gt;&gt;&gt;</span>
                        <span>CHECKPOINT 0{index + 1}</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Central Road Marker Node */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.15 }}
                    className="relative z-30 flex items-center justify-center shrink-0"
                  >
                    <div
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-black border-2 flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-110"
                      style={{
                        borderColor: exp.accent,
                        boxShadow: `0 0 25px ${exp.accent}55`,
                      }}
                    >
                      <IconComp className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: exp.accent }} />
                    </div>
                  </motion.div>

                  {/* Empty Spacer Column for balancing desktop alternating layout */}
                  <div className="hidden md:block md:w-[calc(50%-4rem)] lg:w-[calc(50%-5rem)]" />
                </div>
              );
            })}
          </div>
        </div>

        {/* ─── Bottom Highway Finish Flag / Highway Horizon ─── */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl border border-zinc-800 bg-zinc-900/80 font-mono text-xs text-zinc-400">
            <Zap className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>CONTINUING THE JOURNEY &bull; NEXT DESTINATION: SYSTEM ARCHITECT</span>
          </div>
        </div>
      </div>
    </section>
  );
}
