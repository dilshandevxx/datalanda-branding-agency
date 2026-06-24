"use client";

import Image from 'next/image';
import styles from './TestimonialSection.module.css';

export default function TestimonialSection() {

  const testimonials = [
    {
      id: 1,
      quote: "The engineering quality and design aesthetic they brought to our product completely revolutionized our market positioning. Absolute masters of their craft.",
      name: "Sarah Jenkins",
      title: "Chief Product Officer",
      img: "/studio_1.png"
    },
    {
      id: 2,
      quote: "Working with them felt like an extension of our own team. Their architectural decisions and brutalist design approach saved us months of development time.",
      name: "Marcus Thorne",
      title: "Founder & CEO",
      img: "/studio_2.png"
    },
    {
      id: 3,
      quote: "They don't just build software; they build digital legacies. The attention to micro-interactions and performance optimization is simply unmatched in the industry.",
      name: "Elena Rostova",
      title: "Creative Director",
      img: "/studio_3.png"
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.marqueeTrack}>
        <div className={styles.marqueeGroup}>
          {testimonials.map((testi) => (
            <div key={`g1-${testi.id}`} className={styles.card}>
              <div className={styles.avatar}>
                <Image src={testi.img} alt={testi.name} fill sizes="80px" />
              </div>
              <p className={styles.quote}>{testi.quote}</p>
              <p className={styles.author}>{testi.name} - {testi.title}</p>
            </div>
          ))}
        </div>
        <div className={styles.marqueeGroup}>
          {testimonials.map((testi) => (
            <div key={`g2-${testi.id}`} className={styles.card}>
              <div className={styles.avatar}>
                <Image src={testi.img} alt={testi.name} fill sizes="80px" />
              </div>
              <p className={styles.quote}>{testi.quote}</p>
              <p className={styles.author}>{testi.name} - {testi.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
