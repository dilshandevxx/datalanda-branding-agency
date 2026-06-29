"use client";
import styles from './PackagesSection.module.css';

const IconStarter = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="10" fill="#38bdf8" />
    <circle cx="24" cy="24" r="4" fill="#1e1e1e" />
  </svg>
);

const IconGrowth = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 32 L24 16 L32 32 Z" fill="#34d399" />
    <circle cx="24" cy="28" r="3" fill="#fb923c" />
  </svg>
);

const IconEnterprise = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="14" y="14" width="20" height="20" rx="4" fill="#f43f5e" />
    <rect x="20" y="20" width="8" height="8" rx="2" fill="#1e1e1e" />
  </svg>
);

const IconRetainer = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 12 A 12 12 0 1 0 24 36 A 12 12 0 1 0 24 12 Z" stroke="#a855f7" strokeWidth="4" />
    <circle cx="24" cy="24" r="4" fill="#a855f7" />
  </svg>
);

export default function PackagesSection() {
  const packages = [
    {
      title: "Starter Identity",
      desc: "Essential branding and digital presence package for startups looking to establish a strong initial market foothold.",
      icon: <IconStarter />
    },
    {
      title: "Growth Catalyst",
      desc: "Comprehensive design and development suite tailored for growing businesses ready to scale their operations.",
      icon: <IconGrowth />
    },
    {
      title: "Enterprise Shift",
      desc: "Full-scale brand overhaul, custom software development, and strategic market positioning for industry leaders.",
      icon: <IconEnterprise />
    },
    {
      title: "Custom Retainer",
      desc: "Ongoing strategic partnership providing continuous design, engineering, and AI consulting services on demand.",
      icon: <IconRetainer />
    }
  ];

  return (
    <section id="packages" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.label}>
            <div className={styles.dot}></div>
            <span>OUR PACKAGES</span>
          </div>
          <h2 className={styles.title}>Tailored solutions for<br/>every stage of growth</h2>
        </div>

        <div className={styles.grid}>
          {packages.map((pkg, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.iconWrapper}>{pkg.icon}</div>
              <h3 className={styles.cardTitle}>{pkg.title}</h3>
              <p className={styles.cardDesc}>{pkg.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
