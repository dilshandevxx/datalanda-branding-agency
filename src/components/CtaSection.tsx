"use client";

import styles from './CtaSection.module.css';
import Magnetic from './Magnetic';

export default function CtaSection() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.content}>
        
        <p className={styles.subtitle}>Have a project in mind?</p>
        
        <Magnetic>
          <a href="mailto:hello@skylabs.com" className={styles.hugeLink}>
            LET'S WORK <br />
            TOGETHER <span className={styles.arrow}>↗</span>
          </a>
        </Magnetic>

      </div>
    </section>
  );
}
