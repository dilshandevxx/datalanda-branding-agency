"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './VideoMaskCTA.module.css';

export default function VideoMaskCTA() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress through this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Scale the text massively as the user scrolls.
  // Starts at 1 and scales up to 150 (enough to fill most screens with a single letter stroke)
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 150]);
  
  // Fade out the black overlay entirely at the very end to reveal the pure video underneath
  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  // Fade in the CTA button at the end
  const ctaOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);

  return (
    <section ref={containerRef} className={styles.section}>
      <div className={styles.stickyContainer}>
        
        {/* Background Video */}
        <div className={styles.videoWrapper}>
          <video 
            className={styles.video} 
            autoPlay 
            loop 
            muted 
            playsInline
            src="https://cdn.coverr.co/videos/coverr-abstract-neon-light-trails-2580/1080p.mp4" 
          />
        </div>

        {/* Text Mask Overlay (mix-blend-mode: multiply) */}
        <motion.div 
          className={styles.maskOverlay}
          style={{ opacity }}
        >
          <motion.div 
            className={styles.textContainer}
            style={{ scale }}
          >
            <h2 className={styles.title}>READY TO BUILD?</h2>
            <p className={styles.subtitle}>Your vision, engineered.</p>
          </motion.div>
        </motion.div>

        {/* CTA Content that appears after mask expands */}
        <motion.div 
          className={styles.ctaContent}
          style={{ opacity: ctaOpacity }}
        >
          <button className={styles.ctaButton}>
            Let's Start a Project
          </button>
        </motion.div>

      </div>
    </section>
  );
}
