import React from 'react';
import styles from './SectionHeader.module.css';

interface SectionHeaderProps {
  label: string;
  title: React.ReactNode;
  isMain?: boolean;
}

export default function SectionHeader({ label, title, isMain }: SectionHeaderProps) {
  const TitleTag = isMain ? 'h1' : 'h2';
  
  return (
    <div className={styles.header}>
      <div className={styles.label}>
        <div className={styles.dot}></div>
        <span>{label}</span>
      </div>
      <TitleTag className={`${styles.title} ${isMain ? styles.mainTitle : ''}`}>{title}</TitleTag>
    </div>
  );
}
