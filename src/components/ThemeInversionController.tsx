"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function ThemeInversionController({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Triggers when the element occupies the middle 20% of the screen.
  // Using -40% margins means the trigger zone is the middle 20% of the viewport.
  const isInView = useInView(ref, {
    margin: "-40% 0px -40% 0px",
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile(); // Check on mount
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div 
      ref={ref}
      style={{
        // Define local CSS variables that override the global ones for children
        '--background': (isInView && !isMobile) ? '#FF5F00' : '#111111',
        '--foreground': (isInView && !isMobile) ? '#000000' : '#ffffff',
        // Apply the background color locally with a smooth transition
        backgroundColor: 'var(--background)',
        color: 'var(--foreground)',
        transition: 'background-color 0.7s cubic-bezier(0.16, 1, 0.3, 1), color 0.7s cubic-bezier(0.16, 1, 0.3, 1)'
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
