"use client";

import { useRef } from 'react';
import { m, useScroll, useTransform } from 'framer-motion';
import SmartVideo from './SmartVideo';
import styles from './AppShowcaseSection.module.css';
import { siteConfig } from '../data/siteConfig';

export default function AppShowcaseSection({ video }: { video?: string }) {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Phase 1: 0.0 - 0.2 (Dark Theme Pause)
  // Phase 2: 0.2 - 0.3 (Theme Transition: Dark to Light)
  const bgColor = useTransform(scrollYProgress, [0.2, 0.3], ["#111111", "#ffffff"]);
  const textColor = useTransform(scrollYProgress, [0.2, 0.3], ["#ffffff", "#000000"]);
  const descColor = useTransform(scrollYProgress, [0.2, 0.3], ["rgba(255, 255, 255, 0.7)", "rgba(0, 0, 0, 0.7)"]);
  const borderColor = useTransform(scrollYProgress, [0.2, 0.3], ["rgba(255, 255, 255, 0.2)", "rgba(0, 0, 0, 0.2)"]);
  const labelBgColor = useTransform(scrollYProgress, [0.2, 0.3], ["rgba(255, 255, 255, 0.03)", "rgba(0, 0, 0, 0.03)"]);

  // Phase 3: 0.3 - 0.65 (Light Theme Pause)
  
  // Phase 4: 0.65 - 0.85 (Video expands to full screen behind the text)
  const videoLeft = useTransform(scrollYProgress, [0.65, 0.85], ["75%", "50%"]);
  const videoWidth = useTransform(scrollYProgress, [0.65, 0.85], ["40vw", "100vw"]);
  const videoHeight = useTransform(scrollYProgress, [0.65, 0.85], ["80vh", "100vh"]);
  const videoBorderRadius = useTransform(scrollYProgress, [0.65, 0.85], ["0px", "0px"]);

  // If we want the text to turn back to white when the video covers it (assuming the video is dark), 
  // we could animate textColor again from 0.65 to 0.85. 
  const finalTextColor = useTransform(scrollYProgress, [0.2, 0.3, 0.65, 0.85], ["#ffffff", "#000000", "#000000", "#ffffff"]);
  const finalDescColor = useTransform(scrollYProgress, [0.2, 0.3, 0.65, 0.85], ["rgba(255, 255, 255, 0.7)", "rgba(0, 0, 0, 0.7)", "rgba(0, 0, 0, 0.7)", "rgba(255, 255, 255, 0.9)"]);
  const finalBorderColor = useTransform(scrollYProgress, [0.2, 0.3, 0.65, 0.85], ["rgba(255, 255, 255, 0.2)", "rgba(0, 0, 0, 0.2)", "rgba(0, 0, 0, 0.2)", "rgba(255, 255, 255, 0.4)"]);
  const finalLabelBg = useTransform(scrollYProgress, [0.2, 0.3, 0.65, 0.85], ["rgba(255, 255, 255, 0.03)", "rgba(0, 0, 0, 0.03)", "rgba(0, 0, 0, 0.03)", "rgba(255, 255, 255, 0.1)"]);

  // Phase 6: 0.85 - 1.0 (Full screen pause)

  return (
    <section ref={containerRef} className={styles.scrollTrack}>
      <div className={styles.stickyContainer}>
        {/* Animated Background */}
        <m.div 
          className={styles.backgroundLayer} 
          style={{ backgroundColor: bgColor }} 
        />
        
        <div className={styles.contentWrapper}>
          <m.div 
            className={styles.textContent}
            style={{ 
              color: finalTextColor
            }}
          >
            <m.div 
              className={styles.label}
              style={{ borderColor: finalBorderColor, backgroundColor: finalLabelBg }}
            >
              Featured Product
            </m.div>
            
            <h2 className={styles.title}>
              DIGITAL ECOSYSTEMS.
            </h2>
            
            <m.p 
              className={styles.description}
              style={{ color: finalDescColor }}
            >
              We don't just design screens; we architect seamless digital product ecosystems that drive user engagement and business growth.
            </m.p>
            
            <m.button 
              className={styles.button}
              style={{ color: finalTextColor, borderColor: finalBorderColor }}
            >
              View Case Study
            </m.button>
          </m.div>

          <m.div 
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
            <SmartVideo src={video || siteConfig.videos.appShowcase} className={styles.video} />
            <div className={styles.videoOverlay}></div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
