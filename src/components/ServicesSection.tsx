"use client";

import { useState } from 'react';
import Image from 'next/image';
import styles from './ServicesSection.module.css';

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const services = [
    {
      num: "01.",
      title: "AI CONSULTING & STRATEGY",
      desc: "Whether you're just exploring possibilities or looking to scale existing tools, we build a clear plan that aligns with your goals.",
      tags: ["#AICONSULTING", "#BUSINESSAUTOMATION"],
      img: "/service_1.png",
    },
    {
      num: "02.",
      title: "AGENTIC & AUTOMATION SYSTEMS",
      desc: "Revolutionize your workflows with autonomous agentic systems. We design intelligent, self-correcting automation pipelines.",
      tags: ["#AGENTICSYSTEMS", "#WORKFLOWS"],
      img: "/service_2.png",
    },
    {
      num: "03.",
      title: "SOFTWARE DEVELOPMENT",
      desc: "A beautiful interface means nothing without a robust foundation. We architect enterprise-grade software capable of massive concurrency.",
      tags: ["#ENGINEERING", "#ARCHITECTURE"],
      img: "/service_3.png",
    },
    {
      num: "04.",
      title: "UI/UX DESIGN",
      desc: "We don't just build software; we architect your market presence with a striking user experience that commands industry authority.",
      tags: ["#PRODUCTDESIGN", "#AESTHETICS"],
      img: "/service_4.png",
    },
    {
      num: "05.",
      title: "CLOUD & DEVOPS",
      desc: "Seamlessly transition to the cloud with our expert DevOps strategies. We optimize your infrastructure for maximum uptime and scalability.",
      tags: ["#CLOUD", "#DEVOPS"],
      img: "/service_1.png",
    },
    {
      num: "06.",
      title: "BRAND IDENTITY & STRATEGY",
      desc: "We don't just create logos; we forge comprehensive brand identities that resonate emotionally and stand out visually in crowded markets.",
      tags: ["#BRANDING", "#STRATEGY"],
      img: "/service_2.png",
    },
    {
      num: "07.",
      title: "MOBILE & CROSS-PLATFORM",
      desc: "Deliver exceptional mobile experiences across all devices. Our cross-platform engineering ensures your apps perform flawlessly.",
      tags: ["#MOBILE", "#IOSANDROID"],
      img: "/service_3.png",
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.label}>
          <div className={styles.dot}></div>
          <span>What We Do</span>
        </div>
        <h2 className={styles.title}>SERVICES.</h2>
      </div>

      <div className={styles.list}>
        {services.map((svc, index) => {
          const isActive = activeIndex === index;
          
          return (
            <div 
              key={svc.num} 
              className={`${styles.item} ${isActive ? styles.active : ''}`}
              onClick={() => toggleAccordion(index)}
            >
              <div className={styles.colNum}>{svc.num}</div>
              <div className={styles.colTitle}>{svc.title}</div>
              
              <div className={styles.colImage}>
                <div className={styles.imageWrapper}>
                  <div className={styles.imageInner}>
                    <Image
                      src={svc.img}
                      alt={svc.title}
                      fill
                      sizes="(max-width: 992px) 100vw, 30vw"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
              </div>

              <div className={styles.colText}>
                <div className={styles.textWrapper}>
                  <div className={styles.textInner}>
                    <p className={styles.desc}>{svc.desc}</p>
                    <div className={styles.tags}>
                      {svc.tags.map(tag => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.colIcon}>
                <div className={styles.iconWrapper}>
                  +
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.mobileList}>
        <ul>
          <li>Branding</li>
          <li>Brand Strategy</li>
          <li>Motion graphics</li>
          <li>Video editing</li>
          <li>3D animation</li>
          <li>Audio production</li>
          <li>Web design</li>
          <li>Photography</li>
          <li>Naming</li>
          <li>Packaging</li>
          <li>Advertising</li>
          <li>Brand art<span className={styles.trademark}>®</span></li>
        </ul>
      </div>
    </section>
  );
}
