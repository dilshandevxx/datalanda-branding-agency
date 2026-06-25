import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhyUsSection from '@/components/WhyUsSection';
import Marquee from '@/components/Marquee';
import IntroSection from '@/components/IntroSection';
import ServicesSection from '@/components/ServicesSection';
import WorkSection from '@/components/WorkSection';
import StudioSection from '@/components/StudioSection';
import SpotlightSection from '@/components/SpotlightSection';
import TestimonialSection from '@/components/TestimonialSection';
import FaqSection from '@/components/FaqSection';
import CtaSection from '@/components/CtaSection';
import FooterSection from '@/components/FooterSection';

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
