"use client";

import styles from './FooterSection.module.css';

export default function FooterSection() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        <div className={styles.grid}>
          {/* Column 1: Sitemap */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Sitemap</h4>
            <nav className={styles.nav}>
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Work</a>
              <a href="#">Pricing</a>
              <a href="#">Style Guide</a>
              <a href="#">Image Licensing</a>
            </nav>
          </div>

          {/* Column 2: Contact */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Contact</h4>
            <div className={styles.contactInfo}>
              <p>741 New South Head Rd,<br/>Triple Bay SWFW 3148,<br/>New York</p>
              <br/>
              <p>P: 3740 213 301</p>
              <p>E: contact@datalands.com</p>
            </div>
          </div>

          {/* Column 3: Newsletter */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Newsletter</h4>
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email..." 
                className={styles.input} 
                required
              />
              <button type="submit" className={styles.submitBtn}>→</button>
            </form>
          </div>
        </div>

        <div className={styles.bottomRow}>
          <p className={styles.copyright}>
            © This is a <span className={styles.brandName}>DataLands</span> template powered by <span className={styles.brandName}>React</span>
          </p>
        </div>
        
      </div>
    </footer>
  );
}
