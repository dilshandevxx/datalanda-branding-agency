"use client";

import { useState, useRef, MouseEvent } from 'react';
import styles from './StrategySection.module.css';

export default function StrategySection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <section 
      className={styles.section}
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* The solid black foreground with white text */}
      <div className={styles.foreground}>
        <div className={styles.content}>
          <div className={styles.subtitle}>Methodology</div>
          <h2 className={styles.title}>
            We don't leave your brand to <span>chance.</span>
          </h2>
          <p className={styles.description}>
            Hover to reveal. Data-driven strategy meets relentless creative execution. We build digital foundations designed to scale.
          </p>
        </div>
      </div>

      {/* The masked video container */}
      <div 
        className={styles.videoMaskContainer}
        style={{
          WebkitMaskImage: isHovered 
            ? `radial-gradient(circle 250px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 100%)` 
            : 'radial-gradient(circle 0px at 50% 50%, black 0%, transparent 100%)',
          maskImage: isHovered 
            ? `radial-gradient(circle 250px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 100%)` 
            : 'radial-gradient(circle 0px at 50% 50%, black 0%, transparent 100%)',
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className={styles.backgroundVideo}
        >
          <source src="/falling-cubes.webm" type="video/webm" />
          <source src="/falling-cubes.mp4" type="video/mp4" />
        </video>
        
        {/* We duplicate the text inside the mask so it acts as an "x-ray" overlay if desired, 
            or just let the video shine through the black. 
            For the best effect, let's have the text be black inside the flashlight so it contrasts the video! */}
        <div className={styles.maskedContent}>
          <div className={styles.subtitleDark}>Methodology</div>
          <h2 className={styles.titleDark}>
            We don't leave your brand to <span className={styles.solidText}>chance.</span>
          </h2>
          <p className={styles.descriptionDark}>
            Hover to reveal. Data-driven strategy meets relentless creative execution. We build digital foundations designed to scale.
          </p>
        </div>
      </div>
    </section>
  );
}
