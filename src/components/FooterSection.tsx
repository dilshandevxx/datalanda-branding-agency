"use client";

import Link from 'next/link';
import Image from 'next/image';
import styles from './FooterSection.module.css';

export default function FooterSection() {
  return (
    <footer className={styles.footerWrapper}>
      {/* Top White Section */}
      <div className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Have a project<br/>in mind?</h2>
            <p className={styles.ctaDesc}>
              Answers are just an email away. Drop us a line and the right person will get back to you as soon as possible.
            </p>
            <Link href="/contact" className={styles.ctaButton}>
              WORK WITH US
            </Link>
          </div>
          <div className={styles.illustrationWrapper}>
            {/* The overlapping illustration */}
            <div className={styles.illustrationOffset}>
              <Image 
                src="/agency/purpose_large.png" 
                alt="Digital Design Illustration"
                fill
                className={styles.illustrationImage}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Black Section */}
      <div className={styles.footerDark}>
        <div className={styles.footerContainer}>
          <div className={styles.footerGrid}>
            
            <div className={styles.linksCol}>
              <h4 className={styles.colTitle}>Sitemap</h4>
              <nav className={styles.nav}>
                <Link href="#">Home</Link>
                <Link href="#">About</Link>
                <Link href="#">News</Link>
                <Link href="#">Pricing</Link>
                <Link href="#">Style Guide</Link>
                <Link href="#">Image Licensing</Link>
              </nav>
            </div>

            <div className={styles.contactCol}>
              <h4 className={styles.colTitle}>Contact</h4>
              <address className={styles.address}>
                741 New South Head Rd, Triple<br/>
                Bay SWFW 3148, New York
              </address>
              <div className={styles.contactInfo}>
                <p>P: 3740 213 301</p>
                <p>E: contact@vivid.com</p>
              </div>
            </div>

            <div className={styles.newsletterCol}>
              <h4 className={styles.colTitle}>Subscribe to our newsletter</h4>
              <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                <div className={styles.inputWrapper}>
                  <input type="email" placeholder="Enter your email..." className={styles.input} />
                  <button type="submit" className={styles.submitBtn}>SUBSCRIBE</button>
                </div>
                <label className={styles.terms}>
                  <input type="radio" checked readOnly className={styles.radio} />
                  <span>By subscribing you agree to our <strong>Terms & Conditions.</strong></span>
                </label>
              </form>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
