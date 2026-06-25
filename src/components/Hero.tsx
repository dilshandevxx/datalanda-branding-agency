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
            <source src="https://res.cloudinary.com/dqfcsavwj/video/upload/f_auto,q_auto/v1782389244/hero-video_dimbpq.webm" />
          </SmartVideo>
        </div>
      </div>
    </section>
  );
}
