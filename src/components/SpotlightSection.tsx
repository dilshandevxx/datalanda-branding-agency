"use client";

import Image from 'next/image';
import styles from './SpotlightSection.module.css';

export default function SpotlightSection() {
  return (
    <section className={styles.section}>
      <div className={styles.background}></div>
      <div className={styles.overlay}></div>
      
      <div className={styles.content}>
        <div className={styles.quoteIcon}>"</div>
        <h2 className={styles.quote}>
          DataLands didn't just build our platform—they completely reimagined our digital presence. Working with them is the ultimate creative partnership.
        </h2>
        
        <div className={styles.authorBlock}>
          <div className={styles.avatarWrapper}>
            <Image 
              src="/studio_2.png" 
              alt="Elena Rostova" 
              fill 
              style={{ objectFit: 'cover' }} 
            />
          </div>
          <div className={styles.authorInfo}>
            <span className={styles.authorName}>Elena Rostova</span>
            <span className={styles.authorTitle}>Founder & CEO, Aura Skincare</span>
          </div>
          
          <button className={styles.playButton}>
            <span className={styles.playIcon}>▶</span> Watch Client Story
          </button>
        </div>
      </div>
    </section>
  );
}
