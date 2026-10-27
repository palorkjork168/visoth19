import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const isTouchDevice = useRef(false);

  useEffect(() => {
    isTouchDevice.current = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice.current) return;

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
          target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.closest('a') !== null ||
          target.closest('button') !== null ||
          target.closest('.cursor-pointer') !== null
      );
    };

    const onLeave = () => setIsVisible(false);
    const onEnter = () => setIsVisible(true);

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
    };
  }, [isVisible]);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      {/* Outer Tactical Crosshair Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border transition-colors duration-300"
        style={{
          translateX: '-50%',
          translateY: '-50%',
          borderColor: isPointer ? '#FF5500' : 'rgba(0, 212, 255, 0.5)',
          boxShadow: isPointer
            ? '0 0 15px rgba(255, 85, 0, 0.6), inset 0 0 8px rgba(255, 85, 0, 0.3)'
            : '0 0 10px rgba(0, 212, 255, 0.3)',
        }}
        animate={{
          x: pos.x,
          y: pos.y,
          opacity: isVisible ? 1 : 0,
          width: isPointer ? 48 : 32,
          height: isPointer ? 48 : 32,
          rotate: isPointer ? 45 : 0,
        }}
        transition={{ type: 'spring', stiffness: 260, damping: 25, mass: 0.4 }}
      />

      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full transition-colors duration-300"
        style={{
          translateX: '-50%',
          translateY: '-50%',
          backgroundColor: isPointer ? '#FF8800' : '#00D4FF',
          boxShadow: isPointer
            ? '0 0 12px #FF4500, 0 0 20px #FF8800'
            : '0 0 8px rgba(0, 212, 255, 0.9)',
        }}
        animate={{
          x: pos.x,
          y: pos.y,
          opacity: isVisible ? 1 : 0,
          width: isPointer ? 8 : 4,
          height: isPointer ? 8 : 4,
        }}
        transition={{ type: 'spring', stiffness: 600, damping: 32, mass: 0.15 }}
      />
    </>
  );
}
