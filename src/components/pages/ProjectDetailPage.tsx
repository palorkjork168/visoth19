import { useState, useEffect } from 'react';
import {
  ArrowLeft,
  ExternalLink,
  Star,
  CheckCircle2,
  Calendar,
  Layers,
  Sparkles,
  ArrowRight,
  Code2,
} from 'lucide-react';
import { ProjectItem, allProjects } from '../../data/projects';
import { LightBeamButton } from '../ui/LightBeamButton';

interface ProjectDetailPageProps {
  project: ProjectItem;
  isAuraActive: boolean;
  onBack: () => void;
  onSelectProject: (projectId: string) => void;
}

function GithubIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export function ProjectDetailPage({
  project,
  isAuraActive,
  onBack,
  onSelectProject,
}: ProjectDetailPageProps) {
  const [selectedImage, setSelectedImage] = useState<string>(project.image);

  // Sync selected image if project changes
  useEffect(() => {
    setSelectedImage(project.image);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [project.id]);

  // Find previous and next project indices
  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

  return (
    <article
      className={`min-h-screen pt-24 sm:pt-28 pb-20 px-5 sm:px-8 transition-colors duration-500 ${
        isAuraActive ? 'bg-[#0B0C10] text-slate-100' : 'bg-white text-zinc-900'
      }`}
    >
      <div className="max-w-5xl mx-auto">
        {/* ─── Top Breadcrumb Navigation & Back Button ─── */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-zinc-200 dark:border-zinc-800">
          <button
            onClick={onBack}
            className={`group inline-flex items-center gap-2.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all cursor-pointer ${
              isAuraActive
                ? 'bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 hover:border-[#FF5500]/50 hover:text-white'
                : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-800 border border-zinc-200 hover:border-zinc-300'
            }`}
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-[#FF5500]" />
            <span>Back to All Projects</span>
          </button>

          <div className="flex items-center gap-2 font-mono text-xs">
            <span
              className={`px-3 py-1 rounded-full ${
                isAuraActive
                  ? 'bg-zinc-900 text-zinc-400 border border-zinc-800'
                  : 'bg-zinc-100 text-zinc-600 border border-zinc-200'
              }`}
            >
              Project {String(currentIndex + 1).padStart(2, '0')} /{' '}
              {String(allProjects.length).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* ─── Project Title & High-Level Header ─── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex flex-wrap items-center gap-2.5 mb-3.5">
              <span
                className={`px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider ${
                  isAuraActive
                    ? 'bg-[#FF5500]/15 text-[#FF5500] border border-[#FF5500]/30'
                    : 'bg-orange-50 text-orange-700 border border-orange-200'
                }`}
              >
                {project.category}
              </span>

              <span
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-medium ${
                  project.status === 'Completed'
                    ? 'bg-emerald-500/15 text-emerald-500 border border-emerald-500/30'
                    : 'bg-amber-500/15 text-amber-500 border border-amber-500/30'
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    project.status === 'Completed'
                      ? 'bg-emerald-500'
                      : 'bg-amber-500 animate-pulse'
                  }`}
                />
                <span>{project.status}</span>
              </span>

              {project.isPinned && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-[#FF5500] text-black shadow-[0_0_12px_rgba(255,85,0,0.35)]">
                  <Star className="w-3 h-3 fill-current" />
                  <span>Featured Build</span>
                </span>
              )}
            </div>

            <h1
              className={`font-sans font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight ${
                isAuraActive ? 'text-white' : 'text-zinc-950'
              }`}
            >
              {project.title}
            </h1>
          </div>

          {/* Action Links (Demo + Repository) */}
          <div className="flex flex-wrap items-center gap-3">
            {project.liveDemo && (
              <LightBeamButton
                href={project.liveDemo}
                target="_blank"
                isDark={isAuraActive}
                className="px-5 py-2.5 font-mono text-xs sm:text-sm font-bold"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-4 h-4 text-[#FF5500]" />
              </LightBeamButton>
            )}

            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-bold transition-all shadow-sm ${
                isAuraActive
                  ? 'bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700 hover:border-zinc-500'
                  : 'bg-zinc-950 hover:bg-zinc-800 text-white border border-transparent'
              }`}
            >
              <span>GitHub Repo</span>
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* ─── Hero Project Image Showcase ─── */}
        <div className="mb-12">
          <div
            className={`relative rounded-3xl overflow-hidden border shadow-xl transition-all duration-300 ${
              isAuraActive
                ? 'bg-zinc-950 border-zinc-800 shadow-[0_20px_50px_rgba(0,0,0,0.8)]'
                : 'bg-zinc-100 border-zinc-200 shadow-md'
            }`}
          >
            <div className="aspect-[16/9] sm:aspect-[16/10] w-full overflow-hidden bg-zinc-950">
              <img
                src={selectedImage}
                alt={project.title}
                className="w-full h-full object-cover sm:object-contain object-center transition-all duration-500"
              />
            </div>
          </div>

          {/* Gallery Thumbnails if available (e.g. QR generator, HR platform) */}
          {project.gallery && project.gallery.length > 1 && (
            <div className="mt-4">
              <div className="flex items-center gap-2 mb-2 font-mono text-xs text-zinc-400">
                <span>PROJECT SCREENSHOTS:</span>
              </div>
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {project.gallery.map((imgSrc, idx) => {
                  const isSelected = selectedImage === imgSrc;
                  return (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(imgSrc)}
                      className={`relative w-24 sm:w-28 h-16 rounded-xl overflow-hidden border-2 transition-all cursor-pointer flex-shrink-0 ${
                        isSelected
                          ? 'border-[#FF5500] scale-105 shadow-[0_0_15px_rgba(255,85,0,0.4)]'
                          : isAuraActive
                          ? 'border-zinc-800 opacity-60 hover:opacity-100 hover:border-zinc-600'
                          : 'border-zinc-200 opacity-70 hover:opacity-100 hover:border-zinc-400'
                      }`}
                    >
                      <img
                        src={imgSrc}
                        alt={`Screenshot ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* ─── Details Grid: Short Description & Tech Stack ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 mb-16">
          {/* Left Column: Project Overview & Features */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-[#FF5500]" />
                <h2
                  className={`font-mono text-xs uppercase tracking-widest font-bold ${
                    isAuraActive ? 'text-zinc-400' : 'text-zinc-600'
                  }`}
                >
                  About The Project
                </h2>
              </div>
              <p
                className={`text-base sm:text-lg leading-relaxed ${
                  isAuraActive ? 'text-zinc-200' : 'text-zinc-700'
                }`}
              >
                {project.desc}
              </p>
            </div>

            {/* Key Features / Highlights */}
            {project.features && project.features.length > 0 && (
              <div
                className={`p-6 sm:p-7 rounded-2xl border ${
                  isAuraActive
                    ? 'bg-zinc-900/50 border-zinc-800/80'
                    : 'bg-zinc-50 border-zinc-200'
                }`}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Layers className="w-4 h-4 text-[#FF5500]" />
                  <h3
                    className={`font-mono text-xs uppercase tracking-widest font-bold ${
                      isAuraActive ? 'text-white' : 'text-zinc-900'
                    }`}
                  >
                    Key Architecture &amp; Implementation Details
                  </h3>
                </div>

                <ul className="space-y-3 font-sans text-sm sm:text-base">
                  {project.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#FF5500] shrink-0 mt-0.5" />
                      <span
                        className={
                          isAuraActive ? 'text-zinc-300' : 'text-zinc-700'
                        }
                      >
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right Column: Tech Stack & Project Metadata */}
          <div className="lg:col-span-5 space-y-6">
            {/* Tech Stack Card */}
            <div
              className={`p-6 sm:p-7 rounded-2xl border ${
                isAuraActive
                  ? 'bg-zinc-900/60 border-zinc-800 shadow-lg'
                  : 'bg-white border-zinc-200 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-2 mb-4">
                <Code2 className="w-4 h-4 text-[#FF5500]" />
                <h3
                  className={`font-mono text-xs uppercase tracking-widest font-bold ${
                    isAuraActive ? 'text-white' : 'text-zinc-900'
                  }`}
                >
                  Technologies &amp; Tools
                </h3>
              </div>
              <p
                className={`text-xs mb-5 ${
                  isAuraActive ? 'text-zinc-400' : 'text-zinc-500'
                }`}
              >
                Frameworks, libraries, and runtime environment powering this project:
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((technology) => (
                  <span
                    key={technology}
                    className={`font-mono text-xs px-3 py-1.5 rounded-xl font-semibold border transition-all ${
                      isAuraActive
                        ? 'bg-zinc-800/80 text-zinc-200 border-zinc-700 hover:border-[#FF5500]/60 hover:text-white'
                        : 'bg-zinc-100 text-zinc-800 border-zinc-200 hover:border-zinc-400'
                    }`}
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Specs Card */}
            <div
              className={`p-6 rounded-2xl border font-mono text-xs space-y-3.5 ${
                isAuraActive
                  ? 'bg-zinc-900/30 border-zinc-800 text-zinc-400'
                  : 'bg-zinc-50 border-zinc-200 text-zinc-600'
              }`}
            >
              <div className="flex items-center justify-between pb-2 border-b border-zinc-200 dark:border-zinc-800">
                <span>AUTHOR ROLE</span>
                <span
                  className={`font-semibold ${
                    isAuraActive ? 'text-white' : 'text-zinc-900'
                  }`}
                >
                  {project.role || 'Full-Stack Developer'}
                </span>
              </div>

              <div className="flex items-center justify-between pb-2 border-b border-zinc-200 dark:border-zinc-800">
                <span>TIMELINE</span>
                <span
                  className={`font-semibold flex items-center gap-1 ${
                    isAuraActive ? 'text-white' : 'text-zinc-900'
                  }`}
                >
                  <Calendar className="w-3.5 h-3.5 text-[#FF5500]" />
                  <span>{project.year || '2024 - 2025'}</span>
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span>CODE REPOSITORY</span>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-[#FF5500] hover:underline flex items-center gap-1"
                >
                  <span>github.com</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Bottom Navigation: Previous / Next Project ─── */}
        <div className="pt-10 border-t border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center justify-between gap-4">
            {prevProject ? (
              <button
                onClick={() => onSelectProject(prevProject.id)}
                className={`group flex items-center gap-3 p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                  isAuraActive
                    ? 'border-zinc-800 hover:border-[#FF5500]/50 hover:bg-zinc-900/60'
                    : 'border-zinc-200 hover:border-zinc-400 hover:bg-zinc-50'
                }`}
              >
                <ArrowLeft className="w-5 h-5 text-[#FF5500] transition-transform group-hover:-translate-x-1 shrink-0" />
                <div>
                  <span className="block font-mono text-[10px] uppercase text-zinc-400">
                    Previous Project
                  </span>
                  <span
                    className={`font-sans font-bold text-sm sm:text-base ${
                      isAuraActive ? 'text-white' : 'text-zinc-900'
                    }`}
                  >
                    {prevProject.title}
                  </span>
                </div>
              </button>
            ) : (
              <div />
            )}

            <button
              onClick={onBack}
              className={`hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer ${
                isAuraActive
                  ? 'bg-zinc-900 hover:bg-zinc-800 text-zinc-300'
                  : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-700'
              }`}
            >
              <span>All Projects</span>
            </button>

            {nextProject ? (
              <button
                onClick={() => onSelectProject(nextProject.id)}
                className={`group flex items-center gap-3 p-4 rounded-2xl border text-right transition-all cursor-pointer ${
                  isAuraActive
                    ? 'border-zinc-800 hover:border-[#FF5500]/50 hover:bg-zinc-900/60'
                    : 'border-zinc-200 hover:border-zinc-400 hover:bg-zinc-50'
                }`}
              >
                <div>
                  <span className="block font-mono text-[10px] uppercase text-zinc-400">
                    Next Project
                  </span>
                  <span
                    className={`font-sans font-bold text-sm sm:text-base ${
                      isAuraActive ? 'text-white' : 'text-zinc-900'
                    }`}
                  >
                    {nextProject.title}
                  </span>
                </div>
                <ArrowRight className="w-5 h-5 text-[#FF5500] transition-transform group-hover:translate-x-1 shrink-0" />
              </button>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProjectDetailPage;
