"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function ThemeInversionController({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of this container
  // start start: when top of container hits top of viewport
  // end end: when bottom of container hits bottom of viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile(); // Check on mount
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Map scroll progress to color changes
  // It pins for 200vh total.
  // 0 -> 0.5: Dark to Orange transition
  // 0.5 -> 1.0: Stays Orange while pinned
  const bgSync = useTransform(scrollYProgress, [0, 0.4, 1], ["#111111", "#FF5F00", "#FF5F00"]);
  const fgSync = useTransform(scrollYProgress, [0, 0.4, 1], ["#ffffff", "#000000", "#000000"]);

  return (
    <div 
      ref={containerRef}
      style={{
        // Make the container tall enough to allow scroll-pinning
        height: isMobile ? "auto" : "200vh", 
        position: "relative"
      }}
    >
      <motion.div
        style={{
          // Pin the content to the screen while scrolling through the 200vh container
          position: isMobile ? "relative" : "sticky",
          top: 0,
          height: isMobile ? "auto" : "100vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          
          backgroundColor: isMobile ? "#111111" : bgSync,
          color: isMobile ? "#ffffff" : fgSync,
          // Pass the motion values down as CSS variables
          // @ts-ignore
          "--background": isMobile ? "#111111" : bgSync,
          // @ts-ignore
          "--foreground": isMobile ? "#ffffff" : fgSync,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
