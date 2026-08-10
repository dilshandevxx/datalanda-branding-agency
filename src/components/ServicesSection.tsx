"use client";

import { useState } from 'react';
import styles from './ServicesSection.module.css';
import SectionHeader from './SectionHeader';

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const services = [
    {
      title: "UI/UX Design",
      description: "We craft intuitive and visually stunning user interfaces and experiences, ensuring your digital products are not only beautiful but also highly usable and engaging."
    },
    {
      title: "Web Development",
      description: "Our team builds fast, scalable, and secure web applications using the latest modern technologies like Next.js, React, and robust backend frameworks."
    },
    {
      title: "App Development",
      description: "We develop cross-platform and native mobile applications that deliver seamless performance and exceptional user experiences on both iOS and Android."
    },
    {
      title: "Digital Marketing",
      description: "We drive growth through data-driven digital marketing strategies, including SEO, content marketing, and targeted advertising campaigns."
    },
    {
      title: "AI Consulting",
      description: "Leverage the power of Artificial Intelligence to optimize your operations, automate workflows, and unlock new possibilities for your business."
    },
    {
      title: "Agentic Systems",
      description: "We design and implement autonomous AI agents that can handle complex tasks, reason through problems, and execute workflows with minimal human oversight."
    },
    {
      title: "Cloud & DevOps",
      description: "Streamline your deployment pipelines and ensure your applications run reliably with our comprehensive cloud infrastructure and DevOps services."
    },
    {
      title: "Brand Identity",
      description: "We forge comprehensive brand identities, from logo design to brand guidelines, ensuring a consistent and memorable presence across all touchpoints."
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        
        <SectionHeader 
          label="OUR SERVICES" 
          title={<>Elevating brands through<br/>design and engineering</>} 
        />

        <div className={styles.accordion}>
          {services.map((svc, index) => {
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
                    <span className={styles.text}>{svc.title}</span>
                  </h3>
                  <div className={styles.icon}>+</div>
                </div>
                <div className={styles.answerWrapper}>
                  <div className={styles.answerInner}>
                    <p className={styles.answer}>{svc.description}</p>
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
