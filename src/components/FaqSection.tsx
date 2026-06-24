"use client";

import { useState } from 'react';
import Image from 'next/image';
import styles from './FaqSection.module.css';

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Do you provide services outside your local area?",
      a: "Yes, DataLands is a global digital agency. We partner with clients worldwide, and our communication processes are perfectly optimized for remote collaboration."
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
      <div className={styles.grid}>
        
        {/* Left Column: Visuals & Contact */}
        <div className={styles.visualsCol}>
          <div className={styles.imagesRow}>
            <div className={styles.imageWrapper}>
              <Image src="/work_1.png" alt="App Mockup" fill sizes="(max-width: 992px) 40vw, 15vw" style={{ objectFit: 'cover' }} />
            </div>
            <div className={styles.imageWrapper}>
              <Image src="/work_2.png" alt="Packaging Mockup" fill sizes="(max-width: 992px) 60vw, 25vw" style={{ objectFit: 'cover' }} />
            </div>
          </div>
          
          <div className={styles.contactBox}>
            <div className={styles.contactIcon}>?</div>
            <div className={styles.contactText}>
              Get in touch with us via email at 
              <a href="mailto:hello@datalands.com">hello@datalands.com</a> 
              or use the chat widget in the bottom right corner of the page.
            </div>
          </div>
        </div>

        {/* Right Column: FAQ Accordion */}
        <div className={styles.faqCol}>
          <h2 className={styles.title}>
            For any other questions, get in touch!
          </h2>
          
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
                    <h3 className={styles.question}>{faq.q}</h3>
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

      </div>
    </section>
  );
}
