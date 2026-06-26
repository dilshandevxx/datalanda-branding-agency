"use client";

import { useRef } from 'react';
import { m, useScroll, useTransform, MotionValue } from 'framer-motion';
import styles from './IntroSection.module.css';

const text = "We are a digital engineering collective. We blend cutting-edge technology with world-class design to build products that define the future.";

const Word = ({ children, progress, range }: { children: React.ReactNode, progress: MotionValue<number>, range: [number, number] }) => {
  const color = useTransform(progress, range, ["rgba(255,255,255,0.15)", "rgba(255,255,255,1)"]);
  return (
    <m.span 
      style={{ color, display: 'inline-block', marginRight: '0.25em' }}
    >
      {children}
    </m.span>
  );
};

export default function IntroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const words = text.split(" ");



  return (
    <section className={styles.scrollTrack} ref={containerRef}>
      <div className={styles.stickyContainer}>
        <div className={styles.intro}>
          <div className={styles.container}>
        <div className={styles.labelWrapper}>
          <span className={styles.label}>Who We Are</span>
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.headline}>
            {words.map((word, i) => {
              const start = i / words.length;
              const end = start + (1 / words.length);
              return (
                <Word key={i} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </h2>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>10+</span>
              <span className={styles.statLabel}>Years of Excellence</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>50+</span>
              <span className={styles.statLabel}>Global Partners</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>∞</span>
              <span className={styles.statLabel}>Lines of Code</span>
            </div>
          </div>
        </div>
        </div>
        </div>
      </div>
    </section>
  );
}
