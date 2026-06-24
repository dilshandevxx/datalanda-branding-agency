"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './InteractivePortfolio.module.css';

const projects = [
  {
    id: 1,
    name: "Jupi",
    tag: "SAAS",
    image: "/hero-hands-premium.png",
    logo: "JUPI"
  },
  {
    id: 2,
    name: "Everbloom",
    tag: "FASHION",
    image: "/hero-abstract.png",
    logo: "EVERBLOOM"
  },
  {
    id: 3,
    name: "Trellis",
    tag: "WEB3",
    image: "/work_1.png",
    logo: "TRELLIS"
  },
  {
    id: 4,
    name: "Big Cartel",
    tag: "ECOMMERCE",
    image: "/work_2.png",
    logo: "BIG CARTEL"
  },
  {
    id: 5,
    name: "Chester Zoo",
    tag: "ENTERTAINMENT",
    image: "/studio_1.png",
    logo: "CHESTER ZOO"
  }
];

export default function InteractivePortfolio() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={styles.section}>
      {/* Background Images Layer */}
      <div className={styles.bgLayer}>
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className={`${styles.bgImage} ${index === activeIndex ? styles.activeBg : ''}`}
          >
            <Image
              src={project.image}
              alt={project.name}
              fill
              priority={index === 0}
              sizes="100vw"
              style={{ objectFit: 'cover' }}
            />
            {/* Dark overlay for text readability */}
            <div className={styles.overlay}></div>
          </div>
        ))}
      </div>

      {/* Horizon Navigation Layer */}
      <div className={styles.navLayer}>
        <div className={styles.navList}>
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`${styles.navItem} ${index === activeIndex ? styles.activeItem : ''}`}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <h3 className={styles.projectName}>{project.name}</h3>
              <span className={styles.projectTag}>{project.tag}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating View All Button */}
      <Link href="/projects" className={styles.viewAllBtn}>
        <span>VIEW ALL<br/>WORK</span>
      </Link>

      {/* Dynamic Bottom Logo */}
      <div className={styles.bottomLogoContainer}>
        {projects.map((project, index) => (
          <h2 
            key={project.id} 
            className={`${styles.bottomLogo} ${index === activeIndex ? styles.activeLogo : ''}`}
          >
            {project.logo}
          </h2>
        ))}
      </div>
    </section>
  );
}
