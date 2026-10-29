import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { ProjectItem } from '../../data/projects';
import { DynamicGridWaveCanvas } from '../ui/DynamicGridWaveCanvas';
import { ProjectPreviewPlaceholder } from '../ui/ProjectPreviewPlaceholder';

interface HorizontalProjectsSectionProps {
  projects: ProjectItem[];
  isAuraActive: boolean;
  onNavigateToProject: (projectId: string) => void;
}

function GithubIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

/**
 * Chamfered Card Shape Outline:
 * Matches the user-provided geometric shape:
 * - Sharp 90° Top-Left corner
 * - Angled 45° diagonal cut Top-Right corner
 * - Sharp 90° Bottom-Right corner
 * - Angled 45° diagonal cut Bottom-Left corner
 * Rendered in portfolio guideline colors.
 */
function ChamferedCardOutline({ isAuraActive }: { isAuraActive: boolean }) {
  const borderColor = isAuraActive ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.18)';
  const hoverBorderColor = isAuraActive ? '#FF5500' : '#000000';

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-30 overflow-visible"
      viewBox="0 0 1000 1000"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points="1,1 936,1 999,64 999,999 64,999 1,936"
        stroke={borderColor}
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
        className="transition-colors duration-300 group-hover:stroke-[var(--hover-border)]"
        style={{ '--hover-border': hoverBorderColor } as React.CSSProperties}
      />
    </svg>
  );
}

export const HorizontalProjectsSection: React.FC<HorizontalProjectsSectionProps> = ({
  projects,
  isAuraActive,
  onNavigateToProject,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const headerContainerRef = useRef<HTMLDivElement>(null);

  // Framer Motion scroll tracking through the tall pinned section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const [scrollDistance, setScrollDistance] = useState(0);
  const [contentMargin, setContentMargin] = useState(48);

  // Calculate container alignment and total scroll distance accurately
  const updateScrollDistance = useCallback(() => {
    if (!trackRef.current) return;
    const cards = Array.from(trackRef.current.children) as HTMLElement[];
    if (cards.length === 0) return;

    const windowWidth = window.innerWidth;
    const isMobile = windowWidth < 640;
    const isTablet = windowWidth < 1024;
    const gap = isMobile ? 20 : isTablet ? 32 : 40;

    // Calculate the left offset of the centered header container
    let alignedMargin = 24;
    if (headerContainerRef.current) {
      const headerRect = headerContainerRef.current.getBoundingClientRect();
      alignedMargin = Math.max(isMobile ? 20 : 24, Math.floor(headerRect.left));
    }

    setContentMargin(alignedMargin);

    // Sum physical width of all cards + gaps + margins
    let totalTrackWidth = alignedMargin * 2;
    cards.forEach((card, idx) => {
      totalTrackWidth += card.offsetWidth;
      if (idx < cards.length - 1) {
        totalTrackWidth += gap;
      }
    });

    const distanceNeeded = Math.max(0, totalTrackWidth - windowWidth);
    setScrollDistance(distanceNeeded);
  }, []);

  // Recalculate on mount, resize, and image loading
  useEffect(() => {
    updateScrollDistance();

    window.addEventListener('resize', updateScrollDistance);
    const t1 = setTimeout(updateScrollDistance, 100);
    const t2 = setTimeout(updateScrollDistance, 450);
    const t3 = setTimeout(updateScrollDistance, 1000);

    return () => {
      window.removeEventListener('resize', updateScrollDistance);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [updateScrollDistance, projects]);

  // Dynamically map vertical progress to horizontal translation without desync
  const x = useTransform(scrollYProgress, (progress) => {
    return -progress * scrollDistance;
  });

  return (
    <section
      ref={containerRef}
      id="projects"
      className={`relative h-[380vh] sm:h-[430vh] transition-colors duration-500 border-t ${
        isAuraActive ? 'bg-[#0B0C10] border-zinc-800' : 'bg-[#FAFAFB] border-zinc-200'
      }`}
    >
      {/* Anchor for nav links */}
      <span id="courses" className="absolute -top-24 sr-only" />

      {/* Sticky Viewport Container with Centered Layout (Pinned in place while scrolling down) */}
      <div
        className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center gap-4 sm:gap-6 md:gap-8 pt-10 sm:pt-16 pb-6 sm:pb-10 z-10"
      >
        {/* Ambient Subtle Wave Canvas */}
        <DynamicGridWaveCanvas isAuraActive={isAuraActive} opacity={0.75} />

        {/* ─── 1. TOP HEADER & MINIMALIST PROGRESS LINE ─── */}
        <div
          ref={headerContainerRef}
          className="relative z-20 w-full max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-between gap-4 shrink-0"
        >
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="inline-block w-2 h-2 rounded-full bg-[#FF5500]" />
              <span className="font-mono text-[10px] sm:text-xs font-bold tracking-widest uppercase text-zinc-500 dark:text-zinc-400">
                PORTFOLIO // SELECTED ARCHITECTURES
              </span>
            </div>
            <h2
              className={`font-heading font-black text-2xl sm:text-3xl md:text-4xl tracking-tight ${
                isAuraActive ? 'text-white' : 'text-black'
              }`}
            >
              PROJECTS
            </h2>
          </div>

          {/* Minimalist Progress Line Only (No numbers, no arrows) */}
          <div className="flex items-center">
            <div className="w-24 sm:w-44 md:w-52 h-1 rounded-full bg-zinc-200 dark:bg-zinc-800/80 overflow-hidden">
              <motion.div
                className="h-full bg-[#FF5500]"
                style={{
                  scaleX: scrollYProgress,
                  transformOrigin: 'left',
                }}
              />
            </div>
          </div>
        </div>

        {/* ─── 2. HORIZONTAL SCROLL TRACK (CHAMFERED SHAPED CARDS) ─── */}
        <div className="relative z-20 w-full overflow-visible py-2">
          <motion.div
            ref={trackRef}
            style={{
              x,
              paddingLeft: `${contentMargin}px`,
              paddingRight: `${contentMargin}px`,
            }}
            className="relative flex flex-row gap-5 sm:gap-8 md:gap-10 items-stretch will-change-transform"
          >
            {projects.map((project, idx) => {
              const [mainTitle, subTitle] = project.title.includes('—')
                ? project.title.split('—').map((s) => s.trim())
                : [project.title, ''];

              return (
                <div
                  key={project.id}
                  onClick={() => onNavigateToProject(project.id)}
                  style={{
                    clipPath:
                      'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))',
                  }}
                  className={`group relative shrink-0 w-[84vw] max-w-[390px] sm:w-[400px] md:w-[430px] lg:w-[450px] xl:w-[470px] h-[405px] sm:h-[425px] md:h-[445px] max-h-[66vh] sm:max-h-[54vh] flex flex-col justify-between cursor-pointer select-none transition-all duration-300 hover:-translate-y-1.5 ${
                    isAuraActive
                      ? 'bg-[#101116] shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-2xl'
                      : 'bg-white shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:shadow-xl'
                  }`}
                >
                  {/* Clean Border Following the Chamfered Geometry */}
                  <ChamferedCardOutline isAuraActive={isAuraActive} />

                  {/* ─── TOP: VISUAL HERO MEDIA ─── */}
                  <div className="relative w-full h-[50%] sm:h-[55%] overflow-hidden bg-zinc-100 dark:bg-zinc-900/90 border-b border-black/10 dark:border-zinc-800">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <ProjectPreviewPlaceholder
                        title={project.title}
                        category={project.category}
                        isAuraActive={isAuraActive}
                        variant="card"
                      />
                    )}

                    {/* Gradient Overlay for Cinematic Depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-60 pointer-events-none" />
                  </div>

                  {/* ─── BOTTOM: CLEAN MINIMALIST CONTENT (NO CLUTTER) ─── */}
                  <div className="p-3.5 sm:p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Category & Index line */}
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-zinc-500 dark:text-zinc-400">
                          {project.category}
                        </span>
                        <span className="font-mono text-[11px] font-bold text-zinc-400 dark:text-zinc-500">
                          0{idx + 1}
                        </span>
                      </div>

                      {/* Main Title */}
                      <h3
                        className={`font-heading font-black text-lg sm:text-xl md:text-2xl leading-tight transition-colors ${
                          isAuraActive
                            ? 'text-white group-hover:text-[#FF5500]'
                            : 'text-black group-hover:text-[#FF5500]'
                        }`}
                      >
                        {mainTitle}
                      </h3>

                      {/* Concise Tagline Subtitle */}
                      {subTitle && (
                        <p className="font-mono text-xs text-[#FF5500] font-semibold mt-0.5 tracking-wide line-clamp-1">
                          {subTitle}
                        </p>
                      )}
                    </div>

                    <div>
                      {/* Essential Tech Tags Only (Max 3) */}
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.tech.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className={`font-mono text-[10px] px-2 py-0.5 font-medium ${
                              isAuraActive
                                ? 'bg-zinc-800/80 text-zinc-300 border border-zinc-700/60'
                                : 'bg-zinc-100 text-zinc-800 border border-zinc-300'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Minimalist Action Row */}
                      <div
                        className={`pt-2.5 border-t flex items-center justify-between ${
                          isAuraActive ? 'border-zinc-800/80' : 'border-black/10'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <a
                            href={project.link}
                            onClick={(e) => e.stopPropagation()}
                            target="_blank"
                            rel="noreferrer"
                            className={`inline-flex items-center gap-1.5 font-mono text-xs font-bold hover:text-[#FF5500] transition-colors ${
                              isAuraActive ? 'text-zinc-300' : 'text-black'
                            }`}
                          >
                            <span>REPO</span>
                            <GithubIcon className="w-3.5 h-3.5" />
                          </a>

                          {project.liveDemo && (
                            <a
                              href={project.liveDemo}
                              onClick={(e) => e.stopPropagation()}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1 font-mono text-xs font-bold text-[#FF5500] hover:underline"
                            >
                              <span>LIVE DEMO</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>

                        {/* Minimalist Explore Button */}
                        <div
                          className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-bold transition-all duration-200 ${
                            isAuraActive
                              ? 'bg-zinc-800 text-white border border-zinc-700 group-hover:bg-white group-hover:text-black group-hover:border-white'
                              : 'bg-zinc-100 text-black border border-zinc-300 group-hover:bg-black group-hover:text-white group-hover:border-black'
                          }`}
                        >
                          <span>EXPLORE</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Empty bottom spacer for breathing room */}
        <div className="h-2 pointer-events-none" />
      </div>
    </section>
  );
};
