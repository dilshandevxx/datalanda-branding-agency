"use client";

import Image from 'next/image';
import styles from './BlogSection.module.css';
import { siteConfig } from '../data/siteConfig';

const posts = [
  {
    image: "https://res.cloudinary.com/dqfcsavwj/image/upload/v1782526290/laptop_mockup_dhfqvy.webp",
    category: "Marketing",
    color: "#ff4d6d",
    date: "January 30, 2023",
    title: "Plan For App Virality",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit viverra sit semper lorem."
  },
  {
    image: "https://res.cloudinary.com/dqfcsavwj/image/upload/v1782526286/imac_mockup_jojwy8.webp",
    category: "Guides",
    color: "#10b981",
    date: "January 30, 2023",
    title: "How To Install Xcode",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit viverra sit semper lorem."
  },
  {
    image: "https://res.cloudinary.com/dqfcsavwj/image/upload/v1782526285/tablet_poster_mockup_y53ghh.webp",
    category: "Strategy",
    color: "#8b5cf6",
    date: "January 30, 2023",
    title: "Development Process",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit viverra sit semper lorem."
  }
];

export default function BlogSection() {
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
          <button className={styles.allPostsBtn}>All posts</button>
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
