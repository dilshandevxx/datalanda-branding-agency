import Link from 'next/link';
import Image from 'next/image';
import { ALL_POSTS } from '@/data/posts';
import { client } from '@/sanity/lib/client';
import { postsQuery } from '@/sanity/lib/queries';
import styles from './BlogSection.module.css';
import SectionHeader from './SectionHeader';
import BlogCard from './BlogCard';

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
        <SectionHeader label="BLOG" title={<>Latest<br/>Insights</>} />

        <div className={styles.grid}>
          {posts.map((post, i) => (
            <BlogCard key={i} post={post} />
          ))}
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}>
          <Link href="/insights" className={styles.allPostsBtn}>
            All posts
          </Link>
        </div>
      </div>
    </section>
  );
}
