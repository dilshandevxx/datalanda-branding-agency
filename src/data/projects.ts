export interface Project {
  id: number;
  title: string;
  category: string;
  img: string;
  ratioClass: string;
  client: string;
  year: string;
  role: string;
  challenge: string;
  solution: string;
  gallery: string[];
  date: string;
  shortDescription: string;
  websiteUrl?: string;     // URL to the live project website
  cardImageUrl?: string;   // Alternative image URL for the project card
}

export const ALL_PROJECTS: Project[] = [
  {
    id: 1,
    title: "NeuroGen platform",
    category: "AI",
    img: "https://res.cloudinary.com/dqfcsavwj/image/upload/v1782526290/laptop_mockup_dhfqvy.webp",
    ratioClass: "ratioStandard",
    client: "NeuroGen Tech",
    year: "2023",
    role: "UX/UI, Frontend Development",
    challenge: "NeuroGen needed a new digital identity that could translate their complex neural-network processing algorithms into a digestible, consumer-friendly platform.",
    solution: "We developed a stark, high-contrast brutalist interface that relies heavily on macro-typography and microscopic grid lines.",
    gallery: ["https://res.cloudinary.com/dqfcsavwj/image/upload/v1782526286/imac_mockup_jojwy8.webp", ""],
    date: "02 September 2025",
    shortDescription: "How strategic brand transformation enabled Instant Aid to secure UN partnerships and deliver life-saving support.",
    websiteUrl: "",
    cardImageUrl: "https://res.cloudinary.com/dqfcsavwj/image/upload/v1782526290/laptop_mockup_dhfqvy.webp"
  },
  {
    id: 2,
    title: "EcoSpace Web",
    category: "Web",
    img: "https://res.cloudinary.com/dqfcsavwj/image/upload/v1782526285/tablet_poster_mockup_y53ghh.webp",
    ratioClass: "ratioPortrait",
    client: "EcoSpace Architecture",
    year: "2024",
    role: "Digital Strategy, Fullstack Development",
    challenge: "Creating a digital footprint for an architecture firm that builds brutalist, eco-friendly concrete structures.",
    solution: "We stripped away all unnecessary color and relied entirely on a monochromatic grayscale palette with stark, dramatic photography.",
    gallery: ["https://res.cloudinary.com/dqfcsavwj/image/upload/v1782526290/laptop_mockup_dhfqvy.webp", ""],
    date: "14 November 2024",
    shortDescription: "Driftime® CCO, Abb-d Taiyo speaks to Civil Society Magazine for an in-depth feature on how a focused, strategic rebrand can revitalise charity missions.",
    websiteUrl: "",
    cardImageUrl: "https://res.cloudinary.com/dqfcsavwj/image/upload/v1782526285/tablet_poster_mockup_y53ghh.webp"
  },
  {
    id: 3,
    title: "Visionary ML",
    category: "ML",
    img: "https://res.cloudinary.com/dqfcsavwj/image/upload/v1782526288/laptop_report_mockup_jypxur.webp",
    ratioClass: "ratioWide",
    client: "Visionary Labs",
    year: "2023",
    role: "Brand Identity, Product Design",
    challenge: "Visionary ML was entering a crowded market of AI tools and needed a brand identity that felt aggressive and highly technical.",
    solution: "We utilized an abrasive, high-contrast neon-on-black color palette.",
    gallery: ["https://res.cloudinary.com/dqfcsavwj/image/upload/v1782526285/tablet_poster_mockup_y53ghh.webp", ""],
    date: "17 July 2024",
    shortDescription: "We got our hands dirty in our latest Driftime® Hackathon, creating GRO-OP, a top-of-the-crops prototype web-app designed to redistribute surplus harvests.",
    websiteUrl: "",
    cardImageUrl: "https://res.cloudinary.com/dqfcsavwj/image/upload/v1782526288/laptop_report_mockup_jypxur.webp"
  },
  {
    id: 4,
    title: "Flow UI Kit",
    category: "UI/UX",
    img: "https://res.cloudinary.com/dqfcsavwj/image/upload/v1782526286/imac_mockup_jojwy8.webp",
    ratioClass: "ratioSquare",
    client: "Flow Systems",
    year: "2022",
    role: "System Architecture",
    challenge: "Designing a scalable UI kit that could be used across 14 different enterprise applications.",
    solution: "We built the entire system around a strict 8px grid and a heavily constrained color palette.",
    gallery: ["https://res.cloudinary.com/dqfcsavwj/image/upload/v1782526288/laptop_report_mockup_jypxur.webp", ""],
    date: "29 May 2024",
    shortDescription: "Driftime® have launched a brand new report exploring design-led directions, industry observations, and innovation towards impact.",
    websiteUrl: "",
    cardImageUrl: "https://res.cloudinary.com/dqfcsavwj/image/upload/v1782526286/imac_mockup_jojwy8.webp"
  },
  {
    id: 5,
    title: "Onyx Packaging",
    category: "Branding",
    img: "https://res.cloudinary.com/dqfcsavwj/image/upload/v1782526290/laptop_mockup_dhfqvy.webp",
    ratioClass: "ratioPortrait",
    client: "Onyx Consumer Goods",
    year: "2024",
    role: "Packaging Design",
    challenge: "Onyx needed packaging for their new line of premium men's skincare that stood out on retail shelves.",
    solution: "We went entirely in the opposite direction: matte black, heavy, brutalist aluminum canisters.",
    gallery: ["https://res.cloudinary.com/dqfcsavwj/image/upload/v1782526286/imac_mockup_jojwy8.webp", ""],
    date: "04 December 2023",
    shortDescription: "We took some time to chat with Art Not Evidence ahead of their launch to hear more about the project, the people behind the scenes, and what digital design can do.",
    websiteUrl: "",
    cardImageUrl: "https://res.cloudinary.com/dqfcsavwj/image/upload/v1782526290/laptop_mockup_dhfqvy.webp"
  },
  {
    id: 6,
    title: "Predictive Engines",
    category: "ML",
    img: "https://res.cloudinary.com/dqfcsavwj/image/upload/v1782526285/tablet_poster_mockup_y53ghh.webp",
    ratioClass: "ratioStandard",
    client: "Predictive.ai",
    year: "2023",
    role: "UX/UI Design",
    challenge: "Translating predictive financial models into a mobile-first interface.",
    solution: "We created a dark-mode exclusive application that uses spatial color-coding.",
    gallery: ["https://res.cloudinary.com/dqfcsavwj/image/upload/v1782526290/laptop_mockup_dhfqvy.webp", ""],
    date: "17 November 2023",
    shortDescription: "The first in a series of interviews with our partners and collaborators, Driftime catches up with Roadrunner Venture Studios as they launch their new visual identity.",
    websiteUrl: "",
    cardImageUrl: "https://res.cloudinary.com/dqfcsavwj/image/upload/v1782526285/tablet_poster_mockup_y53ghh.webp"
  },
  {
    id: 7,
    title: "Fitness Tracker App",
    category: "Mobile",
    img: "https://res.cloudinary.com/dqfcsavwj/image/upload/v1782526288/laptop_report_mockup_jypxur.webp",
    ratioClass: "ratioWide",
    client: "Pulse",
    year: "2022",
    role: "Mobile App Development",
    challenge: "Building a fitness tracker that doesn't gamify workouts.",
    solution: "We designed a data-dense, military-inspired interface.",
    gallery: ["https://res.cloudinary.com/dqfcsavwj/image/upload/v1782526285/tablet_poster_mockup_y53ghh.webp", ""],
    date: "24 August 2023",
    shortDescription: "A four day Hackathon took the Drifteam off the beaten track this April, aligning digital design with on-the-ground action, resulting in a new web-app prototype ROAM.",
    websiteUrl: "",
    cardImageUrl: "https://res.cloudinary.com/dqfcsavwj/image/upload/v1782526288/laptop_report_mockup_jypxur.webp"
  },
  {
    id: 8,
    title: "Creative Portfolio Web",
    category: "Web",
    img: "https://res.cloudinary.com/dqfcsavwj/image/upload/v1782526286/imac_mockup_jojwy8.webp",
    ratioClass: "ratioSquare",
    client: "Studio K",
    year: "2024",
    role: "WebGL Development",
    challenge: "Studio K needed a portfolio that acted as a piece of art itself.",
    solution: "We built a fluid, cursor-driven liquid simulation that distorts the portfolio images.",
    gallery: ["https://res.cloudinary.com/dqfcsavwj/image/upload/v1782526288/laptop_report_mockup_jypxur.webp", ""],
    date: "22 May 2023",
    shortDescription: "The White House announce our work with The Quad Investors Network, a non-profit organisation working with investors across Australia, India, Japan, and the US.",
    websiteUrl: "",
    cardImageUrl: "https://res.cloudinary.com/dqfcsavwj/image/upload/v1782526286/imac_mockup_jojwy8.webp"
  },
  {
    id: 9,
    title: "Aura Skincare",
    category: "E-Commerce",
    img: "https://res.cloudinary.com/dqfcsavwj/image/upload/v1782526290/laptop_mockup_dhfqvy.webp",
    ratioClass: "ratioStandard",
    client: "Aura",
    year: "2023",
    role: "Branding",
    challenge: "Creating an e-commerce experience for a luxury skincare brand.",
    solution: "We utilized massive, full-bleed photography and asynchronous page transitions.",
    gallery: ["https://res.cloudinary.com/dqfcsavwj/image/upload/v1782526286/imac_mockup_jojwy8.webp", ""],
    date: "11 January 2023",
    shortDescription: "Driftime champions an integrated practice with their future-focused collaborators Only One.",
    websiteUrl: "",
    cardImageUrl: "https://res.cloudinary.com/dqfcsavwj/image/upload/v1782526290/laptop_mockup_dhfqvy.webp"
  },
  {
    id: 10,
    title: "Crypto Wallet App",
    category: "Web3",
    img: "https://res.cloudinary.com/dqfcsavwj/image/upload/v1782526285/tablet_poster_mockup_y53ghh.webp",
    ratioClass: "ratioPortrait",
    client: "Vault",
    year: "2024",
    role: "Product Design",
    challenge: "Designing a self-custody crypto wallet that feels impenetrable.",
    solution: "We used brutalist architectural motifs to visually communicate security.",
    gallery: ["https://res.cloudinary.com/dqfcsavwj/image/upload/v1782526290/laptop_mockup_dhfqvy.webp", ""],
    date: "10 October 2022",
    shortDescription: "Our exploration into Web3 ecosystems resulted in a highly secure, brutally styled digital wallet interface.",
    websiteUrl: "",
    cardImageUrl: "https://res.cloudinary.com/dqfcsavwj/image/upload/v1782526285/tablet_poster_mockup_y53ghh.webp"
  },
  {
    id: 11,
    title: "ACME CAfe",
    category: "Branding",
    img: "https://res.cloudinary.com/dqfcsavwj/image/upload/v1782526285/tablet_poster_mockup_y53ghh.webp",
    ratioClass: "ratioPortrait",
    client: "ACME CAfe",
    year: "2024",
    role: "Branding",
    challenge: "Redesigning the logo and brand identity for ACME CAfe.",
    solution: "The brand identity is built around the concept of 'refined simplicity'. We stripped away the unnecessary clutter and focused on the core elements that make ACME CAfe unique.",
    gallery: ["https://res.cloudinary.com/dqfcsavwj/image/upload/v1782526290/laptop_mockup_dhfqvy.webp", ""],
    date: "10 October 2024",
    shortDescription: "Revitalising the face of ACME CAfe with a bold, refined rebrand and a timeless new logo.",
    websiteUrl: "https://acme-cafe-one.vercel.app/",
    cardImageUrl: "https://res.cloudinary.com/dqfcsavwj/image/upload/v1782496952/cafe_-web_pxsots.webp"
  }
];

export function getProjectById(id: number | string): Project | undefined {
  return ALL_PROJECTS.find(p => p.id.toString() === id.toString());
}
