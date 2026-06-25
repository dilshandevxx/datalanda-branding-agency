"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile(); // Check immediately on mount
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className={styles.section}>
      <div 
        className={styles.accordionContainer}
        onMouseLeave={() => setActiveIndex(0)} // Reset to first on mouse leave
      >
        {pillars.map((pillar, index) => {
          const isActive = activeIndex === index;

          return (
            <motion.div
              key={pillar.id}
              className={`${styles.pillar} ${isActive ? styles.pillarActive : ""}`}
              onMouseEnter={() => !isMobile && setActiveIndex(index)}
              onClick={() => setActiveIndex(index)} // Still allow tapping just in case
              onViewportEnter={() => {
                if (isMobile) setActiveIndex(index);
              }}
              viewport={{ margin: "-40% 0px -40% 0px", amount: "some" }}
              initial={false}
              animate={{
                flex: isActive ? 3 : 1,
              }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles.videoWrapper}>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className={styles.video}
                >
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
  );
}
