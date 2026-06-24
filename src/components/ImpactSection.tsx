import styles from './ImpactSection.module.css';

const stats = [
  {
    number: "50+",
    label: "Awwwards Won",
    gradientClass: styles.gradientMagenta
  },
  {
    number: "$120M",
    label: "Client Revenue",
    gradientClass: styles.gradientBlue
  },
  {
    number: "100%",
    label: "Creative Freedom",
    gradientClass: styles.gradientOrange
  }
];

export default function ImpactSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.dot}></div>
          <span className={styles.subtitle}>Our Impact</span>
        </div>
        
        <div className={styles.grid}>
          {stats.map((stat, i) => (
            <div key={i} className={styles.statCard}>
              <div className={`${styles.glowAura} ${stat.gradientClass}`}></div>
              <h2 className={`${styles.number} ${stat.gradientClass}`}>{stat.number}</h2>
              <p className={styles.label}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
