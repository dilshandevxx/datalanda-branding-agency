"use client";

import styles from "./SpotlightSection.module.css";

export default function SpotlightSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.label}>
            <span>FEATURED PRODUCT</span>
          </div>
          
          <h2 className={styles.title}>
            DIGITAL ECOSYSTEMS.
          </h2>
          
          <p className={styles.desc}>
            We don't just design screens; we architect seamless digital product ecosystems that drive user engagement and business growth.
          </p>
          
          <button className={styles.button}>
            VIEW CASE STUDY
          </button>
        </div>
      </div>
    </section>
  );
}
