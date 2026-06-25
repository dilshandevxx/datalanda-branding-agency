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
            className={styles.video} 
            preload="auto"
          >
            <source src="/hero-video.webm" type="video/webm" />
            <source src="/hero-video.mp4" type="video/mp4" />
          </SmartVideo>
        </div>
      </div>
    </section>
  );
}
