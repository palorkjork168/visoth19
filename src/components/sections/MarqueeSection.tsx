import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const row1Items = [
  'GHOST RIDER MODE', '///', 'REACT 19', '///', 'FULLSTACK ENGINE', '///',
  'TYPESCRIPT', '///', 'PENANCE STARE', '///', 'NODE.JS & EXPRESS', '///',
  'POSTGRESQL', '///', 'TAILWIND CSS', '///', 'VITE SPEED', '///',
];

const row2Items = [
  'UI/UX ALCHEMY', '///', 'GRAPHIC DESIGN', '///', 'LEVEL 99 DEV', '///',
  'REST APIS', '///', 'SEQUELIZE ORM', '///', 'HIGH IMPACT PERFORMANCE', '///',
  'PHNOM PENH KH', '///', 'WEB APPLICATIONS', '///',
];

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const repeated = [...items, ...items, ...items, ...items];
  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap w-max"
        animate={{ x: reverse ? ['0%', '25%'] : ['0%', '-25%'] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      >
        {repeated.map((item, i) => {
          const isSlash = item === '///';
          const isHighlight = item === 'GHOST RIDER MODE' || item === 'FULLSTACK ENGINE' || item === 'LEVEL 99 DEV';

          return (
            <span
              key={i}
              className={`select-none mx-3 flex items-center font-gamer text-xs sm:text-sm tracking-[0.2em] uppercase ${
                isSlash
                  ? 'text-[#FF5500]/40 font-mono'
                  : isHighlight
                  ? 'text-[#FF8800] font-black'
                  : 'text-white/60'
              }`}
            >
              {item}
            </span>
          );
        })}
      </motion.div>
    </div>
  );
}

export function MarqueeSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.section
      ref={containerRef}
      style={{ opacity }}
      className="bg-[#07070A] py-8 flex flex-col gap-3 overflow-hidden border-y border-white/10 relative"
    >
      {/* Background Subtle Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF5500]/5 via-transparent to-[#00D4FF]/5 pointer-events-none" />

      <MarqueeRow items={row1Items} />
      <MarqueeRow items={row2Items} reverse />
    </motion.section>
  );
}
