import styles from './PartnersSection.module.css';

const partners = [
  { name: "Adobe", color: "#FF0000" },
  { name: "Figma", color: "#F24E1E" },
  { name: "Stripe", color: "#635BFF" },
  { name: "Vercel", color: "#FFFFFF" },
  { name: "Apple", color: "#A2AAAD" },
  { name: "Spotify", color: "#1DB954" }
];

export default function PartnersSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Glassmorphic Grid */}
        <div className={styles.grid}>
          {partners.map((partner, i) => (
            <div 
              key={i} 
              className={styles.glassCard}
              style={{ '--hover-color': partner.color } as React.CSSProperties}
            >
              <div className={styles.glowLayer}></div>
              <div className={styles.glassLayer}>
                <h3 className={styles.logoText}>{partner.name}</h3>
              </div>
            </div>
          ))}
        </div>
        
        {/* Text Content */}
        <div className={styles.content}>
          <h2 className={styles.heading}>Partners & Approach</h2>
          <div className={styles.textWrapper}>
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

      </div>
    </section>
  );
}
