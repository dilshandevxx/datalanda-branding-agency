"use client";

import Link from 'next/link';
import styles from './FooterSection.module.css';

export default function FooterSection() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        <div className={styles.mainGrid}>
          {/* Column 1 */}
          <div className={styles.brandCol}>
            <h2 className={styles.logo}>DataLands.</h2>
            <p className={styles.desc}>
              DataLands is a stunning and bold digital agency, perfectly suited for creative brands and enterprise platforms. With modern design and advanced engineering, it takes your website to the next level.
            </p>
            <div className={styles.socials}>
              <a href="#">in</a>
              <a href="#">tw</a>
              <a href="#">fb</a>
              <a href="#">yt</a>
              <a href="#">ig</a>
            </div>
          </div>

          {/* Column 2 */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Pages</h4>
            <nav className={styles.nav}>
              <Link href="#">Home</Link>
              <Link href="#">About</Link>
              <Link href="#">Contact</Link>
              <Link href="#">Portfolio</Link>
              <Link href="#">Pricing</Link>
              <Link href="#">Blog</Link>
            </nav>
          </div>

          {/* Column 3 */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Utility pages</h4>
            <nav className={styles.nav}>
              <Link href="#">Instructions</Link>
              <Link href="#">Style guide</Link>
              <Link href="#">Licenses</Link>
              <Link href="#">Changelog</Link>
              <Link href="#">404 Not found</Link>
              <Link href="#">Password protected</Link>
            </nav>
          </div>

          {/* Column 4 */}
          <div className={styles.newsletterCol}>
            <h4 className={styles.colTitle}>Subscribe to our newsletter</h4>
            <p className={styles.desc}>
              Lorem ipsum dolor sit am consectetur adipiscing
            </p>
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" className={styles.input} />
              <button type="submit" className={styles.button}>Subscribe</button>
            </form>
          </div>
        </div>

        <div className={styles.bottomRow}>
          <div className={styles.copyright}>© DataLands — Powered by Next.js — Created by Agency</div>
        </div>
        
      </div>
    </footer>
  );
}
