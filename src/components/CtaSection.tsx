"use client";

import styles from './CtaSection.module.css';
import Magnetic from './Magnetic';

export default function CtaSection() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.content}>
        
        <div className={styles.textBlock}>
          <div className={styles.subtitleWrapper}>
            <div className={styles.line}></div>
            <p className={styles.subtitle}>Have a project in mind?</p>
          </div>
          
          <h2 className={styles.title}>
            Let's build something <br />
            <i>extraordinary.</i>
          </h2>
        </div>
        
        <div className={styles.actionWrapper}>
          <Magnetic>
            <a href="mailto:hello@datalands.com" className={styles.circleButton}>
              <span className={styles.btnText}>Get in<br />Touch</span>
            </a>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
