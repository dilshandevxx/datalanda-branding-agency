"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import styles from './Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      // Expand the island when scrolled past 50px
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`${styles.dynamicIsland} ${scrolled ? styles.expanded : styles.collapsed}`}>
        <div className={styles.islandInner}>
          <Link href="/#hero" className={styles.logo} onClick={() => setMenuOpen(false)}>
            <Logo />
            <span className={styles.logoText}>SKYLABS</span>
          </Link>
          
          <nav className={styles.islandNav}>
            <Link href="/#services" className={styles.navLink}>Services</Link>
            <Link href="/projects" className={styles.navLink}>Projects</Link>
            <Link href="/#studio" className={styles.navLink}>Studio</Link>
            <Link href="/#contact" className={styles.navLink}>Contact</Link>
          </nav>

          <div className={styles.rightActions}>
            <button 
              className={styles.menuToggle} 
              aria-label="Toggle menu"
              onClick={toggleMenu}
            >
              {menuOpen ? 'CLOSE' : 'MENU'}
            </button>
          </div>
        </div>
      </header>

      {/* Full Screen Menu Overlay (Fallback for mobile or explicit click) */}
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
