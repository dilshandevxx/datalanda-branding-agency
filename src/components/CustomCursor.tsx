'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[class*="projectCard"]') ||
        target.closest('[class*="item"]')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      animate={{
        x: mousePosition.x - (isHovered ? 40 : 10),
        y: mousePosition.y - (isHovered ? 40 : 10),
        width: isHovered ? 80 : 20,
        height: isHovered ? 80 : 20,
      }}
      transition={{ type: 'spring', damping: 25, stiffness: 300, mass: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        borderRadius: '50%',
        backgroundColor: 'var(--foreground)',
        mixBlendMode: 'difference',
        pointerEvents: 'none',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {isHovered && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          style={{
            color: 'var(--background)',
            fontSize: '10px',
            fontWeight: 600,
            letterSpacing: '0.1em',
            mixBlendMode: 'normal'
          }}
        >
          EXPLORE
        </motion.span>
      )}
    </motion.div>
  );
}
