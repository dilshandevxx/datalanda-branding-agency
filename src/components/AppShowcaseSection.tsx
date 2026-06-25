"use client";

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SmartVideo from './SmartVideo';
import styles from './AppShowcaseSection.module.css';

export default function AppShowcaseSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          
          {/* Left Side: Sticky Content */}
          <div className={styles.textContent}>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={styles.label}
            >
              Featured Product
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={styles.title}
            >
              DIGITAL ECOSYSTEMS.
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={styles.description}
            >
              We don't just design screens; we architect seamless digital product ecosystems that drive user engagement and business growth.
            </motion.p>
            
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={styles.button}
            >
              View Case Study
            </motion.button>
          </div>

          {/* Right Side: Video Showcase */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={styles.videoWrapper}
          >
            <SmartVideo src="https://res.cloudinary.com/dqfcsavwj/video/upload/f_auto,q_auto/v1782405943/scrolling_mshca0.webm" className={styles.video} />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
