import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import IntroSection from '@/components/IntroSection';
import ServicesSection from '@/components/ServicesSection';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Marquee />
      <IntroSection />
      <ServicesSection />
    </main>
  );
}
