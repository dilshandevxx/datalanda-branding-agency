import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhyUsSection from '@/components/WhyUsSection';
import Marquee from '@/components/Marquee';
import IntroSection from '@/components/IntroSection';
import ServicesSection from '@/components/ServicesSection';
import WorkSection from '@/components/WorkSection';
import StudioSection from '@/components/StudioSection';
import ImpactSection from '@/components/ImpactSection';
import TestimonialSection from '@/components/TestimonialSection';
import FaqSection from '@/components/FaqSection';
import CtaSection from '@/components/CtaSection';
import FooterSection from '@/components/FooterSection';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <WhyUsSection />
      <Marquee />
      <IntroSection />
      <ServicesSection />
      <WorkSection />
      <StudioSection />
      <ImpactSection />
      <TestimonialSection />
      <FaqSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
