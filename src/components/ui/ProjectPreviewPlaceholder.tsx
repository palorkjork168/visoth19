import React from 'react';
import { Layers } from 'lucide-react';

interface ProjectPreviewPlaceholderProps {
  title?: string;
  category?: string;
  isAuraActive?: boolean;
  className?: string;
  variant?: 'card' | 'detail';
}

export const ProjectPreviewPlaceholder: React.FC<ProjectPreviewPlaceholderProps> = ({
  title,
  category,
  isAuraActive = false,
  className = '',
  variant = 'card',
}) => {
  return (
    <div
      className={`relative w-full h-full flex flex-col items-center justify-center p-6 select-none overflow-hidden transition-colors duration-300 ${
        isAuraActive
          ? 'bg-[#0F1015] border-zinc-800 text-zinc-300'
          : 'bg-zinc-50 border-zinc-200 text-zinc-700'
      } ${className}`}
    >
      {/* Subtle Blueprint Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.45] pointer-events-none"
        style={{
          backgroundImage: isAuraActive
            ? 'radial-gradient(#27272a 1px, transparent 1px)'
            : 'radial-gradient(#d4d4d8 1px, transparent 1px)',
          backgroundSize: '18px 18px',
        }}
      />

      {/* Decorative Corner Framing Crosshairs */}
      <span className="absolute top-3 left-3 font-mono text-[9px] text-[#FF5500]/50 tracking-tighter pointer-events-none">
        +
      </span>
      <span className="absolute top-3 right-3 font-mono text-[9px] text-[#FF5500]/50 tracking-tighter pointer-events-none">
        +
      </span>
      <span className="absolute bottom-3 left-3 font-mono text-[9px] text-[#FF5500]/50 tracking-tighter pointer-events-none">
        +
      </span>
      <span className="absolute bottom-3 right-3 font-mono text-[9px] text-[#FF5500]/50 tracking-tighter pointer-events-none">
        +
      </span>

      {/* Center Showcase Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-xs">
        {/* Subtle Icon with ambient glow */}
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 border transition-colors ${
            isAuraActive
              ? 'bg-zinc-900/90 border-zinc-800 shadow-[0_0_20px_rgba(255,85,0,0.1)] text-[#FF5500]'
              : 'bg-white border-zinc-200 shadow-sm text-[#FF5500]'
          }`}
        >
          <Layers className="w-5 h-5 animate-pulse" />
        </div>

        {/* Status Heading */}
        <span className="font-mono text-[11px] sm:text-xs font-bold tracking-widest uppercase text-[#FF5500]">
          PREVIEW COMING SOON
        </span>

        {/* Project Title / Context if available */}
        {title && variant === 'detail' && (
          <p
            className={`font-heading font-bold text-sm sm:text-base mt-1 line-clamp-1 ${
              isAuraActive ? 'text-white' : 'text-zinc-900'
            }`}
          >
            {title}
          </p>
        )}

        <p
          className={`font-sans text-[11px] mt-1.5 leading-relaxed max-w-[220px] ${
            isAuraActive ? 'text-zinc-400' : 'text-zinc-500'
          }`}
        >
          {category ? `${category} · UI In Progress` : 'Live UI showcase in development'}
        </p>
      </div>
    </div>
  );
};

export default ProjectPreviewPlaceholder;
