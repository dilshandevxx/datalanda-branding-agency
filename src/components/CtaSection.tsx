import styles from './CtaSection.module.css';
import Magnetic from './Magnetic';

export default function CtaSection() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.content}>
        <p className={styles.subtitle}>Have a project in mind?</p>
        <h2 className={styles.title}>
          LET'S CONNECT<br />
          TOGETHER
        </h2>
        
        <div className={styles.actionWrapper}>
          <Magnetic>
            <a href="mailto:hello@datalands.com" className={styles.button}>
              hello@datalands.com <span className={styles.arrow}>↗</span>
            </a>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
