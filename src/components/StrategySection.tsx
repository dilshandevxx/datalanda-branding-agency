"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './StrategySection.module.css';

export default function StrategySection() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const titleX = useTransform(scrollYProgress, [0, 0.4], ["30vw", "0vw"]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  
  const bottomX = useTransform(scrollYProgress, [0.2, 0.6], ["30vw", "0vw"]);
  const bottomOpacity = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);

  return (
    <section ref={containerRef} className={styles.scrollSection}>
      <div className={styles.stickyContainer}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className={styles.backgroundVideo}
        >
          <source src="/falling-cubes.webm" type="video/webm" />
          <source src="/falling-cubes.mp4" type="video/mp4" />
        </video>
        <div className={styles.overlay}></div>
        
        <div className={styles.content}>
          <div className={styles.topContainer}>
            <div className={styles.topMeta}>
              <div className={styles.metaBadge}>
                <span className={styles.dot}></span>
                <span>VOL. 01</span>
              </div>
              <span className={styles.metaTitle}>STRATEGY & EXECUTION</span>
            </div>
            
            <motion.h2 
              className={styles.title}
              style={{ x: titleX, opacity: titleOpacity }}
            >
              <span className={styles.titleLine}>We don't leave</span>
              <span className={styles.titleLine}>
                <em className={styles.titleItalic}>your brand</em> to chance.
              </span>
            </motion.h2>
          </div>
          
          <motion.div 
            className={styles.bottomBlock}
            style={{ x: bottomX, opacity: bottomOpacity }}
          >
            <div className={styles.descriptionBox}>
              <div className={styles.descriptionLine}></div>
              <p className={styles.description}>
                Data-driven strategy meets relentless creative execution. We build digital foundations designed to scale seamlessly.
              </p>
            </div>
            
            <button className={styles.exploreButton}>
              <span className={styles.exploreText}>Explore Methodology</span>
              <span className={styles.exploreIcon}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
