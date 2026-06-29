"use client";
import styles from './PackagesSection.module.css';

const IconCore = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="3" y1="9" x2="21" y2="9"></line>
    <line x1="9" y1="21" x2="9" y2="9"></line>
  </svg>
);

const IconMomentum = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
    <polyline points="16 7 22 7 22 13"></polyline>
  </svg>
);

const IconAuthority = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="7"></circle>
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
  </svg>
);

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={styles.checkIcon}>
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const SectionIconDesign = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.sectionIcon}>
    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
    <path d="M2 17l10 5 10-5"></path>
    <path d="M2 12l10 5 10-5"></path>
  </svg>
);

const SectionIconSEO = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.sectionIcon}>
    <path d="M23 6l-9.5 9.5-5-5L1 18"></path>
    <path d="M17 6h6v6"></path>
  </svg>
);

const ShieldCheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.maintenanceTitleIcon}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    <polyline points="9 12 11 14 15 10"></polyline>
  </svg>
);

const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.detailIcon}>
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const PlusCircleIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.detailIcon}>
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="8" x2="12" y2="16"></line>
    <line x1="8" y1="12" x2="16" y2="12"></line>
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
      extras: "Extra sections: LKR 5,000 each",
      isPopular: false
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
      extras: "Extra pages: LKR 7,000 each",
      isPopular: true
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
      extras: "Extra pages: LKR 7,000 each",
      isPopular: false
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
            <div key={i} className={`${styles.card} ${pkg.isPopular ? styles.cardPopular : ''}`}>
              {pkg.isPopular && <div className={styles.mostPopularBadge}>Most Popular</div>}
              
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>{pkg.icon}</div>
                <h3 className={styles.cardTitle}>{pkg.title}</h3>
              </div>
              
              <p className={styles.price}>{pkg.price}</p>
              <p className={styles.subtitle}>{pkg.subtitle}</p>

              {/* Design & Experience Section */}
              <div className={styles.sectionHeader}>
                <SectionIconDesign />
                <h4 className={styles.sectionTitle}>DESIGN & EXPERIENCE</h4>
                <div className={styles.sectionLine}></div>
              </div>
              
              <ul className={styles.featureList}>
                {pkg.designFeatures.map((feature, idx) => (
                  <li key={idx} className={styles.featureItem}>
                    <CheckIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* SEO & Growth Section (if it exists) */}
              {pkg.seoFeatures.length > 0 && (
                <>
                  <div className={styles.sectionHeader}>
                    <SectionIconSEO />
                    <h4 className={styles.sectionTitle}>SEO & GROWTH</h4>
                    <div className={styles.sectionLine}></div>
                  </div>
                  
                  <ul className={styles.featureList}>
                    {pkg.seoFeatures.map((feature, idx) => (
                      <li key={idx} className={styles.featureItem}>
                        <CheckIcon />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <a href="#" className={styles.seeMore}>
                + See more
              </a>

              <div className={styles.maintenanceBox}>
                <div className={styles.maintenanceLeft}>
                  <div className={styles.maintenanceTitle}>
                    <ShieldCheckIcon />
                    Free Maintenance
                  </div>
                  <div className={styles.maintenanceSubtitle}>Included</div>
                </div>
                <div className={styles.maintenancePill}>{pkg.maintenance}</div>
              </div>

              <ul className={styles.detailsList}>
                <li className={styles.detailItem}>
                  <ClockIcon />
                  {pkg.duration}
                </li>
                <li className={styles.detailItem}>
                  <PlusCircleIcon />
                  {pkg.extras}
                </li>
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
