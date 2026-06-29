"use client";
import { useEffect } from 'react';
import Image from 'next/image';
import styles from './ProjectDrawer.module.css';

interface Project {
  title: string;
  category: string;
  client?: string;
  year?: string;
  role?: string;
  challenge?: string;
  solution?: string;
  shortDescription?: string;
  websiteUrl?: string;
  cardImageUrl?: string;
  mainImageUrl?: string;
  img?: string;
}

interface ProjectDrawerProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ExternalLinkIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

export default function ProjectDrawer({ project, isOpen, onClose }: ProjectDrawerProps) {
  
  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!project) return null;

  const imageUrl = project.mainImageUrl || project.cardImageUrl || project.img || '';

  return (
    <>
      <div 
        className={`${styles.overlay} ${isOpen ? styles.open : ''}`} 
        onClick={onClose}
      />
      
      <div className={`${styles.drawer} ${isOpen ? styles.open : ''}`}>
        
        <div className={styles.header}>
          <h2 className={styles.title}>{project.title}</h2>
          <button onClick={onClose} className={styles.closeButton} aria-label="Close">
            <CloseIcon />
          </button>
        </div>

        <div className={styles.content}>
          {imageUrl && (
            <div className={styles.imageWrapper}>
              <Image 
                src={imageUrl} 
                alt={project.title}
                fill
                sizes="(max-width: 600px) 100vw, 600px"
                style={{ objectFit: 'cover' }}
              />
            </div>
          )}

          <div className={styles.metaGrid}>
            {project.client && (
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Client</span>
                <span className={styles.metaValue}>{project.client}</span>
              </div>
            )}
            {project.year && (
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Year</span>
                <span className={styles.metaValue}>{project.year}</span>
              </div>
            )}
            {project.category && (
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Category</span>
                <span className={styles.metaValue}>{project.category}</span>
              </div>
            )}
            {project.role && (
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Role</span>
                <span className={styles.metaValue}>{project.role}</span>
              </div>
            )}
          </div>

          {(project.challenge || project.shortDescription) && (
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>The Challenge</h3>
              <p className={styles.sectionText}>
                {project.challenge || project.shortDescription}
              </p>
            </div>
          )}

          {project.solution && (
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>The Solution</h3>
              <p className={styles.sectionText}>{project.solution}</p>
            </div>
          )}
        </div>

        {project.websiteUrl && (
          <div className={styles.footer}>
            <a 
              href={project.websiteUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.visitBtn}
            >
              Visit Website
              <ExternalLinkIcon />
            </a>
          </div>
        )}
        
      </div>
    </>
  );
}
