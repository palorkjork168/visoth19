import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { ProjectItem, allProjects } from '../../data/projects';
import { ProjectPreviewPlaceholder } from '../ui/ProjectPreviewPlaceholder';
import { DynamicGridWaveCanvas } from '../ui/DynamicGridWaveCanvas';

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
  const [selectedImage, setSelectedImage] = useState<string>(project.image || '');

  // Sync selected image if project changes
  useEffect(() => {
    setSelectedImage(project.image || '');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [project.id]);

  // Find previous and next project indices
  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

  // Title breakdown into Line 1 and Line 2
  const titleLine1 = project.titleTop || project.title.toUpperCase();
  const titleLine2 = project.titleBottom || project.category.toUpperCase();
  const leadTech = project.tech[0] || 'FULL-STACK';

  // Metrics (Fallback to default 3 metrics if not specified)
  const metrics = project.metrics && project.metrics.length > 0 ? project.metrics : [
    { value: '100%', desc: 'Structured, tested, and validated architecture' },
    { value: String(project.tech.length), desc: 'Core modern web technologies and libraries integrated' },
    { value: '2025', desc: 'Active continuous engineering and maintenance' },
  ];

  return (
    <article
      className={`relative min-h-screen pt-24 sm:pt-28 pb-20 px-6 sm:px-10 lg:px-14 overflow-hidden transition-colors duration-500 ${
        isAuraActive ? 'bg-[#0B0C10] text-slate-100' : 'bg-white text-zinc-900'
      }`}
    >
      {/* ─── Ambient Wavy Grid Background ─── */}
      <DynamicGridWaveCanvas isAuraActive={isAuraActive} opacity={0.8} />

      {/* ─── Original Clean Subtle Ambient Glow (Matches our Portfolio Identity) ─── */}
      <div
        className={`absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none transition-all duration-700 ${
          isAuraActive ? 'bg-[#FF5500]/12 opacity-80' : 'bg-[#FF5500]/5 opacity-60'
        }`}
      />
      <div
        className={`absolute bottom-20 right-10 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none transition-all duration-700 ${
          isAuraActive ? 'bg-orange-600/10 opacity-70' : 'bg-zinc-200/50 opacity-40'
        }`}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* ─── Top Return Bar ─── */}
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-zinc-200/80 dark:border-zinc-800">
          <button
            onClick={onBack}
            className={`group inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase transition-colors cursor-pointer ${
              isAuraActive
                ? 'text-zinc-400 hover:text-[#FF5500]'
                : 'text-zinc-600 hover:text-[#FF5500]'
            }`}
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-[#FF5500]" />
            <span>Back to All Projects</span>
          </button>

          <span className="font-mono text-xs text-zinc-400">
            {String(currentIndex + 1).padStart(2, '0')} / {String(allProjects.length).padStart(2, '0')}
          </span>
        </div>

        {/* ─── Hero Section: Left Text + Right Chamfered Image ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center mb-14 lg:mb-18">
          {/* Left Column: Meta, Giant Title, Short Info, Tech Stack, and CTA */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-5">
            {/* Meta Category Tag */}
            <div className="flex items-center gap-2 font-mono text-[11px] font-semibold tracking-widest uppercase text-zinc-500 dark:text-zinc-400">
              <span className="text-[#FF5500] font-bold">—</span>
              <span>{project.category.toUpperCase()}</span>
              <span>·</span>
              <span>{leadTech.toUpperCase()}</span>
              <span>·</span>
              <span>{project.year || '2025'}</span>
            </div>

            {/* Giant Bold Two-Line Title with Condensed Stretch */}
            <h1
              className="font-heading font-black text-6xl sm:text-7xl md:text-8xl lg:text-[5.8rem] tracking-tight leading-[0.86] select-none uppercase"
              style={{ fontStretch: '75%' }}
            >
              <span className={`block ${isAuraActive ? 'text-white' : 'text-zinc-950'}`}>
                {titleLine1}
              </span>
              <span className="block text-[#FF5500] drop-shadow-[0_2px_18px_rgba(255,85,0,0.35)]">
                {titleLine2}
              </span>
            </h1>

            {/* Short Info (Crisp, clean paragraph) */}
            <p
              className={`font-sans text-sm sm:text-base leading-relaxed max-w-lg ${
                isAuraActive ? 'text-zinc-300' : 'text-zinc-700 font-normal'
              }`}
            >
              {project.shortDesc || project.desc}
            </p>

            {/* Tech Stack Pills (Limited to 4-5 core technologies for minimal look) */}
            <div className="flex flex-wrap gap-2 pt-0.5">
              {project.tech.slice(0, 5).map((technology) => (
                <span
                  key={technology}
                  className={`font-mono text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 border transition-colors ${
                    isAuraActive
                      ? 'bg-zinc-900/80 text-zinc-300 border-zinc-800 hover:border-[#FF5500]/60'
                      : 'bg-zinc-50 text-zinc-800 border-zinc-200 hover:border-zinc-300 shadow-2xs'
                  }`}
                >
                  {technology}
                </span>
              ))}
            </div>

            {/* Action Buttons (Our Signature Electric Orange + Dark Minimal) */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider text-white bg-[#FF5500] hover:bg-[#E04B00] shadow-[0_4px_18px_rgba(255,85,0,0.3)] transition-all cursor-pointer active:scale-95"
                >
                  <span>LIVE SITE</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider border transition-all cursor-pointer active:scale-95 ${
                  isAuraActive
                    ? 'border-zinc-800 bg-zinc-900/70 hover:bg-zinc-800 text-white hover:border-zinc-700'
                    : 'border-zinc-300 bg-white hover:bg-zinc-50 text-zinc-900 shadow-2xs hover:border-zinc-400'
                }`}
              >
                <span>GITHUB REPO</span>
                <GithubIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Featured Image with 45-Degree Chamfered Corner */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div
              className={`relative w-full rounded-2xl overflow-hidden transition-all duration-300 ${
                isAuraActive
                  ? 'shadow-[0_16px_40px_rgba(0,0,0,0.85)] border border-zinc-800 hover:border-[#FF5500]/40'
                  : 'shadow-lg border border-zinc-200 hover:border-zinc-400'
              }`}
              style={{
                clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%)',
              }}
            >
              <div className="aspect-[4/3] w-full bg-zinc-950 overflow-hidden">
                {selectedImage ? (
                  <img
                    src={selectedImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                ) : (
                  <ProjectPreviewPlaceholder
                    title={project.title}
                    category={project.category}
                    isAuraActive={isAuraActive}
                    variant="detail"
                  />
                )}
              </div>
            </div>

            {/* Gallery Thumbnails if available */}
            {project.gallery && project.gallery.length > 1 && (
              <div className="flex items-center gap-2.5 mt-3.5 w-full overflow-x-auto pb-1">
                {project.gallery.map((imgSrc, idx) => {
                  const isSelected = selectedImage === imgSrc;
                  return (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(imgSrc)}
                      className={`relative w-16 sm:w-20 h-12 rounded-lg overflow-hidden border-2 transition-all cursor-pointer flex-shrink-0 ${
                        isSelected
                          ? 'border-[#FF5500] scale-105 shadow-[0_0_12px_rgba(255,85,0,0.4)]'
                          : 'border-zinc-200 dark:border-zinc-800 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={imgSrc} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* ─── Bottom Metrics Section with Corner Brackets (HUD Tech aesthetic in our #FF5500 brand color) ─── */}
        <div className="pt-8 border-t border-zinc-200/80 dark:border-zinc-800/80">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {metrics.map((metric, idx) => (
              <div
                key={idx}
                className="relative p-5 sm:p-7 select-none transition-all duration-300 group"
              >
                {/* ⌜ Top-Left Bracket */}
                <span
                  className={`absolute top-0 left-0 w-3 h-3 border-t-[1.5px] border-l-[1.5px] transition-colors ${
                    isAuraActive
                      ? 'border-zinc-500 group-hover:border-[#FF5500]'
                      : 'border-zinc-800 group-hover:border-[#FF5500]'
                  }`}
                />
                {/* ⌝ Top-Right Bracket */}
                <span
                  className={`absolute top-0 right-0 w-3 h-3 border-t-[1.5px] border-r-[1.5px] transition-colors ${
                    isAuraActive
                      ? 'border-zinc-500 group-hover:border-[#FF5500]'
                      : 'border-zinc-800 group-hover:border-[#FF5500]'
                  }`}
                />
                {/* ⌞ Bottom-Left Bracket */}
                <span
                  className={`absolute bottom-0 left-0 w-3 h-3 border-b-[1.5px] border-l-[1.5px] transition-colors ${
                    isAuraActive
                      ? 'border-zinc-500 group-hover:border-[#FF5500]'
                      : 'border-zinc-800 group-hover:border-[#FF5500]'
                  }`}
                />
                {/* ⌟ Bottom-Right Bracket */}
                <span
                  className={`absolute bottom-0 right-0 w-3 h-3 border-b-[1.5px] border-r-[1.5px] transition-colors ${
                    isAuraActive
                      ? 'border-zinc-500 group-hover:border-[#FF5500]'
                      : 'border-zinc-800 group-hover:border-[#FF5500]'
                  }`}
                />

                {/* Big Bold Stat / Number in our Electric Orange */}
                <div
                  className="font-heading font-black text-5xl sm:text-6xl lg:text-7xl leading-none mb-3 text-[#FF5500] drop-shadow-[0_2px_14px_rgba(255,85,0,0.25)]"
                  style={{ fontStretch: '75%' }}
                >
                  {metric.value}
                </div>

                {/* Short Description Underneath */}
                <p
                  className={`font-sans text-xs sm:text-[13px] leading-relaxed ${
                    isAuraActive ? 'text-zinc-400' : 'text-zinc-600'
                  }`}
                >
                  {metric.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Bottom Navigation: Previous / Next Project ─── */}
        <div className="mt-14 pt-6 border-t border-zinc-200/80 dark:border-zinc-800 flex items-center justify-between font-mono text-xs">
          {prevProject ? (
            <button
              onClick={() => onSelectProject(prevProject.id)}
              className={`inline-flex items-center gap-2 font-bold uppercase transition-colors cursor-pointer ${
                isAuraActive ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-black'
              }`}
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#FF5500]" />
              <span>Prev: {prevProject.title}</span>
            </button>
          ) : (
            <div />
          )}

          {nextProject ? (
            <button
              onClick={() => onSelectProject(nextProject.id)}
              className={`inline-flex items-center gap-2 font-bold uppercase transition-colors cursor-pointer ${
                isAuraActive ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-black'
              }`}
            >
              <span>Next: {nextProject.title}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#FF5500]" />
            </button>
          ) : (
            <div />
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectDetailPage;
