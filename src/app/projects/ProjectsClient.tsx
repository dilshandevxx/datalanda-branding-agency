"use client";

import { useState } from 'react';
import Header from '@/components/Header';
import FooterSection from '@/components/FooterSection';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Projects.module.css';

// Using the exact filters from the screenshot
const CATEGORIES = ["Featured", "Latest News", "All", "Studio", "Perspective", "Publications", "Press", "Work"];

export default function ProjectsClient({ initialProjects }: { initialProjects: any[] }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? initialProjects 
    : initialProjects.filter(p => p.category?.toLowerCase() === activeCategory.toLowerCase());

  return (
    <main className={styles.pageWrapper}>
      <Header />
      
      <div className={styles.hero}>
        <h1 className={styles.title}>
          SELECTED WORKS.
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
            href={project.websiteUrl || '#'}
            target={project.websiteUrl ? "_blank" : undefined}
            rel={project.websiteUrl ? "noopener noreferrer" : undefined}
            key={`${project._id || i}-${activeCategory}`} 
            className={styles.projectCard}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className={styles.imageWrapper}>
              <div className={styles.imageInner}>
                {/* Fallback to legacy img if Sanity mainImageUrl is missing */}
                <Image 
                  src={project.cardImageUrl || project.mainImageUrl || project.img || ''} 
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
