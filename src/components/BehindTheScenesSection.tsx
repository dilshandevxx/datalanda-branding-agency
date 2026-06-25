"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SmartVideo from "./SmartVideo";
import styles from "./BehindTheScenesSection.module.css";

export default function BehindTheScenesSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax the text slowly downwards as the user scrolls down
  const yText = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  // Video scales up slightly as it scrolls
  const scaleVideo = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={containerRef} className={styles.section}>
      <motion.div className={styles.videoWrapper} style={{ scale: scaleVideo }}>
        <SmartVideo src="https://res.cloudinary.com/dqfcsavwj/video/upload/f_auto,q_auto/v1782389595/typing_ylyekm.webm" className={styles.video} />
      </motion.div>

      <div className={styles.colorfulOverlay}></div>
      <div className={styles.overlayTop}></div>
      <div className={styles.overlayBottom}></div>

      <div className={styles.contentWrapper}>
        <motion.h2 
          className={styles.text}
          style={{ y: yText }}
        >
          <span className={styles.accent}>Behind the Scenes</span>
          WE DON'T JUST WRITE CODE.<br />
          WE CRAFT DIGITAL EXPERIENCES.
        </motion.h2>
      </div>
    </section>
  );
}
