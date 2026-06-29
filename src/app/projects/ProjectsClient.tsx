"use client";

import { useState } from 'react';
import Header from '@/components/Header';
import FooterSection from '@/components/FooterSection';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Projects.module.css';
import ProjectDrawer from '@/components/ProjectDrawer';

// Using the exact filters from the screenshot
const CATEGORIES = ["All", "Landing Page", "E-Commerce", "Web App", "Corporate", "Branding"];

export default function ProjectsClient({ initialProjects }: { initialProjects: any[] }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredProjects = activeCategory === "All" 
    ? initialProjects 
    : initialProjects.filter(p => p.category?.toLowerCase() === activeCategory.toLowerCase());

  const visibleProjects = filteredProjects.slice(0, visibleCount);

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
              onClick={() => {
                setActiveCategory(cat);
                setVisibleCount(6);
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.grid}>
        {visibleProjects.map((project, i) => (
          <div 
            key={`${project._id || i}-${activeCategory}`} 
            className={styles.projectCard}
            onClick={() => setSelectedProject(project)}
            style={{ cursor: 'pointer' }}
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
          </div>
        ))}
      </div>

      {visibleCount < filteredProjects.length && (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '4rem 0' }}>
          <button 
            onClick={() => setVisibleCount(prev => prev + 6)}
            style={{
              background: 'transparent',
              color: '#ffffff',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              padding: '1rem 2.5rem',
              borderRadius: '100px',
              fontSize: '1rem',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
            }}
          >
            Show More
          </button>
        </div>
      )}

      <FooterSection />
      
      <ProjectDrawer 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </main>
  );
}
