import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`${styles.titleContainer} animate-fade-in`}>
        <h1 className={styles.title}>
          TIMELESS BRANDS,<br />DRIVEN BY MODERN<br />HERITAGE
        </h1>
      </div>
      <div className={`${styles.imageContainer} animate-fade-in`} style={{ animationDelay: '0.2s' }}>
        <div className={styles.imageWrapper}>
          <Image
            src="/hero.png"
            alt="Hero IT Professionals"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  );
}
