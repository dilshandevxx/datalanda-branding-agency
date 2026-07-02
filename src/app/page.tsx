import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import dynamic from 'next/dynamic';

// Lazy loaded below-the-fold components
const CinematicAccordionSection = dynamic(() => import('@/components/CinematicAccordionSection'));
const WhyUsSection = dynamic(() => import('@/components/WhyUsSection'));
const IntroSection = dynamic(() => import('@/components/IntroSection'));

const ServicesSection = dynamic(() => import('@/components/ServicesSection'));
const ArtOfLivingSection = dynamic(() => import('@/components/ArtOfLivingSection'));
const ThemeInversionController = dynamic(() => import('@/components/ThemeInversionController'));
const AppShowcaseSection = dynamic(() => import('@/components/AppShowcaseSection'));
const WorkSection = dynamic(() => import('@/components/WorkSection'));
const StudioSection = dynamic(() => import('@/components/StudioSection'));
const SpotlightSection = dynamic(() => import('@/components/SpotlightSection'));
const TestimonialSection = dynamic(() => import('@/components/TestimonialSection'));
const FaqSection = dynamic(() => import('@/components/FaqSection'));
const BlogSection = dynamic(() => import('@/components/BlogSection'));
const FooterCTASection = dynamic(() => import('@/components/FooterCTASection'));
const ProjectInMindCTA = dynamic(() => import('@/components/ProjectInMindCTA'));
const FooterSection = dynamic(() => import('@/components/FooterSection'));

import { client } from '@/sanity/lib/client';

export default async function Home() {
  // Fetch home page settings from Sanity
  const homeData = await client.fetch(`*[_type == "homePage"][0]{
    heroCaption, heroVideo, spotlightVideo, behindTheScenesVideo, 
    appShowcaseVideo, cinematicStrategyVideo, cinematicDesignVideo, 
    cinematicExecutionVideo, "studioImage1": studioImage1.asset->url,
    "studioImage2": studioImage2.asset->url, "studioImage3": studioImage3.asset->url,
    "studioImage4": studioImage4.asset->url, projectInMindCaption, footerCtaCaption
  }`) || {};

  return (
    <main>
      <Header />
      <Hero caption={homeData.heroCaption} video={homeData.heroVideo} />
      <Marquee />
      <CinematicAccordionSection 
        strategyVideo={homeData.cinematicStrategyVideo}
        designVideo={homeData.cinematicDesignVideo}
        executionVideo={homeData.cinematicExecutionVideo}
      />
      <WhyUsSection />
      <IntroSection />

      <ServicesSection />
      <ArtOfLivingSection />
      <AppShowcaseSection video={homeData.appShowcaseVideo} />
      <WorkSection />
      <StudioSection 
        image1={homeData.studioImage1}
        image2={homeData.studioImage2}
        image3={homeData.studioImage3}
        image4={homeData.studioImage4}
      />
      <SpotlightSection video={homeData.spotlightVideo} />
      <TestimonialSection />
      <FaqSection />
      <BlogSection />
      <ProjectInMindCTA caption={homeData.projectInMindCaption} />
      <FooterCTASection caption={homeData.footerCtaCaption} />
      <FooterSection />
    </main>
  );
}
