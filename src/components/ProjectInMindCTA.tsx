"use client";

import { motion } from 'framer-motion';
import styles from './ProjectInMindCTA.module.css';

export default function ProjectInMindCTA() {
  return (
    <section className={styles.section}>
      {/* Background glow to enhance the glassmorphism effect */}
      <div className={styles.glowBackground}></div>

      <div className={styles.container}>
        <motion.div
          className={styles.glassCard}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className={styles.subtitle}>Start Your Journey</span>
          <h2 className={styles.title}>Project in Mind?</h2>
          <p className={styles.desc}>
            Let's turn your vision into a digital reality. Our team of world-class engineers and designers are ready to build something extraordinary with you.
          </p>
          <button className={styles.contactBtn}>
            Let's Talk
          </button>
        </motion.div>
      </div>
    </section>
  );
}
