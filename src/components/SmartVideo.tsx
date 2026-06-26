"use client";

import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";

interface SmartVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src?: string;
}

export default function SmartVideo({ src, className, children, preload = "none", ...props }: SmartVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // margin: "200px" means the video will start playing when it is 200px away from entering the screen
  // This ensures it is already playing by the time the user scrolls to it
  const isInView = useInView(videoRef, { margin: "200px" });

  useEffect(() => {
    if (isInView) {
      // Play when in view
      videoRef.current?.play().catch((e) => {
        console.warn("Video auto-play blocked or interrupted:", e);
      });
    } else {
      // Pause when out of view to save CPU/GPU and battery
      videoRef.current?.pause();
    }
  }, [isInView]);

  return (
    <video
      ref={videoRef}
      className={className}
      loop
      muted
      playsInline
      preload={preload} // Allow overriding for above-the-fold videos
      {...props}
    >
      {children || (src && <source src={src} />)}
    </video>
  );
}
