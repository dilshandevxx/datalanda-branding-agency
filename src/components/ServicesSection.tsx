"use client";

import { useState } from 'react';
import styles from './ServicesSection.module.css';
import SectionHeader from './SectionHeader';

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const services = [
    {
      title: "Web Development",
      description: "We build highly scalable, fast, and secure web applications using the latest modern technologies and robust backend frameworks to drive your business forward."
    },
    {
      title: "Mobile App Development",
      description: "We develop custom native and cross-platform mobile applications that deliver seamless performance and exceptional user experiences on both iOS and Android."
    },
    {
      title: "AI & Machine Learning",
      description: "Leverage the power of Artificial Intelligence to optimize your operations, automate complex workflows, and unlock new possibilities and data-driven insights for your business."
    },
    {
      title: "Custom Software Development",
      description: "We engineer bespoke software solutions tailored specifically to your unique business requirements, ensuring high performance, security, and scalability."
    },
    {
      title: "Cloud & DevOps",
      description: "Streamline your deployment pipelines and ensure your applications run reliably with our comprehensive cloud infrastructure, automation, and DevOps services."
    },
    {
      title: "UI/UX Design",
      description: "We craft intuitive and visually stunning user interfaces and experiences, ensuring your digital products are not only beautiful but also highly usable and engaging."
    },
    {
      title: "Cybersecurity",
      description: "We implement robust security measures and protocols to protect your digital assets, ensuring data integrity and safeguarding your systems against modern cyber threats."
    },
    {
      title: "IT Consulting & Support",
      description: "We provide strategic IT guidance and ongoing technical support to help you navigate digital transformation and maintain optimal system performance."
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
