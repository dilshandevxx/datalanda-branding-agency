"use client";

import Image from 'next/image';
import styles from './SpotlightSection.module.css';

export default function SpotlightSection() {
  return (
    <section className={styles.section}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className={styles.backgroundVideo}
      >
        <source src="/walking-people.webm" type="video/webm" />
      </video>
      <div className={styles.overlay}></div>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.quoteIcon}>"</div>
          <h2 className={styles.quote}>
            Designed for Human Connection.
          </h2>
        </div>
      </div>
    </section>
  );
}
