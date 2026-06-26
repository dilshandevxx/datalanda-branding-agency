"use client";

import { useEffect, useState, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "@/components/Header";
import { getProjectById, ALL_PROJECTS, Project } from "@/data/projects";
import styles from "./ProjectDetail.module.css";

export default function ProjectDetail() {
  const params = useParams();
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);
  const [nextProject, setNextProject] = useState<Project | null>(null);

  const heroImageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroImageRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

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
        router.push("/projects"); // Fallback if project not found
      }
    }
  }, [params.id, router]);

  if (!project) return null; // or a loader

  return (
    <main className={styles.pageWrapper}>
      <Header />
      
      {/* Hero Typographic Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={styles.heroTitle}
          >
            {project.title}
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className={styles.heroMeta}
          >
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
          </motion.div>
        </div>
      </section>

      {/* Full Bleed Parallax Hero Image */}
      <section className={styles.heroImageWrapper} ref={heroImageRef}>
        <motion.div style={{ y, width: "100%", height: "140%", position: "absolute", top: "-20%" }}>
          <Image 
            src={project.img} 
            alt={project.title} 
            fill 
            sizes="100vw"
            style={{ objectFit: 'cover' }} 
            priority
          />
        </motion.div>
      </section>

      {/* Challenge & Solution Grid */}
      <section className={styles.contentSection}>
        <div className={styles.contentGrid}>
          <div>
            <h3 className={styles.stickyLabel}>The Challenge</h3>
          </div>
          <div>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={styles.bodyText}
            >
              {project.challenge}
            </motion.p>
          </div>
        </div>

        <div className={styles.contentGrid}>
          <div>
            <h3 className={styles.stickyLabel}>Our Solution</h3>
          </div>
          <div>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={styles.bodyText}
            >
              {project.solution}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className={styles.gallery}>
        {project.gallery.map((img, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={styles.galleryImageWrapper}
          >
            <Image 
              src={img} 
              alt={`${project.title} gallery image ${idx + 1}`} 
              fill 
              sizes="(max-width: 768px) 100vw, 80vw"
              style={{ objectFit: 'cover' }} 
            />
          </motion.div>
        ))}
      </section>

      {/* Next Project Massive Link */}
      {nextProject && (
        <Link href={`/projects/${nextProject.id}`} className={styles.nextProject}>
          <span className={styles.nextLabel}>Next Project</span>
          <h2 className={styles.nextTitle}>{nextProject.title}</h2>
        </Link>
      )}
    </main>
  );
}
