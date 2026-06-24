import styles from './IntroSection.module.css';

export default function IntroSection() {
  return (
    <section className={styles.intro}>
      <div className={styles.container}>
        <div className={styles.labelWrapper}>
          <span className={styles.label}>[ Who We Are ]</span>
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.headline}>
            We are a digital engineering collective. We blend cutting-edge technology with world-class design to build products that define the future.
          </h2>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>10+</span>
              <span className={styles.statLabel}>Years of Excellence</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>50+</span>
              <span className={styles.statLabel}>Global Partners</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>∞</span>
              <span className={styles.statLabel}>Lines of Code</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
