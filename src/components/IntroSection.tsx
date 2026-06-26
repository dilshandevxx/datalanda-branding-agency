"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import styles from './IntroSection.module.css';

const textWords = [
  { word: "We", serif: false },
  { word: "are", serif: false },
  { word: "digital", serif: false },
  { word: "artisans.", serif: true },
  { word: "We", serif: false },
  { word: "blend", serif: false },
  { word: "visionary", serif: false },
  { word: "technology", serif: false },
  { word: "with", serif: false },
  { word: "timeless", serif: true },
  { word: "design", serif: true },
  { word: "to", serif: false },
  { word: "create", serif: false },
  { word: "experiences", serif: false },
  { word: "that", serif: false },
  { word: "elevate", serif: true },
  { word: "the", serif: false },
  { word: "human", serif: false },
  { word: "condition.", serif: false },
];

const Word = ({ children, progress, range, isSerif }: { children: React.ReactNode, progress: MotionValue<number>, range: [number, number], isSerif?: boolean }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span 
      className={isSerif ? styles.serifWord : ""}
      style={{ opacity, display: 'inline-block', marginRight: '0.25em' }}
    >
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



  return (
    <section className={styles.intro} ref={containerRef}>
      <div className={styles.container}>
        <div className={styles.labelWrapper}>
          <span className={styles.label}>Who We Are</span>
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.headline}>
            {textWords.map((item, i) => {
              const start = i / textWords.length;
              const end = start + (1 / textWords.length);
              return (
                <Word key={i} progress={scrollYProgress} range={[start, end]} isSerif={item.serif}>
                  {item.word}
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
