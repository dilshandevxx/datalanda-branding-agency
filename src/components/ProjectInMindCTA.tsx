"use client";

import styles from './ProjectInMindCTA.module.css';

export default function ProjectInMindCTA() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <h2 className={styles.headline}>Have a project in mind?</h2>
          <p className={styles.paragraph}>
            Tell us about your project—whether it's a website, SEO, or marketing.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.infoCol}>
            <div className={styles.infoBlock}>
              <h4 className={styles.infoLabel}>Direct Contact</h4>
              <a href="mailto:hello@studio.com" className={styles.infoText}>hello@studio.com</a>
              <a href="tel:+1234567890" className={styles.infoText}>+1 (234) 567-890</a>
            </div>

            <div className={styles.infoBlock}>
              <h4 className={styles.infoLabel}>Location</h4>
              <p className={styles.infoText}>123 Creative Street<br/>New York, NY 10001</p>
            </div>
          </div>

          <form className={styles.formCol} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.inputGroup}>
              <label htmlFor="name" className={styles.label}>01. What's your name?</label>
              <input type="text" id="name" placeholder="John Doe *" className={styles.input} required />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>02. What's your email?</label>
              <input type="email" id="email" placeholder="john@example.com *" className={styles.input} required />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="service" className={styles.label}>03. What are you looking for?</label>
              <input type="text" id="service" placeholder="Web Design, Branding, SEO..." className={styles.input} />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="message" className={styles.label}>04. Tell us about your project</label>
              <textarea id="message" placeholder="Hello, I would like to talk about... *" className={styles.textarea} required></textarea>
            </div>

            <button type="submit" className={styles.submitBtn}>SEND MESSAGE</button>
          </form>
        </div>

      </div>
    </section>
  );
}
