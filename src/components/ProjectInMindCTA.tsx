"use client";

import styles from './ProjectInMindCTA.module.css';

export default function ProjectInMindCTA() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        
        {/* Left Side Content */}
        <div className={styles.contentSide}>
          <h2 className={styles.title}>
            GOT A PROJECT IN MIND<span className={styles.accent}>?</span>
          </h2>
          <p className={styles.desc}>
            We're always looking for new challenges and interesting partners. 
            Let's create something extraordinary together.
          </p>
          <div className={styles.contactDetails}>
            <a href="mailto:hello@skylabs.com" className={styles.link}>hello@skylabs.com</a>
            <a href="tel:+1234567890" className={styles.link}>+1 (234) 567 890</a>
          </div>
        </div>

        {/* Right Side Form */}
        <div className={styles.formSide}>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.inputWrapper}>
              <input type="text" placeholder="Your Name" className={styles.input} required />
            </div>
            <div className={styles.inputWrapper}>
              <input type="email" placeholder="Email Address" className={styles.input} required />
            </div>
            <div className={styles.inputWrapper}>
              <textarea placeholder="Tell us about your project..." className={styles.textarea} required></textarea>
            </div>
            <button type="submit" className={styles.submitBtn}>
              SEND INQUIRY
              <span className={styles.btnArrow}>→</span>
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
