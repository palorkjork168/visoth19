import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from '../ui/FadeIn';

const services = [
  {
    id: '01',
    title: 'Graphic Design',
    desc: 'Create visually engaging graphics for brands, campaigns, social media, and digital communication.',
    tags: ['Branding', 'Visual Design', 'Digital'],
  },
  {
    id: '02',
    title: 'Poster Design',
    desc: 'Design clear and eye-catching posters that communicate information quickly while maintaining strong visual hierarchy.',
    tags: ['Posters', 'Print', 'Layout'],
  },
  {
    id: '03',
    title: 'Social Media Design',
    desc: 'Create social media visuals designed to capture attention and communicate messages effectively.',
    tags: ['Social Media', 'Content', 'Visuals'],
  },
  {
    id: '04',
    title: 'UI/UX & Web Design',
    desc: 'Design modern, user-friendly interfaces and website experiences with strong visual hierarchy and usability.',
    tags: ['UI Design', 'UX Design', 'Figma'],
  },
  {
    id: '05',
    title: 'Full-Stack Development',
    desc: 'Build complete web applications with modern frontend interfaces, REST APIs, backend services, databases, and business logic.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
  },
];

export function ServicesSection() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section
      id="services"
      className="relative bg-[#0A0A0F] px-5 sm:px-8 md:px-10 py-24 md:py-32 overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[500px] bg-[#00BFFF]/3 blur-[140px] -translate-y-1/2 rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section label */}
        <FadeIn delay={0.1} y={20}>
          <span className="hud-label mb-8 inline-flex">SERVICES</span>
        </FadeIn>

        {/* Section title */}
        <FadeIn delay={0.2} y={30}>
          <h2
            className="font-black uppercase leading-none tracking-tight text-[clamp(3.5rem,10vw,120px)] hero-heading mb-16"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            What I Do
          </h2>
        </FadeIn>

        {/* Service list */}
        <div className="flex flex-col">
          {services.map((service, i) => (
            <FadeIn key={service.id} delay={i * 0.08} y={20}>
              <button
                type="button"
                className="w-full text-left border-b border-[rgba(255,255,255,0.06)] last:border-b-0 group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#00BFFF]"
                onClick={() => setActiveId(activeId === service.id ? null : service.id)}
                aria-expanded={activeId === service.id}
              >
                <div className="flex items-center justify-between py-7 sm:py-8 gap-4 transition-all duration-300">
                  {/* Number + title row */}
                  <div className="flex items-baseline gap-5 sm:gap-8 min-w-0">
                    <span
                      className="text-xs tabular-nums flex-shrink-0 transition-colors duration-300"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        color: activeId === service.id ? '#00BFFF' : 'rgba(255,255,255,0.2)',
                      }}
                    >
                      {service.id}
                    </span>
                    <h3
                      className="font-bold uppercase tracking-tight text-[clamp(1.4rem,3.5vw,2.5rem)] transition-colors duration-300 truncate"
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        color: activeId === service.id ? '#00BFFF' : '#D7E2EA',
                      }}
                    >
                      {service.title}
                    </h3>
                  </div>

                  {/* Arrow icon */}
                  <motion.span
                    className="flex-shrink-0 text-[#00BFFF]/50 group-hover:text-[#00BFFF] transition-colors"
                    animate={{ rotate: activeId === service.id ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 5v14M5 12h14" />
                    </svg>
                  </motion.span>
                </div>

                {/* Expandable detail */}
                <AnimatePresence initial={false}>
                  {activeId === service.id && (
                    <motion.div
                      key="detail"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pl-[calc(1rem+1.5rem)] sm:pl-[calc(1rem+2.5rem)] flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                        <p className="text-[#6B7280] text-base leading-relaxed max-w-[500px]">
                          {service.desc}
                        </p>
                        <div className="flex flex-wrap gap-2 sm:justify-end sm:max-w-[200px]">
                          {service.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs px-3 py-1 rounded-sm border border-[rgba(0,191,255,0.2)] text-[#00BFFF]/70"
                              style={{ fontFamily: "'JetBrains Mono', monospace" }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
