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
        <div className={styles.subtitle}>Methodology</div>
        <h2 className={styles.title}>
          We don't leave your brand to <span>chance.</span>
        </h2>
        <p className={styles.description}>
          Data-driven strategy meets relentless creative execution. We build digital foundations designed to scale.
        </p>
        <button className={styles.button}>
          View Our Process
        </button>
      </div>
    </section>
  );
}
