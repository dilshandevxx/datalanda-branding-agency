import SmartVideo from './SmartVideo';
import styles from './Hero.module.css';
import { siteConfig } from '../data/siteConfig';
import React from 'react';

interface HeroProps {
  caption?: string;
  video?: string;
}

export default function Hero({ caption, video }: HeroProps) {
  const displayCaption = caption || "CRAFTING DIGITAL\nLANDSCAPES. DRIVEN\nBY DATA & DESIGN.";
  
  return (
    <section id="hero" className={styles.hero}>
      <div className={`${styles.titleContainer} animate-fade-in`}>
        <div className={styles.estBadge}>EST. 2016</div>
        <h1 className={styles.title}>
          {displayCaption.split('\n').map((line, i) => (
            <React.Fragment key={i}>
              {line}
              {i !== displayCaption.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </h1>
      </div>
      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <SmartVideo 
            className={styles.video} 
            preload="auto"
          >
            <source src={video || siteConfig.videos.hero} />
          </SmartVideo>
        </div>
      </div>
    </section>
  );
}
