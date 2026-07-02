"use client";
import React, { useRef, useState } from 'react';
import styles from './ArtOfLivingSection.module.css';

interface ArtOfLivingProps {
  video?: string;
}

export default function ArtOfLivingSection({ video }: ArtOfLivingProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // High-quality placeholder video
  const videoSource = video || "https://res.cloudinary.com/dqfcsavwj/video/upload/v1731674061/Skylabs/j813m2evzepu1h402u7t.mp4";

  return (
    <section className={styles.section}>
      <div className={styles.background}>
        <video 
          ref={videoRef}
          src={videoSource}
          className={styles.video}
          loop
          muted
          playsInline
        />
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.content}>
        <button 
          className={styles.playButton} 
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
        <h2 className={`${styles.title} ${isPlaying ? styles.fadeTitle : ''}`}>
          Art of living<br/>
          in every detail.
        </h2>
      </div>
    </section>
  );
}
