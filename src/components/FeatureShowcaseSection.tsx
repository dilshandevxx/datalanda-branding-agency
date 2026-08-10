"use client";

import Image from 'next/image';
import Link from 'next/link';
import styles from './FeatureShowcaseSection.module.css';

export default function FeatureShowcaseSection() {
  const flavors = [
    { title: "Passion Fruit &\nBlackcurrant", image: "/flavor/thumb1.png" },
    { title: "Cranberry\nLemonade", image: "/flavor/thumb2.png" },
    { title: "Elderflower\nLemonade", image: "/flavor/thumb1.png" }, // Reusing thumb1 as placeholder
    { title: "Blackcurrant\nElderflower", image: "/flavor/thumb2.png" } // Reusing thumb2 as placeholder
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Left Content Column */}
        <div className={styles.contentCol}>
          <div className={styles.textContent}>
            <p className={styles.label}>FLAVOR FIRST</p>
            <h2 className={styles.title}>DELICIOUS BY DESIGN</h2>
            <p className={styles.desc}>
              Taking care of yourself should be something you enjoy, not endure. We tasted dozens of natural flavors from farms around the world, in countless combinations, to create a sugar-free beverage that tastes fresh, juicy and tart.
            </p>
            <Link href="/flavors" className={styles.link}>
              EXPLORE FLAVORS
            </Link>
          </div>

          <div className={styles.flavorGrid}>
            {flavors.map((flavor, i) => (
              <div key={i} className={styles.flavorItem}>
                <div className={styles.thumbWrapper}>
                  <Image 
                    src={flavor.image} 
                    alt={flavor.title.replace('\n', ' ')}
                    fill
                    sizes="(max-width: 768px) 25vw, 150px"
                    className={styles.thumbImage}
                  />
                </div>
                <p className={styles.flavorTitle}>
                  {flavor.title.split('\n').map((line, i) => (
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
              src="/flavor/large.png" 
              alt="Delicious by design featured beverage"
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
