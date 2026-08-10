"use client";

import Image from 'next/image';
import styles from './StorySection.module.css';

export default function StorySection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Left Masonry Image Grid */}
        <div className={styles.imageGrid}>
          <div className={styles.col}>
            <div className={`${styles.imageWrapper} ${styles.tall}`}>
              <Image 
                src="/blog/blog-image-6.png" 
                alt="Brand Identity" 
                fill 
                className={styles.image} 
              />
            </div>
            <div className={`${styles.imageWrapper} ${styles.short}`}>
              <Image 
                src="/blog/blog-image-2.png" 
                alt="Creative Process" 
                fill 
                className={styles.image} 
              />
            </div>
          </div>
          <div className={`${styles.col} ${styles.shifted}`}>
            <div className={`${styles.imageWrapper} ${styles.short}`}>
              <Image 
                src="/blog/blog-image-3.png" 
                alt="Digital Ecosystem" 
                fill 
                className={styles.image} 
              />
            </div>
            <div className={`${styles.imageWrapper} ${styles.tall}`}>
              <Image 
                src="/blog/blog-image-4.png" 
                alt="Agency Culture" 
                fill 
                className={styles.image} 
              />
            </div>
          </div>
        </div>

        {/* Right Text Content */}
        <div className={styles.contentCol}>
          <p className={styles.label}>OUR STORY</p>
          <h2 className={styles.title}>BUILT BY CREATIVES<br/>WHO GET IT</h2>
          <p className={styles.desc}>
            For too long, brands have been forced to choose between ineffective cookie-cutter designs or confusing arrays of disconnected marketing efforts. We spent years refining our craft with leading industry experts, making the deliberate choice to prioritize creative integrity over shortcuts. We created what we couldn't find: an agency that actually understands your vision and delivers exactly what you need at your specific growth stage.
          </p>
          <button className={styles.button}>READ MORE ABOUT US</button>
        </div>

      </div>
    </section>
  );
}
