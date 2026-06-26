"use client";

import { motion } from 'framer-motion';
import { siteConfig } from '@/data/siteConfig';
import styles from './ProjectInMindCTA.module.css';

export default function ProjectInMindCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Left Side: Video */}
        <div className={styles.videoSide}>
          <video 
            className={styles.video} 
            autoPlay 
            loop 
            muted 
            playsInline
            src={siteConfig.videos.cinematicAccordion.projectinmind} 
          />
        </div>

        {/* Right Side: Text & CTA */}
        <div className={styles.textSide}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.subtitle}>Start Your Journey</span>
            <h2 className={styles.title}>Project in Mind?</h2>
            <p className={styles.desc}>
              Let's turn your vision into a digital reality. Our team of world-class engineers and designers are ready to build something extraordinary with you.
            </p>
            <button className={styles.contactBtn}>
              Contact Us
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
