import Link from 'next/link';
import Image from 'next/image';
import styles from './WorkSection.module.css';

export default function WorkSection() {
  const projects = [
    {
      id: 1,
      title: "Audio Space App",
      category: "UI/UX DESIGN",
      description: "Lorem ipsum dolor sit amet, consect adipis elit. Suspend varius enim in eros element tristique.",
      img: "/work_1.png",
      ratioClass: styles.ratioStandard
    },
    {
      id: 2,
      title: "Onyx Packaging",
      category: "BRANDING",
      description: "Lorem ipsum dolor sit amet, consect adipis elit. Suspend varius enim in eros element tristique.",
      img: "/work_2.png",
      ratioClass: styles.ratioPortrait
    },
    {
      id: 3,
      title: "Fintech Dashboard",
      category: "PRODUCT DESIGN",
      description: "Lorem ipsum dolor sit amet, consect adipis elit. Suspend varius enim in eros element tristique.",
      img: "/work_1.png", 
      ratioClass: styles.ratioWide
    },
    {
      id: 4,
      title: "Aura Skincare",
      category: "E-COMMERCE",
      description: "Lorem ipsum dolor sit amet, consect adipis elit. Suspend varius enim in eros element tristique.",
      img: "/work_2.png", 
      ratioClass: styles.ratioSquare
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
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
            {/* Image Wrapper */}
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

            {/* Desktop View: Text Info */}
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

            {/* Mobile View: Text Info inside Card */}
            <div className={styles.mobileCardInfo}>
               <h3 className={styles.mobileTitle}>{project.title}</h3>
               <span className={styles.mobileCategory}>{project.category}</span>
               <p className={styles.mobileDesc}>{project.description}</p>
            </div>
          </div>
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
