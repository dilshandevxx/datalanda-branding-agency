"use client";

import Image from 'next/image';
import styles from './CtaSection.module.css';

export default function CtaSection() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        
        {/* Left Column: Text & Info */}
        <div className={styles.leftCol}>
          <h2 className={styles.headline}>Have a project in mind?</h2>
          <p className={styles.paragraph}>
            Tell us about your project—whether it's a website, SEO, or marketing. We are ready to create and collaborate.
          </p>

          <div className={styles.infoGrid}>
            <div className={styles.infoBlock}>
              <h4 className={styles.infoTitle}>Direct Contact</h4>
              <a href="mailto:hello@studio.com" className={styles.infoText}>hello@studio.com</a>
              <a href="tel:+1234567890" className={styles.infoText}>+1 (234) 567-890</a>
            </div>
            
            <div className={styles.infoBlock}>
              <h4 className={styles.infoTitle}>Location</h4>
              <p className={styles.infoText}>123 Creative Street<br/>New York, NY 10001</p>
            </div>
          </div>

          <div className={styles.profileBlock}>
             <div className={styles.profileAvatar}>
                <Image 
                  src="https://res.cloudinary.com/dqfcsavwj/image/upload/v1782529011/pexels-irene-constantino-2152173979-37682380_wjpwwb.webp" 
                  alt="Lauren Thompson" 
                  fill 
                  style={{objectFit: 'cover'}} 
                />
             </div>
             <div>
               <p className={styles.profileName}>Lauren Thompson</p>
               <p className={styles.profileRole}>Team Lead</p>
             </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className={styles.rightCol}>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            
            <div className={styles.inputGroup}>
              <label htmlFor="name" className={styles.label}><span>01.</span> What's your name?</label>
              <input type="text" id="name" placeholder="John Doe *" className={styles.input} required />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}><span>02.</span> What's your email?</label>
              <input type="email" id="email" placeholder="john@example.com *" className={styles.input} required />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="service" className={styles.label}><span>03.</span> What are you looking for?</label>
              <input type="text" id="service" placeholder="Web Design, Branding, SEO..." className={styles.input} />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="message" className={styles.label}><span>04.</span> Tell us about your project</label>
              <textarea id="message" placeholder="Hello, I would like to talk about... *" className={styles.textarea} required></textarea>
            </div>

            <button type="submit" className={styles.submitBtn}>Send Message</button>
          </form>
        </div>

      </div>
    </section>
  );
}
