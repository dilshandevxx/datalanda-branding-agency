"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion, useMotionValueEvent } from "framer-motion";

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
  const bgSync = useTransform(
    scrollYProgress, 
    [0, 0.3, 0.6, 1], 
    ["#111111", "#111111", "#FF5F00", "#FF5F00"]
  );
  
  const fgSync = useTransform(
    scrollYProgress, 
    [0, 0.3, 0.6, 1], 
    ["#ffffff", "#ffffff", "#000000", "#000000"]
  );

  // Reliably apply the motion values as CSS variables to the container
  const innerRef = useRef<HTMLDivElement>(null);

  useMotionValueEvent(scrollYProgress, "change", () => {
    if (innerRef.current && !isMobile) {
      innerRef.current.style.setProperty("--background", bgSync.get());
      innerRef.current.style.setProperty("--foreground", fgSync.get());
    }
  });

  return (
    <div 
      ref={containerRef}
      style={{
        height: isMobile ? "auto" : "300vh", 
        position: "relative"
      }}
    >
      <motion.div
        ref={innerRef}
        style={{
          position: isMobile ? "relative" : "sticky",
          top: 0,
          height: isMobile ? "auto" : "100vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          backgroundColor: isMobile ? "#111111" : bgSync,
          color: isMobile ? "#ffffff" : fgSync,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
