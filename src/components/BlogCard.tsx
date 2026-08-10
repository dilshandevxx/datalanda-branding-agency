"use client";

import { useState } from 'react';
import Image from 'next/image';
import styles from './BlogSection.module.css';

export default function BlogCard({ post }: { post: any }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={styles.card} onClick={() => setExpanded(!expanded)}>
      <div className={styles.imageWrapper}>
        <Image 
          src={post.mainImageUrl || post.image || ''} 
          alt={post.title} 
          fill 
          sizes="(max-width: 992px) 100vw, 33vw" 
          className={styles.image} 
        />
        <div className={styles.categoryBadge} style={{ backgroundColor: post.color || 'rgba(0,0,0,0.5)' }}>
          {post.category}
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.titleRow}>
          <h3 className={styles.cardTitle}>{post.title}</h3>
          <span className={`${styles.expandIcon} ${expanded ? styles.rotated : ''}`}>+</span>
        </div>
        <div className={`${styles.descWrapper} ${expanded ? styles.expanded : ''}`}>
          <p className={styles.desc}>{post.desc}</p>
        </div>
      </div>
    </div>
  );
}
