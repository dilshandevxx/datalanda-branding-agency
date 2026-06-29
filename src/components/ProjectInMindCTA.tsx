"use client";

import styles from './ProjectInMindCTA.module.css';

export default function ProjectInMindCTA() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <h2 className={styles.headline}>
            Let's start a <br/>
            conversation<span className={styles.yellowDot}>.</span>
          </h2>
          <a href="mailto:hello@skylabs.com" className={styles.emailLink}>hello@skylabs.com</a>
        </div>

        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label htmlFor="name" className={styles.label}>Name*</label>
              <input type="text" id="name" placeholder="..." className={styles.input} required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="company" className={styles.label}>Company Name*</label>
              <input type="text" id="company" placeholder="..." className={styles.input} required />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>Company Email*</label>
              <input type="email" id="email" placeholder="..." className={styles.input} required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="phone" className={styles.label}>Phone*</label>
              <input type="tel" id="phone" placeholder="..." className={styles.input} required />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label htmlFor="lookingFor" className={styles.label}>I'm looking for*</label>
              <div className={styles.selectWrapper}>
                <select id="lookingFor" className={styles.select} required defaultValue="">
                  <option value="" disabled>Select</option>
                  <option value="web">Web Design</option>
                  <option value="branding">Branding</option>
                  <option value="seo">SEO</option>
                </select>
              </div>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="source" className={styles.label}>I heard about Skylabs from*</label>
              <div className={styles.selectWrapper}>
                <select id="source" className={styles.select} required defaultValue="google">
                  <option value="google">Google</option>
                  <option value="social">Social Media</option>
                  <option value="referral">Referral</option>
                </select>
              </div>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label htmlFor="budget" className={styles.label}>My budget range is*</label>
              <div className={styles.selectWrapper}>
                <select id="budget" className={styles.select} required defaultValue="25k">
                  <option value="25k">Less Than $25K</option>
                  <option value="50k">$25K - $50K</option>
                  <option value="100k">$50K - $100K</option>
                  <option value="100k+">$100K+</option>
                </select>
              </div>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label htmlFor="details" className={styles.label}>Project Details*</label>
              <textarea 
                id="details" 
                placeholder="Let us know more about what you're looking for" 
                className={styles.textarea} 
                required 
              />
            </div>
          </div>

          <button type="submit" className={styles.submitBtn}>Send</button>
        </form>

      </div>
    </section>
  );
}
