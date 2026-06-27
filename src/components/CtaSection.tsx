"use client";

import Image from 'next/image';
import styles from './CtaSection.module.css';

export default function CtaSection() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        
        {/* Centered Header (Like Screenshot 1) */}
        <div className={styles.header}>
          <h2 className={styles.headline}>Have a project in mind?</h2>
          <p className={styles.paragraph}>
            Tell us about your project—whether it's a website, SEO, or marketing.<br/>We are ready to create and collaborate.
          </p>
        </div>

        {/* Card Grid (Like Screenshot 2) */}
        <div className={styles.bentoGrid}>
          
          {/* Static Info Cards */}
          <div className={styles.infoCol}>
            
            <div className={styles.card}>
              <div className={styles.iconGroup}>
                <div className={`${styles.iconShape} ${styles.shapeBlue}`}></div>
              </div>
              <h3 className={styles.cardTitle}>Direct Contact</h3>
              <a href="mailto:hello@studio.com" className={styles.cardText}>hello@studio.com</a>
              <a href="tel:+1234567890" className={styles.cardText}>+1 (234) 567-890</a>
            </div>
            
            <div className={styles.card}>
              <div className={styles.iconGroup}>
                <div className={`${styles.iconShape} ${styles.shapeGreenHalf}`}></div>
              </div>
              <h3 className={styles.cardTitle}>Location</h3>
              <p className={styles.cardText}>123 Creative Street<br/>New York, NY 10001</p>
            </div>

            <div className={`${styles.card} ${styles.profileCard}`}>
              <div className={styles.profileAvatar}>
                <Image 
                  src="https://res.cloudinary.com/dqfcsavwj/image/upload/v1782529011/pexels-irene-constantino-2152173979-37682380_wjpwwb.webp" 
                  alt="Lauren Thompson" 
                  fill 
                  style={{objectFit: 'cover'}} 
                />
              </div>
              <div>
                <h3 className={styles.cardTitle}>Lauren Thompson</h3>
                <p className={styles.cardText}>Team Lead</p>
              </div>
            </div>

          </div>

          {/* Form Cards */}
          <form className={styles.formCol} onSubmit={(e) => e.preventDefault()}>
            
            <div className={styles.formRow}>
              <div className={styles.card}>
                <div className={styles.iconGroup}>
                  <div className={`${styles.iconShape} ${styles.shapePink}`}></div>
                </div>
                <label htmlFor="name" className={styles.cardTitle}>01. What's your name?</label>
                <input type="text" id="name" placeholder="John Doe *" className={styles.cardInput} required />
              </div>

              <div className={styles.card}>
                <div className={styles.iconGroup}>
                  <div className={`${styles.iconShape} ${styles.shapePurpleRing}`}></div>
                </div>
                <label htmlFor="email" className={styles.cardTitle}>02. What's your email?</label>
                <input type="email" id="email" placeholder="john@example.com *" className={styles.cardInput} required />
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.iconGroup}>
                <div className={`${styles.iconShape} ${styles.shapeYellowTriangle}`}></div>
              </div>
              <label htmlFor="service" className={styles.cardTitle}>03. What are you looking for?</label>
              <input type="text" id="service" placeholder="Web Design, Branding, SEO..." className={styles.cardInput} />
            </div>

            <div className={styles.card}>
              <div className={styles.iconGroup}>
                <div className={`${styles.iconShape} ${styles.shapeBlueSteps}`}></div>
              </div>
              <label htmlFor="message" className={styles.cardTitle}>04. Tell us about your project</label>
              <textarea id="message" placeholder="Hello, I would like to talk about... *" className={styles.cardTextarea} required></textarea>
            </div>

            <button type="submit" className={styles.submitBtn}>Send Message</button>

          </form>

        </div>

      </div>
    </section>
  );
}
