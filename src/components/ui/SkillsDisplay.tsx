// ─── Import User-Provided Logos from src/assets/skillLogo ───────────
import reactLogo from '../../assets/skillLogo/react-logo-png_seeklogo-273845-Photoroom.png';
import tsLogo from '../../assets/skillLogo/typescript.webp';
import jsLogo from '../../assets/skillLogo/JavaScript-logo.png';
import nodeLogo from '../../assets/skillLogo/nodeJS.png';
import expressLogo from '../../assets/skillLogo/expressJS.png';
import tailwindLogo from '../../assets/skillLogo/tailwind-css-logo-png_seeklogo-653229-Photoroom.png';
import viteLogo from '../../assets/skillLogo/vite-logo.png';
import postgresLogo from '../../assets/skillLogo/postgresql.png';
import mysqlLogo from '../../assets/skillLogo/mysql-logo-png_seeklogo-231538.png';
import oracleLogo from '../../assets/skillLogo/oracle.png';
import javaLogo from '../../assets/skillLogo/java.png';
import pythonLogo from '../../assets/skillLogo/python-logo-Photoroom.png';

import gitLogo from '../../assets/skillLogo/git-logo-.png';
import githubLogo from '../../assets/skillLogo/github.png';
import postmanLogo from '../../assets/skillLogo/postman.png';
import figmaLogo from '../../assets/skillLogo/figma.png';
import psLogo from '../../assets/skillLogo/ps.png';
import aiLogo from '../../assets/skillLogo/ai.png';

export interface TechItem {
  name: string;
  image: string;
  color: string;
  invertOnDark?: boolean;
}

// ─── 1. CORE TECHNOLOGIES & DATABASES ───────────────────────────────
const coreTechnologies: TechItem[] = [
  { name: 'React', image: reactLogo, color: '#00D8FF' },
  { name: 'TypeScript', image: tsLogo, color: '#3178C6' },
  { name: 'JavaScript', image: jsLogo, color: '#F7DF1E' },
  { name: 'Node.js', image: nodeLogo, color: '#339933' },
  { name: 'Express.js', image: expressLogo, color: '#FFFFFF', invertOnDark: true },
  { name: 'Tailwind CSS', image: tailwindLogo, color: '#06B6D4' },
  { name: 'Vite', image: viteLogo, color: '#BD34FE' },
  { name: 'PostgreSQL', image: postgresLogo, color: '#336791' },
  { name: 'MySQL', image: mysqlLogo, color: '#00758F' },
  { name: 'Oracle', image: oracleLogo, color: '#F80000' },
  { name: 'Java', image: javaLogo, color: '#E76F00' },
  { name: 'Python', image: pythonLogo, color: '#3776AB' },
];

// ─── 2. TOOLS, WORKFLOW & DESIGN ────────────────────────────────────
const toolsAndDesign: TechItem[] = [
  { name: 'Git', image: gitLogo, color: '#F05032' },
  { name: 'GitHub', image: githubLogo, color: '#FFFFFF' },
  { name: 'Postman', image: postmanLogo, color: '#FF6C37' },
  { name: 'Figma', image: figmaLogo, color: '#A259FF' },
  { name: 'Photoshop', image: psLogo, color: '#31A8FF' },
  { name: 'Illustrator', image: aiLogo, color: '#FF9A00' },
];

interface SkillsDisplayProps {
  isAuraActive?: boolean;
}

export function SkillsDisplay({ isAuraActive = false }: SkillsDisplayProps) {
  return (
    <div className="w-full flex flex-col items-center select-none">
      {/* ─── ROW 1: CORE TECHNOLOGIES, FRAMEWORKS & DATABASES (Balanced 6x2 Grid) ─── */}
      <div className="w-full max-w-4xl mx-auto px-4 mb-20">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-y-10 gap-x-6 sm:gap-x-8 justify-items-center">
          {coreTechnologies.map((skill) => (
            <div
              key={skill.name}
              className="group flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-2 cursor-pointer w-24"
            >
              {/* Logo with Soft Glow Bloom */}
              <div className="relative mb-2.5 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 transition-transform duration-300 group-hover:scale-115">
                <div
                  className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none"
                  style={{ backgroundColor: skill.color }}
                />
                <img
                  src={skill.image}
                  alt={skill.name}
                  className={`w-11 h-11 sm:w-12 sm:h-12 object-contain relative z-10 transition-all duration-300 drop-shadow-sm ${
                    skill.invertOnDark && isAuraActive ? 'brightness-0 invert' : ''
                  }`}
                  loading="lazy"
                />
              </div>

              {/* Skill Name directly below */}
              <span
                className={`text-xs sm:text-[13px] font-sans font-medium tracking-wide transition-colors duration-200 text-center ${
                  isAuraActive
                    ? 'text-zinc-400 group-hover:text-white'
                    : 'text-zinc-600 group-hover:text-black font-semibold'
                }`}
              >
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ─── CENTER HEADER: TOOLS & DESIGN ─── */}
      <div className="text-center mb-10 px-4">
        <h3
          className={`font-sans font-black text-2xl sm:text-4xl tracking-tight mb-2 ${
            isAuraActive ? 'text-white' : 'text-zinc-900'
          }`}
        >
          Tools
        </h3>
        <p
          className={`text-xs sm:text-sm font-sans tracking-wide ${
            isAuraActive ? 'text-zinc-400' : 'text-zinc-500'
          }`}
        >
          Here are some of tools I&apos;ve been working with
        </p>
      </div>

      {/* ─── ROW 2: TOOLS & DESIGN (Balanced 6x1 Grid) ─── */}
      <div className="w-full max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-y-10 gap-x-6 sm:gap-x-8 justify-items-center">
          {toolsAndDesign.map((tool) => (
            <div
              key={tool.name}
              className="group flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-2 cursor-pointer w-24"
            >
              {/* Logo with Soft Glow Bloom */}
              <div className="relative mb-2.5 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 transition-transform duration-300 group-hover:scale-115">
                <div
                  className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none"
                  style={{ backgroundColor: tool.color }}
                />
                <img
                  src={tool.image}
                  alt={tool.name}
                  className="w-11 h-11 sm:w-12 sm:h-12 object-contain relative z-10 transition-all duration-300 drop-shadow-sm"
                  loading="lazy"
                />
              </div>

              {/* Tool Name directly below */}
              <span
                className={`text-xs sm:text-[13px] font-sans font-medium tracking-wide transition-colors duration-200 text-center ${
                  isAuraActive
                    ? 'text-zinc-400 group-hover:text-white'
                    : 'text-zinc-600 group-hover:text-black font-semibold'
                }`}
              >
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillsDisplay;
