import styles from './PartnersSection.module.css';

export default function PartnersSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.cardsWrapper}>
          <div className={`${styles.card} ${styles.cardWhite}`}>
            <h3 className={styles.hiIbiza}>
              Hï IBIZA<span className={styles.reg}>®</span>
            </h3>
          </div>
          <div className={`${styles.card} ${styles.cardBlue}`}>
            <h3 className={styles.genericBrand}>Brands</h3>
          </div>
          <div className={`${styles.card} ${styles.cardRed}`}>
            <h3 className={styles.adobe}>
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className={styles.adobeIcon}
              >
                <path d="M14.52 3L23.4 21H17.26L14.52 14.51H9.47L11.75 9.06L14.52 3ZM9.48 3H.600006L9.48 21H15.62L9.48 3Z" />
              </svg>
              Adobe
            </h3>
          </div>
        </div>
        
        <div className={styles.content}>
          <h2 className={styles.heading}>Partners & Approach</h2>
          <p className={styles.text}>
            <span className={styles.highlight}>Big multinational companies or small local brands.</span>
            Partner approach with one universal goal – to create<br />
            authentic, functional, and beautiful design.
          </p>
          <div className={styles.ctaWrapper}>
            <span className={styles.ctaText}>Let&apos;s talk</span>
            <button className={styles.ctaButton} aria-label="Let's talk">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
