"use client";

import { useRef } from "react";
import { m, useScroll, useTransform } from "framer-motion";
import SmartVideo from "./SmartVideo";
import styles from "./BehindTheScenesSection.module.css";
import { siteConfig } from "../data/siteConfig";

export default function BehindTheScenesSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track the scroll progress of the entire 300vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"], // Start animating when it hits the top, finish when it leaves the bottom
  });

  // Animation Phase 1: Video scales down slightly for a cinematic reveal
  const videoScale = useTransform(scrollYProgress, [0, 0.4], [1.2, 1]);
  
  // Animation Phase 2: Text fades in and moves up (30% to 60% scroll)
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.5, 0.8, 1], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0.3, 0.5], [40, 0]);

  // Subtle background overlay darkening to make text readable
  const overlayOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0.2, 0.6]);

  return (
    <section ref={containerRef} className={styles.section}>
      {/* Sticky container stays on screen while user scrolls through the 300vh */}
      <div className={styles.stickyContainer}>
        
        {/* The Video in the background */}
        <m.div 
          className={styles.videoWrapper}
          style={{ scale: videoScale }}
        >
          <SmartVideo src={siteConfig.videos.behindTheScenes} className={styles.video} />
        </m.div>
        
        {/* Dark overlay for text contrast */}
        <m.div 
          className={styles.darkOverlay}
          style={{ opacity: overlayOpacity }}
        />
        <div className={styles.contentWrapper}>
          <m.h2 
            className={styles.text}
            style={{ 
              opacity: textOpacity,
              y: textY 
            }}
          >
            <span className={styles.accent}>Inside the Studio</span>
            WE DON'T JUST WRITE CODE.<br />
            WE CRAFT DIGITAL EXPERIENCES.
          </m.h2>
        </div>

      </div>
    </section>
  );
}
