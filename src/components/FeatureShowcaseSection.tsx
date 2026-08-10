"use client";

import Image from 'next/image';
import Link from 'next/link';
import styles from './FeatureShowcaseSection.module.css';

export default function FeatureShowcaseSection({
  thumb1, thumb2, thumb3, thumb4, largeImage
}: {
  thumb1?: string; thumb2?: string; thumb3?: string; thumb4?: string; largeImage?: string;
}) {
  const features = [
    { title: "Brand Strategy &\nPositioning", image: thumb1 || "/agency/purpose_thumb1.png" },
    { title: "Digital Experience\nDesign", image: thumb2 || "/agency/purpose_thumb2.png" },
    { title: "Custom Web\nDevelopment", image: thumb3 || "/agency/purpose_thumb3.png" },
    { title: "AI-Driven\nSolutions", image: thumb4 || "/agency/purpose_thumb4.png" }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Left Content Column */}
        <div className={styles.contentCol}>
          <div className={styles.textContent}>
            <p className={styles.label}>QUALITY FIRST</p>
            <h2 className={styles.title}>PURPOSEFUL BY DESIGN</h2>
            <p className={styles.desc}>
              Growing your brand should be a collaborative journey, not a struggle. We’ve studied dozens of digital ecosystems and industry landscapes, running countless creative sprints, to craft bespoke digital experiences that feel fresh, bold, and highly impactful.
            </p>
            <Link href="/work" className={styles.button}>
              EXPLORE OUR WORK
            </Link>
          </div>

          <div className={styles.flavorGrid}>
            {features.map((feature, i) => (
              <div key={i} className={styles.flavorItem}>
                <div className={styles.thumbWrapper}>
                  <Image 
                    src={feature.image} 
                    alt={feature.title.replace('\n', ' ')}
                    fill
                    sizes="(max-width: 768px) 25vw, 150px"
                    className={styles.thumbImage}
                  />
                </div>
                <p className={styles.flavorTitle}>
                  {feature.title.split('\n').map((line, i) => (
                    <span key={i}>{line}<br/></span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image Column */}
        <div className={styles.imageCol}>
          <div className={styles.largeImageWrapper}>
            <Image 
              src={largeImage || "/agency/purpose_large.png"} 
              alt="Purposeful by design featured work"
              fill
              sizes="(max-width: 992px) 100vw, 50vw"
              className={styles.largeImage}
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
