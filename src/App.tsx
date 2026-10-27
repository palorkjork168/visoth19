import { useState, useEffect } from 'react';
import {
  Mail,
  Phone,
  Check,
  Copy,
  FileText,
  ExternalLink,
} from 'lucide-react';

import { HeroSection } from './components/sections/HeroSection';
import { RoadExperienceTimeline } from './components/sections/RoadExperienceTimeline';
import { FloatingFireEmbers } from './components/ui/FloatingFireEmbers';
import { MagicBentoCard } from './components/ui/MagicBentoCard';
import { PillFlipSocialButton } from './components/ui/PillFlipSocialButton';
import { SkillsDisplay } from './components/ui/SkillsDisplay';
import { ResumeModal } from './components/ui/ResumeModal';
import { LightBeamButton } from './components/ui/LightBeamButton';
import { Navbar } from './components/ui/Navbar';
import { allProjects } from './data/projects';
import { ProjectDetailPage } from './components/pages/ProjectDetailPage';

// ─── Precision Social SVG Icons ─────────────────────────────────────
function GithubIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TelegramIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.458c.538-.196 1.006.128.832.935z" />
    </svg>
  );
}

export default function App() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  // Opening Intro Reveal: starts in Ghost Rider mode, then smoothly burns/transforms into normal mode!
  const [isAuraGlobal, setIsAuraGlobal] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Play opening transformation intro (from Ghost Rider to Normal mode) on initial open or refresh
  useEffect(() => {
    const introTimer = setTimeout(() => {
      setIsAuraGlobal(false);
    }, 1400); // 1.4s teaser in Ghost Rider mode before the liquid burn transformation

    return () => clearTimeout(introTimer);
  }, []);

  // URL Hash-based Routing for Project Detail Pages (e.g. #/project/cv-builder)
  const [currentProjectId, setCurrentProjectId] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash.startsWith('#/project/')) {
        const id = hash.replace('#/project/', '').trim();
        return allProjects.some((p) => p.id === id) ? id : null;
      }
    }
    return null;
  });

  // Sync document root class with isAuraGlobal for dark styling
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isAuraGlobal);
  }, [isAuraGlobal]);

  // Sync with browser back/forward buttons and hash navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/project/')) {
        const id = hash.replace('#/project/', '').trim();
        if (allProjects.some((p) => p.id === id)) {
          setCurrentProjectId(id);
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }
      setCurrentProjectId(null);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Handle ESC key to close modal & lock body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isResumeOpen) {
          setIsResumeOpen(false);
        } else if (currentProjectId) {
          handleBackToProjects('projects');
        }
      }
    };

    if (isResumeOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isResumeOpen, currentProjectId]);

  const navigateToProject = (id: string) => {
    setCurrentProjectId(id);
    window.location.hash = `#/project/${id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToProjects = (targetSection: string = 'projects') => {
    setCurrentProjectId(null);
    window.location.hash = `#${targetSection}`;
    setTimeout(() => {
      const element =
        document.getElementById(targetSection) ||
        (targetSection === 'projects' ? document.getElementById('courses') : null);
      if (element) {
        const yOffset = -80;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 60);
  };

  const currentProject = currentProjectId
    ? allProjects.find((p) => p.id === currentProjectId) || null
    : null;

  const copyEmail = () => {
    navigator.clipboard.writeText('chousereyvisoth@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-700 ${
        isAuraGlobal ? 'bg-[#0B0C10] text-slate-100' : 'bg-white text-zinc-900'
      } font-sans antialiased`}
    >
      {/* ─── Global Floating Fire Embers Overlay When in Aura Mode ─── */}
      {isAuraGlobal && (
        <FloatingFireEmbers isAuraActive={true} className="fixed inset-0 pointer-events-none z-40" />
      )}

      {/* ─── Global Interactive Floating Capsule Navbar ─── */}
      <Navbar
        isAuraActive={isAuraGlobal}
        isProjectPage={Boolean(currentProject)}
        onNavigateHome={(href) => handleBackToProjects(href.replace('#', ''))}
      />

      {currentProject ? (
        <ProjectDetailPage
          project={currentProject}
          isAuraActive={isAuraGlobal}
          onBack={() => handleBackToProjects('projects')}
          onSelectProject={(id) => navigateToProject(id)}
        />
      ) : (
        <>
          {/* ─── 1. HERO SECTION ─── */}
          <HeroSection
            isAuraActive={isAuraGlobal}
            onAuraToggle={setIsAuraGlobal}
            onOpenResume={() => setIsResumeOpen(true)}
          />

      {/* ─── 2. ABOUT SECTION (CLEAN & MINIMALIST) ─── */}
      <section
        id="about"
        className={`w-full py-20 sm:py-28 px-5 sm:px-8 transition-colors duration-500 border-t ${
          isAuraGlobal ? 'bg-[#0E0F14] border-zinc-800' : 'bg-zinc-50 border-zinc-200'
        }`}
      >
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="mb-8">
            <h2
              className={`font-heading font-black text-3xl sm:text-5xl tracking-tight mb-2 ${
                isAuraGlobal ? 'text-white' : 'text-black'
              }`}
            >
              ABOUT ME
            </h2>
            <p className="font-mono text-xs sm:text-sm text-[#FF5500]">
              Full-Stack Developer &bull; Norton University (Year 4)
            </p>
          </div>

          {/* Minimalist Profile & Focus Card */}
          <MagicBentoCard
            isAuraActive={isAuraGlobal}
            enableTilt={false}
            className={`p-7 sm:p-10 rounded-3xl border transition-all duration-300 ${
              isAuraGlobal
                ? 'bg-zinc-900/60 border-zinc-800 shadow-xl'
                : 'bg-white border-zinc-200 shadow-sm'
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-200 dark:border-zinc-800">
              <div>
                <h3
                  className={`font-heading font-bold text-2xl sm:text-3xl ${
                    isAuraGlobal ? 'text-white' : 'text-zinc-950'
                  }`}
                >
                  Chou Sereyvisoth
                </h3>
                <span className="font-mono text-xs text-zinc-400">
                  Phnom Penh, Cambodia &bull; Available for Opportunities
                </span>
              </div>

              <LightBeamButton
                href="/chousereyvisothCV.pdf"
                target="_blank"
                isDark={isAuraGlobal}
                className="px-4 py-2 text-xs font-mono font-bold self-start sm:self-auto"
              >
                <FileText className="w-3.5 h-3.5 text-[#FF5500]" />
                <span>View CV &rarr;</span>
              </LightBeamButton>
            </div>

            {/* 3 Focused Points: Role, Study At, Interests */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
              <div>
                <span className="block font-mono text-[11px] font-bold text-[#FF5500] uppercase tracking-wider mb-1.5">
                  ROLE
                </span>
                <p className={`font-medium text-sm sm:text-base ${isAuraGlobal ? 'text-zinc-200' : 'text-zinc-800'}`}>
                  Full-Stack Developer
                </p>
                <p className={`text-xs mt-1 ${isAuraGlobal ? 'text-zinc-400' : 'text-zinc-500'}`}>
                  Web applications &amp; UI design
                </p>
              </div>

              <div>
                <span className="block font-mono text-[11px] font-bold text-[#FF5500] uppercase tracking-wider mb-1.5">
                  STUDY AT
                </span>
                <p className={`font-medium text-sm sm:text-base ${isAuraGlobal ? 'text-zinc-200' : 'text-zinc-800'}`}>
                  Norton University
                </p>
                <p className={`text-xs mt-1 ${isAuraGlobal ? 'text-zinc-400' : 'text-zinc-500'}`}>
                  Year 4 &bull; Computer Science &bull; Sala-IT
                </p>
              </div>

              <div>
                <span className="block font-mono text-[11px] font-bold text-[#FF5500] uppercase tracking-wider mb-1.5">
                  INTERESTED IN
                </span>
                <p className={`font-medium text-sm sm:text-base ${isAuraGlobal ? 'text-zinc-200' : 'text-zinc-800'}`}>
                  Minimalist Web Systems
                </p>
                <p className={`text-xs mt-1 ${isAuraGlobal ? 'text-zinc-400' : 'text-zinc-500'}`}>
                  Clean APIs, performance &amp; UX
                </p>
              </div>
            </div>
          </MagicBentoCard>
        </div>
      </section>

      {/* ─── 3. SKILLS SECTION: CLEAN LOGOS WITH NAMES (MATCHING REFERENCE) ─── */}
      <section
        id="skills"
        className={`w-full py-20 sm:py-28 transition-colors duration-500 overflow-hidden ${
          isAuraGlobal ? 'bg-[#0B0C10]' : 'bg-white'
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 mb-14 text-center">
          <h2
            className={`font-sans font-black text-3xl sm:text-5xl tracking-tight mb-3 ${
              isAuraGlobal ? 'text-white' : 'text-black'
            }`}
          >
            SKILLS
          </h2>
          <p
            className={`font-sans text-xs sm:text-sm max-w-lg mx-auto ${
              isAuraGlobal ? 'text-zinc-400' : 'text-zinc-500'
            }`}
          >
            Core technologies, programming languages and frameworks 
          </p>
        </div>

        {/* Clean Logo + Name presentation matching reference design */}
        <SkillsDisplay isAuraActive={isAuraGlobal} />
      </section>

      {/* ─── 4. PROJECTS SECTION WITH MAGIC BENTO ─── */}
      <section
        id="projects"
        className={`w-full py-24 sm:py-32 px-5 sm:px-8 transition-colors duration-500 border-t relative ${
          isAuraGlobal ? 'bg-[#0E0F14] border-zinc-800' : 'bg-zinc-50 border-zinc-200'
        }`}
      >
        <span id="courses" className="absolute -top-24 sr-only" />
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <h2
                className={`font-heading font-black text-3xl sm:text-5xl tracking-tight mb-2 ${
                  isAuraGlobal ? 'text-white' : 'text-black'
                }`}
              >
                PROJECTS
              </h2>
              <p
                className={`font-mono text-xs sm:text-sm ${
                  isAuraGlobal ? 'text-zinc-400' : 'text-zinc-500'
                }`}
              >
                Selected web applications &amp; systems
              </p>
            </div>
          </div>

          {/* Clean Minimal Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project) => (
              <MagicBentoCard
                key={project.id}
                isAuraActive={isAuraGlobal}
                enableTilt={false}
                enableMagnetism={false}
                onClick={() => navigateToProject(project.id)}
                className={`rounded-2xl border overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 cursor-pointer ${
                  project.isPinned
                    ? isAuraGlobal
                      ? 'bg-zinc-900/85 border-[#FF5500]/40 shadow-[0_4px_25px_rgba(255,85,0,0.15)] hover:border-[#FF5500]/80'
                      : 'bg-white border-[#FF5500]/40 shadow-md hover:border-[#FF5500]/70'
                    : isAuraGlobal
                    ? 'bg-zinc-900/70 border-zinc-800 hover:border-zinc-700'
                    : 'bg-white border-zinc-200 shadow-sm hover:border-zinc-300'
                }`}
              >
                {/* Image Cover (Clean & Unobstructed, no badges/buttons on top) */}
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100 dark:bg-zinc-800 group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3
                      className={`font-heading font-bold text-xl mb-2 transition-colors ${
                        isAuraGlobal
                          ? 'text-white group-hover:text-[#FF5500]'
                          : 'text-zinc-900 group-hover:text-[#FF5500]'
                      }`}
                    >
                      {project.title}
                    </h3>
                    <p
                      className={`text-xs sm:text-sm leading-relaxed mb-5 line-clamp-2 ${
                        isAuraGlobal ? 'text-zinc-400' : 'text-zinc-600'
                      }`}
                    >
                      {project.shortDesc || project.desc}
                    </p>
                  </div>

                  <div>
                    {/* Minimal Tech Tags (Top 3 essential stack) */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tech.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className={`font-mono text-[10px] px-2 py-0.5 rounded font-medium ${
                            isAuraGlobal
                              ? 'bg-zinc-800/90 text-zinc-300 border border-zinc-700/50'
                              : 'bg-zinc-100 text-zinc-700 border border-zinc-200'
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div
                      className={`pt-4 border-t flex items-center justify-between ${
                        isAuraGlobal ? 'border-zinc-800' : 'border-zinc-100'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <a
                          href={project.link}
                          onClick={(e) => e.stopPropagation()}
                          target="_blank"
                          rel="noreferrer"
                          className={`inline-flex items-center gap-1.5 font-mono text-xs font-bold hover:text-[#FF5500] transition-colors ${
                            isAuraGlobal ? 'text-white' : 'text-black'
                          }`}
                        >
                          <span>VIEW REPO</span>
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
                            <span>DEMO</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>

                      <LightBeamButton
                        onClick={(e) => {
                          e.stopPropagation();
                          navigateToProject(project.id);
                        }}
                        isDark={isAuraGlobal}
                        className="px-3.5 py-1 text-[11px] font-mono font-bold"
                      >
                        <span>Details &rarr;</span>
                      </LightBeamButton>
                    </div>
                  </div>
                </div>
              </MagicBentoCard>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. ROAD SCROLLING EXPERIENCE TIMELINE ─── */}
      <RoadExperienceTimeline isAuraActive={isAuraGlobal} />

      {/* ─── 6. CONTACT & CONNECT SECTION ─── */}
      <section
        id="contact"
        className={`w-full py-24 sm:py-32 px-5 sm:px-8 transition-colors duration-500 border-t ${
          isAuraGlobal ? 'bg-[#0E0F14] border-zinc-800' : 'bg-zinc-50 border-zinc-200'
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className={`font-sans font-black text-3xl sm:text-5xl md:text-6xl tracking-tight mb-4 ${
              isAuraGlobal ? 'text-white' : 'text-black'
            }`}
          >
            LET&apos;S BUILD TOGETHER
          </h2>
          <p
            className={`text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed ${
              isAuraGlobal ? 'text-zinc-400' : 'text-zinc-500'
            }`}
          >
            Have an engineering role or project in mind? Reach out anytime.
          </p>

          {/* Quick Actions Row */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            {/* Quick Copy Email Box */}
            <div
              className={`inline-flex items-center gap-2 p-1.5 rounded-2xl border shadow-sm transition-colors ${
                isAuraGlobal
                  ? 'border-zinc-800 bg-zinc-900/90 text-white shadow-[0_0_25px_rgba(0,0,0,0.5)]'
                  : 'border-zinc-300 bg-white text-black'
              }`}
            >
              <div
                className={`flex items-center gap-2 px-3 py-1.5 font-mono text-xs sm:text-sm font-semibold ${
                  isAuraGlobal ? 'text-white' : 'text-black'
                }`}
              >
                <Mail className="w-4 h-4 text-[#FF5500]" />
                <span>chousereyvisoth@gmail.com</span>
              </div>
              <LightBeamButton
                onClick={copyEmail}
                isDark={isAuraGlobal}
                pill={false}
                className="px-4 py-2 rounded-xl font-mono text-xs font-bold"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#FF5500]" />
                    <span>COPIED!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>COPY</span>
                  </>
                )}
              </LightBeamButton>
            </div>

            {/* Direct CV / Resume Link */}
            <LightBeamButton
              href="/chousereyvisothCV.pdf"
              target="_blank"
              isDark={isAuraGlobal}
              pill={false}
              className="px-6 py-3.5 rounded-2xl font-mono text-xs sm:text-sm font-bold tracking-wider"
            >
              <FileText className="w-4 h-4 text-[#FF5500]" />
              <span>VIEW CV / RESUME</span>
            </LightBeamButton>
          </div>

          {/* Social Links Row with PillFlip animation */}
          <div className="flex items-center justify-center gap-4 sm:gap-5">
            <PillFlipSocialButton
              href="https://github.com/palorkjork168"
              ariaLabel="GitHub"
              isAuraActive={isAuraGlobal}
              accentColor="#18181B"
            >
              <GithubIcon className="w-5 h-5" />
            </PillFlipSocialButton>

            <PillFlipSocialButton
              href="https://www.linkedin.com/in/chou-sereyvisoth-66ba3a3b9/"
              ariaLabel="LinkedIn"
              isAuraActive={isAuraGlobal}
              accentColor="#0077B5"
            >
              <LinkedinIcon className="w-5 h-5" />
            </PillFlipSocialButton>

            <PillFlipSocialButton
              href="https://t.me/+85587959626"
              ariaLabel="Telegram"
              isAuraActive={isAuraGlobal}
              accentColor="#0088CC"
            >
              <TelegramIcon className="w-5 h-5" />
            </PillFlipSocialButton>

            <PillFlipSocialButton
              href="tel:+85587959626"
              ariaLabel="Phone"
              isAuraActive={isAuraGlobal}
              accentColor="#FF5500"
            >
              <Phone className="w-5 h-5" />
            </PillFlipSocialButton>
          </div>
        </div>
      </section>
        </>
      )}

      {/* ─── 7. FOOTER ─── */}
      <footer
        className={`w-full py-8 px-5 sm:px-8 border-t transition-colors duration-500 font-mono text-xs ${
          isAuraGlobal ? 'bg-[#07070A] border-zinc-800 text-zinc-400' : 'bg-white border-zinc-200 text-zinc-500'
        }`}
      >
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div
            className={`flex items-center gap-2 ${
              isAuraGlobal ? 'text-zinc-300' : 'text-zinc-700'
            }`}
          >
            <span className="font-bold">CHOU SEREYVISOTH</span>
            <span>&bull;</span>
            <span>&copy; {new Date().getFullYear()}</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[#FF5500] font-bold">VISOTH19</span>
            <span>&bull;</span>
            <span>PHNOM PENH, CAMBODIA</span>
          </div>
        </div>
      </footer>

      {/* ─── RESUME / CV REVIEW & DOWNLOAD MODAL ─── */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        isAuraActive={isAuraGlobal}
      />
    </div>
  );
}
