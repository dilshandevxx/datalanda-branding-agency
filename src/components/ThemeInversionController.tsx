"use client";

import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export default function ThemeInversionController({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Triggers when the element occupies the middle 20% of the screen.
  // Using -40% margins means the trigger zone is the middle 20% of the viewport.
  const isInView = useInView(ref, {
    margin: "-40% 0px -40% 0px",
  });

  useEffect(() => {
    const root = document.documentElement;

    if (isInView) {
      // Invert theme to stark Light Mode
      root.style.setProperty("--background", "#ffffff");
      root.style.setProperty("--foreground", "#111111");
    } else {
      // Restore premium Dark Mode
      root.style.setProperty("--background", "#111111");
      root.style.setProperty("--foreground", "#ffffff");
    }

    // Cleanup in case the component unmounts while in view
    return () => {
      root.style.setProperty("--background", "#111111");
      root.style.setProperty("--foreground", "#ffffff");
    };
  }, [isInView]);

  return <div ref={ref}>{children}</div>;
}
