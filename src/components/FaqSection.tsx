"use client";

import { useState } from 'react';
import styles from './FaqSection.module.css';
import SectionHeader from './SectionHeader';

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Do you provide services outside your local area?",
      a: "Yes, SKYLABS is a global digital agency. We partner with clients worldwide, and our communication processes are perfectly optimized for remote collaboration."
    },
    {
      q: "What technologies do you use for development?",
      a: "We leverage modern, highly scalable tech stacks including Next.js, React, Node.js, and cutting-edge autonomous AI architectures."
    },
    {
      q: "Is 3D design and animation included in your packages?",
      a: "Absolutely. Our design packages can be customized to include high-end WebGL, micro-interactions, and 3D modeling."
    },
    {
      q: "What is the typical turnaround time for a project?",
      a: "Depending on the scope, most enterprise projects launch within 3 to 6 months, ensuring unparalleled attention to detail."
    },
    {
      q: "Are you available for long-term partnerships?",
      a: "Yes, we offer dedicated retainers to continuously evolve, manage, and scale your digital presence over time."
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <SectionHeader label="QUESTIONS" title="FAQ." />

        <div className={styles.accordion}>
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            return (
              <div 
                key={index} 
                className={`${styles.faqItem} ${isActive ? styles.active : ''}`}
                onClick={() => toggleAccordion(index)}
              >
                <div className={styles.faqHeader}>
                  <h3 className={styles.question}>
                    <span className={styles.num}>0{index + 1}</span>
                    <span className={styles.text}>{faq.q}</span>
                  </h3>
                  <div className={styles.icon}>+</div>
                </div>
                <div className={styles.answerWrapper}>
                  <div className={styles.answerInner}>
                    <p className={styles.answer}>{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
