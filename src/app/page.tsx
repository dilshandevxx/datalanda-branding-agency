import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import dynamic from 'next/dynamic';

// Lazy loaded below-the-fold components
const WhyUsSection = dynamic(() => import('@/components/WhyUsSection'));
const IntroSection = dynamic(() => import('@/components/IntroSection'));
const ServicesSection = dynamic(() => import('@/components/ServicesSection'));
const WorkSection = dynamic(() => import('@/components/WorkSection'));
const StudioSection = dynamic(() => import('@/components/StudioSection'));
const SpotlightSection = dynamic(() => import('@/components/SpotlightSection'));
const TestimonialSection = dynamic(() => import('@/components/TestimonialSection'));
const FaqSection = dynamic(() => import('@/components/FaqSection'));
const CtaSection = dynamic(() => import('@/components/CtaSection'));
const FooterSection = dynamic(() => import('@/components/FooterSection'));

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Marquee />
      <WhyUsSection />
      <IntroSection />
      <ServicesSection />
      <WorkSection />
      <StudioSection />
      <SpotlightSection />
      <TestimonialSection />
      <FaqSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
