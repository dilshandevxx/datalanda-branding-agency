import styles from './FooterSection.module.css';

export default function FooterSection() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        <div className={styles.topRow}>
          <div className={styles.info}>
            <p className={styles.infoTitle}>Have an idea?</p>
            <a href="mailto:hello@datalands.com" className={styles.email}>
              hello@datalands.com
            </a>
          </div>
          
          <div className={styles.navGroup}>
            <div className={styles.navCol}>
              <span className={styles.navLabel}>Menu</span>
              <nav className={styles.nav}>
                <a href="#">Home</a>
                <a href="#">Services</a>
                <a href="#">Projects</a>
                <a href="#">Studio</a>
              </nav>
            </div>
            
            <div className={styles.navCol}>
              <span className={styles.navLabel}>Socials</span>
              <nav className={styles.nav}>
                <a href="#">LinkedIn</a>
                <a href="#">Instagram</a>
                <a href="#">Twitter</a>
                <a href="#">Behance</a>
              </nav>
            </div>
          </div>
        </div>

        <div className={styles.brandRow}>
          <h2 className={styles.brand}>DataLands</h2>
        </div>

        <div className={styles.bottomRow}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} DataLands. All rights reserved.
          </p>
          <div className={styles.legalNav}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
