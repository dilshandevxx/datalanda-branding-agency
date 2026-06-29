"use client";

import Image from 'next/image';
import styles from './BlogSection.module.css';
import { siteConfig } from '../data/siteConfig';

import Link from 'next/link';
import { ALL_POSTS } from '@/data/posts';

export default function BlogSection() {
  const posts = ALL_POSTS.slice(0, 3);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.titleBlock}>
            <div className={styles.label}>
              <div className={styles.dot}></div>
              <span>BLOG</span>
            </div>
            <h2 className={styles.title}>Latest Insights</h2>
          </div>
          <Link href="/insights" className={styles.allPostsBtn}>
            All posts
          </Link>
        </div>

        <div className={styles.grid}>
          {posts.map((post, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image src={post.image} alt={post.title} fill sizes="(max-width: 992px) 100vw, 33vw" className={styles.image} />
                <div className={styles.categoryBadge}>
                  {post.category}
                </div>
              </div>
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{post.title}</h3>
                <p className={styles.desc}>{post.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
