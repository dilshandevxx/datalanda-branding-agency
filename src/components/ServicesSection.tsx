"use client";

import { useState } from 'react';
import Image from 'next/image';
import styles from './ServicesSection.module.css';

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const services = [
    {
      num: "(001)",
      title: "AI & ENGINEERING",
      desc: "We build highly scalable, resilient architectures that leverage cutting-edge artificial intelligence. From predictive models to deep learning integrations, we engineer systems that put you years ahead of the competition.",
      img: "/service_1.png",
    },
    {
      num: "(002)",
      title: "AGENTIC & AUTOMATION SYSTEMS",
      desc: "Revolutionize your workflows with autonomous agentic systems. We design intelligent, self-correcting automation pipelines that drastically reduce overhead and eliminate human error in complex operations.",
      img: "/service_2.png",
    },
    {
      num: "(003)",
      title: "SOFTWARE DEVELOPMENT",
      desc: "A beautiful interface means nothing without a robust foundation. We architect enterprise-grade software capable of handling massive concurrency with near-zero latency.",
      img: "/service_3.png",
    },
    {
      num: "(004)",
      title: "UI/UX DESIGN",
      desc: "We don't just build software; we architect your market presence. Our designers align your technical capabilities with a striking user experience that commands industry authority.",
      img: "/service_4.png",
    },
    {
      num: "(005)",
      title: "CLOUD & DEVOPS",
      desc: "Seamlessly transition to the cloud with our expert DevOps strategies. We optimize your infrastructure for maximum uptime, security, and scalability.",
      img: "/service_1.png",
    },
    {
      num: "(006)",
      title: "AUTOMATION & SCALING",
      desc: "We help you achieve hyper-growth through relentless automation. By identifying bottlenecks and implementing custom scaling solutions, we ensure your tech stack can handle rapid expansion.",
      img: "/service_2.png",
    },
    {
      num: "(007)",
      title: "MOBILE & CROSS-PLATFORM",
      desc: "Deliver exceptional mobile experiences across all devices. Our cross-platform engineering team ensures your apps perform flawlessly whether on iOS, Android, or the web.",
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
              className={styles.item}
              onClick={() => toggleAccordion(index)}
            >
              <div className={styles.itemHeader}>
                <span className={styles.itemNum}>{svc.num}</span>
                <h3 className={styles.itemTitle}>{svc.title}</h3>
                <div className={`${styles.iconWrapper} ${isActive ? styles.active : ''}`}>
                  +
                </div>
              </div>
              
              <div className={`${styles.contentWrapper} ${isActive ? styles.active : ''}`}>
                <div className={styles.contentInner}>
                  <div className={styles.contentBody}>
                    <p className={styles.desc}>{svc.desc}</p>
                    <div className={styles.imageWrapper}>
                      <Image
                        src={svc.img}
                        alt={svc.title}
                        fill
                        sizes="(max-width: 992px) 100vw, 50vw"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
