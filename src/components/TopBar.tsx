"use client";

import { useEffect, useState } from 'react';
import styles from './TopBar.module.css';

export default function TopBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const text = "✦ AVAILABLE FOR NEW PROJECTS ✦ LET'S CREATE SOMETHING EXTRAORDINARY ";
  return (
    <div className={`${styles.topBar} ${scrolled ? styles.hidden : ''}`}>
      <div className={styles.marquee}>
        <div className={styles.marqueeContent}>
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
        </div>
        <div className={styles.marqueeContent}>
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
        </div>
      </div>
    </div>
  );
}
