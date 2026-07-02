"use client";
import React from 'react';
import styles from './ServicesSection.module.css';
import SectionHeader from './SectionHeader';

export default function ServicesSection() {
  const services = [
    {
      title: "UI/UX Design",
    },
    {
      title: "App Development",
    },
    {
      title: "Market Strategy",
    },
    {
      title: "QA and Testing",
    },
    {
      title: "AI Consulting",
    },
    {
      title: "Agentic Systems",
    },
    {
      title: "Cloud & DevOps",
    },
    {
      title: "Brand Identity",
    }
  ];

  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader 
          label="OUR SERVICES" 
          title={<>Elevating brands through<br/>design and engineering</>} 
        />
      </div>

      <div className={styles.list}>
        {services.map((svc, i) => (
          <div key={i} className={styles.listItem}>
            <h3 className={styles.itemTitle}>{svc.title}</h3>
            <div className={styles.itemRight}>
              <span className={styles.itemNumber}>(0.0.{i + 1})</span>
              <svg className={styles.arrow} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
