"use client";

import { useState, useEffect } from 'react';
import styles from './CookieBanner.module.css';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already made a choice
    const consent = localStorage.getItem('skylabs_cookie_consent');
    if (!consent) {
      // Show the banner with a slight delay for a smoother entrance
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('skylabs_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('skylabs_cookie_consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <div className={styles.textWrapper}>
          <h3 className={styles.title}>Your Privacy</h3>
          <p className={styles.text}>
            We use cookies to improve your experience on our site, analyze site traffic, and serve tailored content. By clicking "Accept All", you consent to our use of cookies.
          </p>
        </div>
        <div className={styles.buttons}>
          <button className={styles.declineBtn} onClick={handleDecline}>Decline</button>
          <button className={styles.acceptBtn} onClick={handleAccept}>Accept All</button>
        </div>
      </div>
    </div>
  );
}
