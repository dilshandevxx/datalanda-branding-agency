import Image from 'next/image';
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
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/hero-hands-premium.png"
            className={styles.video}
          >
            <source src="/hero-video.webm" type="video/webm" />
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
