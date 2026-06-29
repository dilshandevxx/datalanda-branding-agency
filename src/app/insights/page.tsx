import { client } from '@/sanity/lib/client';
import { postsQuery } from '@/sanity/lib/queries';
import { ALL_POSTS } from '@/data/posts';
import InsightsClient from './InsightsClient';

export const metadata = {
  title: 'Insights & Thinking | Skylab',
  description: 'Read the latest thoughts, strategies, and guides from our team of digital product experts.',
};

export default async function InsightsPage() {
  let livePosts = [];
  try {
    livePosts = await client.fetch(postsQuery);
  } catch (error) {
    console.error("Failed to fetch Sanity posts", error);
  }

  const combinedPosts = [...livePosts, ...ALL_POSTS];

  return <InsightsClient initialPosts={combinedPosts} />;
}
