"use client";
import styles from './ServicesSection.module.css';

const IconUiUx = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="22" cy="28" r="12" fill="#38bdf8" />
    <rect x="26" y="8" width="14" height="14" fill="#2563eb" />
  </svg>
);

const IconAppDev = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 26 C14 34.836 21.164 42 30 42 C38.836 42 46 34.836 46 26 L14 26 Z" fill="#34d399" />
    <circle cx="30" cy="14" r="6" fill="#fb923c" />
  </svg>
);

const IconMarket = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="26" r="12" fill="#f43f5e" />
    <circle cx="14" cy="12" r="5" fill="#facc15" />
  </svg>
);

const IconQa = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="14" fill="#a855f7" />
    <circle cx="24" cy="24" r="6" fill="#1e1e1e" />
  </svg>
);

export default function ServicesSection() {
  const services = [
    {
      title: "UI/UX Design",
      desc: "Lorem ipsum dolor sit amet, consect adipis elit. Suspend varius enim in eros element tristique.",
      icon: <IconUiUx />
    },
    {
      title: "App Development",
      desc: "Lorem ipsum dolor sit amet, consect adipis elit. Suspend varius enim in eros element tristique.",
      icon: <IconAppDev />
    },
    {
      title: "Market Strategy",
      desc: "Lorem ipsum dolor sit amet, consect adipis elit. Suspend varius enim in eros element tristique.",
      icon: <IconMarket />
    },
    {
      title: "QA and Testing",
      desc: "Lorem ipsum dolor sit amet, consect adipis elit. Suspend varius enim in eros element tristique.",
      icon: <IconQa />
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
          <h2 className={styles.title}>Start-to-end app<br/>development agency</h2>
        </div>

        <div className={styles.grid}>
          {services.map((svc, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.iconWrapper}>{svc.icon}</div>
              <h3 className={styles.cardTitle}>{svc.title}</h3>
              <p className={styles.cardDesc}>{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
