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
      
      <div className={styles.content}>
        <div className={styles.quoteIcon}>"</div>
        <h2 className={styles.quote}>
          They deeply understand how people move, think, and interact. Working with DataLands didn't just give us a website—it gave us a digital destination.
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
