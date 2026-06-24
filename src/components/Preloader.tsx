'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Preloader() {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Keep the preloader visible for just a moment to let the columns animate in
    const timer = setTimeout(() => {
      setIsComplete(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const columns = 5;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 9999,
        display: 'flex',
        pointerEvents: isComplete ? 'none' : 'auto',
      }}
    >
      {Array.from({ length: columns }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: 0 }}
          animate={isComplete ? { y: '-100vh' } : { y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1], // Custom brutalist ease
            delay: i * 0.08, // Staggered delay for each column
          }}
          style={{
            flex: 1,
            height: '100vh',
            backgroundColor: 'var(--foreground)', // Contrast color for the curtain
            borderRight: i !== columns - 1 ? '1px solid rgba(0,0,0,0.1)' : 'none',
          }}
        />
      ))}
    </div>
  );
}
