"use client";

import styles from './StrategySection.module.css';

export default function StrategySection() {
  return (
    <section className={styles.section}>
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
        <div className={styles.topMeta}>
          <span className={styles.metaText}>VOL. 01</span>
          <span className={styles.metaLine}></span>
          <span className={styles.metaText}>STRATEGY & EXECUTION</span>
        </div>
        
        <h2 className={styles.title}>
          We don't leave your brand to chance.
        </h2>
        
        <div className={styles.bottomBlock}>
          <p className={styles.description}>
            Data-driven strategy meets relentless creative execution. We build digital foundations designed to scale seamlessly.
          </p>
          <button className={styles.button}>
            Explore Methodology <span className={styles.arrow}>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
