"use client";

import Image from 'next/image';
import styles from './ProjectInMindCTA.module.css';
import { siteConfig } from '../data/siteConfig';

export default function ProjectInMindCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left Column: Form Card */}
        <div className={styles.leftCol}>
          <div className={styles.formCard}>
            <h3 className={styles.formTitle}>Have a project <span>in mind?</span></h3>
            <form className={styles.form}>
              <div className={styles.inputGroup}>
                <label>Your name*</label>
                <input type="text" placeholder="John Doe" />
              </div>
              <div className={styles.inputGroup}>
                <label>E-mail*</label>
                <input type="email" placeholder="hello@site.com" />
              </div>
              <div className={styles.inputGroup}>
                <label>Message</label>
                <textarea placeholder="Your message"></textarea>
              </div>
              <button type="button" className={styles.submitBtn}>Send Message</button>
            </form>
            <p className={styles.terms}>By submitting, you agree to our Terms and Privacy Policy.</p>
          </div>
          <p className={styles.copyright}>© {new Date().getFullYear()} Studio</p>
        </div>

        {/* Right Column: Text and Contact Info */}
        <div className={styles.rightCol}>
          <h2 className={styles.headline}>Let's talk.</h2>
          <p className={styles.subtitle}>
            Tell us about your project—whether it's a website, SEO, or marketing.
          </p>

          <div className={styles.features}>
            <div className={styles.feature}>
              <h4 className={styles.featureTitle}>Quick response.</h4>
              <p className={styles.featureDesc}>If you're ready to create and collaborate, we'd love to hear from you.</p>
            </div>
            <div className={styles.feature}>
              <h4 className={styles.featureTitle}>Clear next steps.</h4>
              <p className={styles.featureDesc}>After the consultation, we'll provide you with a detailed plan and timeline.</p>
            </div>
          </div>

          <div className={styles.contactCard}>
            <div className={styles.avatar}>
              {siteConfig.images.studio.image1 && (
                <Image 
                  src={siteConfig.images.studio.image1} 
                  alt="Lauren Thompson" 
                  fill 
                  sizes="80px"
                  style={{ objectFit: 'cover' }} 
                />
              )}
            </div>
            <div className={styles.contactInfo}>
              <span className={styles.contactRole}>Team Lead at studio</span>
              <span className={styles.contactName}>Lauren Thompson</span>
              <button className={styles.askBtn}>Ask directly &rarr;</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
