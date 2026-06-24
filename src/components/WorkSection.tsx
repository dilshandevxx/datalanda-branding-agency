import Link from 'next/link';
import Image from 'next/image';
import styles from './WorkSection.module.css';

export default function WorkSection() {
  // We define specific aspect ratios for each project to get the "different size cards" look 
  // without messing up the clean staggered grid layout.
  const projects = [
    {
      id: 1,
      title: "Audio Space App",
      category: "UI/UX DESIGN",
      img: "/work_1.png",
      ratioClass: styles.ratioStandard // 4:3
    },
    {
      id: 2,
      title: "Onyx Packaging",
      category: "BRANDING",
      img: "/work_2.png",
      ratioClass: styles.ratioPortrait // 3:4 (Tall)
    },
    {
      id: 3,
      title: "Fintech Dashboard",
      category: "PRODUCT DESIGN",
      img: "/work_1.png", 
      ratioClass: styles.ratioWide // 16:9 (Wide)
    },
    {
      id: 4,
      title: "Aura Skincare",
      category: "E-COMMERCE",
      img: "/work_2.png", 
      ratioClass: styles.ratioSquare // 1:1 (Square)
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.label}>
          <div className={styles.dot}></div>
          <span>Selected Work</span>
        </div>
        <h2 className={styles.title}>PORTFOLIO.</h2>
      </div>

      <div className={styles.grid}>
        {projects.map((project, i) => (
          <div 
            key={project.id} 
            className={`${styles.projectCard} ${i % 2 !== 0 ? styles.staggered : ''}`}
          >
            <div className={`${styles.imageWrapper} ${project.ratioClass}`}>
              <div className={styles.imageInner}>
                <Image 
                  src={project.img} 
                  alt={project.title} 
                  fill 
                  sizes="(max-width: 768px) 85vw, 50vw"
                  style={{ objectFit: 'cover' }} 
                />
              </div>
            </div>
            <div className={styles.projectInfo}>
              <div className={styles.textStack}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <span className={styles.projectCategory}>{project.category}</span>
              </div>
              <div className={styles.viewBadge}>
                <span>VIEW</span>
                <span>PROJECT</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.footerActions}>
        <Link href="/projects" className={styles.viewAllBtn}>
          View All Projects <span className={styles.btnArrow}>→</span>
        </Link>
      </div>
    </section>
  );
}
