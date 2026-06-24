import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Tavern</div>
      <nav className={styles.nav}>
        <Link href="#" className={styles.navLink}>Work</Link>
        <Link href="#" className={styles.navLink}>Studio</Link>
        <Link href="#" className={styles.navLink}>Blog</Link>
        <Link href="#" className={styles.navLink}>Instagram</Link>
      </nav>
    </header>
  );
}
