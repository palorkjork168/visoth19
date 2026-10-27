import { ReactNode, useRef, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

interface MagnetProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export function Magnet({ children, className = '', strength = 30 }: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const x = useTransform(mouseX, [-100, 100], [-strength, strength]);
  const y = useTransform(mouseY, [-100, 100], [-strength, strength]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
      style={{ x, y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}
