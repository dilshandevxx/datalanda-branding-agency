'use client';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { usePathname } from 'next/navigation';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith('/studio');

  useEffect(() => {
    if (isStudio) {
      // Force html and body to scroll normally for Sanity Studio
      document.documentElement.style.overflow = 'auto';
      document.body.style.overflow = 'auto';
      return;
    }

    // Reset styles when navigating back from studio
    document.documentElement.style.removeProperty('overflow');
    document.body.style.removeProperty('overflow');

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, [isStudio]);

  return <>{children}</>;
}
