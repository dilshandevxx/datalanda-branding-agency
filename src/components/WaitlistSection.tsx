import Image from 'next/image';
import styles from './WaitlistSection.module.css';

export default function WaitlistSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.contentCol}>
          <h2 className={styles.title}>Join the waitlist</h2>
          <p className={styles.desc}>
            We're launching our new digital ecosystem globally soon.<br/>
            Waitlist members get early access.
          </p>
          
          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <input 
                type="email" 
                placeholder="Email" 
                className={styles.input}
                required
              />
              <button type="submit" className={styles.button}>
                Join now
              </button>
            </div>
            <p className={styles.footnote}>*Secure your spot in the next era of digital products.</p>
          </form>
        </div>

        <div className={styles.imageCol}>
          <div className={styles.imageWrapper}>
            <Image
              src="/waitlist_mockup.png"
              alt="Platform waitlist mockup"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
