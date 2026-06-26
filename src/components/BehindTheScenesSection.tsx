"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SmartVideo from "./SmartVideo";
import styles from "./BehindTheScenesSection.module.css";

export default function BehindTheScenesSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track the scroll progress of the entire 300vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"], // Start animating when it hits the top, finish when it leaves the bottom
  });

  // Animation Phase 1: Text Mask scales up to reveal video (0% to 40% scroll)
  const maskScale = useTransform(scrollYProgress, [0, 0.4], [1, 150]);
  
  // Animation Phase 2: Text fades in and moves up (40% to 60% scroll)
  const textOpacity = useTransform(scrollYProgress, [0.4, 0.5, 0.8, 1], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0.4, 0.5], [50, 0]);

  // Subtle background overlay darkening as the video expands
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 0.4]);

  return (
    <section ref={containerRef} className={styles.section}>
      {/* Sticky container stays on screen while user scrolls through the 300vh */}
      <div className={styles.stickyContainer}>
        
        {/* The Video in the background, always full screen */}
        <div className={styles.videoWrapper}>
          <SmartVideo src="https://res.cloudinary.com/dqfcsavwj/video/upload/f_auto,q_auto/v1782389595/typing_ylyekm.webm" className={styles.video} />
          <motion.div 
            className={styles.darkOverlay}
            style={{ opacity: overlayOpacity }}
          />
        </div>

        {/* The Mask Overlay that zooms in */}
        <div className={styles.maskOverlay}>
          <motion.div 
            className={styles.maskTextContainer}
            style={{ scale: maskScale }}
          >
            <h1 className={styles.maskText}>STUDIO</h1>
          </motion.div>
        </div>

        {/* The Text that appears after the video is full screen */}
        <div className={styles.contentWrapper}>
          <motion.h2 
            className={styles.text}
            style={{ 
              opacity: textOpacity,
              y: textY 
            }}
          >
            <span className={styles.accent}>Inside the Studio</span>
            WE DON'T JUST WRITE CODE.<br />
            WE CRAFT DIGITAL EXPERIENCES.
          </motion.h2>
        </div>

      </div>
    </section>
  );
}
