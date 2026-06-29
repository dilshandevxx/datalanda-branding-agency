"use client";

import { useState } from 'react';
import Header from '@/components/Header';
import FooterSection from '@/components/FooterSection';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Insights.module.css';
import { Post } from '@/data/posts';

export default function InsightsClient({ initialPosts }: { initialPosts: Post[] }) {
  const [activeCategory, setActiveCategory] = useState("All");

  // Get unique categories from posts, and add "All" to the beginning
  const uniqueCategories = Array.from(new Set(initialPosts.map(p => p.category)));
  const CATEGORIES = ["All", ...uniqueCategories];

  const filteredPosts = activeCategory === "All" 
    ? initialPosts 
    : initialPosts.filter(p => p.category === activeCategory);

  return (
    <main className={styles.pageWrapper}>
      <Header />
      
      <div className={styles.hero}>
        <h1 className={styles.title}>
          INSIGHTS &<br />THINKING.
        </h1>
      </div>

      <div className={styles.filterBar}>
        <div className={styles.filterContainer}>
          {CATEGORIES.map(cat => (
            <button 
              key={cat}
              className={`${styles.filterBtn} ${activeCategory === cat ? styles.activeFilter : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.grid}>
        {filteredPosts.map((post) => (
          <Link href="#" key={post.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image 
                src={post.image} 
                alt={post.title} 
                fill 
                sizes="(max-width: 768px) 100vw, 33vw"
                className={styles.image} 
              />
              <div className={styles.categoryBadge} style={{ backgroundColor: post.color || 'rgba(0,0,0,0.5)' }}>
                {post.category}
              </div>
            </div>
            <div className={styles.content}>
              <span className={styles.meta}>{post.date}</span>
              <h3 className={styles.cardTitle}>{post.title}</h3>
              <p className={styles.desc}>{post.desc}</p>
            </div>
          </Link>
        ))}
      </div>

      <FooterSection />
    </main>
  );
}
