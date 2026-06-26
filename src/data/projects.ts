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
}

export const ALL_PROJECTS: Project[] = [
  {
    id: 1,
    title: "NeuroGen platform",
    category: "AI",
    img: "/work_1.png",
    ratioClass: "ratioStandard",
    client: "NeuroGen Tech",
    year: "2023",
    role: "UX/UI, Frontend Development",
    challenge: "NeuroGen needed a new digital identity that could translate their complex neural-network processing algorithms into a digestible, consumer-friendly platform.",
    solution: "We developed a stark, high-contrast brutalist interface that relies heavily on macro-typography and microscopic grid lines.",
    gallery: ["/work_2.png", "/service_1.png"]
  },
  {
    id: 2,
    title: "EcoSpace Web",
    category: "Web",
    img: "/work_2.png",
    ratioClass: "ratioPortrait",
    client: "EcoSpace Architecture",
    year: "2024",
    role: "Digital Strategy, Fullstack Development",
    challenge: "Creating a digital footprint for an architecture firm that builds brutalist, eco-friendly concrete structures.",
    solution: "We stripped away all unnecessary color and relied entirely on a monochromatic grayscale palette with stark, dramatic photography.",
    gallery: ["/work_1.png", "/service_3.png"]
  },
  {
    id: 3,
    title: "Visionary ML",
    category: "ML",
    img: "/work_1.png", 
    ratioClass: "ratioWide",
    client: "Visionary Labs",
    year: "2023",
    role: "Brand Identity, Product Design",
    challenge: "Visionary ML was entering a crowded market of AI tools and needed a brand identity that felt aggressive and highly technical.",
    solution: "We utilized an abrasive, high-contrast neon-on-black color palette.",
    gallery: ["/work_2.png", "/service_1.png"]
  },
  {
    id: 4,
    title: "Flow UI Kit",
    category: "UI/UX",
    img: "/work_2.png", 
    ratioClass: "ratioSquare",
    client: "Flow Systems",
    year: "2022",
    role: "System Architecture",
    challenge: "Designing a scalable UI kit that could be used across 14 different enterprise applications.",
    solution: "We built the entire system around a strict 8px grid and a heavily constrained color palette.",
    gallery: ["/work_1.png", "/service_2.png"]
  },
  {
    id: 5,
    title: "Onyx Packaging",
    category: "Branding",
    img: "/work_1.png",
    ratioClass: "ratioPortrait",
    client: "Onyx Consumer Goods",
    year: "2024",
    role: "Packaging Design",
    challenge: "Onyx needed packaging for their new line of premium men's skincare that stood out on retail shelves.",
    solution: "We went entirely in the opposite direction: matte black, heavy, brutalist aluminum canisters.",
    gallery: ["/work_2.png", "/service_3.png"]
  },
  {
    id: 6,
    title: "Predictive Engines",
    category: "ML",
    img: "/work_2.png",
    ratioClass: "ratioStandard",
    client: "Predictive.ai",
    year: "2023",
    role: "UX/UI Design",
    challenge: "Translating predictive financial models into a mobile-first interface.",
    solution: "We created a dark-mode exclusive application that uses spatial color-coding.",
    gallery: ["/work_1.png", "/service_1.png"]
  },
  {
    id: 7,
    title: "Fitness Tracker App",
    category: "Mobile",
    img: "/work_1.png",
    ratioClass: "ratioWide",
    client: "Pulse",
    year: "2022",
    role: "Mobile App Development",
    challenge: "Building a fitness tracker that doesn't gamify workouts.",
    solution: "We designed a data-dense, military-inspired interface.",
    gallery: ["/work_2.png", "/service_2.png"]
  },
  {
    id: 8,
    title: "Creative Portfolio Web",
    category: "Web",
    img: "/work_2.png",
    ratioClass: "ratioSquare",
    client: "Studio K",
    year: "2024",
    role: "WebGL Development",
    challenge: "Studio K needed a portfolio that acted as a piece of art itself.",
    solution: "We built a fluid, cursor-driven liquid simulation that distorts the portfolio images.",
    gallery: ["/work_1.png", "/service_3.png"]
  },
  {
    id: 9,
    title: "Aura Skincare",
    category: "E-Commerce",
    img: "/work_1.png",
    ratioClass: "ratioStandard",
    client: "Aura",
    year: "2023",
    role: "Branding",
    challenge: "Creating an e-commerce experience for a luxury skincare brand.",
    solution: "We utilized massive, full-bleed photography and asynchronous page transitions.",
    gallery: ["/work_2.png", "/service_1.png"]
  },
  {
    id: 10,
    title: "Crypto Wallet App",
    category: "Web3",
    img: "/work_2.png",
    ratioClass: "ratioPortrait",
    client: "Vault",
    year: "2024",
    role: "Product Design",
    challenge: "Designing a self-custody crypto wallet that feels impenetrable.",
    solution: "We used brutalist architectural motifs to visually communicate security.",
    gallery: ["/work_1.png", "/service_2.png"]
  }
];

export function getProjectById(id: number | string): Project | undefined {
  return ALL_PROJECTS.find(p => p.id.toString() === id.toString());
}
