'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 2; // Random jumps
      });
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      animate={isComplete ? { y: '-100vh' } : { y: 0 }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'var(--background)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--foreground)',
      }}
    >
      <div style={{
        fontSize: 'clamp(5rem, 15vw, 15rem)',
        fontWeight: 500,
        fontFamily: 'var(--font-mono)',
        letterSpacing: '-0.05em',
        position: 'relative'
      }}>
        {progress}
        <span style={{ fontSize: 'clamp(2rem, 5vw, 5rem)', verticalAlign: 'top', position: 'absolute', top: '15%' }}>%</span>
      </div>
    </motion.div>
  );
}
