"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>Tavern</div>
      <div className={styles.rightSection}>
        <nav className={styles.nav}>
          <Link href="#" className={styles.navLink}>Work</Link>
          <Link href="#" className={styles.navLink}>Studio</Link>
          <Link href="#" className={styles.navLink}>Blog</Link>
          <Link href="#" className={styles.navLink}>Instagram</Link>
        </nav>
        <button className={styles.ctaButton}>
          Get in Touch <span className={styles.arrow}>→</span>
        </button>
        <button className={styles.hamburger} aria-label="Open menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
