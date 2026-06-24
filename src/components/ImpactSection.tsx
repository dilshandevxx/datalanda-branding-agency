"use client";

import { useEffect, useState, useRef } from 'react';
import styles from './ImpactSection.module.css';

// Custom hook for the counting animation triggered on scroll
function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease out exponential for that premium slow-down effect at the end
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeOut * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  return { count, ref };
}

function StatCard({ endValue, prefix = "", suffix = "", label }: any) {
  const { count, ref } = useCountUp(endValue);
  
  return (
    <div ref={ref} className={styles.statCard}>
      <div className={styles.glowAura}></div>
      <h2 className={styles.number}>
        <span className={styles.affix}>{prefix}</span>
        {count}
        <span className={styles.affix}>{suffix}</span>
      </h2>
      <p className={styles.label}>{label}</p>
    </div>
  );
}

const stats = [
  { endValue: 50, suffix: "+", label: "Awwwards Won" },
  { endValue: 120, prefix: "$", suffix: "M", label: "Client Revenue" },
  { endValue: 100, suffix: "%", label: "Creative Freedom" }
];

export default function ImpactSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.dot}></div>
          <span className={styles.subtitle}>Our Impact</span>
        </div>
        
        <div className={styles.grid}>
          {stats.map((stat, i) => (
            <div key={i} className={styles.statWrapper}>
              <StatCard {...stat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
