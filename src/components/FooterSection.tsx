import styles from './FooterSection.module.css';

export default function FooterSection() {
  const marqueeItems = [
    { name: "TWITTER", link: "#" },
    { name: "INSTAGRAM", link: "#" },
    { name: "LINKEDIN", link: "#" },
    { name: "BEHANCE", link: "#" },
    { name: "DRIBBBLE", link: "#" },
    { name: "AWWWARDS", link: "#" },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        <div className={styles.topRow}>
          <div className={styles.info}>
            <p className={styles.infoTitle}>DataLands Agency</p>
            <p className={styles.infoText}>
              A digital design and engineering studio<br/>
              building extraordinary autonomous experiences.
            </p>
          </div>
          
          <div className={styles.navGroup}>
            <div className={styles.navCol}>
              <span className={styles.navLabel}>Menu</span>
              <nav className={styles.nav}>
                <a href="#services">Services</a>
                <a href="#projects">Projects</a>
                <a href="#studio">Studio</a>
              </nav>
            </div>
            <div className={styles.navCol}>
              <span className={styles.navLabel}>Contact</span>
              <nav className={styles.nav}>
                <a href="mailto:hello@datalands.com">Email Us</a>
                <a href="#">Book a Call</a>
              </nav>
            </div>
          </div>
        </div>

        {/* Interactive Marquee */}
        <div className={styles.marqueeRow}>
          <div className={styles.marqueeContainer}>
            <div className={styles.marquee}>
              <div className={styles.marqueeContent}>
                {marqueeItems.map((item, i) => (
                  <div key={i} className={styles.marqueeItem}>
                    <a href={item.link}>{item.name} <span className={styles.arrow}>↗</span></a>
                    <span className={styles.separator}>—</span>
                  </div>
                ))}
                {marqueeItems.map((item, i) => (
                  <div key={`duplicate1-${i}`} className={styles.marqueeItem}>
                    <a href={item.link}>{item.name} <span className={styles.arrow}>↗</span></a>
                    <span className={styles.separator}>—</span>
                  </div>
                ))}
              </div>
              <div className={styles.marqueeContent} aria-hidden="true">
                {marqueeItems.map((item, i) => (
                  <div key={`duplicate2-${i}`} className={styles.marqueeItem}>
                    <a href={item.link}>{item.name} <span className={styles.arrow}>↗</span></a>
                    <span className={styles.separator}>—</span>
                  </div>
                ))}
                {marqueeItems.map((item, i) => (
                  <div key={`duplicate3-${i}`} className={styles.marqueeItem}>
                    <a href={item.link}>{item.name} <span className={styles.arrow}>↗</span></a>
                    <span className={styles.separator}>—</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
