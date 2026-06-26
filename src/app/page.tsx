import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import dynamic from 'next/dynamic';

// Lazy loaded below-the-fold components
const CinematicAccordionSection = dynamic(() => import('@/components/CinematicAccordionSection'));
const WhyUsSection = dynamic(() => import('@/components/WhyUsSection'));
const IntroSection = dynamic(() => import('@/components/IntroSection'));

const ServicesSection = dynamic(() => import('@/components/ServicesSection'));
const ThemeInversionController = dynamic(() => import('@/components/ThemeInversionController'));
const AppShowcaseSection = dynamic(() => import('@/components/AppShowcaseSection'));
const WorkSection = dynamic(() => import('@/components/WorkSection'));
const StudioSection = dynamic(() => import('@/components/StudioSection'));
const SpotlightSection = dynamic(() => import('@/components/SpotlightSection'));
const TestimonialSection = dynamic(() => import('@/components/TestimonialSection'));
const FaqSection = dynamic(() => import('@/components/FaqSection'));
const BlogSection = dynamic(() => import('@/components/BlogSection'));
const VideoMaskCTA = dynamic(() => import('@/components/VideoMaskCTA'));
const FooterCTASection = dynamic(() => import('@/components/FooterCTASection'));
const FooterSection = dynamic(() => import('@/components/FooterSection'));

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Marquee />
      <CinematicAccordionSection />
      <WhyUsSection />
      <IntroSection />

      <ServicesSection />
      <AppShowcaseSection />
      <WorkSection />
      <StudioSection />
      <SpotlightSection />
      <TestimonialSection />
      <FaqSection />
      <BlogSection />
      <VideoMaskCTA />
      <FooterCTASection />
      <FooterSection />
    </main>
  );
}
