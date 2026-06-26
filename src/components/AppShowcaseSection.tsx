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

  // Phase 1: 0.0 - 0.2 (Dark Theme Pause)
  // Phase 2: 0.2 - 0.3 (Theme Transition: Dark to Light)
  const bgColor = useTransform(scrollYProgress, [0.2, 0.3], ["#050505", "#ffffff"]);
  const textColor = useTransform(scrollYProgress, [0.2, 0.3], ["#ffffff", "#000000"]);
  const descColor = useTransform(scrollYProgress, [0.2, 0.3], ["rgba(255, 255, 255, 0.7)", "rgba(0, 0, 0, 0.7)"]);
  const borderColor = useTransform(scrollYProgress, [0.2, 0.3], ["rgba(255, 255, 255, 0.2)", "rgba(0, 0, 0, 0.2)"]);
  const labelBgColor = useTransform(scrollYProgress, [0.2, 0.3], ["rgba(255, 255, 255, 0.03)", "rgba(0, 0, 0, 0.03)"]);

  // Phase 3: 0.3 - 0.5 (Light Theme Pause)
  
  // Phase 4: 0.5 - 0.65 (Text fades out and moves up)
  const textOpacity = useTransform(scrollYProgress, [0.5, 0.65], [1, 0]);
  const textY = useTransform(scrollYProgress, [0.5, 0.65], ["-50%", "-80%"]);

  // Phase 5: 0.65 - 0.85 (Video expands to full screen)
  const videoLeft = useTransform(scrollYProgress, [0.65, 0.85], ["75%", "50%"]);
  const videoWidth = useTransform(scrollYProgress, [0.65, 0.85], ["40vw", "100vw"]);
  const videoHeight = useTransform(scrollYProgress, [0.65, 0.85], ["80vh", "100vh"]);
  const videoBorderRadius = useTransform(scrollYProgress, [0.65, 0.85], ["16px", "0px"]);

  // Phase 6: 0.85 - 1.0 (Full screen pause)

  return (
    <section ref={containerRef} className={styles.scrollTrack}>
      <div className={styles.stickyContainer}>
        {/* Animated Background */}
        <motion.div 
          className={styles.backgroundLayer} 
          style={{ backgroundColor: bgColor }} 
        />
        
        <div className={styles.contentWrapper}>
          <motion.div 
            className={styles.textContent}
            style={{ 
              opacity: textOpacity, 
              y: textY,
              color: textColor
            }}
          >
            <motion.div 
              className={styles.label}
              style={{ borderColor: borderColor, backgroundColor: labelBgColor }}
            >
              Featured Product
            </motion.div>
            
            <h2 className={styles.title}>
              DIGITAL ECOSYSTEMS.
            </h2>
            
            <motion.p 
              className={styles.description}
              style={{ color: descColor }}
            >
              We don't just design screens; we architect seamless digital product ecosystems that drive user engagement and business growth.
            </motion.p>
            
            <motion.button 
              className={styles.button}
              style={{ color: textColor, borderColor: borderColor }}
            >
              View Case Study
            </motion.button>
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
            <SmartVideo src="https://res.cloudinary.com/dqfcsavwj/video/upload/f_auto,q_auto/v1782405943/scrolling_mshca0.webm" className={styles.video} />
            <div className={styles.videoOverlay}></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
