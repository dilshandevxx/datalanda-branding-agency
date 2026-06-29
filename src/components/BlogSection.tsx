import Link from 'next/link';
import Image from 'next/image';
import { ALL_POSTS } from '@/data/posts';
import { client } from '@/sanity/lib/client';
import { postsQuery } from '@/sanity/lib/queries';
import styles from './BlogSection.module.css';

export default async function BlogSection() {
  let livePosts = [];
  try {
    livePosts = await client.fetch(postsQuery);
  } catch (error) {
    console.error("Failed to fetch Sanity posts", error);
  }

  const combinedPosts = [...livePosts, ...ALL_POSTS];
  const posts = combinedPosts.slice(0, 3);

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
                <Image src={post.mainImageUrl || post.image || ''} alt={post.title} fill sizes="(max-width: 992px) 100vw, 33vw" className={styles.image} />
                <div className={styles.categoryBadge} style={{ backgroundColor: post.color || 'rgba(0,0,0,0.5)' }}>
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
