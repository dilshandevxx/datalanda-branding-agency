"use client";

import SmartVideo from "./SmartVideo";
import styles from "./SpotlightSection.module.css";
import { siteConfig } from "../data/siteConfig";

export default function SpotlightSection({ video }: { video?: string }) {
  return (
    <section className={styles.section}>
      <div className={styles.videoWrapper}>
        <SmartVideo src={video || siteConfig.videos.spotlight} className={styles.backgroundVideo} />
        <div className={styles.videoOverlay}></div>
      </div>

      <div className={styles.finalContent}>
        <div className={styles.lineDecoration}></div>
        <h3 className={styles.finalQuote}>Elevating the standard.</h3>
        <button className={styles.button}>
          Discover Our Approach
        </button>
      </div>
    </section>
  );
}
