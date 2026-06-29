import { ALL_POSTS } from '@/data/posts';
import InsightsClient from './InsightsClient';

export const metadata = {
  title: 'Insights & Thinking | Skylab',
  description: 'Read the latest thoughts, strategies, and guides from our team of digital product experts.',
};

export default function InsightsPage() {
  return <InsightsClient initialPosts={ALL_POSTS} />;
}
