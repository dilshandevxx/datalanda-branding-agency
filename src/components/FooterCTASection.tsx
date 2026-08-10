"use client";

import styles from './FooterCTASection.module.css';

export default function FooterCTASection({ caption }: { caption?: string }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.textCol}>
          <div className={styles.meta}>
            <span>NEW RELEASE</span>
            <span className={styles.category}>MAGAZINE</span>
          </div>
          
          <h2 className={styles.title}>
            THE<br/>SECOND<br/>ISSUE
          </h2>
          
          <p className={styles.desc}>
            Issue No.02 is now available.
          </p>
        </div>
      </div>
    </section>
  );
}
