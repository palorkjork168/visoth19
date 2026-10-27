import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { cn } from '../../lib/utils';

export function AnimatedText({ text, className }: { text: string; className?: string }) {
  const element = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 80%", "start 20%"]
  });

  const words = text.split(" ");
  
  return (
    <p ref={element} className={cn("flex flex-wrap justify-center", className)}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

const Word = ({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) => {
  const characters = children.split("");
  const amount = range[1] - range[0];
  const step = amount / children.length;

  return (
    <span className="mr-[0.2em] mt-1 inline-block">
      {characters.map((char, i) => {
        const start = range[0] + (step * i);
        const end = range[0] + (step * (i + 1));
        return (
          <Char key={i} progress={progress} range={[start, end]}>
            {char}
          </Char>
        );
      })}
    </span>
  );
};

const Char = ({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.1, 1]);
  return (
    <motion.span style={{ opacity }}>
      {children}
    </motion.span>
  );
};
