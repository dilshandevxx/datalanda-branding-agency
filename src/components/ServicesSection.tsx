"use client";

import styles from './ServicesSection.module.css';

export default function ServicesSection() {
  const desktopServices = [
    { num: "01.", title: "AI CONSULTING & STRATEGY" },
    { num: "02.", title: "AGENTIC & AUTOMATION SYSTEMS" },
    { num: "03.", title: "SOFTWARE DEVELOPMENT" },
    { num: "04.", title: "UI/UX DESIGN" },
    { num: "05.", title: "CLOUD & DEVOPS" },
    { num: "06.", title: "BRAND IDENTITY & STRATEGY" },
    { num: "07.", title: "MOBILE & CROSS-PLATFORM" }
  ];

  const mobileServices = [
    { title: "UI/UX Design" },
    { title: "App Development" },
    { title: "Brand Identity" },
    { title: "Cloud & DevOps" },
    { title: "AI Consulting" },
    { title: "Agentic Systems" },
  ];

  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
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

      <div className={styles.mobileList}>
        <div className={styles.mobileGrid}>
          {mobileServices.map((svc, i) => (
             <div key={i} className={styles.mobileCard}>
                <h4 className={styles.mobileCardTitle}>{svc.title}</h4>
             </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
