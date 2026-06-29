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
        <div style={{ display: 'flex', justifyContent: 'center', margin: '5rem 0' }}>
          <button 
            onClick={(e) => {
              const btn = e.currentTarget;
              btn.innerHTML = 'LOADING...';
              btn.style.opacity = '0.5';
              btn.style.pointerEvents = 'none';
              
              setTimeout(() => {
                setVisibleCount(prev => prev + 6);
                btn.innerHTML = 'SHOW MORE';
                btn.style.opacity = '1';
                btn.style.pointerEvents = 'auto';
              }, 600);
            }}
            style={{
              background: 'transparent',
              color: '#ffffff',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              padding: '1.25rem 3rem',
              borderRadius: '0',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = '#ffffff';
              e.currentTarget.style.color = '#000000';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#ffffff';
            }}
          >
            SHOW MORE
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
