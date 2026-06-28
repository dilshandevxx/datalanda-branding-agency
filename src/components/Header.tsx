"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
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
      
      // Hide when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100 && !menuOpen) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY = currentScrollY;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen]);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${hidden ? styles.hidden : ''}`}>
        <Link href="/#hero" className={styles.logo} onClick={() => setMenuOpen(false)}>
          <Logo />
          <span className={styles.logoText}>SKYLABS</span>
        </Link>
        
        <div className={styles.rightSection}>
          <nav className={styles.nav}>
            <Link href="/#services" className={styles.navLink}>Services</Link>
            <Link href="/projects" className={styles.navLink}>Projects</Link>
            <Link href="/#studio" className={styles.navLink}>Studio</Link>
          </nav>

          <Link href="/#contact" className={styles.ctaButton}>
            Let's Talk
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
      </header>

      {/* Full Screen Menu Overlay for Mobile */}
      <div className={`${styles.fullScreenMenu} ${menuOpen ? styles.menuOpen : ''}`}>
        <div className={styles.menuInner}>
          <nav className={styles.overlayNav}>
            <Link href="/#services" className={styles.overlayNavLink} onClick={toggleMenu}>Services</Link>
            <Link href="/projects" className={styles.overlayNavLink} onClick={toggleMenu}>Projects</Link>
            <Link href="/#studio" className={styles.overlayNavLink} onClick={toggleMenu}>Studio</Link>
            <Link href="/#contact" className={styles.overlayNavLink} onClick={toggleMenu}>Contact</Link>
          </nav>
          
          <div className={styles.menuFooter}>
            <div className={styles.menuContact}>
              <span className={styles.menuLabel}>SAY HELLO</span>
              <a href="mailto:hello@skylabs.com" className={styles.menuEmail}>hello@skylabs.com</a>
            </div>
            <div className={styles.menuSocial}>
              <span className={styles.menuLabel}>SOCIALS</span>
              <div className={styles.socialLinks}>
                <a href="#" className={styles.socialLink}>Instagram</a>
                <a href="#" className={styles.socialLink}>Twitter</a>
                <a href="#" className={styles.socialLink}>LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
