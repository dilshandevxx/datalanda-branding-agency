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
      ratioClass: styles.ratioStandard, 
      iconVariant: "blue"
    },
    {
      id: 2,
      title: "Onyx Packaging",
      category: "BRANDING",
      description: "Lorem ipsum dolor sit amet, consect adipis elit. Suspend varius enim in eros element tristique.",
      img: "/work_2.png",
      ratioClass: styles.ratioPortrait, 
      iconVariant: "greenOrange"
    },
    {
      id: 3,
      title: "Fintech Dashboard",
      category: "PRODUCT DESIGN",
      description: "Lorem ipsum dolor sit amet, consect adipis elit. Suspend varius enim in eros element tristique.",
      img: "/work_1.png", 
      ratioClass: styles.ratioWide,
      iconVariant: "blue"
    },
    {
      id: 4,
      title: "Aura Skincare",
      category: "E-COMMERCE",
      description: "Lorem ipsum dolor sit amet, consect adipis elit. Suspend varius enim in eros element tristique.",
      img: "/work_2.png", 
      ratioClass: styles.ratioSquare,
      iconVariant: "greenOrange"
    }
  ];

  const renderIcon = (variant: string) => {
    if (variant === 'blue') {
      return (
        <div className={styles.iconBlueWrapper}>
          <div className={styles.blueCircle}></div>
          <div className={styles.blueSquare}></div>
        </div>
      );
    }
    if (variant === 'greenOrange') {
      return (
        <div className={styles.iconGreenOrangeWrapper}>
          <div className={styles.orangeCircle}></div>
          <div className={styles.greenSemiCircle}></div>
        </div>
      );
    }
    return null;
  };

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
            {/* Desktop View: Image Wrapper */}
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

            {/* Mobile View: Text/Icon Card (Hidden on Desktop) */}
            <div className={styles.mobileTextCard}>
               <div className={styles.mobileIcon}>
                 {renderIcon(project.iconVariant)}
               </div>
               <h3 className={styles.mobileTitle}>{project.category}</h3>
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
