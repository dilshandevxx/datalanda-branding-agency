import SmartVideo from './SmartVideo';
import styles from './Hero.module.css';
import { siteConfig } from '../data/siteConfig';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={`${styles.titleContainer} animate-fade-in`}>
        <div className={styles.estBadge}>EST. 2016</div>
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
            <source src={siteConfig.videos.hero} />
          </SmartVideo>
        </div>
      </div>
    </section>
  );
}
