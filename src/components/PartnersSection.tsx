"use client";

import { useState } from 'react';
import styles from './PartnersSection.module.css';

const partners = [
  { name: "Adobe", color: "#FF0000" },
  { name: "Figma", color: "#F24E1E" },
  { name: "Stripe", color: "#635BFF" },
  { name: "Vercel", color: "#FFFFFF" },
  { name: "Apple", color: "#A2AAAD" },
  { name: "Spotify", color: "#1DB954" },
  { name: "Nike", color: "#FF6600" },
  { name: "Tesla", color: "#E82127" }
];

export default function PartnersSection() {
  const [activeColor, setActiveColor] = useState<string | null>(null);

  return (
    <section 
      className={styles.section} 
      style={{ '--glow-color': activeColor || 'transparent' } as React.CSSProperties}
    >
      <div className={styles.glowBackground}></div>
      
      <div className={styles.container}>
        {/* Infinite Marquee Layer */}
        <div className={styles.marqueeContainer}>
          <div className={styles.marqueeGroup}>
            {partners.map((partner, i) => (
              <div 
                key={i} 
                className={styles.partnerLogo}
                onMouseEnter={() => setActiveColor(partner.color)}
                onMouseLeave={() => setActiveColor(null)}
              >
                {partner.name}
              </div>
            ))}
          </div>
          {/* Duplicate for seamless looping */}
          <div className={styles.marqueeGroup} aria-hidden="true">
            {partners.map((partner, i) => (
              <div 
                key={`dup-${i}`} 
                className={styles.partnerLogo}
                onMouseEnter={() => setActiveColor(partner.color)}
                onMouseLeave={() => setActiveColor(null)}
              >
                {partner.name}
              </div>
            ))}
          </div>
        </div>
        
        {/* Text Content Layer */}
        <div className={styles.content}>
          <h2 className={styles.heading}>Partners & Approach</h2>
          <div className={styles.textWrapper}>
            <p className={styles.text}>
              <span className={styles.highlight}>Big multinational companies or small local brands.</span>
              Partner approach with one universal goal – to create<br />
              authentic, functional, and beautiful design.
            </p>
            <div className={styles.ctaWrapper}>
              <span className={styles.ctaText}>Let&apos;s talk</span>
              <button className={styles.ctaButton} aria-label="Let's talk">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
