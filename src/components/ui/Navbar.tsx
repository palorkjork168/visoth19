import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Menu, X } from 'lucide-react';
import { LightBeamButton } from './LightBeamButton';

interface NavbarProps {
  isAuraActive?: boolean;
  isProjectPage?: boolean;
  onNavigateHome?: (href: string) => void;
}

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
];

export function Navbar({
  isAuraActive = false,
  isProjectPage = false,
  onNavigateHome,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor scroll for zoom-in capsule morph, smart auto-hide on scroll-down, and active section detection
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const diff = scrollY - lastScrollY;

      // 1. Morph to capsule past 40px
      const isPastTop = scrollY > 40;
      setScrolled(isPastTop);

      // 2. Smart hide: display shrink animation first (40px - 140px), then hide when continuing downward
      if (scrollY <= 40) {
        setVisible(true);
      } else if (scrollY > 140) {
        if (diff > 4) {
          // Scrolling down: hide
          setVisible(false);
        } else if (diff < -6) {
          // Scrolling up: reveal
          setVisible(true);
        }
      } else {
        // Keep visible during initial morph range
        setVisible(true);
      }

      lastScrollY = scrollY;

      // Section scrollspy
      const sections = ['home', 'about', 'skills', 'projects', 'courses', 'experience', 'contact'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const id = sections[i];
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(id === 'courses' ? 'projects' : id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (isProjectPage && onNavigateHome) {
      onNavigateHome(href);
      return;
    }

    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId) || (targetId === 'projects' ? document.getElementById('courses') : null);
    if (element) {
      const yOffset = -80; // Offset for floating pill navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* ─── Floating Pill Navigation Container ─── */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pt-2.5 sm:pt-4 pointer-events-none">
        <motion.header
          layout
          initial={false}
          animate={{
            maxWidth: scrolled ? '760px' : '1152px', // Compact capsule island (760px) vs wide (1152px)
            height: scrolled ? 50 : 64,             // Slimmer 50px vs 64px
            borderRadius: scrolled ? 9999 : 16,     // Pill capsule vs rounded-2xl
            scale: scrolled ? (visible ? 0.98 : 0.92) : 1, // Sleek zoom-in scale effect
            y: visible ? (scrolled ? 2 : 0) : -90,  // Smoothly slide up out of view on scroll down
            opacity: visible ? 1 : 0,               // Fade out when hidden
          }}
          transition={{
            type: 'spring',
            stiffness: 340,
            damping: 30,
            mass: 0.8,
          }}
          className={`w-full pointer-events-auto flex items-center justify-between transition-colors duration-500 ${
            scrolled ? 'px-4 sm:px-6' : 'px-5 sm:px-8'
          } ${
            isAuraActive
              ? scrolled
                ? 'bg-zinc-950/85 backdrop-blur-xl border border-[#FF5500]/30 shadow-[0_12px_40px_-8px_rgba(255,85,0,0.25),0_0_0_1px_rgba(255,85,0,0.15)]'
                : 'bg-zinc-900/90 backdrop-blur-md border border-zinc-800 shadow-[0_4px_25px_rgba(0,0,0,0.5)]'
              : scrolled
              ? 'bg-white/85 backdrop-blur-xl border border-zinc-200/90 shadow-[0_12px_40px_-8px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.04)]'
              : 'bg-white/95 backdrop-blur-md border border-zinc-200 shadow-[0_2px_12px_rgba(0,0,0,0.03)]'
          }`}
        >
          {/* Left: Jet/Rocket Icon + VISOTH19 */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className={`flex items-center gap-2 group transition-colors select-none ${
              isAuraActive ? 'text-white hover:text-orange-400' : 'text-black hover:opacity-85'
            }`}
          >
            <motion.div
              whileHover={{ rotate: -15, scale: 1.15 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            >
              <svg
                className={`transition-colors ${
                  scrolled ? 'w-4 h-4' : 'w-5 h-5'
                } -rotate-45 ${isAuraActive ? 'text-[#FF5500]' : 'text-black'}`}
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </motion.div>
            <span
              className={`font-heading font-black tracking-tight transition-all duration-300 ${
                scrolled ? 'text-base sm:text-lg' : 'text-lg sm:text-xl'
              }`}
            >
              VISOTH19
            </span>
          </a>

          {/* Center: Interactive Nav Links with ScrollSpy Active Pill */}
          <nav className="hidden md:flex items-center gap-1 sm:gap-2 text-sm font-medium">
            {navItems.map((item) => {
              const targetId = item.href.replace('#', '');
              const isActive = activeSection === targetId;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`relative px-3.5 py-1.5 rounded-full transition-all duration-200 text-xs sm:text-sm font-medium ${
                    isActive
                      ? isAuraActive
                        ? 'text-[#FF5500] font-bold'
                        : 'text-zinc-950 font-bold'
                      : isAuraActive
                      ? 'text-zinc-400 hover:text-white'
                      : 'text-zinc-600 hover:text-black'
                  }`}
                >
                  {/* Active highlight background capsule */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBackground"
                      className={`absolute inset-0 rounded-full -z-10 ${
                        isAuraActive
                          ? 'bg-[#FF5500]/15 border border-[#FF5500]/30 shadow-[0_0_12px_rgba(255,85,0,0.25)]'
                          : 'bg-zinc-100 border border-zinc-200/80 shadow-sm'
                      }`}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span>{item.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Right: CV / Resume Button + Github Icon */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <LightBeamButton
              href="/chousereyvisothCV.pdf"
              target="_blank"
              isDark={isAuraActive}
              className={`font-mono font-bold transition-all duration-300 ${
                scrolled ? 'px-2.5 py-1 text-[11px] sm:text-xs' : 'px-3.5 py-1.5 text-xs'
              }`}
            >
              <FileText className={`${scrolled ? 'w-3 h-3' : 'w-3.5 h-3.5'} text-[#FF5500]`} />
              <span>CV / Resume</span>
            </LightBeamButton>

            <a
              href="https://github.com/palorkjork168"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className={`flex items-center gap-1.5 text-xs sm:text-sm font-medium transition-colors p-1.5 rounded-full hover:bg-zinc-500/10 ${
                isAuraActive ? 'text-white hover:text-orange-400' : 'text-black hover:text-zinc-600'
              }`}
            >
              <span className="hidden lg:inline">Github</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              className={`md:hidden p-1.5 rounded-lg border transition-colors ${
                isAuraActive
                  ? 'border-zinc-700 text-white bg-zinc-800 hover:bg-zinc-700'
                  : 'border-zinc-300 text-black bg-white hover:bg-zinc-100'
              }`}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </motion.header>
      </div>

      {/* ─── Mobile Glass Dropdown Menu ─── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className={`fixed top-20 left-4 right-4 z-50 p-6 rounded-3xl border shadow-2xl backdrop-blur-2xl md:hidden ${
              isAuraActive
                ? 'bg-zinc-950/95 border-[#FF5500]/30 text-white shadow-[0_15px_50px_rgba(255,85,0,0.2)]'
                : 'bg-white/95 border-zinc-200 text-zinc-900 shadow-xl'
            }`}
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`text-base font-semibold py-2 px-3 rounded-xl transition-colors ${
                    activeSection === item.href.replace('#', '')
                      ? isAuraActive
                        ? 'bg-[#FF5500]/15 text-[#FF5500]'
                        : 'bg-zinc-100 text-black font-bold'
                      : isAuraActive
                      ? 'text-zinc-300 hover:text-white'
                      : 'text-zinc-700 hover:text-black'
                  }`}
                >
                  {item.name}
                </a>
              ))}

              <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                <LightBeamButton
                  href="/chousereyvisothCV.pdf"
                  target="_blank"
                  isDark={isAuraActive}
                  className="px-4 py-2 text-xs font-mono font-bold"
                >
                  <FileText className="w-3.5 h-3.5 text-[#FF5500]" />
                  <span>View CV / Resume</span>
                </LightBeamButton>

                <a
                  href="https://github.com/palorkjork168"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700"
                >
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
