"use client";
import styles from './PackagesSection.module.css';

const IconRocket = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
    <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
  </svg>
);

const IconCorporate = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
    <line x1="9" y1="22" x2="15" y2="22"></line>
    <line x1="12" y1="18" x2="12" y2="18.01"></line>
  </svg>
);

const IconEcommerce = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>
);

const IconWebApp = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
    <polyline points="2 17 12 22 22 17"></polyline>
    <polyline points="2 12 12 17 22 12"></polyline>
  </svg>
);

const IconAgentic = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v20"></path>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  </svg>
);

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={styles.checkIcon}>
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export default function PackagesSection() {
  const websiteTypes = [
    {
      title: "Corporate & Business",
      desc: "Multi-page digital experiences with custom CMS, advanced SEO optimization, and high-performance animations tailored for established brands.",
      icon: <IconCorporate />
    },
    {
      title: "E-Commerce Platforms",
      desc: "Complete shopping experiences featuring secure payment gateways, inventory management, and conversion-optimized user flows.",
      icon: <IconEcommerce />
    },
    {
      title: "Custom Web Apps",
      desc: "Complex digital products and portals with custom backend logic, user dashboards, and specialized functionality.",
      icon: <IconWebApp />
    },
    {
      title: "Agentic AI Systems",
      desc: "Intelligent workflow automations and LLM integrations that radicaly multiply your team's output and streamline operations.",
      icon: <IconAgentic />
    }
  ];

  return (
    <section id="packages" className={styles.section}>
      <div className={styles.container}>
        
        {/* Content Layout */}
        <div className={styles.contentGrid}>
          
          {/* Base Offering Card */}
          <div className={styles.baseOffering}>
            <div className={styles.baseIcon}>
              <IconRocket />
            </div>
            <h3 className={styles.baseTitle}>The Essential Start</h3>
            <p className={styles.basePrice}>LKR 17,000</p>
            <p className={styles.baseDesc}>
              Perfect for startups, personal brands, and portfolios looking to establish a strong, professional initial market foothold without compromising on quality.
            </p>
            
            <ul className={styles.baseFeatures}>
              <li className={styles.baseFeatureItem}>
                <CheckIcon />
                <span>Mobile-responsive, single-page architecture</span>
              </li>
              <li className={styles.baseFeatureItem}>
                <CheckIcon />
                <span>Sleek, conversion-focused UI design</span>
              </li>
              <li className={styles.baseFeatureItem}>
                <CheckIcon />
                <span>Up to 6 dedicated content sections</span>
              </li>
              <li className={styles.baseFeatureItem}>
                <CheckIcon />
                <span>Essential technical SEO setup</span>
              </li>
            </ul>

            <button className={styles.baseBtn}>Start Your Project</button>
          </div>

          {/* Other Website Types */}
          <div className={styles.typesGrid}>
            {websiteTypes.map((type, i) => (
              <div key={i} className={styles.typeCard}>
                <div className={styles.typeIcon}>{type.icon}</div>
                <h4 className={styles.typeTitle}>{type.title}</h4>
                <p className={styles.typeDesc}>{type.desc}</p>
              </div>
            ))}
          </div>

        </div>

        {/* Customization Banner */}
        <div className={styles.customBanner}>
          <div className={styles.bannerContent}>
            <h4>Tailored to your exact needs</h4>
            <p>Every brand is unique. The offerings above are just starting points. We custom-tailor every aspect—from design systems to features—based entirely on your specific requirements and budget.</p>
          </div>
          <button className={styles.bannerBtn}>
            Get a Custom Quote <span>→</span>
          </button>
        </div>

      </div>
    </section>
  );
}
