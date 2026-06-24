import styles from './WaitlistSection.module.css';

export default function WaitlistSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Join the waitlist.</h2>
        <p className={styles.desc}>
          We're launching our new digital ecosystem globally soon.<br />
          Waitlist members get early access.
        </p>
        
        <form className={styles.form}>
          <div className={styles.inputWrapper}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className={styles.input}
              required
            />
            <button type="submit" className={styles.button} aria-label="Submit email">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
