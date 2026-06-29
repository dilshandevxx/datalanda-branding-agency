"use client";

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './StudioSection.module.css';
import { siteConfig } from '../data/siteConfig';

interface StudioSectionProps {
  image1?: string;
  image2?: string;
  image3?: string;
  image4?: string;
}

export default function StudioSection({ image1, image2, image3, image4 }: StudioSectionProps = {}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Extract all available images into an array
  const images = [
    image1 || siteConfig.images.studio.image1,
    image2 || siteConfig.images.studio.image2,
    image3 || siteConfig.images.studio.image3,
    image4 || siteConfig.images.studio.image4,
    // Add one more fallback to ensure we have enough images for a carousel
    "https://res.cloudinary.com/dqfcsavwj/image/upload/v1782529011/pexels-irene-constantino-2152173979-37682380_wjpwwb.webp"
  ].filter(Boolean);

  const scrollLeft = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.children[0]?.clientWidth || 300;
      scrollRef.current.scrollBy({ left: -(cardWidth + 24), behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.children[0]?.clientWidth || 300;
      scrollRef.current.scrollBy({ left: cardWidth + 24, behavior: 'smooth' });
    }
  };

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        
        // If we've reached the end of the scroll container
        if (Math.ceil(scrollLeft + clientWidth) >= scrollWidth - 10) {
          // Scroll back to the beginning
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Otherwise, scroll to the next card
          const cardWidth = scrollRef.current.children[0]?.clientWidth || 300;
          scrollRef.current.scrollBy({ left: cardWidth + 24, behavior: 'smooth' });
        }
      }
    }, 3500); // Change image every 3.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="studio" className={styles.section}>
      <div className={styles.container}>
        
        {/* Top: Image Carousel */}
        <div className={styles.carouselContainer} ref={scrollRef}>
          {images.map((src, index) => (
            <div key={index} className={styles.card}>
              <Image 
                src={src as string} 
                alt={`Studio ${index + 1}`} 
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                style={{ objectFit: 'cover' }}
                priority={index < 3}
              />
            </div>
          ))}
        </div>

        {/* Bottom: 3-Column Info Area */}
        <div className={styles.bottomArea}>
          
          {/* Column 1: Arrows */}
          <div className={styles.navCol}>
            <button className={styles.navBtn} onClick={scrollLeft} aria-label="Previous image">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>
            <button className={styles.navBtn} onClick={scrollRight} aria-label="Next image">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>

          {/* Column 2: Headline & Link */}
          <div className={styles.headlineCol}>
            <h2 className={styles.headline}>
              BUILT BY CREATIVES<br/>WHO GET IT
            </h2>
            
            <a href="#about" className={styles.aboutLink}>
              About Studio 
              <span className={styles.linkIcon}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </a>
          </div>

          {/* Column 3: Paragraph */}
          <div className={styles.textCol}>
            <p className={styles.paragraph}>
              We merge cinematic storytelling, deep strategic research, and cutting-edge engineering to build brands that leave a legacy. Our multidisciplinary approach means we don't just design—we invent.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
