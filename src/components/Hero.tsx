import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`${styles.titleContainer} animate-fade-in`}>
        <h1 className={styles.title}>
          CRAFTING DIGITAL<br />LANDSCAPES. DRIVEN<br />BY DATA & DESIGN.
        </h1>
      </div>
      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <video
            src="/hero-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            poster="/hero-hands-premium.png"
            className={styles.video}
          />
        </div>
      </div>
    </section>
  );
}
