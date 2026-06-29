"use client";

import Image from 'next/image';
import styles from './ProjectInMindCTA.module.css';

export default function ProjectInMindCTA() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        
        {/* Left Side Content */}
        <div className={styles.contentSide}>
          <div className={styles.label}>
            <span className={styles.dots}>:::</span> CONTACT WITH US
          </div>
          
          <h2 className={styles.title}>
            Book your <br />
            <span className={styles.highlight}>consultation</span>
          </h2>
          
          <p className={styles.desc}>
            There cursus massa at urnaaculis estie. Sed aliquamellus vitae
            ultrs condmentum leo massa mollis.
          </p>
          
          <ul className={styles.list}>
            <li>
              <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="#ff6a00"/>
                <path d="M7 12L10.5 15.5L17 8.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Making this the first true generator on the Internet
            </li>
            <li>
              <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="#ff6a00"/>
                <path d="M7 12L10.5 15.5L17 8.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Lorem Ipsum is not simply random text
            </li>
            <li>
              <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="#ff6a00"/>
                <path d="M7 12L10.5 15.5L17 8.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              If you are going to use a passage
            </li>
          </ul>
          
          <div className={styles.profile}>
            <div className={styles.avatarWrapper}>
              <Image 
                src="https://res.cloudinary.com/dqfcsavwj/image/upload/v1731654497/woman-1_ly6x4a.jpg" 
                alt="Aleesha Brown" 
                fill 
                className={styles.avatar}
              />
            </div>
            <div className={styles.profileInfo}>
              <h4>Aleesha Brown</h4>
              <p>CEO & CO Founder</p>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div className={styles.formSide}>
          <div className={styles.formWrapper}>
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Name" className={styles.input} required />
              <input type="email" placeholder="Email" className={styles.input} required />
              <input type="text" placeholder="Subject" className={styles.input} required />
              <textarea placeholder="Message" className={styles.textarea} required></textarea>
              <button type="submit" className={styles.submitBtn}>Send a Message</button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
