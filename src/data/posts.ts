import { siteConfig } from './siteConfig';

export interface Post {
  id?: string;
  _id?: string;
  image?: string;
  mainImageUrl?: string;
  category: string;
  color: string;
  date: string;
  title: string;
  desc: string;
}

export const ALL_POSTS: Post[] = [
  {
    id: "1",
    image: siteConfig.images.blogArticle.image1,
    category: "Marketing",
    color: "#ff4d6d",
    date: "January 30, 2023",
    title: "Plan For App Virality",
    desc: "A comprehensive guide on engineering growth loops, leveraging user psychology, and building features that naturally encourage sharing."
  },
  {
    id: "2",
    image: siteConfig.images.blogArticle.image2,
    category: "Guides",
    color: "#10b981",
    date: "February 12, 2023",
    title: "Brutalist Web Design",
    desc: "Exploring the anti-design movement: how raw, unpolished, and abrasive interfaces are capturing attention in a sea of corporate minimalism."
  },
  {
    id: "3",
    image: siteConfig.images.blogArticle.image3,
    category: "Strategy",
    color: "#8b5cf6",
    date: "March 05, 2023",
    title: "Development Process",
    desc: "Behind the scenes of our 6-week intensive sprint model. Learn how we take concepts from initial sketches to high-fidelity prototypes."
  },
  {
    id: "4",
    image: "https://res.cloudinary.com/dqfcsavwj/image/upload/v1782526288/laptop_report_mockup_jypxur.webp",
    category: "Web3",
    color: "#f59e0b",
    date: "April 18, 2023",
    title: "The Future of Web3",
    desc: "Why the next wave of decentralized applications must prioritize user experience and design over pure technological novelty."
  },
  {
    id: "5",
    image: "https://res.cloudinary.com/dqfcsavwj/image/upload/v1782526285/tablet_poster_mockup_y53ghh.webp",
    category: "Design",
    color: "#3b82f6",
    date: "May 22, 2023",
    title: "Spatial Interfaces",
    desc: "Preparing for the mixed reality revolution: adapting our 2D design systems for 3D environments and spatial computing."
  },
  {
    id: "6",
    image: "https://res.cloudinary.com/dqfcsavwj/image/upload/v1782526290/laptop_mockup_dhfqvy.webp",
    category: "Strategy",
    color: "#ec4899",
    date: "June 14, 2023",
    title: "The Zero-UI Trend",
    desc: "How voice, gesture, and contextual awareness are slowly eroding the traditional graphical user interface."
  },
  {
    id: "7",
    image: "https://res.cloudinary.com/dqfcsavwj/image/upload/v1782496952/cafe_-web_pxsots.webp",
    category: "Marketing",
    color: "#06b6d4",
    date: "August 03, 2023",
    title: "Digital Accessibility",
    desc: "Designing for everyone isn't just an ethical obligation, it's a strategic advantage. Our framework for inclusive product design."
  },
  {
    id: "8",
    image: "https://res.cloudinary.com/dqfcsavwj/image/upload/v1782526286/imac_mockup_jojwy8.webp",
    category: "Guides",
    color: "#84cc16",
    date: "September 29, 2023",
    title: "Optimizing Next.js",
    desc: "A technical deep dive into how we leverage Turbopack, advanced caching, and edge computing to build lightning-fast experiences."
  },
  {
    id: "9",
    image: "https://res.cloudinary.com/dqfcsavwj/image/upload/v1782526285/tablet_poster_mockup_y53ghh.webp",
    category: "Design",
    color: "#6366f1",
    date: "November 11, 2023",
    title: "Micro-Interactions",
    desc: "The subtle art of using motion and micro-animations to create digital products that feel alive and responsive to human touch."
  }
];
