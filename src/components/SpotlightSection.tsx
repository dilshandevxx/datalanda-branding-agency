"use client";

import { useRef } from 'react';
import { m, useScroll, useTransform } from "framer-motion";
import SmartVideo from "./SmartVideo";
import styles from "./SpotlightSection.module.css";
import { siteConfig } from "../data/siteConfig";

export default function SpotlightSection({ video }: { video?: string }) {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Keep scale at 1 for the first 30% of the scroll, then scale up massively
  const textScale = useTransform(scrollYProgress, [0, 0.3, 0.6], [1, 1, 60]);
  
  // Fade out the mask container to reveal the video smoothly before it gets pixelated
  const maskOpacity = useTransform(scrollYProgress, [0.45, 0.6], [1, 0]);
  
  // Fade in the final content once the video is fully revealed
  const finalOpacity = useTransform(scrollYProgress, [0.6, 0.75], [0, 1]);
  const finalY = useTransform(scrollYProgress, [0.6, 0.75], [40, 0]);

  return (
    <section ref={containerRef} className={styles.section}>
      <div className={styles.stickyContainer}>
        
        {/* Background Video */}
        <div className={styles.videoWrapper}>
          <SmartVideo src={video || siteConfig.videos.spotlight} className={styles.backgroundVideo} />
          <div className={styles.videoOverlay}></div>
        </div>

        {/* Text Mask (Multiply Blend Mode) */}
        <m.div className={styles.maskContainer} style={{ opacity: maskOpacity }}>
          <m.h2 className={styles.maskText} style={{ scale: textScale }}>
            ART OF<br/>LIVING
          </m.h2>
        </m.div>

        {/* Final Reveal Content */}
        <m.div 
          className={styles.finalContent} 
          style={{ opacity: finalOpacity, y: finalY }}
        >
          <div className={styles.lineDecoration}></div>
          <h3 className={styles.finalQuote}>Elevating the standard.</h3>
          <button className={styles.button}>
            Discover Our Approach
          </button>
        </m.div>

      </div>
    </section>
  );
}
