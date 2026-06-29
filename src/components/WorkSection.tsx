import Link from 'next/link';
import Image from 'next/image';
import styles from './WorkSection.module.css';
import { ALL_PROJECTS } from '@/data/projects';
import { client } from '@/sanity/lib/client';
import { projectsQuery } from '@/sanity/lib/queries';

export default async function WorkSection() {
  let liveProjects = [];
  try {
    liveProjects = await client.fetch(projectsQuery);
  } catch (error) {
    console.error("Failed to fetch Sanity projects", error);
  }

  const combinedProjects = [...liveProjects, ...ALL_PROJECTS];
  const projects = combinedProjects.slice(0, 4);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.dot}></div>
          <h2 className={styles.title}>OUR WORK</h2>
        </div>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <Link 
              href={project.websiteUrl || '#'}
              target={project.websiteUrl ? "_blank" : undefined}
              rel={project.websiteUrl ? "noopener noreferrer" : undefined}
              key={project.id} 
              className={`${styles.projectCard} ${i % 2 !== 0 ? styles.staggered : ''}`}
              style={{ display: 'block' }} // Ensure link behaves as a block
            >
              <div className={`${styles.imageWrapper} ${styles.ratioSquare}`}>
                <div className={styles.imageInner}>
                  <Image 
                    src={project.cardImageUrl || project.img} 
                    alt={project.title} 
                    fill 
                    sizes="(max-width: 768px) 85vw, 50vw"
                    style={{ objectFit: 'cover' }} 
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className={styles.footerActions}>
          <Link href="/projects" className={styles.viewAllBtn}>
            View All Projects <span className={styles.btnArrow}>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
