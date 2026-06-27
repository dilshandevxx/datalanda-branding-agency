"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './StudioSection.module.css';
import { siteConfig } from '../data/siteConfig';

export default function StudioSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Extract all available images into an array
  const images = [
    siteConfig.images.studio.image1,
    siteConfig.images.studio.image2,
    siteConfig.images.studio.image3,
    siteConfig.images.studio.image4
  ].filter(Boolean); // Filter out empty strings/falsy values

  useEffect(() => {
    if (images.length <= 1) return;
    
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 4500); // Change image every 4.5 seconds
    
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="studio" className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.imageSlideshow}>
          {images.map((src, index) => (
            <div 
              key={index} 
              className={`${styles.imageWrapper} ${index === activeIndex ? styles.active : ''}`}
            >
              <Image 
                src={src as string} 
                alt={`Studio ${index + 1}`} 
                fill 
                sizes="(max-width: 992px) 100vw, 50vw" 
                style={{ objectFit: 'cover' }}
                priority={index === 0}
              />
            </div>
          ))}
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
