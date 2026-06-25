import SmartVideo from './SmartVideo';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={`${styles.titleContainer} animate-fade-in`}>
        <h1 className={styles.title}>
          CRAFTING DIGITAL<br />LANDSCAPES. DRIVEN<br />BY DATA & DESIGN.
        </h1>
      </div>
      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <SmartVideo 
            src="/hero-video.webm" 
            className={styles.video} 
          />
        </div>
      </div>
    </section>
  );
}
