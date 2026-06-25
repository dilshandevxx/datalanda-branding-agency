import Image from 'next/image';
import styles from './FooterCTASection.module.css';

export default function FooterCTASection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Image Column */}
        <div className={styles.imageCol}>
          <Image 
            src="/hero_bg.jpg" // Using an existing placeholder image
            alt="Inspiration" 
            fill 
            style={{ objectFit: 'cover' }} 
          />
        </div>

        {/* Text Column */}
        <div className={styles.textCol}>
          <div className={styles.meta}>
            <span>FEB 10, 2020</span>
            <span className={styles.category}>INSPIRATION</span>
          </div>
          
          <h2 className={styles.title}>
            Emerging trends that will shape the future
          </h2>
          
          <p className={styles.desc}>
            Fusce nec erat sed nisl lobortis eleifend. In eu fringilla leo. Curabitur dignissim efficitur lorem nec fermentum.
          </p>
        </div>

      </div>
    </section>
  );
}
