"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SmartVideo from './SmartVideo';
import styles from './AppShowcaseSection.module.css';

export default function AppShowcaseSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Text fades out early in the scroll (0 to 0.15)
  const textOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.15], [0, -30]);

  // Video scaling and positioning (starts after text starts fading, 0.1 to 0.6)
  const videoLeft = useTransform(scrollYProgress, [0.1, 0.6], ["75%", "50%"]);
  const videoWidth = useTransform(scrollYProgress, [0.1, 0.6], ["40vw", "100vw"]);
  const videoHeight = useTransform(scrollYProgress, [0.1, 0.6], ["80vh", "100vh"]);
  const videoBorderRadius = useTransform(scrollYProgress, [0.1, 0.3], ["16px", "0px"]);

  // Mobile transformations (since layout is stacked, animation logic is slightly different)
  // We'll use CSS media queries to override layout, but framer-motion inline styles take precedence.
  // We will handle mobile responsiveness by disabling these inline styles on mobile if needed,
  // or by providing mobile-specific transforms if we can detect it. 
  // However, for simplicity and cinematic effect, this center-scale approach works nicely on most devices 
  // if we tweak the start values. Let's keep it robust.

  return (
    <section ref={containerRef} className={styles.scrollTrack}>
      <div className={styles.stickyContainer}>
        {/* Dark theme background for this section */}
        <div className={styles.backgroundLayer}></div>
        
        <div className={styles.contentWrapper}>
          <motion.div 
            className={styles.textContent}
            style={{ opacity: textOpacity, y: textY }}
          >
            <div className={styles.label}>
              Featured Product
            </div>
            
            <h2 className={styles.title}>
              DIGITAL ECOSYSTEMS.
            </h2>
            
            <p className={styles.description}>
              We don't just design screens; we architect seamless digital product ecosystems that drive user engagement and business growth.
            </p>
            
            <button className={styles.button}>
              View Case Study
            </button>
          </motion.div>

          <motion.div 
            className={styles.videoWrapper}
            style={{ 
              left: videoLeft,
              width: videoWidth,
              height: videoHeight,
              borderRadius: videoBorderRadius,
              top: "50%",
              x: "-50%",
              y: "-50%"
            }}
          >
            {/* The user will provide a horizontal video later. The container will stretch it via object-fit: cover for now */}
            <SmartVideo src="https://res.cloudinary.com/dqfcsavwj/video/upload/f_auto,q_auto/v1782405943/scrolling_mshca0.webm" className={styles.video} />
            <div className={styles.videoOverlay}></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
