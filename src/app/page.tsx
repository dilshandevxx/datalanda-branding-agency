export const revalidate = 0; // Disable caching so Sanity changes reflect immediately

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import dynamic from 'next/dynamic';

// Lazy loaded below-the-fold components
const CinematicAccordionSection = dynamic(() => import('@/components/CinematicAccordionSection'));
const WhyUsSection = dynamic(() => import('@/components/WhyUsSection'));
const IntroSection = dynamic(() => import('@/components/IntroSection'));
const StorySection = dynamic(() => import('@/components/StorySection'));

const ServicesSection = dynamic(() => import('@/components/ServicesSection'));
const ThemeInversionController = dynamic(() => import('@/components/ThemeInversionController'));
const WorkSection = dynamic(() => import('@/components/WorkSection'));
const MagazineSection = dynamic(() => import('@/components/MagazineSection'));
const FaqSection = dynamic(() => import('@/components/FaqSection'));
const FeatureShowcaseSection = dynamic(() => import('@/components/FeatureShowcaseSection'));
const BlogSection = dynamic(() => import('@/components/BlogSection'));
const FooterCTASection = dynamic(() => import('@/components/FooterCTASection'));
const FooterSection = dynamic(() => import('@/components/FooterSection'));

import { client } from '@/sanity/lib/client';

export default async function Home() {
  // Fetch home page settings from Sanity
  const homeData = await client.fetch(`*[_type == "homePage"][0]{
    heroCaption, heroVideo, spotlightVideo, behindTheScenesVideo, 
    appShowcaseVideo, cinematicStrategyVideo, cinematicDesignVideo, 
    cinematicExecutionVideo, "studioImage1": studioImage1.asset->url,
    "studioImage2": studioImage2.asset->url, "studioImage3": studioImage3.asset->url,
    "studioImage4": studioImage4.asset->url, 
    magazineImageLeft, 
    magazineImageRight, 
    projectInMindCaption, footerCtaCaption
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
      <StorySection />

      <ServicesSection />
      <WorkSection />
      <MagazineSection 
        imageLeft={homeData.magazineImageLeft}
        imageRight={homeData.magazineImageRight}
      />
      <FaqSection />
      <BlogSection />
      <FeatureShowcaseSection />
      <FooterCTASection caption={homeData.footerCtaCaption} />
      <FooterSection />
    </main>
  );
}
