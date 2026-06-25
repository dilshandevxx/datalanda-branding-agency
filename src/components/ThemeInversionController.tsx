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

  useEffect(() => {
    const root = document.documentElement;

    if (isInView && !isMobile) {
      // Invert theme to a soft pastel clay color only on Desktop
      root.style.setProperty("--background", "#DCA491");
      root.style.setProperty("--foreground", "#111111");
    } else {
      // Restore premium Dark Mode (or if on mobile, keep it dark)
      root.style.setProperty("--background", "#111111");
      root.style.setProperty("--foreground", "#ffffff");
    }

    // Cleanup in case the component unmounts while in view
    return () => {
      root.style.setProperty("--background", "#111111");
      root.style.setProperty("--foreground", "#ffffff");
    };
  }, [isInView, isMobile]);

  return <div ref={ref}>{children}</div>;
}
