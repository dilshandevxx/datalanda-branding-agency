"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import styles from "./CinematicAccordionSection.module.css";

const pillars = [
  {
    id: "strategy",
    title: "01 Strategy",
    description: "Human-centric brand positioning.",
    videoSrc: "/walking-people.webm",
  },
  {
    id: "design",
    title: "02 Design",
    description: "Pixel-perfect visual identity.",
    videoSrc: "/typing.webm",
  },
  {
    id: "execution",
    title: "03 Execution",
    description: "Seamless digital product delivery.",
    videoSrc: "/app-scroll.webm",
  },
];

export default function CinematicAccordionSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  
  // Mobile Scroll Logic
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  
  // 3 items = 300vw total width. To show the last item, we need to translate by -66.66%
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.666%"]);

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
                  <video autoPlay loop muted playsInline className={styles.video}>
                    <source src={pillar.videoSrc} type="video/webm" />
                  </video>
                </div>
                <div className={styles.overlay}></div>

                <div className={styles.contentWrapper}>
                  <motion.h3 
                    className={styles.title}
                    layout="position"
                  >
                    {pillar.title}
                  </motion.h3>
                  
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

      {/* MOBILE VIEW: Sticky Horizontal Scroll */}
      <section ref={targetRef} className={styles.mobileView}>
        <div className={styles.stickyContainer}>
          <motion.div style={{ x }} className={styles.horizontalScrollWrapper}>
            {pillars.map((pillar) => (
              <div key={`mobile-${pillar.id}`} className={styles.mobileCard}>
                <div className={styles.videoWrapper}>
                  <video autoPlay loop muted playsInline className={styles.videoMobile}>
                    <source src={pillar.videoSrc} type="video/webm" />
                  </video>
                </div>
                <div className={styles.overlayMobile}></div>
                <div className={styles.contentWrapperMobile}>
                  <h3 className={styles.titleMobile}>{pillar.title}</h3>
                  <p className={styles.descriptionMobile}>{pillar.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
