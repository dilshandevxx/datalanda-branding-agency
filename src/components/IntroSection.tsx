"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import styles from './IntroSection.module.css';

const text = "We are a digital engineering collective. We blend cutting-edge technology with world-class design to build products that define the future.";

const Word = ({ children, progress, range }: { children: React.ReactNode, progress: MotionValue<number>, range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity, display: 'inline-block', marginRight: '0.25em' }}>
      {children}
    </motion.span>
  );
};

export default function IntroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 50%"]
  });

  const words = text.split(" ");

  return (
    <section className={styles.intro} ref={containerRef}>
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
    </section>
  );
}
