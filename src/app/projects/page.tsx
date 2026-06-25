"use client";

import { useState } from 'react';
import Header from '@/components/Header';
import FooterSection from '@/components/FooterSection';
import Image from 'next/image';
import styles from './Projects.module.css';

const ALL_PROJECTS = [
  {
    id: 1,
    title: "NeuroGen platform",
    category: "AI",
    img: "/work_1.png",
    ratioClass: styles.ratioStandard
  },
  {
    id: 2,
    title: "EcoSpace Web",
    category: "Web",
    img: "/work_2.png",
    ratioClass: styles.ratioPortrait
  },
  {
    id: 3,
    title: "Visionary ML",
    category: "ML",
    img: "/work_1.png", 
    ratioClass: styles.ratioWide
  },
  {
    id: 4,
    title: "Flow UI Kit",
    category: "UI/UX",
    img: "/work_2.png", 
    ratioClass: styles.ratioSquare
  },
  {
    id: 5,
    title: "Onyx Packaging",
    category: "Branding",
    img: "/work_1.png",
    ratioClass: styles.ratioPortrait
  },
  {
    id: 6,
    title: "Predictive Engines",
    category: "ML",
    img: "/work_2.png",
    ratioClass: styles.ratioStandard
  },
  {
    id: 7,
    title: "Fitness Tracker App",
    category: "Mobile",
    img: "/work_1.png",
    ratioClass: styles.ratioWide
  },
  {
    id: 8,
    title: "Creative Portfolio Web",
    category: "Web",
    img: "/work_2.png",
    ratioClass: styles.ratioSquare
  },
  {
    id: 9,
    title: "Aura Skincare",
    category: "E-Commerce",
    img: "/work_1.png",
    ratioClass: styles.ratioStandard
  },
  {
    id: 10,
    title: "Crypto Wallet App",
    category: "Web3",
    img: "/work_2.png",
    ratioClass: styles.ratioPortrait
  }
];

const CATEGORIES = ["All", "Web", "Mobile", "UI/UX", "Branding", "AI", "ML", "E-Commerce", "Web3"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? ALL_PROJECTS 
    : ALL_PROJECTS.filter(p => p.category === activeCategory);

  return (
    <main className={styles.pageWrapper}>
      <Header />
      
      <div className={styles.hero}>
        <h1 className={styles.title}>OUR WORK.</h1>
        <p className={styles.subtitle}>
          We craft digital experiences that merge cutting-edge technology with stunning design.
        </p>
      </div>

      <div className={styles.filterBar}>
        {CATEGORIES.map(cat => (
          <button 
            key={cat}
            className={`${styles.filterBtn} ${activeCategory === cat ? styles.activeFilter : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filteredProjects.map((project, i) => (
          <div 
            key={`${project.id}-${activeCategory}`} 
            className={`${styles.projectCard} ${i % 2 !== 0 ? styles.staggered : ''}`}
          >
            <div className={`${styles.imageWrapper} ${project.ratioClass}`}>
              <div className={styles.imageInner}>
                <Image 
                  src={project.img} 
                  alt={project.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }} 
                />
              </div>
            </div>
            <div className={styles.projectInfo}>
              <div className={styles.textStack}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <span className={styles.projectCategory}>{project.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <FooterSection />
    </main>
  );
}
