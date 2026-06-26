"use client";

import { useRef } from 'react';
import Image from 'next/image';
import styles from './StudioSection.module.css';

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
          <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" alt="Studio Graphic" fill sizes="(max-width: 992px) 80vw, 33vw" style={{ objectFit: 'cover' }} />
        </div>
        <div className={styles.imageWrapper}>
          <Image src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" alt="Studio Interior" fill sizes="(max-width: 992px) 80vw, 33vw" style={{ objectFit: 'cover' }} />
        </div>
        <div className={styles.imageWrapper}>
          <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="Photo Studio" fill sizes="(max-width: 992px) 80vw, 33vw" style={{ objectFit: 'cover' }} />
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
            Great design has no expiration date. It lasts for years and inspires instantly. Our creative freedom enables us to spend more time on fewer projects, ensuring unparalleled attention to detail.
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
            We focus on the intellectual, functional, and artistic aspects of business. Looking to create profound ideas, timeless design, and beauty in everyday life.
          </p>
        </div>
      </div>
      </div>
    </section>
  );
}
