import styles from './Marquee.module.css';

export default function Marquee() {
  const brands = ["GitLab", "Stripe", "Airbnb", "Figma", "Slack", "Vercel", "Notion", "Linear"];
  
  // Duplicate the array to ensure seamless infinite scrolling
  const marqueeContent = [...brands, ...brands];

  return (
    <section className={styles.marqueeSection}>
      <h3 className={styles.heading}>JOIN 7,000+ BRANDS WHO LOVED US</h3>
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeTrack}>
          {marqueeContent.map((brand, index) => (
            <div key={index} className={styles.brand}>
              <span className={styles.brandIcon}>❖</span>
              <span className={styles.brandText}>{brand}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
