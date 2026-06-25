"use client";

import Link from 'next/link';
import styles from './FooterSection.module.css';

export default function FooterSection() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        <div className={styles.topGrid}>
          {/* Main Brand / Call to action */}
          <div className={styles.brandCol}>
            <h2 className={styles.hugeTitle}>Let's talk.</h2>
            <a href="mailto:contact@datalands.com" className={styles.emailLink}>contact@datalands.com</a>
          </div>

          {/* Links */}
          <div className={styles.linksCol}>
            <div className={styles.navGroup}>
              <h4 className={styles.navTitle}>Menu</h4>
              <nav className={styles.nav}>
                <Link href="#">Work</Link>
                <Link href="#">Studio</Link>
                <Link href="#">Services</Link>
                <Link href="#">Contact</Link>
              </nav>
            </div>
            <div className={styles.navGroup}>
              <h4 className={styles.navTitle}>Social</h4>
              <nav className={styles.nav}>
                <a href="#">Instagram</a>
                <a href="#">Twitter</a>
                <a href="#">LinkedIn</a>
                <a href="#">Behance</a>
              </nav>
            </div>
          </div>
        </div>

        <div className={styles.bottomRow}>
          <div className={styles.copyright}>© {new Date().getFullYear()} DataLands. All rights reserved.</div>
          <div className={styles.brandLogo}>DATALANDS</div>
        </div>
        
      </div>
    </footer>
  );
}
