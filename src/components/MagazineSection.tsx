"use client";

import Image from 'next/image';
import styles from './MagazineSection.module.css';

export default function MagazineSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Left Column: Portrait Image */}
        <div className={styles.imageLeftWrapper}>
          <div className={styles.imageLeft}>
            <Image 
              src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=1974&auto=format&fit=crop"
              alt="Magazine cover"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Center Column: Text */}
        <div className={styles.textCenter}>
          <h2 className={styles.title}>
            THE<br/>
            SECOND<br/>
            ISSUE
          </h2>
          <p className={styles.subtitle}>
            Issue No.02 is now available.
          </p>
          <a href="#" className={styles.link}>
            (Order)
          </a>
        </div>

        {/* Right Column: Landscape/Square Image */}
        <div className={styles.imageRightWrapper}>
          <div className={styles.imageRight}>
            <Image 
              src="https://images.unsplash.com/photo-1544633785-300e8bc1ff35?q=80&w=2004&auto=format&fit=crop"
              alt="Magazine inside spread"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
