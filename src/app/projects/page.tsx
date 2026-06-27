"use client";

import { useState } from 'react';
import Header from '@/components/Header';
import FooterSection from '@/components/FooterSection';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Projects.module.css';
import { ALL_PROJECTS } from '@/data/projects';

// Using the exact filters from the screenshot
const CATEGORIES = ["Featured", "Latest News", "All", "Studio", "Perspective", "Publications", "Press", "Work"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? ALL_PROJECTS 
    : ALL_PROJECTS; // Just showing all for mock purposes, or could filter by matching mock category

  return (
    <main className={styles.pageWrapper}>
      <Header />
      
      <div className={styles.hero}>
        <h1 className={styles.title}>
          OUR THOUGHTS<br/>AND INSIGHT
        </h1>
      </div>

      <div className={styles.filterBar}>
        <div className={styles.filterContainer}>
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
      </div>

      <div className={styles.grid}>
        {filteredProjects.map((project, i) => (
          <Link 
            href={project.websiteUrl || `/projects/${project.id}`}
            target={project.websiteUrl ? "_blank" : undefined}
            rel={project.websiteUrl ? "noopener noreferrer" : undefined}
            key={`${project.id}-${activeCategory}`} 
            className={styles.projectCard}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className={styles.imageWrapper}>
              <div className={styles.imageInner}>
                <Image 
                  src={project.cardImageUrl || project.img} 
                  alt={project.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: 'cover' }} 
                />
              </div>
              <div className={styles.categoryBadge}>
                {project.category}
              </div>
            </div>
            <div className={styles.projectInfo}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.shortDescription}</p>
            </div>
          </Link>
        ))}
      </div>

      <FooterSection />
    </main>
  );
}
