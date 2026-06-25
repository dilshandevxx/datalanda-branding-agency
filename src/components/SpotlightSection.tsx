"use client";

import { motion } from "framer-motion";
import SmartVideo from "./SmartVideo";
import styles from "./SpotlightSection.module.css";

export default function SpotlightSection() {
  return (
    <section className={styles.section}>
      <SmartVideo src="https://res.cloudinary.com/dqfcsavwj/video/upload/f_auto,q_auto/v1782389596/walking-people_chkyso.webm" className={styles.backgroundVideo} />
      <div className={styles.overlay}></div>
      <div className="container">
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.quoteIcon}>"</div>
          <h2 className={styles.quote}>
            Designed for Human Connection.
          </h2>
          
          <motion.button 
            className={styles.button}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Discover Our Approach
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
