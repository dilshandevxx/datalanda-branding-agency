"use client";

import Image from 'next/image';
import styles from './TestimonialSection.module.css';

export default function TestimonialSection() {

  const testimonials = [
    {
      id: 1,
      quote: "The engineering quality and design aesthetic they brought to our product completely revolutionized our market positioning. Absolute masters of their craft.",
      name: "Samuel Jenkins",
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
      name: "Elias Rostov",
      title: "Creative Director",
      img: "/studio_3.png"
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>CLIENT STORIES.</h2>
        </div>
      </div>
      
      <div className={styles.marqueeTrack}>
        <div className={styles.marqueeGroup}>
          {testimonials.map((testi) => (
            <div key={`g1-${testi.id}`} className={styles.card}>
              <div className={styles.quoteIcon}>"</div>
              <p className={styles.quote}>{testi.quote}</p>
              
              <div className={styles.authorRow}>
                <div className={styles.avatar}>
                  <Image src={testi.img} alt={testi.name} fill sizes="60px" />
                </div>
                <div className={styles.authorInfo}>
                  <p className={styles.authorName}>{testi.name}</p>
                  <p className={styles.authorTitle}>{testi.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Duplicate group for seamless infinite scrolling */}
        <div className={styles.marqueeGroup} aria-hidden="true">
          {testimonials.map((testi) => (
            <div key={`g2-${testi.id}`} className={styles.card}>
              <div className={styles.quoteIcon}>"</div>
              <p className={styles.quote}>{testi.quote}</p>
              
              <div className={styles.authorRow}>
                <div className={styles.avatar}>
                  <Image src={testi.img} alt={testi.name} fill sizes="60px" />
                </div>
                <div className={styles.authorInfo}>
                  <p className={styles.authorName}>{testi.name}</p>
                  <p className={styles.authorTitle}>{testi.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
