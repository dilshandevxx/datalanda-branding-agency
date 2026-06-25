"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);
      
      // Hide when scrolling down (past 100px), show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY = currentScrollY;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${hidden ? styles.hidden : ''}`}>
      <Link href="/#hero" className={styles.logo}>DataLands</Link>
      <div className={styles.rightSection}>
        <nav className={styles.nav}>
          <Link href="/#services" className={styles.navLink}>Services</Link>
          <Link href="/projects" className={styles.navLink}>Projects</Link>
          <Link href="/#studio" className={styles.navLink}>Studio</Link>
          <Link href="/#contact" className={styles.navLink}>Contact</Link>
        </nav>
        <Link href="/#contact" className={styles.ctaButton}>
          Let&apos;s talk <span className={styles.arrow}>→</span>
        </Link>
        <button 
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`} 
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        <nav className={styles.mobileNav}>
          <Link href="/#services" className={styles.mobileNavLink} onClick={toggleMenu}>Services</Link>
          <Link href="/projects" className={styles.mobileNavLink} onClick={toggleMenu}>Projects</Link>
          <Link href="/#studio" className={styles.mobileNavLink} onClick={toggleMenu}>Studio</Link>
          <Link href="/#contact" className={styles.mobileNavLink} onClick={toggleMenu}>Contact</Link>
        </nav>
        <div className={styles.mobileFooter}>
          <a href="mailto:hello@datalands.com" className={styles.mobileEmail}>hello@datalands.com</a>
        </div>
      </div>
    </header>
  );
}
