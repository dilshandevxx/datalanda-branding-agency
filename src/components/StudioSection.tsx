"use client";

import Image from 'next/image';
import styles from './StudioSection.module.css';
import { siteConfig } from '../data/siteConfig';

export default function StudioSection() {
  return (
    <section id="studio" className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.imageGrid}>
          <div className={styles.colLeft}>
            {siteConfig.images.studio.image1 && (
              <div className={`${styles.imageWrapper} ${styles.imgTall}`}>
                <Image src={siteConfig.images.studio.image1} alt="Studio 1" fill sizes="(max-width: 768px) 50vw, 25vw" style={{ objectFit: 'cover' }} />
              </div>
            )}
            {siteConfig.images.studio.image3 && (
              <div className={`${styles.imageWrapper} ${styles.imgSquare}`}>
                <Image src={siteConfig.images.studio.image3} alt="Studio 3" fill sizes="(max-width: 768px) 50vw, 25vw" style={{ objectFit: 'cover' }} />
              </div>
            )}
          </div>
          <div className={styles.colRight}>
            {siteConfig.images.studio.image2 && (
              <div className={`${styles.imageWrapper} ${styles.imgSquare}`}>
                <Image src={siteConfig.images.studio.image2} alt="Studio 2" fill sizes="(max-width: 768px) 50vw, 25vw" style={{ objectFit: 'cover' }} />
              </div>
            )}
            {siteConfig.images.studio.image4 && (
              <div className={`${styles.imageWrapper} ${styles.imgTall}`}>
                <Image src={siteConfig.images.studio.image4} alt="Studio 4" fill sizes="(max-width: 768px) 50vw, 25vw" style={{ objectFit: 'cover' }} />
              </div>
            )}
          </div>
        </div>

        <div className={styles.content}>
          <span className={styles.subtitle}>ABOUT STUDIO</span>
          <h2 className={styles.headline}>BUILT BY CREATIVES<br/>WHO GET IT</h2>
          <p className={styles.paragraph}>
            We merge cinematic storytelling, deep strategic research, and cutting-edge engineering to build brands that leave a legacy. Our multidisciplinary approach means we don't just design—we invent.
          </p>
          <div className={styles.linkWrapper}>
            <button className={styles.readMoreBtn}>READ MORE ABOUT US</button>
          </div>
        </div>

      </div>
    </section>
  );
}
