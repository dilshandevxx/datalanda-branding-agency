"use client";

import { useState } from 'react';
import Header from '@/components/Header';
import FooterSection from '@/components/FooterSection';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Projects.module.css';
import { ALL_PROJECTS } from '@/data/projects';

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
          <Link 
            href={`/projects/${project.id}`}
            key={`${project.id}-${activeCategory}`} 
            className={`${styles.projectCard} ${i % 2 !== 0 ? styles.staggered : ''}`}
            style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}
          >
            <div className={`${styles.imageWrapper} ${styles[project.ratioClass]}`}>
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
          </Link>
        ))}
      </div>

      <FooterSection />
    </main>
  );
}
