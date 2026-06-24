import styles from './TopBar.module.css';

export default function TopBar() {
  const text = "✦ AVAILABLE FOR NEW PROJECTS ✦ LET'S CREATE SOMETHING EXTRAORDINARY ";
  return (
    <div className={styles.topBar}>
      <div className={styles.marquee}>
        <div className={styles.marqueeContent}>
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
        </div>
        <div className={styles.marqueeContent}>
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
        </div>
      </div>
    </div>
  );
}
