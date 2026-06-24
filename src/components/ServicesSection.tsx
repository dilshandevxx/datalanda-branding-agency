"use client";

import styles from './ServicesSection.module.css';

export default function ServicesSection() {
  const desktopServices = [
    { num: "01", title: "Visual identity" },
    { num: "02", title: "Packaging design" },
    { num: "03", title: "Editorial design" }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.label}>
          <div className={styles.dot}></div>
          <span>What We Do</span>
        </div>
        <h2 className={styles.title}>SERVICES.</h2>
      </div>

      <div className={styles.list}>
        {desktopServices.map((svc) => (
          <div key={svc.num} className={styles.item}>
            <div className={styles.colTitle}>{svc.title}</div>
            <div className={styles.colNum}>{svc.num}</div>
            <div className={styles.colBtn}>
              <button className={styles.readMoreBtn}>Read more</button>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile-only list */}
      <div className={styles.mobileList}>
        <ul>
          <li>Branding</li>
          <li>Brand Strategy</li>
          <li>Motion graphics</li>
          <li>Video editing</li>
          <li>3D animation</li>
          <li>Audio production</li>
          <li>Web design</li>
          <li>Photography</li>
          <li>Naming</li>
          <li>Packaging</li>
          <li>Advertising</li>
          <li>Brand art<span className={styles.trademark}>®</span></li>
        </ul>
      </div>
    </section>
  );
}
