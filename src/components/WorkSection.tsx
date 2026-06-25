import Link from 'next/link';
import Image from 'next/image';
import styles from './WorkSection.module.css';

export default function WorkSection() {
  const projects = [
    {
      id: 1,
      title: "Audio Space App",
      img: "/work_1.png",
      ratioClass: styles.ratioSquare
    },
    {
      id: 2,
      title: "Onyx Packaging",
      img: "/work_2.png",
      ratioClass: styles.ratioSquare
    },
    {
      id: 3,
      title: "Fintech Dashboard",
      img: "/work_1.png", 
      ratioClass: styles.ratioSquare
    },
    {
      id: 4,
      title: "Aura Skincare",
      img: "/work_2.png", 
      ratioClass: styles.ratioSquare
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.dot}></div>
          <h2 className={styles.title}>OUR WORK</h2>
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
