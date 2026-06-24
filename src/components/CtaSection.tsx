import styles from './CtaSection.module.css';

export default function CtaSection() {
  return (
    <section className={styles.section}>
      <div className={styles.bgGlow}></div>
      <div className={styles.content}>
        <h2 className={styles.title}>
          <span>Let's Work</span>
          <span>Together</span>
        </h2>
        <button className={styles.button}>
          Contact Now <span className={styles.arrow}>↗</span>
        </button>
      </div>
    </section>
  );
}
