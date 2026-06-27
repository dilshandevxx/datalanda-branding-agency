"use client";

import Image from 'next/image';
import styles from './ProjectInMindCTA.module.css';
import { siteConfig } from '../data/siteConfig';

export default function ProjectInMindCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Massive Headline */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            Have a project <span className={styles.italic}>in mind?</span>
          </h2>
        </div>

        <div className={styles.content}>
          {/* Left: Contact details */}
          <div className={styles.contactDetails}>
            <p className={styles.description}>
              Tell us about your project—whether it's a website, SEO, or marketing. We are ready to create and collaborate.
            </p>

            <div className={styles.divider}></div>
            
            <div className={styles.infoBlock}>
              <span className={styles.label}>Direct Contact</span>
              <a href="mailto:hello@studio.com" className={styles.link}>hello@studio.com</a>
              <a href="tel:+1234567890" className={styles.link}>+1 (234) 567-890</a>
            </div>

            <div className={styles.infoBlock}>
              <span className={styles.label}>Location</span>
              <p className={styles.text}>123 Creative Street<br/>New York, NY 10001</p>
            </div>
            
            <div className={styles.avatarBlock}>
              <div className={styles.avatar}>
                {siteConfig.images.studio.image1 && (
                  <Image 
                    src={siteConfig.images.studio.image1} 
                    alt="Lauren Thompson" 
                    fill 
                    sizes="60px"
                    style={{ objectFit: 'cover' }} 
                  />
                )}
              </div>
              <div className={styles.avatarInfo}>
                 <span className={styles.avatarName}>Lauren Thompson</span>
                 <span className={styles.avatarRole}>Team Lead</span>
              </div>
            </div>
          </div>

          {/* Right: The Form */}
          <div className={styles.formWrapper}>
            <form className={styles.form}>
              <div className={styles.inputRow}>
                <div className={styles.inputGroup}>
                  <label htmlFor="name">01. What's your name?</label>
                  <input type="text" id="name" placeholder="John Doe *" required />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="email">02. What's your email?</label>
                  <input type="email" id="email" placeholder="john@example.com *" required />
                </div>
              </div>
              
              <div className={styles.inputGroup}>
                <label htmlFor="service">03. What are you looking for?</label>
                <input type="text" id="service" placeholder="Web Design, Branding, SEO..." />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="message">04. Tell us about your project</label>
                <textarea id="message" placeholder="Hello, I would like to talk about... *" required></textarea>
              </div>

              <button type="button" className={styles.submitBtn}>
                <span className={styles.btnText}>Send Message</span>
                <span className={styles.btnIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </span>
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
