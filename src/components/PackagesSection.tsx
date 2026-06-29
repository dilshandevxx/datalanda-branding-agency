"use client";
import styles from './PackagesSection.module.css';

const IconCore = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="22" cy="28" r="12" fill="#38bdf8" />
    <rect x="26" y="8" width="14" height="14" fill="#2563eb" />
  </svg>
);

const IconMomentum = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 26 C14 34.836 21.164 42 30 42 C38.836 42 46 34.836 46 26 L14 26 Z" fill="#34d399" />
    <circle cx="30" cy="14" r="6" fill="#fb923c" />
  </svg>
);

const IconAuthority = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="26" r="12" fill="#f43f5e" />
    <circle cx="14" cy="12" r="5" fill="#facc15" />
  </svg>
);

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.checkIcon}>
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

export default function PackagesSection() {
  const packages = [
    {
      title: "Core Identity",
      icon: <IconCore />,
      price: "LKR 50,000",
      subtitle: "For Small Businesses & Startups",
      designFeatures: [
        "Mobile-friendly, single-page design.",
        "Simple and Basic UI Design.",
        "Up to 6 sections included."
      ],
      seoFeatures: [
        "Essential SEO setup for online visibility.",
        "SEO-friendly Content."
      ],
      maintenance: "3 Months",
      duration: "Project Duration: 1-2 weeks",
      extras: "Extra sections: LKR 5,000 each"
    },
    {
      title: "Momentum Engine",
      icon: <IconMomentum />,
      price: "LKR 125,000",
      subtitle: "For Growing Businesses",
      designFeatures: [
        "Mobile-friendly, multi-page design (up to 5 pages).",
        "Custom UI/UX for enhanced user experience.",
        "Live Chat Integration."
      ],
      seoFeatures: [
        "SEO optimization for improved online presence.",
        "Speed Audit: Optimization for faster loading times."
      ],
      maintenance: "6 Months",
      duration: "Project Duration: 2-3 weeks",
      extras: "Extra pages: LKR 7,000 each"
    },
    {
      title: "The Authority",
      icon: <IconAuthority />,
      price: "LKR 245,000",
      subtitle: "For Established Businesses",
      designFeatures: [
        "Mobile-friendly, advanced multi-page design.",
        "Custom UI/UX with user testing.",
        "Integration of blog section for content marketing.",
        "Multi-language Support.",
        "Basic training on website management."
      ],
      seoFeatures: [],
      maintenance: "12 Months",
      duration: "Project Duration: 4-6 weeks",
      extras: "Extra pages: LKR 7,000 each"
    }
  ];

  return (
    <section id="packages" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.label}>
            <div className={styles.dot}></div>
            <span>OUR PACKAGES</span>
          </div>
          <h2 className={styles.title}>Tailored solutions for<br/>every stage of growth</h2>
        </div>

        <div className={styles.grid}>
          {packages.map((pkg, i) => (
            <div key={i} className={styles.card}>
              
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>{pkg.icon}</div>
                <h3 className={styles.cardTitle}>{pkg.title}</h3>
              </div>
              
              <p className={styles.price}>{pkg.price}</p>
              <p className={styles.cardDesc}>{pkg.subtitle}</p>

              <div className={styles.featureSection}>
                <h4 className={styles.sectionTitle}>DESIGN & EXPERIENCE</h4>
                <ul className={styles.featureList}>
                  {pkg.designFeatures.map((feature, idx) => (
                    <li key={idx} className={styles.featureItem}>
                      <CheckIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {pkg.seoFeatures.length > 0 && (
                <div className={styles.featureSection}>
                  <h4 className={styles.sectionTitle}>SEO & GROWTH</h4>
                  <ul className={styles.featureList}>
                    {pkg.seoFeatures.map((feature, idx) => (
                      <li key={idx} className={styles.featureItem}>
                        <CheckIcon />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className={styles.maintenanceBox}>
                <span className={styles.maintenanceText}>Free Maintenance</span>
                <span className={styles.maintenancePill}>{pkg.maintenance}</span>
              </div>

              <ul className={styles.detailsList}>
                <li className={styles.detailItem}>{pkg.duration}</li>
                <li className={styles.detailItem}>{pkg.extras}</li>
              </ul>

              <div className={styles.buttonGroup}>
                <button className={styles.primaryBtn}>Choose Package</button>
                <button className={styles.secondaryBtn}>
                  <WhatsAppIcon />
                  WhatsApp
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
