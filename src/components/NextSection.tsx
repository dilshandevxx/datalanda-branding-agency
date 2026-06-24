import styles from './NextSection.module.css';

export default function NextSection() {
  const services = [
    { title: "Digital Architecture", desc: "Building scalable, robust foundations for the modern web." },
    { title: "UI/UX Engineering", desc: "Crafting beautiful, intuitive interfaces that drive engagement." },
    { title: "Quality Assurance", desc: "Rigorous testing protocols ensuring flawless performance." }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.heading}>Engineering the future<br/>of digital experiences.</h2>
        <p className={styles.subheading}>We are a collective of senior engineers and designers crafting premium solutions.</p>
      </div>
      <div className={styles.grid}>
        {services.map((svc, i) => (
          <div key={i} className={styles.card}>
            <h3 className={styles.cardTitle}>{svc.title}</h3>
            <p className={styles.cardDesc}>{svc.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
