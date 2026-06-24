import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import IntroSection from '@/components/IntroSection';
import NextSection from '@/components/NextSection';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Marquee />
      <IntroSection />
      <NextSection />
    </main>
  );
}
