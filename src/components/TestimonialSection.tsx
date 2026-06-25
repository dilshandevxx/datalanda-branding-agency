"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './TestimonialSection.module.css';

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: <>The engineering quality and design aesthetic completely <i>revolutionized</i> our market positioning.</>,
      name: "Sarah Jenkins",
      title: "Chief Product Officer",
    },
    {
      id: 2,
      quote: <>Their architectural decisions and <i>brutalist</i> design approach saved us months of development.</>,
      name: "Marcus Thorne",
      title: "Founder & CEO",
    },
    {
      id: 3,
      quote: <>They don't just build software; they build <i>digital legacies</i>. Unmatched in the industry.</>,
      name: "Elena Rostova",
      title: "Creative Director",
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sliderContainer}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={styles.content}
            >
              <h2 className={styles.quote}>
                "{testimonials[currentIndex].quote}"
              </h2>
              
              <div className={styles.authorWrapper}>
                <div className={styles.line}></div>
                <p className={styles.author}>
                  {testimonials[currentIndex].name} <span>— {testimonials[currentIndex].title}</span>
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className={styles.controls}>
          {testimonials.map((_, i) => (
            <button 
              key={i} 
              aria-label={`Go to testimonial ${i + 1}`}
              className={`${styles.dot} ${i === currentIndex ? styles.dotActive : ''}`}
              onClick={() => setCurrentIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
