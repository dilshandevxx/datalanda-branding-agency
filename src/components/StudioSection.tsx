"use client";

import { useRef } from 'react';
import Image from 'next/image';
import styles from './StudioSection.module.css';
import { siteConfig } from '../data/siteConfig';

export default function StudioSection() {
  const galleryRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (galleryRef.current) {
      const scrollAmount = galleryRef.current.clientWidth * 0.5;
      galleryRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="studio" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.gallery} ref={galleryRef}>
        <div className={styles.imageWrapper}>
          <Image src={siteConfig.images.studio.image1} alt="Studio Graphic" fill sizes="(max-width: 992px) 80vw, 33vw" style={{ objectFit: 'cover' }} />
        </div>
        <div className={styles.imageWrapper}>
          <Image src={siteConfig.images.studio.image2} alt="Studio Interior" fill sizes="(max-width: 992px) 80vw, 33vw" style={{ objectFit: 'cover' }} />
        </div>
        <div className={styles.imageWrapper}>
          <Image src={siteConfig.images.studio.image3} alt="Photo Studio" fill sizes="(max-width: 992px) 80vw, 33vw" style={{ objectFit: 'cover' }} />
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.controls}>
          <button className={styles.arrowBtn} onClick={() => scroll('left')} aria-label="Scroll left">
            ←
          </button>
          <button className={styles.arrowBtn} onClick={() => scroll('right')} aria-label="Scroll right">
            →
          </button>
        </div>

        <div className={styles.colMiddle}>
          <p className={styles.paragraph}>
            <span className={styles.subHeadline}>We merge cinematic storytelling, deep strategic research, and cutting-edge engineering to build brands that leave a legacy.</span><br/><br/>
            Our multidisciplinary approach means we don't just design—we invent.
          </p>
          
          <div className={styles.linkWrapper}>
            <div className={styles.linkBtn}>
              <span>About Studio</span>
              <div className={styles.linkIcon}>→</div>
            </div>
          </div>
        </div>

        <div className={styles.colRight}>
          <p className={styles.paragraph}>
            From the first frame to the final line of code, our studio is built on an obsession with craft. We are thinkers, creators, and technologists redefining digital experiences.
          </p>
        </div>
      </div>
      </div>
    </section>
  );
}
