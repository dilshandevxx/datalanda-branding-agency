import styles from './WhyUsSection.module.css';

export default function WhyUsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.text}>
          Branding, design and digital systems that turn businesses into brands.
          <br className={styles.break} /> Brands which enrich lives, nature and founders.
        </h2>
        <button className={styles.button}>WHY US?</button>
      </div>
    </section>
  );
}
