"use client";
import React from 'react';
import styles from './ServicesSection.module.css';

const IconUiUx = () => (
  <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="22" cy="28" r="12" fill="#38bdf8" />
    <rect x="26" y="8" width="14" height="14" fill="#2563eb" />
  </svg>
);

const IconAppDev = () => (
  <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 26 C14 34.836 21.164 42 30 42 C38.836 42 46 34.836 46 26 L14 26 Z" fill="#34d399" />
    <circle cx="30" cy="14" r="6" fill="#fb923c" />
  </svg>
);

const IconMarket = () => (
  <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="26" r="12" fill="#f43f5e" />
    <circle cx="14" cy="12" r="5" fill="#facc15" />
  </svg>
);

const IconQa = () => (
  <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="14" fill="#a855f7" />
    <circle cx="24" cy="24" r="6" fill="#1e1e1e" />
  </svg>
);

const IconAi = () => (
  <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 10L36 32H12L24 10Z" fill="#8b5cf6" />
    <circle cx="24" cy="24" r="4" fill="#fcd34d" />
  </svg>
);

const IconAgentic = () => (
  <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="20" width="8" height="8" fill="#14b8a6" />
    <rect x="28" y="20" width="8" height="8" fill="#14b8a6" />
    <rect x="20" y="32" width="8" height="8" fill="#0ea5e9" />
    <path d="M16 24L24 32M32 24L24 32" stroke="#475569" strokeWidth="2" />
  </svg>
);

const IconCloud = () => (
  <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="24" width="28" height="12" rx="0" fill="#6366f1" />
    <rect x="16" y="14" width="16" height="10" rx="0" fill="#818cf8" />
  </svg>
);

const IconBrand = () => (
  <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 8 A 16 16 0 0 1 40 24 L24 24 Z" fill="#f59e0b" />
    <path d="M24 40 A 16 16 0 0 1 8 24 L24 24 Z" fill="#ef4444" />
  </svg>
);

export default function ServicesSection() {
  const services = [
    {
      title: "UI/UX Design",
      desc: "We craft intuitive, engaging interfaces that elevate user experiences and perfectly align with your brand's unique aesthetic.",
      icon: <IconUiUx />
    },
    {
      title: "App Dev",
      desc: "Building robust, scalable mobile and web applications with modern engineering and uncompromising performance.",
      icon: <IconAppDev />
    },
    {
      title: "Strategy",
      desc: "Data-driven insights and comprehensive market positioning to ensure your product hits the ground running.",
      icon: <IconMarket />
    },
    {
      title: "QA & Testing",
      desc: "Rigorous quality assurance, automated testing, and performance profiling for flawless deployments.",
      icon: <IconQa />
    },
    {
      title: "AI Consulting",
      desc: "Strategic integration of machine learning and large language models to future-proof your digital operations.",
      icon: <IconAi />
    },
    {
      title: "Agentic",
      desc: "Designing autonomous AI agents and intelligent workflow automations to radically multiply your team's output.",
      icon: <IconAgentic />
    },
    {
      title: "Cloud Ops",
      desc: "Architecting resilient, highly-available cloud infrastructure for seamless scaling and continuous delivery.",
      icon: <IconCloud />
    },
    {
      title: "Identity",
      desc: "Crafting bold, unmistakable visual identities and rigorous design systems that cut through the noise.",
      icon: <IconBrand />
    }
  ];

  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.label}>
            <div className={styles.dot}></div>
            <span>OUR SERVICES</span>
          </div>
          <h2 className={styles.title}>Elevating brands through<br/>design and engineering</h2>
        </div>

        <div className={styles.list}>
          {services.map((svc, i) => (
            <div key={i} className={styles.listItem}>
              <div className={styles.itemLeft}>
                <span className={styles.itemNumber}>{(i + 1).toString().padStart(2, '0')}</span>
                <h3 className={styles.itemTitle}>{svc.title}</h3>
              </div>
              <div className={styles.itemRight}>
                <p className={styles.itemDesc}>{svc.desc}</p>
                <div className={styles.iconWrapper}>
                  {svc.icon}
                  <div className={styles.iconOverlay}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
