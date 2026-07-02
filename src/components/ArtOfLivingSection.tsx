"use client";
import React from 'react';
import styles from './ArtOfLivingSection.module.css';

export default function ArtOfLivingSection() {
  return (
    <section className={styles.section}>
      <div className={styles.background}>
        {/* Placeholder for video/image. In a real scenario, place an <video> or <Image> tag here */}
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.content}>
        <button className={styles.playButton} aria-label="Play video">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
        <h2 className={styles.title}>
          Art of living<br/>
          in every detail.
        </h2>
      </div>
    </section>
  );
}
