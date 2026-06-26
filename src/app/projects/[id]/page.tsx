"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { m } from "framer-motion";
import Header from "@/components/Header";
import { getProjectById, ALL_PROJECTS, Project } from "@/data/projects";
import styles from "./ProjectDetail.module.css";

export default function ProjectDetail() {
  const params = useParams();
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);
  const [nextProject, setNextProject] = useState<Project | null>(null);

  useEffect(() => {
    if (params.id) {
      const p = getProjectById(params.id as string);
      if (p) {
        setProject(p);
        
        // Find next project
        const currentIndex = ALL_PROJECTS.findIndex(item => item.id === p.id);
        const nextIndex = (currentIndex + 1) % ALL_PROJECTS.length;
        setNextProject(ALL_PROJECTS[nextIndex]);
      } else {
        router.push("/projects");
      }
    }
  }, [params.id, router]);

  if (!project) return null;

  return (
    <main className={styles.pageWrapper}>
      <Header />
      
      <div className={styles.container}>
        
        {/* Hero Card */}
        <m.section 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={styles.heroCard}
        >
          <div className={styles.heroImageWrapper}>
            <Image 
              src={project.img} 
              alt={project.title} 
              fill 
              sizes="100vw"
              style={{ objectFit: 'cover' }} 
              priority
            />
          </div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>{project.title}</h1>
            <div className={styles.heroMeta}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Client</span>
                <span className={styles.metaValue}>{project.client}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Role</span>
                <span className={styles.metaValue}>{project.role}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Year</span>
                <span className={styles.metaValue}>{project.year}</span>
              </div>
            </div>
          </div>
        </m.section>

        {/* Content Cards Grid */}
        <section className={styles.contentGrid}>
          <m.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className={styles.contentCard}
          >
            <h3 className={styles.cardLabel}>The Challenge</h3>
            <p className={styles.bodyText}>{project.challenge}</p>
          </m.div>

          <m.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={styles.contentCard}
          >
            <h3 className={styles.cardLabel}>Our Solution</h3>
            <p className={styles.bodyText}>{project.solution}</p>
          </m.div>
        </section>

        {/* Gallery Grid */}
        <section className={styles.galleryGrid}>
          {project.gallery.map((img, idx) => (
            <m.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
              className={styles.galleryImageWrapper}
            >
              <Image 
                src={img} 
                alt={`${project.title} gallery image ${idx + 1}`} 
                fill 
                sizes="(max-width: 992px) 100vw, 50vw"
                style={{ objectFit: 'cover' }} 
              />
            </m.div>
          ))}
        </section>

        {/* Next Project Card */}
        {nextProject && (
          <Link href={`/projects/${nextProject.id}`} passHref legacyBehavior>
            <m.a 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={styles.nextProjectCard}
            >
              <span className={styles.nextLabel}>Next Project</span>
              <h2 className={styles.nextTitle}>{nextProject.title}</h2>
            </m.a>
          </Link>
        )}
        
      </div>
    </main>
  );
}
