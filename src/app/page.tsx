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
    "studioImage4": studioImage4.asset->url, 
    magazineImageLeft, 
    magazineImageRight, 
    "storyImage1": storyImage1.asset->url,
    "storyImage2": storyImage2.asset->url,
    "storyImage3": storyImage3.asset->url,
    "storyImage4": storyImage4.asset->url,
    "purposeImage1": purposeImage1.asset->url,
    "purposeImage2": purposeImage2.asset->url,
    "purposeImage3": purposeImage3.asset->url,
    "purposeImage4": purposeImage4.asset->url,
    "purposeLargeImage": purposeLargeImage.asset->url,
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
      <StorySection 
        img1={homeData.storyImage1}
        img2={homeData.storyImage2}
        img3={homeData.storyImage3}
        img4={homeData.storyImage4}
      />

      <ServicesSection />
      <WorkSection />
      <MagazineSection 
        imageLeft={homeData.magazineImageLeft}
        imageRight={homeData.magazineImageRight}
      />
      <FaqSection />
      <BlogSection />
      <FeatureShowcaseSection 
        thumb1={homeData.purposeImage1}
        thumb2={homeData.purposeImage2}
        thumb3={homeData.purposeImage3}
        thumb4={homeData.purposeImage4}
        largeImage={homeData.purposeLargeImage}
      />
      <FooterSection />
    </main>
  );
}
