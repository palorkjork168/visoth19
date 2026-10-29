import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from '../ui/FadeIn';
import { Play, X } from 'lucide-react';
import proj1 from '../../assets/projects/project1.jpg';
import proj2 from '../../assets/projects/project2.jpg';
import proj3 from '../../assets/projects/project3.jpg';

import qrImg from '../../assets/projects/qr_generator.jpg';
import attendanceImg from '../../assets/projects/attendance.jpg';
import cinemaImg from '../../assets/projects/cinema_mgmt.jpg';
import hotelImg from '../../assets/projects/hotel_mgmt.jpg';
import schoolImg from '../../assets/projects/school_mgmt.jpg';

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

interface Project {
  id: string;
  codename: string;
  title: string;
  subtitle: string;
  desc: string;
  image: string;
  tech: string[];
  features: string[];
  accent: 'cyan' | 'fire' | 'purple';
  liveUrl?: string;
  githubUrl?: string;
  isPinned?: boolean;
}

const projects: Project[] = [
  {
    id: 'cv-builder',
    codename: 'PRODUCTIVITY // 01',
    title: 'ResumeForge',
    subtitle: 'ATS Resume Engineering',
    desc: 'A web application that allows users to create professional CVs by entering personal information, educational background, skills, and work experience.',
    image: proj2,
    tech: ['React 19', 'TypeScript', 'Tailwind CSS 4', 'Node.js', 'Express.js', 'PostgreSQL'],
    features: ['Structured Resume Formatting', 'Real-time Experience Organization', 'PostgreSQL Data Layer', 'Responsive Export View'],
    accent: 'fire',
    githubUrl: 'https://github.com/palorkjork168',
    isPinned: true,
  },
  {
    id: 'qr-generator',
    codename: 'DEV TOOL // 02',
    title: 'QR Studio',
    subtitle: 'Dynamic Vector & Matrix Engine',
    desc: 'A web application that generates QR codes from user-provided URLs, making it easier to share and access links through mobile devices.',
    image: qrImg,
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    features: ['Real-time URL to QR Matrix', 'High-res Vector & PNG Output', 'Instant Mobile Scan Validation', 'Minimalist UI'],
    accent: 'fire',
    githubUrl: 'https://github.com/palorkjork168',
    isPinned: true,
  },
  {
    id: 'employee-attendance',
    codename: 'WORKFORCE // 03',
    title: 'NectarHub HR',
    subtitle: 'Biometric & Shift Tracking Architecture',
    desc: 'A workforce tracking and HR management system featuring centralized administrative dashboards, employee check-in and check-out logs, job board portals, and attendance analytics.',
    image: attendanceImg,
    tech: ['React', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL'],
    features: ['Check-in / Check-out Logs', 'Timesheet Calculations', 'PostgreSQL History Store', 'Role Auditing'],
    accent: 'fire',
    githubUrl: 'https://github.com/palorkjork168',
    isPinned: true,
  },
  {
    id: 'pos-system',
    codename: 'COMMERCE // 04',
    title: 'MartPulse POS',
    subtitle: 'Retail & Transaction Control',
    desc: 'A point-of-sale system designed for small retail businesses to manage product inventory, customer transactions, and daily sales performance.',
    image: proj1,
    tech: ['React 19', 'TypeScript', 'Tailwind CSS 4', 'Node.js', 'Express.js 5', 'PostgreSQL', 'Sequelize ORM', 'Recharts'],
    features: ['Fast Barcode/SKU Checkout', 'Real-time Stock Deductions', 'Recharts Sales Analytics', 'Audit Trail'],
    accent: 'purple',
    githubUrl: 'https://github.com/palorkjork168',
  },
  {
    id: 'school-mgmt',
    codename: 'EDTECH // 05',
    title: 'EduSphere',
    subtitle: 'Campus Administration System',
    desc: 'A web application designed to organize school information, including student records, teacher information, class management, and attendance.',
    image: schoolImg,
    tech: ['React 19', 'TypeScript', 'React Router', 'Node.js', 'Express.js 5', 'PostgreSQL', 'Sequelize ORM', 'JWT'],
    features: ['Student Enrollment', 'Teacher Schedules', 'Class Room Roster', 'JWT Secure Portals'],
    accent: 'cyan',
    githubUrl: 'https://github.com/palorkjork168',
  },
  {
    id: 'cinema-mgmt',
    codename: 'ENTERTAINMENT // 06',
    title: 'CinePass',
    subtitle: 'Box Office & Ticket Booking Platform',
    desc: 'An application for organizing movie information, screening schedules, seat availability matrices, and ticket reservations.',
    image: cinemaImg,
    tech: ['React', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL'],
    features: ['Seat Grid Visualizer', 'Showtime Scheduling', 'Ticket Generation', 'Box Office Metrics'],
    accent: 'purple',
    githubUrl: 'https://github.com/palorkjork168',
  },
  {
    id: 'hotel-mgmt',
    codename: 'HOSPITALITY // 07',
    title: 'HavenStay',
    subtitle: 'Room Reservation & Guest Concierge',
    desc: 'A web application for managing hotel rooms, guest reservations, booking statuses, and automated check-in/out workflows.',
    image: hotelImg,
    tech: ['React', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL'],
    features: ['Room Availability Calendar', 'Guest Reservation Lifecycle', 'Express REST API', 'PostgreSQL Booking DB'],
    accent: 'cyan',
    githubUrl: 'https://github.com/palorkjork168',
  },
];

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="relative bg-[#07070A] py-28 md:py-36 px-5 sm:px-8 md:px-12 overflow-hidden border-t border-white/5"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[400px] bg-[#00D4FF]/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[400px] bg-[#FF4500]/7 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid-dense opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header matching Reference Image "— GAME PLAY —" */}
        <div className="flex flex-col items-center text-center mb-16">
          <FadeIn delay={0.1} y={15}>
            <div className="flex items-center gap-4 text-[#00D4FF] mb-3">
              <span className="w-8 md:w-16 h-px bg-gradient-to-r from-transparent to-[#00D4FF]" />
              <span className="font-gamer font-bold text-xs tracking-[0.3em] uppercase">
                MISSIONS &amp; PROJECTS
              </span>
              <span className="w-8 md:w-16 h-px bg-gradient-to-l from-transparent to-[#00D4FF]" />
            </div>
          </FadeIn>

          <FadeIn delay={0.2} y={20}>
            <h2 className="font-gamer font-black uppercase tracking-[0.1em] text-[clamp(2.2rem,6vw,4rem)] text-white flex items-center justify-center gap-3">
              <span className="text-white/40 font-light">&mdash;</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E2E8F0] to-[#94A3B8]">
                GAME PLAY
              </span>
              <span className="text-white/40 font-light">&mdash;</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.3} y={15}>
            <p className="mt-3 text-white/50 text-xs sm:text-sm font-mono tracking-widest max-w-lg">
              DEPLOYED BATTLEGROUNDS &amp; REAL-WORLD SOFTWARE EXPERIENCES
            </p>
          </FadeIn>
        </div>

        {/* Project Cards Grid matching Reference Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {projects.map((proj, idx) => {
            const isFeatured = idx === 1; // Center card featured like in reference
            const isFire = proj.accent === 'fire';

            return (
              <FadeIn key={proj.id} delay={0.2 + idx * 0.15} y={30}>
                <div
                  onClick={() => setActiveProject(proj)}
                  className={`group cursor-pointer relative flex flex-col h-full bg-[#0B0D16] transition-all duration-500 hover:-translate-y-2 ${
                    isFeatured
                      ? 'md:scale-105 shadow-[0_0_35px_rgba(0,212,255,0.3)] z-20'
                      : 'hover:shadow-[0_0_25px_rgba(255,85,0,0.3)] z-10'
                  }`}
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)',
                    border: isFeatured
                      ? '1px solid rgba(0, 212, 255, 0.6)'
                      : isFire
                      ? '1px solid rgba(255, 85, 0, 0.4)'
                      : '1px solid rgba(255, 255, 255, 0.15)',
                  }}
                >
                  {/* Card Top Title Bar matching Reference */}
                  <div className={`px-4 py-3 flex items-center justify-between border-b ${
                    isFeatured
                      ? 'bg-[#00D4FF]/10 border-[#00D4FF]/30'
                      : 'bg-[#10131F] border-white/10'
                  }`}>
                    <span className={`font-gamer text-xs font-black tracking-widest uppercase ${
                      isFeatured ? 'text-[#00D4FF]' : isFire ? 'text-[#FF8800]' : 'text-white'
                    }`}>
                      {proj.codename}
                    </span>

                    <span className="font-mono text-[9px] text-white/40 tracking-wider">
                      PROJ // 0{idx + 1}
                    </span>
                  </div>

                  {/* Media Visual with Centered Glowing Play Button */}
                  <div className="relative h-64 sm:h-72 overflow-hidden bg-black">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                    />
                    
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D16] via-transparent to-transparent opacity-80" />

                    {/* Centered Glowing Play/Inspect Button matching Reference */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/40 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-[#00D4FF] group-hover:text-black group-hover:border-[#00D4FF] transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.8)] group-hover:shadow-[0_0_25px_rgba(0,212,255,0.8)]">
                        <Play className="w-6 h-6 fill-current translate-x-0.5" />
                      </div>
                    </div>

                    {/* Quick Badge */}
                    <div className="absolute bottom-3 left-4">
                      <span className="px-2.5 py-1 text-[10px] font-mono tracking-widest uppercase bg-black/70 backdrop-blur-md text-[#00D4FF] border border-[#00D4FF]/30 rounded-sm">
                        {proj.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex flex-col flex-1 justify-between bg-[#0B0D16]">
                    <div>
                      <h3 className="font-gamer font-bold text-lg text-white group-hover:text-[#00D4FF] transition-colors mb-2">
                        {proj.title}
                      </h3>
                      <p className="text-[#8892B0] text-xs leading-relaxed line-clamp-2 mb-4 font-chakra">
                        {proj.desc}
                      </p>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                      {proj.tech.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 text-[9px] font-mono tracking-wider bg-white/5 text-white/70 rounded-xs"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Bottom Pagination Indicator Dashes matching Reference Image ("— — —") */}
        <div className="flex items-center justify-center gap-2 mt-12">
          {projects.map((_, i) => (
            <span
              key={i}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === 1 ? 'w-8 bg-[#00D4FF] shadow-[0_0_8px_#00D4FF]' : 'w-4 bg-white/20'
              }`}
            />
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl bg-[#0E121E] border border-[rgba(0,212,255,0.4)] overflow-hidden shadow-[0_0_50px_rgba(0,212,255,0.3)] rounded-lg"
              style={{
                clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)',
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 z-20 w-8 h-8 rounded bg-black/60 border border-white/20 text-white hover:text-[#FF5500] hover:border-[#FF5500] flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Image */}
              <div className="relative h-60 sm:h-72 w-full overflow-hidden">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E121E] via-transparent to-black/40" />
                <div className="absolute bottom-4 left-6">
                  <span className="font-mono text-xs text-[#00D4FF] tracking-widest uppercase">
                    {activeProject.codename}
                  </span>
                  <h3 className="font-gamer font-black text-2xl sm:text-3xl text-white mt-1">
                    {activeProject.title}
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6">
                <p className="text-[#94A3B8] text-sm leading-relaxed mb-6 font-chakra">
                  {activeProject.desc}
                </p>

                <div className="mb-6">
                  <h4 className="font-gamer text-xs tracking-widest text-[#00D4FF] uppercase mb-2">
                    KEY MISSIONS &amp; CAPABILITIES
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeProject.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs text-white/80 font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]" />
                        {feat}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="font-gamer text-xs tracking-widest text-white/60 uppercase mb-2">
                    TECH 
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs font-mono bg-[#161B2E] text-[#00D4FF] border border-[#00D4FF]/20 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Footer CTAs */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <a
                    href={activeProject.githubUrl || 'https://github.com/palorkjork168'}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-3 px-5 bg-[#141A2D] hover:bg-[#00D4FF] hover:text-black border border-[rgba(0,212,255,0.4)] text-[#00D4FF] font-gamer text-xs font-bold tracking-widest uppercase rounded flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(0,212,255,0.2)]"
                  >
                    <GithubIcon className="w-4 h-4" />
                    GITHUB REPOSITORY
                  </a>
                  <button
                    onClick={() => setActiveProject(null)}
                    className="py-3 px-6 bg-white/5 hover:bg-white/10 text-white font-gamer text-xs tracking-widest uppercase rounded transition-colors"
                  >
                    DISMISS
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
