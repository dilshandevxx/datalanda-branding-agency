"use client";

import { useRef } from 'react';
import { m } from "framer-motion";
import SmartVideo from "./SmartVideo";
import styles from "./SpotlightSection.module.css";
import { siteConfig } from "../data/siteConfig";

export default function SpotlightSection() {
  const containerRef = useRef(null);
  return (
    <section ref={containerRef} className={styles.section}>
      <SmartVideo src={siteConfig.videos.spotlight} className={styles.backgroundVideo} />
      <div className={styles.overlay}></div>
      <div className="container">
        <m.div 
          className={styles.content}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.lineDecoration}></div>
          <h2 className={styles.quote}>
            <m.span 
              className={styles.quoteSmall}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Elevating the
            </m.span>
            <m.span 
              className={styles.quoteLarge}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Art of Living.
            </m.span>
          </h2>
          <m.button 
            className={styles.button}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Discover Our Approach
          </m.button>
        </m.div>
      </div>
    </section>
  );
}
