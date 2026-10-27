import { X, Download, Printer, ExternalLink, Mail, Phone, MapPin, Globe, Star } from 'lucide-react';
import { LightBeamButton } from './LightBeamButton';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  isAuraActive?: boolean;
}

export function ResumeModal({ isOpen, onClose, isAuraActive = false }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md cursor-pointer overflow-y-auto animate-fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`w-full max-w-3xl my-auto rounded-3xl border shadow-2xl relative cursor-default transition-all duration-300 overflow-hidden flex flex-col max-h-[92vh] ${
          isAuraActive
            ? 'bg-[#0E0F14] border-zinc-800 text-zinc-100 shadow-[0_0_60px_rgba(255,85,0,0.2)]'
            : 'bg-white border-zinc-200 text-zinc-900 shadow-xl'
        }`}
      >
        {/* Modal Toolbar */}
        <div
          className={`flex items-center justify-between px-6 py-4 border-b flex-shrink-0 ${
            isAuraActive ? 'border-zinc-800 bg-zinc-900/70' : 'border-zinc-100 bg-zinc-50/80'
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5500] animate-pulse" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#FF5500]">
              Curriculum Vitae / Resume
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className={`p-2 rounded-xl border text-xs font-mono font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
                isAuraActive
                  ? 'border-zinc-700 bg-zinc-800 hover:bg-zinc-700 text-zinc-200'
                  : 'border-zinc-200 bg-white hover:bg-zinc-100 text-zinc-700'
              }`}
              title="Print / Save PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <LightBeamButton
              href="/chousereyvisothCV.pdf"
              download="chousereyvisothCV.pdf"
              isDark={isAuraActive}
              pill={false}
              className="px-3.5 py-1.5 rounded-xl font-mono text-xs font-bold"
            >
              <Download className="w-3.5 h-3.5 text-[#FF5500]" />
              <span>Download PDF</span>
            </LightBeamButton>

            <button
              onClick={onClose}
              className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                isAuraActive
                  ? 'border-zinc-700 bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white'
                  : 'border-zinc-200 bg-white hover:bg-zinc-100 text-zinc-500 hover:text-black'
              }`}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Printable Resume Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 print:p-0">
          {/* Header */}
          <div className="border-b pb-6 border-zinc-200 dark:border-zinc-800">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-black font-sans tracking-tight text-zinc-900 dark:text-white">
                  Chou Sereyvisoth
                </h1>
                <p className="text-sm font-mono text-[#FF5500] font-bold mt-1">
                  Full-Stack Developer &bull; Computer Science (Year 4)
                </p>
              </div>

              <div className="text-xs font-mono space-y-1 text-zinc-600 dark:text-zinc-400">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#FF5500]" />
                  <span>Phnom Penh, Cambodia</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#FF5500]" />
                  <a href="mailto:chousereyvisoth@gmail.com" className="hover:underline">
                    chousereyvisoth@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#FF5500]" />
                  <span>+855 87 959 626</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-[#FF5500]" />
                  <a
                    href="https://github.com/palorkjork168"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    github.com/palorkjork168
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#FF5500] font-bold mb-2">
              // Summary
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              Full-Stack Developer and final-year Computer Science student at Norton University. Trained through Sala-IT&apos;s professional web engineering curriculum with hands-on graphic design experience. Focused on developing fast, reliable web architectures with React 19, TypeScript, Node.js, Express.js 5, and PostgreSQL.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#FF5500] font-bold mb-3">
              // Technical Stack
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
                <span className="font-mono font-bold text-zinc-900 dark:text-white block mb-1">
                  Frontend Development
                </span>
                <p className="text-zinc-600 dark:text-zinc-400">
                  React 19, TypeScript, Vite, Tailwind CSS 4, TanStack Query, Zod, React Router, Shadcn UI
                </p>
              </div>

              <div className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
                <span className="font-mono font-bold text-zinc-900 dark:text-white block mb-1">
                  Backend &amp; Databases
                </span>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Node.js, Express.js 5, PostgreSQL, Sequelize ORM, JWT Authentication, REST APIs
                </p>
              </div>

              <div className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
                <span className="font-mono font-bold text-zinc-900 dark:text-white block mb-1">
                  Design &amp; Prototyping
                </span>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Figma, Adobe Photoshop, Adobe Illustrator, UI/UX Layouts, Brand Identity
                </p>
              </div>

              <div className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
                <span className="font-mono font-bold text-zinc-900 dark:text-white block mb-1">
                  Tools &amp; DevOps
                </span>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Git, GitHub, Postman, Vercel, Multer, Cloudinary, Linux CLI
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#FF5500] font-bold mb-3">
              // Education &amp; Training
            </h2>
            <div className="space-y-4 text-xs sm:text-sm">
              <div className="border-l-2 border-[#FF5500] pl-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h3 className="font-bold text-zinc-900 dark:text-white">
                    Bachelor&apos;s Degree in Computer Science (Year 4)
                  </h3>
                  <span className="font-mono text-xs text-zinc-500">2023 &ndash; Present</span>
                </div>
                <div className="text-zinc-600 dark:text-zinc-400 text-xs">
                  Norton University &bull; Phnom Penh, Cambodia
                </div>
              </div>

              <div className="border-l-2 border-zinc-300 dark:border-zinc-700 pl-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h3 className="font-bold text-zinc-900 dark:text-white">
                    Full-Stack Web Development Course
                  </h3>
                  <span className="font-mono text-xs text-zinc-500">09/2025 &ndash; 04/2026</span>
                </div>
                <div className="text-zinc-600 dark:text-zinc-400 text-xs">
                  Sala-IT &bull; Phnom Penh
                </div>
              </div>

              <div className="border-l-2 border-zinc-300 dark:border-zinc-700 pl-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h3 className="font-bold text-zinc-900 dark:text-white">
                    Graphic Design Training
                  </h3>
                  <span className="font-mono text-xs text-zinc-500">01/2025 &ndash; 03/2025</span>
                </div>
                <div className="text-zinc-600 dark:text-zinc-400 text-xs">
                  Training Media &bull; Phnom Penh
                </div>
              </div>

              <div className="border-l-2 border-zinc-300 dark:border-zinc-700 pl-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h3 className="font-bold text-zinc-900 dark:text-white">
                    High School Certificate
                  </h3>
                  <span className="font-mono text-xs text-zinc-500">2021 &ndash; 2022</span>
                </div>
                <div className="text-zinc-600 dark:text-zinc-400 text-xs">
                  Kampot Krong High School
                </div>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#FF5500] font-bold mb-3">
              Featured Projects (Main &amp; Pinned)
            </h2>
            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-zinc-900 dark:text-white flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 text-[#FF5500] fill-[#FF5500]" />
                    <span>CV Builder</span>
                    <span className="text-[10px] text-zinc-400 font-normal">&bull; Productivity Tool</span>
                  </span>
                  <a
                    href="https://github.com/palorkjork168"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#FF5500] hover:underline font-mono inline-flex items-center gap-1"
                  >
                    Repo <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400">
                  A web application that allows users to create professional CVs with structured resume formatting. Built with React 19, TypeScript, Tailwind CSS 4, Node.js, Express.js, and PostgreSQL.
                </p>
              </div>

              <div className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-zinc-900 dark:text-white flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 text-[#FF5500] fill-[#FF5500]" />
                    <span>QR Code Generator</span>
                    <span className="text-[10px] text-zinc-400 font-normal">&bull; Developer Tool</span>
                  </span>
                  <div className="flex items-center gap-2.5">
                    <a
                      href="https://qr-studio-app-sepia.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#FF5500] hover:underline font-mono inline-flex items-center gap-1 font-bold"
                    >
                      Live <ExternalLink className="w-3 h-3" />
                    </a>
                    <a
                      href="https://github.com/palorkjork168/qr-studio-app"
                      target="_blank"
                      rel="noreferrer"
                      className="text-zinc-400 hover:text-white font-mono inline-flex items-center gap-1"
                    >
                      Repo <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Dynamic QR code generation utility from user URLs with real-time styling and instant image export. Built with React, TypeScript, and Tailwind CSS.
                </p>
              </div>

              <div className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-zinc-900 dark:text-white flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 text-[#FF5500] fill-[#FF5500]" />
                    <span>NectarHub &bull; HR &amp; Employee Tracking</span>
                    <span className="text-[10px] text-zinc-400 font-normal">&bull; HR Technology</span>
                  </span>
                  <a
                    href="https://github.com/palorkjork168/nectar-hub"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#FF5500] hover:underline font-mono inline-flex items-center gap-1"
                  >
                    Repo <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Full-stack workforce tracking platform with administrative dashboards, attendance logs, and job recruitment management. Built with React, TypeScript, Node.js, Express.js, and PostgreSQL.
                </p>
              </div>

              <div className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/40">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-zinc-900 dark:text-white">
                    Enterprise Management Suite (5 Systems)
                  </span>
                  <a
                    href="https://github.com/palorkjork168"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#FF5500] hover:underline font-mono inline-flex items-center gap-1"
                  >
                    GitHub <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Full-stack management applications including Employee Management, Mini Mart POS, School Management, Cinema Management, and Hotel Management systems using React 19, Express.js 5, and PostgreSQL.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
