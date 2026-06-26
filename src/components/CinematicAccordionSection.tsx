"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./CinematicAccordionSection.module.css";
import SmartVideo from "./SmartVideo";
import { siteConfig } from "../data/siteConfig";

const pillars = [
  {
    id: "strategy",
    num: "01",
    title: "Strategy",
    description: "Human-centric brand positioning.",
    videoSrc: siteConfig.videos.cinematicAccordion.strategy,
  },
  {
    id: "design",
    num: "02",
    title: "Design",
    description: "Pixel-perfect visual identity.",
    videoSrc: siteConfig.videos.cinematicAccordion.design,
  },
  {
    id: "execution",
    num: "03",
    title: "Execution",
    description: "Seamless digital product delivery.",
    videoSrc: siteConfig.videos.cinematicAccordion.execution,
  },
];

export default function CinematicAccordionSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <>
      {/* DESKTOP VIEW: Hover Accordion */}
      <section className={styles.desktopView}>
        <div 
          className={styles.accordionContainer}
          onMouseLeave={() => setActiveIndex(0)}
        >
          {pillars.map((pillar, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={pillar.id}
                className={`${styles.pillar} ${isActive ? styles.pillarActive : ""}`}
                onMouseEnter={() => setActiveIndex(index)}
                initial={false}
                animate={{
                  flex: isActive ? 3 : 1,
                }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={styles.videoWrapper}>
                  <SmartVideo src={pillar.videoSrc} className={styles.video} />
                </div>
                <div className={styles.overlay}></div>

                <div className={styles.contentWrapper}>
                  <motion.div className={styles.titleBlock} layout="position">
                    <span className={styles.num}>{pillar.num}</span>
                    <div className={styles.line}></div>
                    <h3 className={styles.title}>{pillar.title}</h3>
                  </motion.div>
                  
                  <AnimatePresence>
                    {isActive && (
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className={styles.description}
                      >
                        {pillar.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* MOBILE VIEW: Sticky Stacking Cards */}
      <section className={styles.mobileView}>
        <div className={styles.stackingContainer}>
          {pillars.map((pillar, index) => (
            <div 
              key={`mobile-${pillar.id}`} 
              className={styles.mobileCard}
              style={{ zIndex: index + 1 }}
            >
              <div className={styles.videoWrapper}>
                <SmartVideo src={pillar.videoSrc} className={styles.videoMobile} />
              </div>
              <div className={styles.overlayMobile}></div>
              
              <div className={styles.contentWrapperMobile}>
                <div className={styles.titleBlock}>
                  <span className={styles.num}>{pillar.num}</span>
                  <div className={styles.line}></div>
                  <h3 className={styles.title}>{pillar.title}</h3>
                </div>
                <p className={styles.descriptionMobile}>{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
